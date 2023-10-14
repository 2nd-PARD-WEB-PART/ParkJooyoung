import { createGlobalStyle } from "styled-components";
import AppleSDGothicNeoT from "./AppleSDGothicNeoT.woff2";
import AppleSDGothicNeoUL from "./AppleSDGothicNeoUL.woff2";
import AppleSDGothicNeoSB from "./AppleSDGothicNeoSB.woff2";
import AppleSDGothicNeoR from "./AppleSDGothicNeoR.woff2";
import AppleSDGothicNeoM from "./AppleSDGothicNeoM.woff2";
import AppleSDGothicNeoL from "./AppleSDGothicNeoL.woff2";
import AppleSDGothicNeoB from "./AppleSDGothicNeoB.woff2";
import AppleSDGothicNeoEB from "./AppleSDGothicNeoEB.woff2";
import AppleSDGothicNeoH from "./AppleSDGothicNeoH.woff2";

export default createGlobalStyle`
@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 100;
    src: local("AppleSDGothicNeoT");
    src: url(${AppleSDGothicNeoT}) format("woff2");
    
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 200;
    src: local("AppleSDGothicNeoUL");
    src: url(${AppleSDGothicNeoUL}) format("woff2");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 300;
    src: local("AppleSDGothicNeoL");
    src: url(${AppleSDGothicNeoL}) format("woff2");
}
@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 400;
    src: local("AppleSDGothicNeoR");
    src: url(${AppleSDGothicNeoR}) format("woff2");
    font-style: normal;
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    src: local("AppleSDGothicNeoM");
    src: url(${AppleSDGothicNeoM}) format("woff2");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
    src: local("AppleSDGothicNeoSB");
    src: url(${AppleSDGothicNeoSB}) format("woff2");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 700;
    src: local("AppleSDGothicNeoB");
    src: url(${AppleSDGothicNeoB}) format("woff2");
    font-style: bold;
}
@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
    src: local("AppleSDGothicNeoEB");
    src: url(${AppleSDGothicNeoEB}) format("woff2");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 900;
    src: local("AppleSDGothicNeoH");
    src: url(${AppleSDGothicNeoH}) format("woff2");
}

    
`;