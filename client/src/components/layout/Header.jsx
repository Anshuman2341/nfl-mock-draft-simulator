import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "@fontsource/montserrat/800.css";


import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

import eslogo from "../../assets/eslogo.png";
import "./Header.css";

function Header() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            className="draft-header"
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters className="header-toolbar">


                    {/* Logo Block & Nav Buttons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <div className="logo-wrapper" href="https://www.essentiallysports.com/">
                           <a href="https://www.essentiallysports.com/">ESSENTIALSPORTS</a>
                        </div>
                        <Box className="header-nav-buttons" sx={{ display: 'flex', gap: 1.5 }}>
                            <a className="header-nav-btn" href="https://www.essentiallysports.com/newsletter-hub/">Newsletter</a>
                            <a className="header-nav-btn" href="https://www.essentiallysports.com/think-tank/">Think Tank</a>
                            <a className="header-nav-btn" href="https://www.essentiallysports.com/latest-news/">Latest</a>
                        </Box>
                    </Box>

                    {/* Social Icons */}
                    <Box className="social-icons">
                        <IconButton href="https://www.facebook.com/essentiallysports"><FacebookIcon fontSize="small" /></IconButton>
                        <IconButton href="https://x.com/es_sportsnews/"><TwitterIcon fontSize="small" /></IconButton>
                        <IconButton href="https://www.instagram.com/essentiallysportsmedia"><InstagramIcon fontSize="small" /></IconButton>
                        <IconButton href="https://www.linkedin.com/company/essentially-sports"><LinkedInIcon fontSize="small" /></IconButton>
                        <IconButton href="https://www.youtube.com/@ESExclusives"><YouTubeIcon fontSize="small" /></IconButton>
                        <IconButton href="https://www.google.com/search?kgmid=/g/11sv1018cp&hl=en-US&q=EssentiallySports&kgs=e2d6ee8959f7e66e&shndl=17&shem=lose&source=sh/x/kp/osrp/m5/2"><GoogleIcon fontSize="small" /></IconButton>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header