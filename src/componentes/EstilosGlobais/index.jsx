import { createGlobalStyle } from "styled-components";

import RobotoRegular from "./fontes/Roboto-Regular.ttf"
import RobotoBold from "./fontes/Roboto-Bold.ttf"
import RobotoLight from "./fontes/Roboto-Light.ttf"
import RobotoBlack from "./fontes/Roboto-Black.ttf";
import SourceSansProSemibold from "./fontes/SourceSansPro-Semibold.otf"
import SourceSansProBlack from "./fontes/SourceSansPro-Black.otf"

const EstilosGlobais = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular';
        src: local('Roboto Regular'), local('RobotoRegular'), url(${RobotoRegular});
    }

    @font-face {
        font-family: 'RobotoBold';
        src: local('Roboto Bold'), local('RobotoBold'), url(${RobotoBold});
    }

    @font-face {
        font-family: 'RobotoLight';
        src: local('Roboto Light'), local('RobotoLight'), url(${RobotoLight});
    }

    @font-face {
        font-family: 'RobotoBlack';
        src: local('Roboto Black'), local('RobotoBlack'), url(${RobotoBlack});
    }
    
    @font-face {
        font-family: 'SourceSansProSemibold';
        src: local('Source Sans Pro Semibold'), local('SourceSansProSemibold'), url(${SourceSansProSemibold});
    }

    @font-face {
        font-family: 'SourceSansProBlack';
        src: local('Source Sans Pro Black'), local('SourceSansProBlack'), url(${SourceSansProBlack});
    }

    html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%; 
    font-family: RobotoRegular;
    }

    body {
    margin: 0;
    min-height: 100vh;
    }

    main {
    display: block;
    }

    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }

    hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
    }

    a {
    background-color: transparent;
    }

    abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
    }

    b,
    strong {
    font-weight: bolder;
    }

    code,
    kbd,
    samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
    }

    small {
    font-size: 80%;
    }

    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }

    sub {
    bottom: -0.25em;
    }

    sup {
    top: -0.5em;
    }

    img {
    border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    }

    button,
    input { 
    overflow: visible;
    }

    button,
    select { 
    text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }

    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }

    legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
    }
    
    progress {
    vertical-align: baseline;
    }

    textarea {
    overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }

    [type="search"] {
    appearance: textfield; 
    outline-offset: -2px; 
    }

    [type="search"]::-webkit-search-decoration {
    appearance: none;
    }

    ::-webkit-file-upload-button {
    appearance: button; 
    font: inherit; 
    }

    details {
    display: block;
    }

    summary {
    display: list-item;
    }

    template {
    display: none;
    }

    [hidden] {
    display: none;
    }
`

export default EstilosGlobais 