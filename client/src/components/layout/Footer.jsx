
import { Box, Container, Typography, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";



import eslogo from "../../assets/footerlogo.webp";
import "./Footer.css";

function Footer() {
  return (
    <Box component="footer" className="footer">

      <Container maxWidth="lg">

        {/* Logo */}
        <Box className="footer-logo-wrapper">
          <a
            href="https://www.essentiallysports.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo"
          >
            <img
              src={eslogo}
              alt="Essential Sports Logo"
              className="footer-logo-img"
            />
          </a>
        </Box>

        {/* Description */}
        <Typography className="footer-description">
          EssentiallySports is a U.S.-based sports media platform built for modern
          fandom. We go beyond headlines to create storylines powered by
          athletes, fans, data, and culture, giving equal energy to the
          mainstream and the overlooked.
        </Typography>

        {/* Social Icons */}
        <Box className="footer-social">

          <IconButton
            href="https://www.facebook.com/essentiallysports"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="https://x.com/es_sportsnews/"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            href="https://www.instagram.com/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>

        </Box>

        {/* Copyright */}
        <Typography className="footer-copyright">
          © {new Date().getFullYear()} EssentiallySports Media, Inc. | All Rights Reserved
        </Typography>

      </Container>

    </Box>
  );
}

export default Footer;
