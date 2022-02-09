//@ts-nocheck


import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  SvgIcon,
} from "@mui/material";

import Link from "./Link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const DiscordIcon = styled((props) => {
  return (
    <SvgIcon
      {...props}
      width="33"
      height="24"
      viewBox="0 0 33 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.3589 1.99041C25.3191 1.0705 23.1326 0.390563 20.8462 0.00393318C20.8258 2.41068e-05 20.8047 0.00254326 20.7859 0.0111423C20.767 0.0197413 20.7513 0.0339947 20.7408 0.0519286C20.4609 0.543882 20.1489 1.18515 19.9303 1.69177C17.5053 1.32946 15.0399 1.32946 12.6149 1.69177C12.3714 1.13031 12.0968 0.582844 11.7924 0.0519286C11.782 0.033774 11.7664 0.0191981 11.7476 0.0101461C11.7288 0.00109411 11.7077 -0.00200356 11.687 0.00126664C9.40192 0.387896 7.21546 1.06783 5.17432 1.98908C5.15676 1.99644 5.14188 2.009 5.13166 2.02507C0.982724 8.12449 -0.154501 14.0733 0.404113 19.9474C0.405667 19.9618 0.410133 19.9757 0.417238 19.9883C0.424343 20.0009 0.433939 20.0119 0.445442 20.0207C2.86707 21.7838 5.56807 23.1268 8.43535 23.9936C8.45533 23.9998 8.47671 23.9998 8.49669 23.9936C8.51667 23.9874 8.53432 23.9753 8.54734 23.959C9.16328 23.1324 9.71256 22.2591 10.1818 21.3419C10.2098 21.2886 10.1832 21.2246 10.1272 21.2032C9.26594 20.8789 8.43146 20.4875 7.63142 20.0327C7.61705 20.0245 7.60493 20.0128 7.59617 19.9988C7.5874 19.9848 7.58226 19.9688 7.58121 19.9522C7.58015 19.9357 7.58321 19.9192 7.59011 19.9042C7.59702 19.8891 7.60755 19.876 7.62076 19.866C7.78874 19.742 7.95673 19.6127 8.11671 19.4834C8.13111 19.4718 8.14846 19.4644 8.16682 19.462C8.18518 19.4597 8.20383 19.4625 8.2207 19.4701C13.4562 21.8219 19.1263 21.8219 24.3005 19.4701C24.3174 19.462 24.3363 19.4589 24.3549 19.461C24.3735 19.4631 24.3912 19.4704 24.4058 19.4821C24.5658 19.6127 24.7325 19.742 24.9018 19.866C24.9151 19.8758 24.9258 19.8887 24.9329 19.9036C24.9401 19.9186 24.9434 19.935 24.9426 19.9515C24.9418 19.968 24.9369 19.9841 24.9284 19.9982C24.9199 20.0124 24.908 20.0242 24.8938 20.0327C24.0965 20.4913 23.2673 20.8793 22.3967 21.2019C22.3833 21.2068 22.3711 21.2144 22.361 21.2243C22.3508 21.2343 22.3428 21.2463 22.3377 21.2595C22.3325 21.2728 22.3302 21.287 22.331 21.3012C22.3317 21.3154 22.3355 21.3293 22.342 21.3419C22.822 22.2578 23.3713 23.1297 23.9752 23.9576C23.9878 23.9746 24.0052 23.9873 24.0253 23.994C24.0453 24.0007 24.0669 24.001 24.0872 23.995C26.9594 23.1306 29.6648 21.7869 32.0891 20.0207C32.1009 20.0124 32.1108 20.0017 32.1182 19.9893C32.1256 19.9769 32.1302 19.963 32.1318 19.9487C32.7984 13.1573 31.0145 7.25657 27.4002 2.02774C27.3913 2.01075 27.3767 1.9975 27.3589 1.99041ZM10.9644 16.3704C9.38859 16.3704 8.08871 14.9452 8.08871 13.1973C8.08871 11.4482 9.36326 10.0243 10.9644 10.0243C12.5776 10.0243 13.8655 11.4602 13.8402 13.1973C13.8402 14.9465 12.5656 16.3704 10.9644 16.3704ZM21.5968 16.3704C20.0196 16.3704 18.721 14.9452 18.721 13.1973C18.721 11.4482 19.9942 10.0243 21.5968 10.0243C23.2099 10.0243 24.4978 11.4602 24.4725 13.1973C24.4725 14.9465 23.2113 16.3704 21.5968 16.3704Z"
        fill="white"
      />
    </SvgIcon>
  );
})``;

const TwitterIcon = styled((props) => {
  return (
    <SvgIcon
      {...props}
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.2718 2.84657C29.1586 3.3276 27.9627 3.65262 26.7055 3.79953C28.0027 3.04261 28.9732 1.85131 29.4359 0.447904C28.2171 1.15384 26.8832 1.65074 25.4922 1.917C24.5568 0.943063 23.3179 0.297518 21.9677 0.0805956C20.6175 -0.136327 19.2316 0.0875087 18.0253 0.717351C16.8189 1.34719 15.8595 2.3478 15.2961 3.56383C14.7326 4.77986 14.5967 6.14327 14.9092 7.44238C12.4397 7.32147 10.0239 6.69554 7.81849 5.60523C5.61309 4.51492 3.66744 2.98459 2.1078 1.11355C1.57452 2.01061 1.26788 3.05068 1.26788 4.15836C1.26728 5.15552 1.5191 6.1374 2.00098 7.0169C2.48286 7.8964 3.17991 8.64631 4.03028 9.2001C3.04408 9.1695 2.07963 8.90964 1.21722 8.44215V8.52015C1.21712 9.91871 1.71321 11.2742 2.62133 12.3567C3.52944 13.4392 4.79364 14.1819 6.19941 14.459C5.28454 14.7004 4.32537 14.736 3.39434 14.563C3.79097 15.7663 4.56356 16.8186 5.60396 17.5726C6.64435 18.3265 7.90047 18.7443 9.19646 18.7674C6.99644 20.4516 4.27944 21.3651 1.48253 21.3611C0.987081 21.3613 0.492055 21.333 0 21.2766C2.83903 23.0567 6.14387 24.0014 9.51909 23.9977C20.9447 23.9977 27.1907 14.7697 27.1907 6.76633C27.1907 6.50631 27.1841 6.2437 27.1721 5.98368C28.387 5.12689 29.4357 4.06591 30.2691 2.85047L30.2718 2.84657V2.84657Z"
        fill="white"
      />
    </SvgIcon>
  );
})``;

const TempMenu = styled((props) => {
  return (
    <Drawer {...props} anchor="top" onClose={props.closeMenu}>
      <Box className="content">
        <List>
          <ListItem disablePadding>
            <Link href="/#about" underline="none" color="secondary">
              <ListItemButton onClick={props.closeMenu}>
                <ListItemText>ABOUT</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/#avatars" underline="none" color="secondary">
              <ListItemButton onClick={props.closeMenu}>
                <ListItemText>AVATARS</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/#traits" underline="none" color="secondary">
              <ListItemButton onClick={props.closeMenu}>
                <ListItemText>TRAITS</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/#team" underline="none" color="secondary">
              <ListItemButton onClick={props.closeMenu}>
                <ListItemText>TEAM</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
          <ListItem disablePadding>
            <Link href="/#roadmap" underline="none" color="secondary">
              <ListItemButton onClick={props.closeMenu}>
                <ListItemText>ROADMAP</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        <Divider />
        <Box className="footer">
          <Box className="socials">
            <IconButton component="a" href="" color="secondary">
              <DiscordIcon />
            </IconButton>
            <IconButton component="a" href="" color="secondary">
              <TwitterIcon />
            </IconButton>
          </Box>
          <IconButton color="secondary" onClick={props.closeMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
})`
  .content {
    * {
      font-family: presicav;
    }
    background: #08090b;
    a {
      width: 100%;
    }
    ul {
    }
    hr {
      background: #181818;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin: 0.2em 0;
      padding: 0 0.5em;
      .socials {
        a {
          width: fit-content;
          margin: 0 0.05em;
        }
      }
    }
  }
`;

const MenuButton = styled((props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton color="primary" onClick={() => setOpen(true)} {...props}>
        <MenuIcon />
      </IconButton>
      <TempMenu
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      />
    </>
  );
})``;

export default MenuButton;
