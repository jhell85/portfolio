import React from "react";
import headShot from "./img/Joshua_headshot.jpg";

const About = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}
    >
      <img class="ui medium rounded image" src={headShot}></img>

      <h3 style={{ paddingLeft: "10px" }}>
        My name is Josh and I'm a web developer located in Portland, Oregon. I've been
        programming and developing web apps since 2018 using a variety of languages and
        frameworks. I'm passionate and enthusiastic about developing intuitive interfaces
        that facilitate a superior user experience as well as creating applications and
        web services to help others learn. Prior to web development, I spent several years
        in the US Navy and went on to run and operate an HVAC construction company out of
        Gilbert, Arizona.
      </h3>
    </div>
  );
};
export default About;
