import {Box, List, ListItemButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Rightbar = () => {
    const labels = ['LinkedIn', 'Telegram', 'GitHub']
    const links = ['https://linkedin.com/in/eduardo-javier-serna-duarte', 'https://t.me/Serkne', 'https://github.com/SernaEd']
    const icons = [<LinkedInIcon/>, <TelegramIcon/>, <GitHubIcon/>]

    return (
        <Box
            sx={{
                position: "fixed",
                top: '40%',
                background: 'rgba(108, 108, 108, 0.4)',
                right: 0,
                minWidth: 'fit-content',
                maxWidth: 45,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
            }}>
            <List component="nav"
                  sx={{padding: 0}}>
                {labels.map((label, index) => {
                    return (
                        <ListItemButton aria-label={label} href={links[index]} target="_blank"
                                        sx={{padding: 1}}>
                            {icons[index]}
                        </ListItemButton>
                    )
                })}
            </List>
        </Box>
    );
};
