
import { Box, Container, Typography, IconButton } from "@mui/material";


import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";



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
          <IconButton href="https://www.facebook.com/essentiallysports" target="_blank"><FacebookIcon /></IconButton>
          <IconButton href="https://x.com/es_sportsnews/" target="_blank"><TwitterIcon /></IconButton>
          <IconButton href="https://www.instagram.com/essentiallysportsmedia" target="_blank"><InstagramIcon /></IconButton>
          <IconButton href="https://www.linkedin.com/company/essentiallysports" target="_blank"><LinkedInIcon /></IconButton>
          <IconButton href="https://www.youtube.com/@EssentiallySports" target="_blank"><YouTubeIcon /></IconButton>
          <IconButton href="https://www.google.com/search?kgmid=/g/11sv1018cp&hl=en-US&q=EssentiallySports&kgs=e2d6ee8959f7e66e&shndl=17&shem=lose&source=sh/x/kp/osrp/m5/2" target="_blank"><GoogleIcon /></IconButton>
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
