//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box, Typography, SvgIcon } from "@mui/material";

import Image from "next/image";
import bg from "../public/backgrounds/Rooftop Bar2.jpg";

import Header from "../src/Header";

import { LogoText } from "./Branding";

import manifest from "@src/manifest.json";

const Background = styled((props) => {
  return (
    <Box {...props}>
      <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" />
    </Box>
  );
})`
  position: fixed;

  z-index: -1;

  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    top: 50px;
    height: 500px;
  }
`;

const DiscordButton = styled((props) => {
  return (
    <Box component="a" href={manifest.socials.discord} {...props}>
      <SvgIcon
        width="677"
        height="256"
        viewBox="0 0 677 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M677.5 81L598 1.5H1.5V182L76 256.5H677.5V81Z"
          fill="#00aeff"
          fillOpacity="0.6"
          stroke="#00D1FF"
          strokeWidth="2"
        />
      </SvgIcon>
      <Typography>Join Our Discord</Typography>
    </Box>
  );
})`

  position: relative;
  width: 200px;
  display: grid;
  place-items: center;
  color: white;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  p {
    z-index: 1;
  }

  aspect-ratio: 676/255;
  
  * {
    font-size: 1.25em !important;
    font-weight: bold !important;
  }

  svg {
    position: absolute;
    transition: filter 0.2s;
    width: 100%;
    height: 100%;
  }

  :hover {
      svg {
        filter: drop-shadow(0px 0px 8px rgb(151 255 255 / 1));
      }
    }
  }
`;

const Hook = styled((props) => {
  return (
    <Box {...props} id="hook">
      <Header />
      <Background />
      <Box className="contents">
        <LogoText className="logo" sx={{ mb: 6 }} />
        <DiscordButton className="discord-button" />
      </Box>
    </Box>
  );
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .contents {
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(
      0deg,
      rgba(6, 3, 9, 1) 0%,
      rgba(6, 3, 9, 0.096) 35%,
      rgba(6, 3, 9, 0.096) 65%,
      rgba(6, 3, 9, 1) 100%
    );

    .logo {
      width: min(900px, 90%);
      margin-top: 1rem;
    }

    .discord-button {
      position: absolute;
      right: 6%;
    }
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    .discord-button {
      position: relative !important;
      right: 0 !important;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 500px;
    .discord-button {
      * {
        font-size: 1em !important;
      }
    }
  }
`;

export default Hook;
