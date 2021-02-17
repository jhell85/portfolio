import React, { createRef } from "react";
import { Image, Menu, Sticky } from "semantic-ui-react";
import _ from "lodash";
import styled, { ThemeProvider } from "styled-components";

import "./styles/App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import { StyledScrollTo, StyledSegment } from "./styles/styledComponents";

import FakeData from "./fake-data";

function App() {
  const contextRef = createRef();

  const myTheme = { background: "#0d47a1", color: "black" };

  return (
    <ThemeProvider theme={myTheme}>
      <div>
        {/* <GlobalStyles /> */}
        <div style={myTheme}>
          <div ref={contextRef}>
            <div className="landingImg">
              <div className="landing">
                <h1 className="landing-text hello">Hello.</h1>
                <h1 className="landing-text">Thank you for visiting.</h1>
                <h1 className="landing-text">
                  I'm <span className="my-name">Joshua Hellman</span>, full-stack web
                  developer
                </h1>
              </div>
            </div>
            <Sticky context={contextRef}>
              <Menu widths={3}>
                <StyledScrollTo className="menu item" selector="#about-content">
                  About
                </StyledScrollTo>
                <StyledScrollTo className="menu item" selector="#portfolio-content">
                  Portfolio
                </StyledScrollTo>
                <StyledScrollTo className="menu item" selector="#contact-content">
                  Contact
                </StyledScrollTo>
              </Menu>
            </Sticky>
            <StyledSegment attached="bottom">
              <div id="about-content">
                <About />
              </div>
              <div id="portfolio-content">
                <Portfolio />
              </div>
              <div id="contact-content">
                <ContactForm />
              </div>
            </StyledSegment>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
