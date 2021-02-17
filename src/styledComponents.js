import React from "react";
import styled from "styled-components";
import { MenuItem, Button, Segment } from "semantic-ui-react";
import ScrollTo from "react-scroll-into-view";

const myTheme = {
  body: "#c7c2e9!important",
};

export const StyledMenuItem = styled(MenuItem)({
  color: "red!important",
  fontFamily: "Big Shoulders Display",
});

export const StyledScrollTo = styled(ScrollTo)({
  color: "rgb(243, 131, 56)!important",
});

export const StyledSegment = styled(Segment)({
  background: myTheme.body,
});
