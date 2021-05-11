import React, { createRef } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import "./styles/App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import { StyledScrollTo, StyledSegment } from "./styles/styledComponents";

function App() {
  const contextRef = createRef();

  return (
    <div>
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
  );
}

export default App;
