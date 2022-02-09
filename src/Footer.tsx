//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import Logo from "./Logo";
import SocialsMenu from "./SocialsMenu";

// import {LogoBanner} from "./Branding"

import Image from "next/image";
import footerLogo from "@public/footer-logo.png";

const FooterLogo = styled((props) => {
  return (
    <Box {...props}>
      <Image src={footerLogo} />
    </Box>
  );
})`
  margin-bottom: 2rem;
`;

const Footer = styled((props) => {
  return (
    <Box component="footer" {...props}>
      <FooterLogo />
      <SocialsMenu
        socials={{
          discord: "",
          twitter: "",
        }}
        sx={{ mb: 4 }}
      />
      <Typography color="#433d47">
        Copyright @ 2021 Cryptelligence. All rights reserved.
      </Typography>
    </Box>
  );
})`
  padding: 2rem;
  background: #060408;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .logo {
    width: min(400px, 100%);
    overflow: hidden;
  }
`;

export default Footer;
