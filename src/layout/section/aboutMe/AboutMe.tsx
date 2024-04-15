import React from "react";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import styled from "styled-components";

export const AboutMe = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <FlexContainer wrap={"wrap"} justify={"space-between"}>
          {/*<Skill*/}
          {/*  iconId={react}*/}
          {/*  skillTitle={"React"}*/}
          {/*  description={"I design beautiful web iterfaces with Figma and Adove XD " +*/}
          {/*    "Under question"}/>*/}
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
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #181824;
`
export const SectionTitle = styled.h2`
  color:#C778DD;
  //text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
`
const Photo = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
`