import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Project} from "../projects/project/Project";
import example_project from '../../../assets/images/example_project.svg'
import socialNetwork from '../../../../src/assets/images/socialNetwork.jpg'
import todo from '../../../../src/assets/images/todolist.jpg'
import cards from '../../../../src/assets/images/cards.jpg'
import {Container} from "../../../components/Container";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
      <SectionTitle>
        Projects
      </SectionTitle>
      <StyledText>
      <span>I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects</span>
      </StyledText>
      <FlexContainer justify={"space-between"} align={"flex-start"}>
        <Project projectTitle={"Social Network"}
                 projectText={"A live Geolocation app for finding tweets and twitter users around you."}
                 src={socialNetwork}/>
        <Project projectTitle={"Todolist"}
                 projectText={"A video streaming app with live Geolocation, " +
                   "or streaming evessssssxxxxxxxxxxsssssssssnts ssssssssssss." +
                   "ing evessssssxxxxxxxxxxsssssssssn" +
                   "ing evessssssxxxxxxxxxxsssssssssn" +
                   ""}
                 src={todo}/>
        <Project projectTitle={"Cards"}
                 projectText={"A video streaming app with live Geolocation"}
                 src={cards}/>
      </FlexContainer>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  //min-height: 100vh;
  //background-color: #1A1A29;
`
export const SectionTitle = styled.h2`
  color: #C778DD;
  //text-align: center;
  margin-bottom: 16px;
`
const StyledText = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  margin-bottom: 36px;
`