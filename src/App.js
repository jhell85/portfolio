import React, { createRef } from "react";
import { Menu, Sticky, Segment } from "semantic-ui-react";
import "./styles/App.css";
import About from "./About";
import PersonalProjects from "./PersonalProjects";
import ContactForm from "./ContactForm";
import ProfessionalExperience from "./ProfessionalExperience";
import ScrollTo from "react-scroll-into-view";

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
            <ScrollTo className="menu item menu-item-color" selector="#about-content">
              About
            </ScrollTo>
            <ScrollTo className="menu item menu-item-color" selector="#personal-projects-content">
              Personal Projects
            </ScrollTo>
            <ScrollTo className="menu item menu-item-color" selector="#professional-experience-content">
              Professional Experience
            </ScrollTo>
            <ScrollTo className="menu item menu-item-color" selector="#contact-content">
              Contact
            </ScrollTo>
          </Menu>
        </Sticky>
        <Segment 
        className="background-color"
        attached="bottom">
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
        </Segment>
      </div>
    </div>
  );
}

export default App;
