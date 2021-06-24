import React from "react";
import headShot from "./img/Joshua_headshot.jpg";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container className="ui items padded-container">
      <div className="item">
        <div className="image">
          <img src={headShot} alt="Head Shot of Josh" />
        </div>
        <div className=" middle aligned content">
          <div className="header">
            <h3>
              My name is Josh and I'm a web developer located in Portland, Oregon. I've
              been programming and developing web apps since 2018 using a variety of
              languages and frameworks. I'm passionate and enthusiastic about developing
              intuitive interfaces that facilitate a superior user experience as well as
              creating applications and web services to help others learn.{" "}
              <div>
                Prior to web development, I spent several years in the US Navy station on
                board the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/USS_Chosin"
                >
                  USS Chosin
                </a>
                , once honorably discharged I went on to own and operate an HVAC
                construction company out of Gilbert, Arizona.
              </div>
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default About;
