import React, { createRef } from "react";
import { Image, Menu, Sticky } from "semantic-ui-react";
import _ from "lodash";
import styled, { ThemeProvider } from "styled-components";

import "./App.css";
import About from "./About";
import { StyledScrollTo, StyledSegment } from "./styledComponents";

import FakeData from "./fake-data";

function App() {
  const Container = styled.div`
    margin: 5px auto 5px auto;
  `;

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: getFonts(),
  //     },
  //   });
  // });

  // useEffect(() => {
  //   console.log(theme);
  //   setSelectedTheme(theme);
  // }, [themeLoaded]);

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
              {/* <StyledButton>My Button</StyledButton> */}
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
                {/* <h5>About</h5>
                {_.times(10, (i) => (
                  <Image
                    key={i}
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                  />
                ))} */}
              </div>
              <div id="portfolio-content">
                <h5>Portfolio</h5>
                <FakeData />
              </div>
              <div id="contact-content">
                <h5>contact</h5>
                <FakeData />
              </div>
            </StyledSegment>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
