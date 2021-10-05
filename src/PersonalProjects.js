import React from "react";
import wordGame from "./img/wordGame.gif";
import wagerPlacer from "./img/WP.gif";
import streamers from "./img/streamers.gif";
import { Container } from "semantic-ui-react";

const PersonalProjects = () => {
  return (
    <Container className="padded-container">
      <Container className="center">
        <h2>Personal Projects</h2>
      </Container>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={wordGame} alt="GIF of Generic Word Game" />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jhell85.github.io/word-game"
              className="header a-tag-color"
            >
              Generic Word Game
            </a>
            <div className="description">
              <p>
                A Hangman style word game with a very simple but effective UI, built using ReactJS and Redux
                for State management. This was my first project using ReactJS and Redux.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src={wagerPlacer} alt="GIF of Wager Placer" />
          </div>
          <div className="middle aligned content" style={{ paddingTop: "10px" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wager-placer.herokuapp.com"
              className="header a-tag-color"
            >
              Wager Placer
            </a>
            <div className="description">
              <p>
                A social media app designed to allow users to place wagers with one another on sporting
                events. This app is still in its infant stages of development, however it is built with a MERN
                stack and utilizes Redux for managing State and React-router for app navigation
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src={streamers} alt="GIF of Streamers" />
          </div>
          <div className="middle aligned content" style={{ paddingTop: "10px" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kind-hopper-912037.netlify.app/"
              className="header a-tag-color"
            >
              Streamers
            </a>
            <div className="description">
              <p>
                An app that allows users to start their own stream and broadcast it. This app utilizes Google
                OAuth2 for user authentication and has full CRUD for records of streams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PersonalProjects;
