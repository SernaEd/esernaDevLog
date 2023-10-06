import {
    AppBar,
    Toolbar,
    Button,
    styled,
    Box, IconButton, Menu, MenuItem, Typography, Grid, Stack
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import grapheke_transparent from "../../assets/Grapheke_Dark_transparent.png";
import grapheke_logo_dark from "../../assets/Grapheke-logo-dark.png";
import React from "react";
import {ColorModeContext} from "../../CVWebsiteApp";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';


const pages = ['Projects', 'Clients/Employers', 'About', 'Download CV', 'Contact']

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
    const colorMode = React.useContext(ColorModeContext);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Button variant="text"
                        sx={{display: {xs: "none", md: "block"}, width: logo_images[0].width, padding: 0}}>
                    <img src={logo_images[0].url} alt={logo_images[0].title} width={logo_images[0].width}
                         height={logo_images[0].height}/>
                </Button>
                <Button variant="text"
                        sx={{display: {xs: "block", md: "none"}, width: logo_images[1].width, padding: 0}}>
                    <img src={logo_images[1].url} alt={logo_images[1].title} width={logo_images[1].width}
                         height={logo_images[1].height}/>
                </Button>
                <Typography variant='h6' component='div' sx={{flexGrow: 1, display: "flex"}}>Eduardo Serna</Typography>

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
                        <IconButton onClick={colorMode.toggleColorMode}>
                            {themeMode === 'light' ? <NightlightIcon/> : <LightModeIcon/>}
                        </IconButton>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </AppBar>
    );
};
