import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Project} from "../projects/project/Project";
import example_project from '../../../assets/images/example_project.svg'
import socialNetwork from '../../../../src/assets/images/socialNetwork.jpg'
import todo from '../../../../src/assets/images/todolist.jpg'
import cards from '../../../../src/assets/images/cards.jpg'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>
        Projects
      </SectionTitle>
      <StyledText>
      <span>I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects</span>
      </StyledText>
      <FlexContainer justify={"space-around"}>
        <Project projectTitle={"Social Network"}
                 projectText={"A live Geolocation app for finding tweets and twitter users around you."}
                 src={socialNetwork}/>
        <Project projectTitle={"Todolist"}
                 projectText={"A video streaming app with live Geolocation, for streaming events."}
                 src={todo}/>
        <Project projectTitle={"Cards"}
                 projectText={"A video streaming app with live Geolocation, for streaming events."}
                 src={cards}/>
      </FlexContainer>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #1A1A29;
`
export const SectionTitle = styled.h2`
  color: #C778DD;
  text-align: center;
`
const StyledText = styled.div`
  color: #FFFFFF;
  font-size: large;
`