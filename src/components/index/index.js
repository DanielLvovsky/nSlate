import React from "react";

import FullScreenGlitch from "../fullScreenGlitch/index";

import * as S from "./styled";

export default () => (
  <>
    <S.EmblaReact>
      <S.EmblaReactContainer>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="Welcome to nSlate!"
            text="Click here to log in or swipe left for more information"
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="What's inside"
            text="nSlate is made with React.js, HTML and SCSS along with Firebase for the backend. You can also download this app by clicking on the plus sign in the URL."
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
        <S.EmblaReactSlide>
          <FullScreenGlitch
            glitchText="Refrences"
            text="This app was inspired from the Github page below. I primarily wanted to further improve my skills with React.js and learn some backend."
            linkTo="dashboard"
          />
        </S.EmblaReactSlide>
      </S.EmblaReactContainer>
    </S.EmblaReact>

    <S.FooterContainer>
      <S.FooterLink
        href="https://github.com/DanielLvovsky"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </S.FooterLink>
      <S.FooterLink
        href="https://daniellvovsky.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        Developer's Website
      </S.FooterLink>
      <S.FooterLink
        href="https://github.com/jrgarciadev/nextjs-todo-list"
        target="_blank"
        rel="noreferrer noopener"
      >
        Refrence
      </S.FooterLink>
    </S.FooterContainer>
  </>
);
