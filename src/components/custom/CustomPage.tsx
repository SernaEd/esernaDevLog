import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
    Box, 
    Typography, 
    CircularProgress, 
    TextField, 
    Button, 
    Stack, 
    IconButton, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon,
    Paper,
    Divider,
    Alert,
    AlertTitle
} from '@mui/material';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../firebase';
import { storage } from '../../firebaseStorage';
import { useUser } from '../../context/UserContext';
import { Navbar } from '../common/Navbar';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import JsxParser from 'react-jsx-parser';
import { convertHtmlToReact } from '../../services/gemini';

interface PageContent {
    text: string;
    files: Array<{ name: string; url: string }>;
    ownerId: string;
    reactComponent?: string;
}

export const CustomPage: React.FC<{ themeMode: 'light' | 'dark' }> = ({ themeMode }) => {
    const { path } = useParams<{ path: string }>();
    const { user } = useUser();
    
    // 1. Hooks (all hooks must be at the top level and called in the same order)
    const [content, setContent] = React.useState<PageContent | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [editing, setEditing] = React.useState(false);
    const [editText, setEditText] = React.useState('');
    const [uploading, setUploading] = React.useState(false);
    const [adapting, setAdapting] = React.useState(false);
    const [htmlContent, setHtmlContent] = React.useState<string | null>(null);
    const [missingFiles, setMissingFiles] = React.useState<string[]>([]);

    const handleAdaptToReact = React.useCallback(async () => {
        if (!htmlContent || !path || !user || !content || content.ownerId !== user.uid) return;
        setAdapting(true);
        setError(null);
        try {
            const reactJsx = await convertHtmlToReact(htmlContent);
            const docRef = doc(db, 'customPaths', path);
            await updateDoc(docRef, { reactComponent: reactJsx });
            setContent({ ...content, reactComponent: reactJsx });
        } catch (error: any) {
            console.error("Error adapting HTML to React:", error);
            setError(`Failed to adapt HTML to React: ${error.message || 'Unknown error'}. Make sure you have configured the GEMINI_API_KEY.`);
        } finally {
            setAdapting(false);
        }
    }, [htmlContent, path, user, content]);

    const htmlFile = React.useMemo(() => {
        if (!content?.files) return null;
        // Prefer index.html if available, otherwise any .html file
        const indexHtml = content.files.find(f => f.name.toLowerCase() === 'index.html');
        if (indexHtml) return indexHtml;
        return content.files.find(f => f.name.toLowerCase().endsWith('.html'));
    }, [content]);

    React.useEffect(() => {
        const fetchHtml = async () => {
            if (htmlFile && content?.files) {
                try {
                    const response = await fetch(htmlFile.url);
                    let text = await response.text();
                    
                    // Improved regex to find linked files in the HTML (handles src and href)
                    const linkedFiles: string[] = [];
                    const srcMatches = Array.from(text.matchAll(/src\s*=\s*["']([^"']+)["']/gi));
                    const hrefMatches = Array.from(text.matchAll(/href\s*=\s*["']([^"']+)["']/gi));
                    
                    for (const match of srcMatches.concat(hrefMatches)) {
                        const file = match[1];
                        // Skip external links, data URIs, anchors, and absolute paths
                        if (!file.startsWith('http') && !file.startsWith('https:') && !file.startsWith('data:') && !file.startsWith('#') && !file.startsWith('//')) {
                            linkedFiles.push(file);
                        }
                    }

                    // Replace local references with Firebase Storage URLs
                    const uploadedFileMap = new Map(
                        content.files.map(f => [f.name.toLowerCase(), f.url])
                    );

                    let updatedText = text;
                    for (const localFile of linkedFiles) {
                        const cloudUrl = uploadedFileMap.get(localFile.toLowerCase());
                        if (cloudUrl) {
                            // Escape special characters for regex
                            const escapedFile = localFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                            // Replace exactly the local file name within quotes
                            updatedText = updatedText.replace(new RegExp(`(["'])${escapedFile}(["'])`, 'g'), `$1${cloudUrl}$2`);
                        }
                    }
                    
                    setHtmlContent(updatedText);
                    
                    // Check which ones are missing (case-insensitive check)
                    const missing = Array.from(new Set(linkedFiles)).filter(f => !uploadedFileMap.has(f.toLowerCase()));
                    setMissingFiles(missing);
                } catch (err) {
                    console.error("Error fetching HTML content:", err);
                }
            } else {
                setHtmlContent(null);
                setMissingFiles([]);
            }
        };
        fetchHtml();
    }, [htmlFile, content?.files]);

    React.useEffect(() => {
        if (!path) return;
        setError(null);
        setLoading(true);

        const docRef = doc(db, 'customPaths', path);
        
        // Use onSnapshot for better offline handling and real-time updates
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data() as PageContent;
                setContent(data);
                setEditText(data.text);
                setError(null);
            } else {
                setContent(null);
            }
            setLoading(false);
        }, (error: any) => {
            console.error("Error fetching custom path:", error);
            if (error.code === 'unavailable' || error.message?.includes('offline')) {
                setError("Unable to connect to Firebase. You might be offline.");
            } else {
                setError(`Error fetching content: ${error.message || 'Unknown error'}`);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [path]);

    const isOwner = user?.uid === content?.ownerId;

    React.useEffect(() => {
        const autoAdapt = async () => {
            // Only auto-adapt if we have HTML content, no React component yet, 
            // and the user is the owner (to save it to Firestore)
            if (htmlContent && content && !content.reactComponent && isOwner && !adapting && !error) {
                console.log("Auto-adapting HTML to React component...");
                await handleAdaptToReact();
            }
        };
        autoAdapt();
    }, [htmlContent, content, isOwner, adapting, error, handleAdaptToReact]);

    // 2. Regular functions (not hooks, can be defined after hooks)
    const handleSaveText = async () => {
        if (!path || !user || !content || content.ownerId !== user.uid) return;
        setError(null);
        try {
            const docRef = doc(db, 'customPaths', path);
            await updateDoc(docRef, { text: editText });
            setContent({ ...content, text: editText });
            setEditing(false);
        } catch (error: any) {
            console.error("Error saving text:", error);
            setError(`Failed to save content: ${error.message || 'Unknown error'}`);
        }
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !path || !user || !content || content.ownerId !== user.uid) return;

        setError(null);
        setUploading(true);
        try {
            const storageRef = ref(storage, `customPaths/${path}/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            const newFiles = [...(content.files || []), { name: file.name, url: downloadURL }];
            const docRef = doc(db, 'customPaths', path);
            await updateDoc(docRef, { files: newFiles });
            setContent({ ...content, files: newFiles });
        } catch (error: any) {
            console.error("Error uploading file:", error);
            setError(`Failed to upload file: ${error.message || 'Unknown error'}`);
        } finally {
            setUploading(false);
        }
    };
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!content && !error) {
        return <Navigate to="/COMCAPLA2024" replace />;
    }

    return (
        <Box>
            <Navbar themeMode={themeMode} />
            <Stack
                direction="column"
                sx={{
                    maxWidth: '96%',
                    px: { xs: 2, sm: 6 },
                    py: 6,
                    mx: 'auto',
                    mt: 8,
                }}
                spacing={4}
            >
                {error && (
                    <Box sx={{ mb: 2 }}>
                        <Typography color="error">{error}</Typography>
                        <Button onClick={() => window.location.reload()}>Retry</Button>
                    </Box>
                )}
                {content && (
                    <>
                {content.reactComponent ? (
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                            <AutoFixHighIcon sx={{ mr: 1, color: 'secondary.main' }} />
                            AI Adapted React Component
                        </Typography>
                        <Paper 
                            elevation={3} 
                            sx={{ 
                                p: 3, 
                                borderRadius: 2,
                                bgcolor: themeMode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                                border: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <JsxParser
                                bindings={{}}
                                components={{ Box, Typography, Button, Stack, Paper, Divider, List, ListItem, ListItemText, ListItemIcon }}
                                jsx={content.reactComponent}
                            />
                        </Paper>
                        {isOwner && (
                            <Button 
                                size="small" 
                                onClick={() => {
                                    if(window.confirm("Do you want to re-adapt the HTML? This will overwrite the current React component.")) {
                                        handleAdaptToReact();
                                    }
                                }}
                                disabled={adapting}
                                sx={{ mt: 1 }}
                            >
                                {adapting ? "Re-adapting..." : "Re-adapt from HTML"}
                            </Button>
                        )}
                        <Divider sx={{ my: 4 }}>
                            <Typography variant="caption" color="textSecondary">Original HTML and Files Below</Typography>
                        </Divider>
                    </Box>
                ) : htmlContent ? (
                    <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
                                <CloudUploadIcon sx={{ mr: 1, color: 'primary.main' }} />
                                Rendering HTML: {htmlFile?.name}
                            </Typography>
                            {isOwner && (
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    startIcon={<AutoFixHighIcon />}
                                    onClick={handleAdaptToReact}
                                    disabled={adapting}
                                >
                                    {adapting ? "Adapting..." : "Adapt to React Component"}
                                </Button>
                            )}
                        </Stack>
                        
                        {missingFiles.length > 0 && (
                            <Alert severity="info" sx={{ mb: 3, border: '1px solid', borderColor: 'info.main' }}>
                                <AlertTitle sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                    AI Assistant: Missing Assets Detected
                                </AlertTitle>
                                <Typography variant="body2" paragraph>
                                    I've analyzed your HTML and noticed it's trying to load some files that aren't in your storage yet. 
                                    To make your page look and work exactly as intended, please upload the following files:
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    {missingFiles.map((f, i) => (
                                        <Typography component="li" key={i} variant="body2" sx={{ fontWeight: 'bold' }}>
                                            {f}
                                        </Typography>
                                    ))}
                                </Box>
                                <Typography variant="caption" sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                                    Note: Once uploaded, I'll automatically link them for you!
                                </Typography>
                            </Alert>
                        )}

                        <Paper 
                            elevation={6} 
                            sx={{ 
                                p: 0, 
                                overflow: 'hidden', 
                                border: '1px solid', 
                                borderColor: 'divider',
                                borderRadius: 2,
                                mb: 4
                            }}
                        >
                            <iframe
                                srcDoc={htmlContent}
                                title="html-preview"
                                style={{
                                    width: '100%',
                                    height: '80vh',
                                    border: 'none',
                                    backgroundColor: 'white'
                                }}
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            />
                        </Paper>
                        <Divider sx={{ my: 4 }}>
                            <Typography variant="caption" color="textSecondary">Custom Path Details Below</Typography>
                        </Divider>
                    </Box>
                ) : null}

                <Box sx={{ opacity: htmlContent ? 0.7 : 1 }}>
                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                        <Typography variant={htmlContent ? "h5" : "h3"}>/{path}</Typography>
                        {isOwner && !editing && (
                            <IconButton onClick={() => setEditing(true)} size="small">
                                <EditIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Stack>

                    {editing ? (
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                multiline
                                rows={10}
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                variant="outlined"
                            />
                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleSaveText}
                                sx={{ width: 'fit-content' }}
                            >
                                Save Content
                            </Button>
                        </Stack>
                    ) : (
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                            {content.text || "No content yet."}
                        </Typography>
                    )}
                </Box>

                <Box>
                    <Typography variant="h5" gutterBottom>Files</Typography>
                    <List>
                        {content.files?.map((file, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <AttachFileIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <a href={file.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                        {file.name}
                                    </a>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>

                    {isOwner && (
                        <Box mt={2}>
                            <input
                                accept="*/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                                onChange={handleFileUpload}
                            />
                            <label htmlFor="raised-button-file">
                                <Button
                                    variant="outlined"
                                    component="span"
                                    startIcon={<CloudUploadIcon />}
                                    disabled={uploading}
                                >
                                    {uploading ? "Uploading..." : "Upload File"}
                                </Button>
                            </label>
                        </Box>
                    )}
                </Box>
                </>
                )}
            </Stack>
        </Box>
    );
};
