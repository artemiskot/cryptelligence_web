//@ts-nocheck


import React, { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  ButtonBase,
  sliderClasses,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

const Avatar = styled((props) => {
  return (
    <Box {...props} className={`${props.className} avatar`}>
      <Box sx={{ mb: 6 }} className="image-wrapper">
        <Image src={props.src} layout="fill" objectFit="contain" objectPosition="relative"/>
      </Box>
      <Typography variant="h5">{props.name}</Typography>
    </Box>
  );
})`
  .image-wrapper {
    position: relative;
    aspect-ratio: 1;
    width: 400px;
  }
  h5 {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 2rem;
  }
`;

const Pagination = styled((props) => {
  //@ts-ignore
  const Bullet = (props) => {
    return (
      <ButtonBase disableRipple {...props}>
        <div className="button-visible" />
      </ButtonBase>
    );
  };

  const buttons = Array(props.numslides)
    .fill(null)
    .map((ele, index) => {
      return (
        <Bullet
          key={index}
          className={(() => {
            if (props.activeIndex == index) return "active";
          })()}
          onClick={() => {
            props.swiperRef.current.slideToLoop(index, 400);
          }}
        />
      );
    });

  return <Box {...props}>{buttons}</Box>;
})`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 10px;
  place-items: center;
  width: clamp(250px, 60%, 400px);
  button {
    height: 16px;
    width: 100%;
    .button-visible {
      transition: transform 0.25s ease, background 0.25s ease,
        box-shadow 0.25s ease;
    }
    :hover {
      .button-visible {
        background: rgb(85, 131, 192);
      }
    }
  }
  button.active {
    .button-visible {
      transform: scale(1, 1.25);
      background: ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0px 0px 6px rgba(151, 255, 255, 100%);
    }
  }
  .button-visible {
    display: grid;
    place-items: center;
    background: rgb(78, 97, 154);
    height: 4px;
    width: 100%;
  }
`;

const Carousel = styled((props) => {
  const swiperRef = useRef<any>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box {...props} className={`${props.className} carousel`}>
      {/* <div className="overlay" /> */}
      <Swiper
        centeredSlides
        loop
        slideToClickedSlide
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.on("activeIndexChange", () => {
            setActiveIndex(swiper.realIndex);
          });
        }}
        slidesPerView="auto"
        breakpoints={{
          600: {
            spaceBetween: 60,
          },
          900: {
            spaceBetween: 80,
          },
        }}
      >
        <SwiperSlide>
          <Avatar src="/slider-images/Android1.png" name="Android" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Android2.png" name="Android" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Degen.png" name="Degen" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Engineer.png" name="Engineer" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Metasurfer1.png" name="Metasurfer" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/MetaSurfer2.png" name="Metasurfer" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Cryptooriginal.png" name="Cryptooriginal" />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Untitled_Artwork.png" name="Coming soon..." />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar src="/slider-images/Untitled_Artwork.png" name="Coming soon..." />
        </SwiperSlide>
      </Swiper>
      <Box className="pagination-wrapper">
        <Pagination
          swiperRef={swiperRef}
          numslides={9}
          sx={{ mx: "auto" }}
          activeIndex={activeIndex}
        />
      </Box>
    </Box>
  );
})`
  position: relative;
  overflow: hidden;
  .swiper {
    padding-top: 4rem;
    margin-bottom: 2.5rem;
  }
  .swiper-slide {
    width: fit-content;
  }
  .pagination-wrapper {
    width: 100%;
  }
  background: linear-gradient(
    90deg,
    rgba(13, 11, 28, 1) 0%,
    rgba(13, 11, 28, 0) 20%,
    rgba(13, 11, 28, 0) 80%,
    rgba(13, 11, 28, 1) 100%
  );
  .swiper-slide {
    .avatar {
      .image-wrapper {
        transition: transform 0.3s;
      }
      h5 {
        transition: text-shadow 1s ease, opacity 0.35s ease;
        opacity: 20%;
      }
    }
  }
  .swiper-slide-prev,
  .swiper-slide-next {
    h5 {
      opacity: 50% !important;
    }
  }
  .swiper-slide-active {
    .avatar {
      .image-wrapper {
        transform: scale(1.15, 1.15);
      }
      h5 {
        text-shadow: 0px 0px 8px rgba(151, 255, 255, 100%);
        opacity: 100%;
      }
    }
  }
  .overlay {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(
      90deg,
      rgba(13, 11, 28, 1) 0%,
      rgba(13, 11, 28, 0) 20%,
      rgba(13, 11, 28, 0) 80%,
      rgba(13, 11, 28, 1) 100%
    );
  }
  ${({ theme }) => theme.breakpoints.down("lg")} {
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    .avatar {
      .image-wrapper {
        width: 300px;
      }
      h5 {
        font-size: 1.75rem;
      }
    }
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    .avatar {
      .image-wrapper {
        width: 200px;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
`;

const Avatars = styled((props) => {
  return (
    <Box {...props}>
      <Container className="container">
        <Typography variant="h2">Avatars</Typography>
        <Typography variant="h4" sx={{ mb: 6 }}>
          Unique Combinations | 7 Classes | 300+ Traits
        </Typography>
      </Container>
      <Carousel />
    </Box>
  );
})`
  padding: 2rem 0 5rem;
  background: #0d0b1c;
  .container {
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    h2 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1rem;
      margin-bottom: 1.4rem;
    }
    img {
    }
  }
`;

export default Avatars;