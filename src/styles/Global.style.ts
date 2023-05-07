import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-color-0: #846956;
    --main-color-1: #7B6250;
    --main-color-2: #AD8B73;
    --main-color-3: #CEAB93;
    --main-color-4: #E3CAA5;
    --main-color-5: #F7EDDB;
  }

  * {
    box-sizing: border-box;
  }

  body {
    /* background-color: #212121; */
    /* background-color: #F19E54; */
    /* background-color: #DEDEDE; */

    /* color: #FFFFFF; */
    /* color: #DEDEDE; */
    /* color: #E6EDF3; // 제목 */
    /* color: #7D8590 */
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul,li {
    list-style: none;
  }

  input {
    outline: none;
    margin: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; 
    border: none;
  }

  svg, image, video {
    vertical-align: top;
  }
`;

export default GlobalStyle;
