//@ts-nocheck

import React, { useState, useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Image from "next/image";
import traits from "@src/images";

//Manually import and format all traits from another file so they are static

const Trait = styled(({ src, ...props }) => {
  return (
    <Box {...props}>
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="relative"
        priority
      />
    </Box>
  );
})`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const TraitPreview = styled(({ name, images, ...props }) => {
  const [activeTrait, setActiveTrait] = useState(0);

  //? Should this be useRef?
  const traits = useMemo(() => {
    return images.map((imagePath, index) => (
      <Trait src={imagePath} key={index} className="trait" />
    ));
  }, [images]);

  const handleTraitMouseover = () => {
    console.log("swapping");
    setActiveTrait((activeTrait + 1) % images.length);
  };

  return (
    <Box {...props}>
      <Box
        onMouseEnter={() => handleTraitMouseover()}
        className="trait-window"
        sx={{ mb: 2 }}
      >
        {traits[activeTrait]}
      </Box>
      <Typography variant="h4">{name}</Typography>
    </Box>
  );
})`
  width: 100%;
  aspect-ratio: 1;
  position: relative;

  .trait-window {
    position: relative;
    width: 100%;
    aspect-ratio: 1;

    transition: transform 0.1s ease, border 0.1s ease;

    :hover {
      transform: scale(1.025, 1.025);
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
    }
  }

  h4 {
    position: absolute;
  }
`;

const Traits = styled(({ ...props }) => {
  const traitPreviews = Object.keys(traits).map((traitName) => (
    <TraitPreview name={traitName} images={traits[traitName]} key={traitName} />
  ));

  return (
    <Box {...props}>
      <Container maxWidth="lg" sx={{ py: 10, pb: 20 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Traits
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Our goal is to create a range of truly unique avatars.
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Navigate for preview.
        </Typography>
        <Box className="trait-previews">{traitPreviews}</Box>
      </Container>
    </Box>
  );
})`
  background: ${({ theme }) => theme.palette.background.default};
  background: black;

  .MuiContainer-root {
    .trait-previews {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 6rem;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.3rem;
    }
  }

  ${({theme}) => theme.breakpoints.down("md")} {
    .MuiContainer-root {
      .trait-previews {
        grid-template-columns: repeat(2, 1fr);
      }
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

export default Traits;
