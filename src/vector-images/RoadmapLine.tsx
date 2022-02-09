//@ts-nocheck


import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";

const RoadmapLine = styled((props) => {
  return (
    <SvgIcon
      mlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23.85 723.67"
      {...props}
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            className="cls-1"
            points="23.85 723.67 0 723.67 0 0 23.85 0 23.85 1 1 1 1 722.67 23.85 722.67 23.85 723.67"
          />
          <rect
            className="cls-1"
            x="0.33"
            y="541.63"
            width="23.52"
            height="1"
          />
          <rect className="cls-1" x="0.33" y="364" width="23.52" height="1" />
          <rect
            className="cls-1"
            x="0.33"
            y="174.67"
            width="23.52"
            height="1"
          />
        </g>
      </g>
    </SvgIcon>
  );
})`
  svg {
    fill: white;
  }
`;

export default RoadmapLine;
