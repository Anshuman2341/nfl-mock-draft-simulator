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

                    {/* Logo Block */}
                    <div className="logo-wrapper">
                        ESSENTIALSPORTS
                    </div>

                    {/* Social Icons */}
                    <Box className="social-icons">
                        <IconButton>
                            <FacebookIcon fontSize="small" />
                        </IconButton>

                        <IconButton>
                            <TwitterIcon fontSize="small" />
                        </IconButton>

                        <IconButton>
                            <InstagramIcon fontSize="small" />
                        </IconButton>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header