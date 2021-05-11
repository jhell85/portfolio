import React from "react";
import wagerPlacer from "./img/WP.gif";
import streamers from "./img/streamers.gif";
import { PaddedContainer, StyledA } from "./styles/styledComponents";
import { Container } from "semantic-ui-react";

const ProfessionalExperience = () => {
  return (
    <PaddedContainer>
      <Container textAlign="center">
        <h2>Professional Experience</h2>
      </Container>
      <div className="ui items">
        <div className="item">
          <div style={{background: 'black', minHeight: '100px'}} className="image">
            <img   src={'https://theoremadvertising.com/wp-content/uploads/2021/01/xcropped-Theorem-Logo-White-Text-2.png.pagespeed.ic.Ie6RP6MNgW.webp'} alt="GIF of Generic Word Game" />
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://theoremadvertising.com/"
              className="header"
            >
              Theorem Advertising 
            </StyledA>
            <div class="description">
              <p>
                a hangman style word game that is built with ReactJS and uses Redux for
                State management, It has a very simple but effective UI. This was one of
                my first apps I built using ReactJS and Redux.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src={wagerPlacer} alt="GIF of Wager Placer" />
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://wager-placer.herokuapp.com"
              className="header"
            >
              Wager Placer
            </StyledA>
            <div class="description">
              <p>
                a social media app designed to let users place wagers on sporting events
                with one another, this app is still in it's early stages of development.
                The app is developed with a MERN stack, uses Redux for managing State and
                React-router for app navigation.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src={streamers} alt="GIF of Streamers"/>
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://kind-hopper-912037.netlify.app/"
              className="header"
            >
              Streamers
            </StyledA>
            <div class="description">
              <p>
                an app that lets users start their own stream and broadcast it. the app
                has Google OAuth2 for user authentication and has full CRUD for records of
                streams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PaddedContainer>
  );
};
export default ProfessionalExperience;