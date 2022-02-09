//@ts-nocheck

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@src/theme";

const FAQItem = styled(({ summary, children, ...props }) => {
  return (
    <Accordion component="li" {...props}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="white" />}
        aria-controls="panel1a-content"
      >
        <Typography variant="h3" className="summary">
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
})`
  background: #333333;

  svg {
    fill: white;
  }

  border-radius: 12px !important;

  margin-bottom: 0.8em;

  .summary {
    font-size: 1.125em;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-size: 1rem;
    b {
      text-transform: uppercase;
    }
    span {
      margin: 0.5em 0 1em;
      display: inline-block;
    }
  }
`;

const FAQ = styled((props) => {
  const [expanded, setExpanded] = useState<boolean | string>(false);
  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box {...props}>
      <Container maxWidth="md">
        <Typography variant="h3" className="heading">
          FAQ
        </Typography>
        <Box component="ul">
          <FAQItem
            summary={"Question 1"}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            Description
          </FAQItem>
          <FAQItem
            summary={"Question 2"}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            Description
          </FAQItem>
          <FAQItem
            summary={"Question 3"}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            Description
          </FAQItem>
          <FAQItem
            summary={"Question 4"}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            Description
          </FAQItem>
          <FAQItem
            summary={"Question 5"}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            Description
          </FAQItem>
        </Box>
      </Container>
    </Box>
  );
})`
  background: black;
  padding: 4rem 0;
  width: 100%;

  .heading {
    text-align: center;
    margin-bottom: 1em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default FAQ;
