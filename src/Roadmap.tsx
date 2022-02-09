//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import bg from "../public/backgrounds/roadmap.png";

import RoadmapItemBackground from "./vector-images/RoadmapItemBackground";

const Background = styled((props) => {
  return (
    <Box {...props}>
      <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" />
    </Box>
  );
})`
  background: ${({ theme }) => theme.palette.background.default};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  
`;

const Item = styled((props) => {
  return (
    <Box {...props} className={`${props.className} item`}>
      <RoadmapItemBackground className="bg" />
      <Typography variant="h5" component="h4" sx={{ mb: 2 }}>
        {props.milestone}
      </Typography>
      {props.children}
    </Box>
  );
})`
  position: relative;
  padding: 1.5em;
  padding-left: 3.5em;
  z-index: 1;

  .bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  h4 {
    color: white;
    font-weight: 400;
  }

  p {
    margin-bottom: 0.2em;
    :last-of-type {
      margin-bottom: 0em;
    }
  }
`;

/*
  TODO: Add stage to left of each
*/
const RoadmapContent = styled((props) => {
  const items = props.children.map((item: JSX.Element, index: number) => {
    return (
      <Box key={index + 1} className="stage-wrapper">
        <Typography variant="h6" className="stage-label">
          <span className={`checkbox ${index == 0 && "checked"}`} />
          Stage
          <br /> {`0${index + 1}`}
        </Typography>
        {item}
      </Box>
    );
  });
  return <Box {...props}>{items}</Box>;
})`
  .stage-wrapper {
    position: relative;
    display: flex;

    .stage-label {
      width: fit-content;
      margin-top: 1em;
      text-align: right;
      white-space: nowrap;
      margin-right: 0.8em;
      color: ${({ theme }) => theme.palette.primary.main};
      transition: text-shadow 0.2s ease, color 0.2s ease;

      .checkbox {
        display: inline-block;
        width: 0.9em;
        height: 0.9em;
        margin-right: 0.5em;
        background: #b8b8b8;
      }

      .checkbox.checked {
        background: ${({ theme }) => theme.palette.primary.main};
        box-shadow: 0px 0px 12px rgba(151, 255, 255, 100%);
      }
    }

    .item {
      width: 100%;
      min-height: 170px;
      margin-bottom: 2em;
      transition: transform 0.25s;
      .bg {
      }
    }

    :hover {
      .stage-label {
        color: ${({ theme }) => theme.palette.primary.main};
        text-shadow: 0px 0px 6px rgba(151, 255, 255, 100%);
      }
      .item {
        transform: translate(2%);
        .bg {
        }
      }
    }

    ${({ theme }) => theme.breakpoints.down("md")} {
      flex-direction: column;
      .stage-label {
        margin-bottom: 1rem;
        br {
          display: none;
        }
      }
    }
  }
`;

const Roadmap = styled((props) => {
  return (
    <Box {...props} sx={{ pb: 8 }}>
      <Background />

      <Container sx={{ pt: 8 }} {...props}>
        <Typography variant="h2">Roadmap</Typography>
        <Typography variant="h4">Further Augmentations</Typography>
        <RoadmapContent sx={{ mt: 15 }}>
          <Item milestone="Main Launch">
            <Typography>
              10K collection release. Cryptoborgs form a society. Cryptelligence
              begins...
            </Typography>
          </Item>
          <Item milestone="Expansions">
            <Typography>
              Cryptoborgs have gone too far playing with augmentations.
              <br />
              “The Unhumans” is the first expansion.
            </Typography>
          </Item>
          <Item milestone="Partnerships & Merch">
            <Typography>
              We have exciting plans to create unique partnerships with
              likeminded brands and artists.
              <br />
              Cryptelligence appears in the physical world. Join us for
              real-world community events.
            </Typography>
          </Item>
          <Item milestone="Metaverse">
            <Typography>
              Follow the signs and enter the Cryptelligence Club - a virtual
              world to share with fellow Cryptoborgs.
              <br />
              Acquisition of land in virtual worlds such The Sandbox, and
              partnerships with play-to-earn games.
            </Typography>
          </Item>
          <Item milestone="Entertainment">
            <Typography>
              Our vision is to create an immersive experience around the
              Cryptelligence universe, including short films, comic books and
              video games.
            </Typography>
          </Item>
        </RoadmapContent>
      </Container>
    </Box>
  );
})`
  position: relative;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.3rem;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    h2 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.15rem;
    }
  }
`;

export default Roadmap;
