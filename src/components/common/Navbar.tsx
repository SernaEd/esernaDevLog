import {
    AppBar,
    Toolbar,
    Button,
    styled,
    Box, IconButton, Menu, MenuItem, Typography, Grid, Stack, Modal, Alert, Snackbar, TextField, Tooltip
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import grapheke_transparent from "../../assets/Grapheke_Dark_transparent.png";
import grapheke_logo_dark from "../../assets/Grapheke-logo-dark.png";
import React from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useUser } from "../../context/UserContext";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNetworkStatus } from "../../context/NetworkStatusContext";
import WifiOffIcon from '@mui/icons-material/WifiOff';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const pages = [
    // 'Projects',
    // 'Clients/Employers',
    'About',
    // 'Download CV',
    // 'Contact'
]

const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
}));

const logo_images = [
    {
        url: grapheke_transparent,
        title: "Grapheke Logo",
        width: "200px",
        height: "50px",
    },
    {
        url: grapheke_logo_dark,
        title: "Grapheke Logo",
        width: "50px",
        height: "50px",
    }
]

interface NavbarProps {
    themeMode: "light" | "dark"
}

export const Navbar = ({themeMode}: NavbarProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [openCreateModal, setOpenCreateModal] = React.useState(false);
    const [newPath, setNewPath] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);
    const colorMode = React.useContext(ColorModeContext);
    const { user, userType } = useUser();
    const { isOnline } = useNetworkStatus();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (userType === 'unauthorized') {
            setError("You are not authorized to login to this application.");
            setOpenModal(true);
        }
    }, [userType]);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setError(null);
    };

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        setError(null);
        try {
            await signInWithPopup(auth, provider);
            handleCloseModal();
        } catch (err: any) {
            console.error("Error signing in with Google", err);
            if (err.code === 'auth/popup-blocked') {
                setError("Sign-in popup was blocked by your browser. Please allow popups or try again.");
            } else if (err.code === 'auth/cancelled-popup-request') {
                // Ignore, as user initiated another popup
            } else if (err.code === 'auth/configuration-not-found') {
                setError("Firebase configuration error: Google Sign-in might not be enabled in your Firebase Console.");
            } else {
                setError("An error occurred during sign-in. Please try again.");
            }
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    const toggleAuth = () => {
        if (user) {
            handleLogout();
        } else {
            handleOpenModal();
        }
    };

    const handleCreatePath = async () => {
        if (!newPath || !user) return;
        
        if (!isOnline) {
            setError("You are currently offline. Please connect to the internet to create a new path.");
            setOpenModal(true);
            return;
        }

        const path = newPath.trim().replace(/\s+/g, '-').toLowerCase();
        if (!path) return;

        try {
            const docRef = doc(db, 'customPaths', path);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setError("This path already exists. Please choose another one.");
                setOpenModal(true);
                return;
            }

            await setDoc(docRef, {
                text: '',
                files: [],
                ownerId: user.uid,
                createdAt: new Date().toISOString()
            });

            setOpenCreateModal(false);
            setNewPath('');
            navigate(`/${path}`);
        } catch (err: any) {
            console.error("Error creating path:", err);
            if (err.code === 'unavailable' || err.message?.includes('offline')) {
                setError("Firebase is currently offline. Please check your internet connection or try again later.");
            } else {
                setError(`Failed to create path: ${err.message || 'Unknown error'}`);
            }
            setOpenModal(true);
        }
    };

    return (
        <AppBar position="sticky">
            {!isOnline && (
                <Box sx={{ bgcolor: 'error.main', color: 'white', textAlign: 'center', py: 0.5 }}>
                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <WifiOffIcon sx={{ fontSize: 16, mr: 1 }} /> You are currently offline. Some features may be limited.
                    </Typography>
                </Box>
            )}
            <StyledToolbar>
                <Button variant="text"
                        sx={{display: {xs: "none", md: "block"}, width: logo_images[0].width, padding: 0}}>
                    <img className="hoverAble" src={logo_images[0].url} alt={logo_images[0].title} width={logo_images[0].width}
                         height={logo_images[0].height}/>
                </Button>
                <Button variant="text"
                        sx={{display: {xs: "block", md: "none"}, width: logo_images[1].width, padding: 0}}>
                    <img className="hoverAble" src={logo_images[1].url} alt={logo_images[1].title} width={logo_images[1].width}
                         height={logo_images[1].height}/>
                </Button>
                {/*<Typography variant='h6' component='div' sx={{flexGrow: 1, display: "flex"}}>Eduardo Serna</Typography>*/}

                <Box sx={{display: {xs: "block", lg: "none"}}}>
                    <IconButton
                        size="large"
                        aria-label="open drawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{display: {xs: "block", lg: "none"}}}
                        color='inherit'
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>{page}</Typography>
                            </MenuItem>
                        ))}
                        <MenuItem key={'Light/Dark Mode'} onClick={colorMode.toggleColorMode}>
                            {themeMode === 'light' ? 
                                <Stack direction="row">
                                    <NightlightIcon/>
                                    <Typography sx={{paddingLeft: 2}}>Night Mode</Typography>
                                </Stack>
                                 : 
                                 <Stack direction="row">
                                    <LightModeIcon/>
                                    <Typography sx={{paddingLeft: 2}}>Light Mode</Typography>
                                 </Stack>
                                }
                        </MenuItem>
                        <MenuItem key={'User Type'} onClick={toggleAuth}>
                            <Stack direction="row">
                                {userType === 'verified' ? <VerifiedUserIcon /> : <PersonOutlineIcon />}
                                <Typography sx={{paddingLeft: 2}}>{userType === 'verified' ? (user?.displayName || 'Verified User') : 'Regular User (Login)'}</Typography>
                            </Stack>
                        </MenuItem>
                        {user && (
                            <MenuItem key={'Create Path'} onClick={() => { handleCloseNavMenu(); setOpenCreateModal(true); }}>
                                <Stack direction="row">
                                    <AddCircleOutlineIcon />
                                    <Typography sx={{paddingLeft: 2}}>Create Custom Path</Typography>
                                </Stack>
                            </MenuItem>
                        )}
                    </Menu>
                </Box>

                <Grid sx={{display: {xs: "none", lg: "flex"}}}>
                    {pages.map((page) => (
                        <Grid item key={page}>
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                color='inherit'
                            >
                                {page}
                            </Button>
                        </Grid>
                    ))}
                    <Grid item>
                        <IconButton onClick={toggleAuth} color="inherit">
                            {userType === 'verified' ? <VerifiedUserIcon /> : <PersonOutlineIcon />}
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={colorMode.toggleColorMode}>
                            {themeMode === 'light' ? <NightlightIcon/> : <LightModeIcon/>}
                        </IconButton>
                    </Grid>
                    {!isOnline && (
                        <Grid item>
                            <Tooltip title="Offline">
                                <IconButton color="error">
                                    <WifiOffIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    )}
                    {user && (
                        <Grid item>
                            <IconButton onClick={() => setOpenCreateModal(true)} color="inherit" title="Create Custom Path">
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Grid>
                    )}
                </Grid>
            </StyledToolbar>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        User Verification
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Please sign in with Google to verify your account.
                    </Typography>
                    <Button 
                        variant="contained" 
                        onClick={handleLogin} 
                        sx={{ mt: 3 }}
                        fullWidth
                    >
                        Sign in with Google
                    </Button>
                    <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>
                </Box>
            </Modal>
            <Modal
                open={openCreateModal}
                onClose={() => setOpenCreateModal(false)}
                aria-labelledby="create-path-title"
            >
                <Box sx={modalStyle}>
                    <Typography id="create-path-title" variant="h6" component="h2">
                        Create Custom Path
                    </Typography>
                    <TextField
                        fullWidth
                        label="Path Name"
                        variant="outlined"
                        value={newPath}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPath(e.target.value)}
                        placeholder="e.g. bernardo"
                        sx={{ mt: 2 }}
                    />
                    <Button 
                        variant="contained" 
                        onClick={handleCreatePath} 
                        sx={{ mt: 3 }}
                        fullWidth
                        disabled={!newPath.trim()}
                    >
                        Create
                    </Button>
                </Box>
            </Modal>
            <Snackbar open={!!error && !openModal} autoHideDuration={6000} onClose={() => setError(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </AppBar>
    );
};
