import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../layout/section/skills/skill/Skill";
import react from "../../../assets/images/react.png"
import redux from "../../../assets/images/redux.png"
import typescript from "../../../assets/images/TS_icon.svg"
import javascript from "../../../assets/images/javascript.png"
import storybook from "../../../assets/images/storybook.svg"
import git from "../../../assets/images/git.svg"

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexContainer wrap={"wrap"} justify={"space-between"}>
        <Skill
          iconId={react}
          skillTitle={"React"}
          description={"I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"}/>
        {/*<Skill iconId={redux}*/}
        {/*       skillTitle={"Redux"}*/}
        {/*       description={"I create beautiful iterfaces with simple HTML, " +*/}
        {/*         "CSS, & JavaScript and also frameworks like Angular and ReactJS " +*/}
        {/*         "Under question"}/>*/}
        {/*<Skill iconId={typescript}*/}
        {/*       skillTitle={"Typescript"}*/}
        {/*       description={"I am an expert mobile developer. I have experience using Flutter and React Native." +*/}
        {/*         "Under question"}/>*/}
        {/*<Skill iconId={javascript}*/}
        {/*       skillTitle={"Javascript"}*/}
        {/*       description={"I design beautiful web iterfaces with Figma and Adove XD" +*/}
        {/*         " Under question"}/>*/}
        {/*<Skill iconId={storybook}*/}
        {/*       skillTitle={"Storybook"}*/}
        {/*       description={"I create beautiful iterfaces with simple HTML, " +*/}
        {/*         "CSS, & JavaScript and also frameworks like Angular and ReactJS" +*/}
        {/*         " Under question"}/>*/}
        {/*<Skill iconId={git}*/}
        {/*       skillTitle={"Git"}*/}
        {/*       description={"I am an expert mobile developer. I have experience using Flutter and React Native." +*/}
        {/*         " Under question"}/>*/}
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #181824;
  min-height: 100vh;
`
const Photo = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
`