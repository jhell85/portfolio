import React from "react";
import wordGame from "./img/wordGame.gif";
import wagerPlacer from "./img/WP.gif";
import streamers from "./img/streamers.gif";
import blackJack from "./img/BlackJack.gif";

import { Container } from "semantic-ui-react";

const PersonalProjects = () => {
  return (
    <Container className="padded-container">
      <Container className="center">
        <h1>Personal Projects</h1>
      </Container>
      <div className="ui items">
        <div className="item item-pt">
          <div className="ui medium rounded image">
            <img src={blackJack} alt="GIF of BlackJack" />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jhell85.github.io/blackjack/"
              className="header a-tag-color">
              BlackJack
            </a>
            <div className="description">
              <h4>
                A simple BlackJack game built with vanilla JavaScript utilizing an external CSS library for
                the cards. Animate.css is used for the movements of the cards, buttons and the win loss
                display.
              </h4>
            </div>
          </div>
        </div>
        <div className="item item-pt">
          <div className="ui medium rounded image">
            <img src={wordGame} alt="GIF of Generic Word Game" />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jhell85.github.io/word-game"
              className="header a-tag-color">
              Generic Word Game
            </a>
            <div className="description">
              <h4>
                A Hangman style word game with a very simple but effective UI, built using ReactJS and Redux
                for State management. This was my first project using ReactJS and Redux.
              </h4>
            </div>
          </div>
        </div>
        <div className="item item-pt">
          <div className="ui medium rounded image">
            <img src={wagerPlacer} alt="GIF of Wager Placer" />
          </div>
          <div className="middle aligned content" style={{ paddingTop: "10px" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.wagerplacer.com/"
              className="header a-tag-color">
              Wager Placer
            </a>
            <div className="description">
              <h4>
                A social media app designed to allow users to place wagers with one another on sporting
                events. This app is still in its infant stages of development, however it is built with a MERN
                stack and utilizes Redux for managing State and React-router for app navigation
              </h4>
            </div>
          </div>
        </div>
        <div className="item item-pt">
          <div className="ui medium rounded image">
            <img src={streamers} alt="GIF of Streamers" />
          </div>
          <div className="middle aligned content" style={{ paddingTop: "10px" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kind-hopper-912037.netlify.app/"
              className="header a-tag-color">
              Streamers
            </a>
            <div className="description">
              <h4>
                An app that allows users to start their own stream and broadcast it. This app utilizes Google
                OAuth2 for user authentication and has full CRUD for records of streams.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PersonalProjects;
