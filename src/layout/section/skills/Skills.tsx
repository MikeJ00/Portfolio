import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../layout/section/skills/skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexContainer wrap={"wrap"} justify={"space-between"}>
        <Skill iconId={"html_logo"}
               skillTitle={"Html"}
               description={"I design beautiful web iterfaces with Figma and Adove XD"}/>
        <Skill iconId={"code"}
               skillTitle={"JS"}
               description={"I create beautiful iterfaces with simple HTML, " +
                 "CSS, & JavaScript and also frameworks like Angular and ReactJS"}/>
        <Skill iconId={"react_logo"}
               skillTitle={"React"}
               description={"I am an expert mobile developer. I have experience using Flutter and React Native."}/>
        <Skill iconId={"html_logo"}
               skillTitle={"Html"}
               description={"I design beautiful web iterfaces with Figma and Adove XD"}/>
        <Skill iconId={"code"}
               skillTitle={"JS"}
               description={"I create beautiful iterfaces with simple HTML, " +
                 "CSS, & JavaScript and also frameworks like Angular and ReactJS"}/>
        <Skill iconId={"react_logo"}
               skillTitle={"React"}
               description={"I am an expert mobile developer. I have experience using Flutter and React Native."}/>
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #181824;
  min-height: 100vh;
`