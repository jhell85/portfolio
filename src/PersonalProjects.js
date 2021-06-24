import React from "react";
import wordGame from "./img/wordGame.gif";
import wagerPlacer from "./img/WP.gif";
import streamers from "./img/streamers.gif";
import { Container } from "semantic-ui-react";

const PersonalProjects = () => {
  return (
    <Container className="padded-container">
      <Container textAlign="center">
        <h2>Personal Projects</h2>
      </Container>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={wordGame} alt="GIF of Generic Word Game" />
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://jhell85.github.io/word-game"
              className="header a-tag-color"
            >
              Generic Word Game
            </a>
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wager-placer.herokuapp.com"
              className="header a-tag-color"
            >
              Wager Placer
            </a>
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kind-hopper-912037.netlify.app/"
              className="header a-tag-color"
            >
              Streamers
            </a>
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
    </Container>
  );
};
export default PersonalProjects;
