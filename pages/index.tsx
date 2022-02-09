//@ts-nocheck

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import Hook from "../src/Hook";
import About from "../src/About";
import Avatars from "../src/Avatars";
import Roadmap from "../src/Roadmap";
import Traits from "../src/Traits";
import Team from "@src/Team"
import FAQ from "@src/FAQ"
import Footer from "../src/Footer";

const index = styled(({...props}) => {
  return (
    <Box {...props}>
      <Hook />
      <Avatars id="avatars" />
      <Traits id="traits"/>
      <Team id="team"/>
      <Roadmap id="roadmap" />
      <FAQ />
      <Footer />
    </Box>
  );
})`
  postiion: relative;
`;

export default index;

// import getTraitPaths from "@src/getTraitPaths"

// export async function getStaticProps() {
//   return {props: {traits: getTraitPaths()}}
// }