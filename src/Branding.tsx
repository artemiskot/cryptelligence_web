import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Image from "next/image";

const LogoBanner = styled((props) => {
  return (
    <Box {...props}>
      <Image src="/logo-banner.svg" layout="fill" objectFit="contain" objectPosition={"center"} />
    </Box>
  );
})`
width: 400px;
  position: relative;
  aspect-ratio: 8;
`;

const LogoText = styled((props) => {
  return <Box {...props}>
      <Image src="/logo-text.svg" layout="fill" objectFit="contain" objectPosition={"center"} />
  </Box>;
})`
width: 200px;
position: relative;
aspect-ratio: 8;

`;

export { LogoBanner, LogoText };
