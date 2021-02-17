import styled from "styled-components";
import { MenuItem, Button, Segment } from "semantic-ui-react";
import ScrollTo from "react-scroll-into-view";

const myTheme = {
  body: "#c7c2e9!important",
};

export const StyledScrollTo = styled(ScrollTo)({
  color: "rgb(243, 131, 56)!important",
});

export const StyledSegment = styled(Segment)({
  background: myTheme.body,
});

export const PaddedContainer = styled.div`
  padding: 43px 50px 0px 50px;
`;

export const StyledA = styled.a`
  color: #4183c4 !important;
`;
