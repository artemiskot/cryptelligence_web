//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Container, Box, Button, Typography } from "@mui/material";

import MainMenu from "./MainMenu";
import SocialsMenu from "./SocialsMenu";
import MenuButton from "./MenuButton";

import { LogoBanner } from "./Branding";

import manifest from "@src/manifest.json";

const Header = styled((props) => {
  return (
    <Box component="header" {...props}>
      <LogoBanner className="logo" />
      <MainMenu className="menu" />
      <Box className="wrapper-right">
        <Button>Coming Soon</Button>
        <SocialsMenu className="socials" socials={manifest.socials} />
      </Box>
      <MenuButton className="menu-button" />
    </Box>
  );
})`
  display: grid;
  grid-template-columns: 3fr 5fr 3fr;
  justify-items: center;
  align-items: center;
  height: 124px;
  background: rgb(6, 3, 9);

  .wrapper-right {
    display: flex;
    button {
      border-radius: 0 10px;
      margin-right: 3rem;
      font-family: relaxia;
    }
  }

  .menu-button {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: 1fr 1fr;
    height: 180px;

    .wrapper-right {
    }

    .menu {
      grid-row: 2;
      grid-column: span 2;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 100px;

    display: flex;
    padding: 2rem 2rem 0 1rem;
    justify-content: space-between;

    .wrapper-right {
      display: none;
      button {
        display: none;
      }
    }

    .logo {
      width: 300px;
    }

    .menu {
      display: none;
      grid-row: 3;
      grid-column: initial;
      font-size: 1.125rem;
    }

    .menu-button {
      display: initial;
      width: 40px;
      height: 40px;
    }
  }
`;

export default Header;
