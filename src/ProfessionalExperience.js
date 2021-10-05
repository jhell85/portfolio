import { React, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { ReactComponent as CodeGuildSvg } from "./img/codeGuild.svg";

const ProfessionalExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 767;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // {/* There is no need for a render function with Hooks */}
  // return (
  //     <p className={`${isMobile ? "mobile-class" : "non-mobile-class"}`}>Your text here</p>
  // );

  return (
    <Container className="padded-container">
      <Container className="center">
        <h2>Professional Experience</h2>
      </Container>
      <div className="ui items">
        <div className="item">
          <div
            className={`ui small experience-img guild
          ${isMobile ? "padding-bottom" : "image"}`}
          >
            <CodeGuildSvg />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pdxcodeguild.com/"
              className="header a-tag-color"
            >
              PDX Code Guild
            </a>
            <div className="ui header padding-left">May 2021 - Present</div>
            <div className="description">
              <p>
                Working as a Teacher’s Assistant for the Code Guild’s Fullstack web development course.
                Assisting students in developing a functional understanding of programming principles and
                methodologies using Python, JavaScript, HTML, & CSS, as well as full web application
                development using Python's Django Framework.
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="ui small image experience-img rpc">
            <img
              src="https://s3-us-west-2.amazonaws.com/freddieflip/uploads/2018/08/06053351/RPC-Logo_Primary-Logo1.png"
              alt="Rock Paper Coin"
            />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rockpapercoin.com/"
              className="ui header a-tag-color"
            >
              Rock Paper Coin
            </a>
            <div className="ui header padding-left">March 2021 - May 2021</div>
            <div className="description ">
              <p className="padding-top">
                Working as an intern. I was primarily responsible for performing quality assurance functions
                including writing test suites for their front-end using Cypress.io, drafting up and submitting
                bug tickets in Jira, and implementing bug fixes. I also assisted in work order triage and
                troubleshooting.
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="ui small image experience-img theorem">
            <img
              src={
                "https://theoremadvertising.com/wp-content/uploads/2021/01/xcropped-Theorem-Logo-White-Text-2.png.pagespeed.ic.Ie6RP6MNgW.webp"
              }
              alt="Theorem Advertising"
            />
          </div>
          <div className="middle aligned content">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theoremadvertising.com/"
              className="ui header a-tag-color"
            >
              Theorem Advertising
            </a>
            <div className="ui header padding-left">August 2020 - October 2020</div>

            <div className="description">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.evernote.com/shard/s683/client/snv?noteGuid=5a515290-60c5-4367-9540-38209219d82d&noteKey=8ee3a0d19f174669cff2680227f38183&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs683%2Fsh%2F5a515290-60c5-4367-9540-38209219d82d%2F8ee3a0d19f174669cff2680227f38183&title=Theorem%2B%2BResume"
                className="a-tag-color"
              >
                Detailed Resume
              </a>
              <p>
                Working as an intern, I was responsible for identifying and implementing feature enhancements
                for client websites. I assisted in implementing a new component for the Portland Trail
                Blazers, specifically a live play-by-play page with in-game updates and a shot map showing
                where shots were made and missed. I also assisted in converting ticket pages for some MLS
                Soccer leagues into reusable React components.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProfessionalExperience;
