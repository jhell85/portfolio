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
            <img style={{top: "50%", transform: "translateY(25%)", padding:"5px", justifyContent: 'center' }}  src={'https://theoremadvertising.com/wp-content/uploads/2021/01/xcropped-Theorem-Logo-White-Text-2.png.pagespeed.ic.Ie6RP6MNgW.webp'} alt="GIF of Generic Word Game" />
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://theoremadvertising.com/"
              className="ui header"
            >
              Theorem Advertising 
            </StyledA>
            <div style={{ paddingLeft: "5px" }} class="ui header">August 2020 - October 2020</div>
            <div class="description">
              <p>
                Worked as an Intern for Theorem Advertising, I was responsible for improving & adding features for their clients. 
                Helped implement a new component for the Portland Trail Blazers website, a live court play by play page with live in game updates and a shot map of where shots where made and missed.
                Converted ticket pages for some MLS Soccer leagues from Vanilla Java Script to use React Functional components 
                {" "}
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div style={{background: 'white', minHeight: '100px'}} className="image">
            <img style={{top: "50%", transform: "translateY(50%)", padding:"5px", justifyContent: 'center' }} src="https://s3-us-west-2.amazonaws.com/freddieflip/uploads/2018/08/06053351/RPC-Logo_Primary-Logo1.png" alt="Rock Paper Coin" />
          </div>
          <div className="content" style={{ paddingTop: "10px" }}>
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://rockpapercoin.com/"
              className="header"
            >
              Rock Paper Coin
            </StyledA>
            <div style={{ paddingLeft: "5px" }} class="ui header">March 2021 - May 2021</div>
            <div class="description">
              <p>
                Internship tasked with Quality Assurance responsibilities including writing test suites for their frontend using Cypress.io. 
                If bugs were encountered while writing the tests, draft up new bug ticket in Jira & implementing smaller bug fixes. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </PaddedContainer>
  );
};
export default ProfessionalExperience;