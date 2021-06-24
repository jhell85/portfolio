import React from "react";
import { PaddedContainer, StyledA } from "./styles/styledComponents";
import { Container } from "semantic-ui-react";

const ProfessionalExperience = () => {
  return (
    <PaddedContainer>
      <Container textAlign="center">
        <h2>Professional Experience</h2>
      </Container>
      <div className="ui unstackable items">

        <div className="item">
          <div className="ui small experience-img image">
            <img 
            src="https://pdxcodeguild.com/static/img/pdxcglogo.svg" 
            alt="PDX Code Guild logo" />
          </div>
          <div className="middle aligned content" >
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://pdxcodeguild.com/"
              className="header"
            >
              PDX Code Guild
            </StyledA>
            <div class="ui header padding-left">May 2021 - present</div>
            <div class="description">
              <p>
                Working as a Teacher's assistant helping in the Code Guild's Fullstack web development course. Assisting students in learning
                to programing in Python, JavaScript, HTML & CSS languages, and helping students develop full web applications using Python's 
                Django Framework.  
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="ui small image experience-img rpc">
            <img
            src="https://s3-us-west-2.amazonaws.com/freddieflip/uploads/2018/08/06053351/RPC-Logo_Primary-Logo1.png" 
            alt="Rock Paper Coin" />
          </div>
          <div className="middle aligned content">
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://rockpapercoin.com/"
              className="ui header"
            >
              Rock Paper Coin
            </StyledA>
            <div class="ui header padding-left">March 2021 - May 2021</div>
            <div class="description ">
              <p
                className="padding-top"
              >
                Working as an Intern I was tasked with Quality Assurance responsibilities including writing test suites for their frontend using Cypress.io. 
                While writing test cases if bugs were discovered I was responsible for drafting up a new bug ticket in Jira. Along with being tasked to
                implement fixes for the bugs that I encountered. 
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div 
          className="ui small image experience-img theorem">
            <img 
             src={'https://theoremadvertising.com/wp-content/uploads/2021/01/xcropped-Theorem-Logo-White-Text-2.png.pagespeed.ic.Ie6RP6MNgW.webp'}
              alt="Theorem Advertising" />
          </div>
          <div className="middle aligned content">
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://theoremadvertising.com/"
              className="ui header"
            >
              Theorem Advertising 
            </StyledA>
            <div 
            class="ui header padding-left">August 2020 - October 2020</div>
            
            <div class="description">
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.evernote.com/shard/s683/client/snv?noteGuid=5a515290-60c5-4367-9540-38209219d82d&noteKey=8ee3a0d19f174669cff2680227f38183&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs683%2Fsh%2F5a515290-60c5-4367-9540-38209219d82d%2F8ee3a0d19f174669cff2680227f38183&title=Theorem%2B%2BResume"
             
            >
              Detailed Resume 
            </StyledA>
              <p
              >
                Working as an Intern I was responsible for improving & adding features for their client's websites. 
                Helped implement a new component for the Portland Trail Blazers, a live court play by play page with in game updates and a shot map of where shots where made and missed.
                Converted ticket pages for some MLS Soccer leagues into reusable React components.
                {" "}
              </p>
             
            </div>
          </div> 
        </div>
        </div>
    </PaddedContainer>
  );
};
export default ProfessionalExperience;