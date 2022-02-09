import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Logo = styled((props) => {
  return <Box component="img" className="logo" src="/logo.svg" {...props} />;
})`
`;

export default Logo;
