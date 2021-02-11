import React, { createRef } from "react";
import { Image, Input, Menu, Segment, Sticky } from "semantic-ui-react";
import _ from "lodash";
import landingImage from "./img/landing2.jpg";
import "./App.css";
import FakeData from "./fake-data";
import ScrollTo from "react-scroll-into-view";

class App extends React.Component {
  contextRef = createRef();

  render() {
    return (
      <div ref={this.contextRef}>
        <Image className="landingImg" src={landingImage} />
        <Sticky context={this.contextRef}>
          <Menu color="blue" widths={3}>
            <ScrollTo className="menu item" selector="#about-content">
              About
            </ScrollTo>
            <ScrollTo className="menu item" selector="#portfolio-content">
              Portfolio
            </ScrollTo>
            <ScrollTo className="menu item" selector="#contact-content">
              Contact
            </ScrollTo>
          </Menu>
        </Sticky>
        <Segment attached="bottom">
          <div id="about-content">
            <h5>About</h5>
            {_.times(10, (i) => (
              <Image
                key={i}
                src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
              />
            ))}
          </div>
          <div id="portfolio-content">
            <h5>Portfolio</h5>
            <FakeData />
          </div>
          <div id="contact-content">
            <h5>contact</h5>
            <FakeData />
          </div>
        </Segment>
      </div>
    );
  }
}

export default App;
