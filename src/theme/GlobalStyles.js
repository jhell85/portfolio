import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: "#9be7ff";
    color: "#0d47a1";
    font-family: "Ubuntu";
    transition: all 0.50s linear;
  }

  a {
    color: "#0d47a1";
    cursor: pointer;
  }

  button.btn {
    background-color: "#0d47a1";
    color: "#ffffff";

  button.cancel {
    background-color: #ff0000;
    color: "#ffffff";
  }

  button:disabled {
    background-color: #ebebeb;
    color: #333333;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: "Ubuntu";
  }

`;
