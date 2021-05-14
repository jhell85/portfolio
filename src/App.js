import React, { createRef } from "react";
import { Menu, Sticky } from "semantic-ui-react";
import "./styles/App.css";
import About from "./About";
import PersonalProjects from "./PersonalProjects";
import ContactForm from "./ContactForm";
import ProfessionalExperience from "./ProfessionalExperience";
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
          <Menu widths={4}>
            <StyledScrollTo className="menu item" selector="#about-content">
              About
            </StyledScrollTo>
            <StyledScrollTo className="menu item" selector="#personal-projects-content">
              Personal Projects
            </StyledScrollTo>
            <StyledScrollTo className="menu item" selector="#professional-experience-content">
              Professional Experience
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
          <div id="personal-projects-content">
            <PersonalProjects />
          </div>
          <div id="professional-experience-content">
            <ProfessionalExperience />
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
