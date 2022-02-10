//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image"

import manifest from "@src/manifest.json"
const teamInfo = manifest.team

import images from "@src/teamImages"

const Avatar = styled(({ src, ...props }) => {

    return (
      <Box {...props}>
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    );
  })`
    position: relative;
    aspect-ratio: 1;
  
    span {
    }
  `;
  
  const Member = styled(({ name, role, avatar, bio, socials, ...props }) => {
    return (
      <Box component="a" href={socials.twitter} {...props}>
        <Avatar src={images[avatar]} className="avatar" sx={{ mb: 1.5 }} />
        <Typography className="name">{name}</Typography>
        <Typography className="role">{role}</Typography>
      </Box>
    );
  })`
    text-align: center;
  
    text-decoration: none;
    color: ${({theme}) => theme.palette.text.primary};
  
    transition: color .15s ease, text-shadow .15s ease;
  
    transition: text-shadow 0.3s;
    :hover {
      text-shadow: 0px 0px 8px rgba(151, 255, 255, 100%);
    }
  
    .name {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.5em;
    }
  
    .role {
      color: ${({ theme }) => theme.palette.secondary.light};
    }
  `;
  
  const Team = styled(({...props }) => {
    const members = Object.keys(teamInfo).map((memberId) => {
      const memberInfo = teamInfo[memberId];
      return <Member key={memberId} {...memberInfo} />;
    });
  
    return (
      <Box id="team" {...props}>
        <Typography variant="h3" className="heading" sx={{ mb: 5 }}>
          Meet the Team
        </Typography>
        <Container className="team-members">{members}</Container>
      </Box>
    );
  })`
    padding: 5rem 0;
    width: 100%;
    background: ${({theme}) => theme.palette.background.default};
  
    .heading {
      text-align: center;
      text-transform: uppercase;
    }
  
    .team-members {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, .8fr));

      grid-column-gap: 1rem;
      grid-row-gap: 1.5rem;
      justify-content: center;
    }

  `;
  
  export default Team;