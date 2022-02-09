//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import mockups from "../public/mockups.gif";
import divider from "../public/vector-images/divider.svg";

const MockupsGif = styled((props) => {
  return (
    <Box {...props}>
      <img src="/vector-images/image-border.png" className="image-border" />
      <Box className="gif-wrapper">
        <Image
          src={mockups}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <img src="/vector-images/gif-decoration.png" className="decorator" />
    </Box>
  );
})`
  width: 100%;
  aspect-ratio: 1;
  position: relative;

  .gif-wrapper {
    position: relative;
    padding: 1.5em;
    img {
      clip-path: polygon(0% 90%, 10% 100%, 100% 100%, 100% 10%, 90% 0%, 0% 0%);
      z-index: 1;
    }
  }

  .image-border {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .decorator {
    position: absolute;
    top: 50%;
    left: 94%;
    width: 150%;
    aspect-ratio: 480/101;
  }
`;

const About = styled((props) => {
  return (
    <Box {...props}>
      <Container className="container">
        <Box className="text-wrapper">
          <Typography variant="h2">
            About
            <br />
            Cryptelligence
            <Box className="divider">
              <Image src={divider} layout="fill" objectFit="contain" />
            </Box>
          </Typography>
          <Typography>
            Cryptelligence Society is a limited collection of 8686 NFT avatars
            inspired by cyberpunk, sci-fi and tech innovation.
          </Typography>
          <Typography>
            Each avatar is an entirely unique NFT randomly generated from over
            250 traits and stored on the Ethereum blockchain.
          </Typography>
          <Typography>
            The aim of the collection is to give its owners truly visually
            differentiated avatars, while allowing the community to participate
            in the entertaining universe of Cryptelligence.
          </Typography>
        </Box>
        <MockupsGif className="mockups" />
      </Container>
    </Box>
  );
})`
  position: relative;
  padding: 2rem 0 8rem;
  overflow: hidden;

  background: rgb(6, 3, 9);
  .container {
    display: grid;
    grid-template-columns: 3fr 3fr;
    grid-column-gap: 5rem;

    .text-wrapper {
      position: relative;

      h2 {
        position: relative;
        font-size: 3rem;
        margin-bottom: 5rem;
        .divider {
          position: absolute;
          bottom: -20%;
          right: -4%;
          width: 1600px;
          height: 16px;
        }
      }

      p {
        margin-bottom: 2rem;
      }
    }
  }

  .mockups-container {
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    .container {
      h2 {
        font-size: 3rem;
      }
      p {
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    .container {
      h2 {
        font-size: 2.5rem;
      }
      p {
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .container {
      grid-template-columns: 1fr;
      h2 {
        font-size: 1.8rem !important;
        .divider {
          transform: translate(30%);
          bottom: 40px;
          right: initial;
          left: -1600px !important;
        }
      }
      p {
      }
      .mockups {
        width: 80%;
        margin: auto;
        margin-top: 5rem;
      }
    }
  }
`;

export default About;
