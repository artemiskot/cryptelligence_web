//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "./Link";

const MenuItem = styled((props) => {
  return (
    <Box component="li" {...props}>
      <Link
        href={props.href}
        color="#ffffff"
        underline="none"
        activeClassName="active"
      >
        {props.children}
      </Link>
    </Box>
  );
})`
  a {
    font-weight: 300;
    transition: text-shadow 0.3s;
    :hover {
      text-shadow: 0px 0px 8px rgba(151, 255, 255, 100%);
    }
  }
`;

const MainMenu = styled((props) => {
  return (
    <Box component="nav" {...props}>
      <ul>
        <MenuItem href="/#about">ABOUT</MenuItem>
        <MenuItem href="/#avatars">AVATARS</MenuItem>
        <MenuItem href="#/traits">TRAITS</MenuItem>
        <MenuItem href="/#team">TEAM</MenuItem>
        <MenuItem href="/#roadmap">ROADMAP</MenuItem>
      </ul>
    </Box>
  );
})`
  font-family: presicav;
  font-size: 1.2rem;

  &,
  ul {
    width: 100%;
  }

  ul {
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1em;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

//  Does grid or flex work better here? It needs column gap. Check responsive grids...

export default MainMenu;