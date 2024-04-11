import React from 'react';
import styled from "styled-components";
import example_photo from '../../../assets/images/example_photo.png'
import {FlexContainer} from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"} >
      <StyledText>
        <Greetings>Hello, i’m</Greetings>
        <MainTitle>Frontend Developer</MainTitle>
        <span>Mike Berasneu</span>
      </StyledText>
      <Photo src={example_photo} alt=""/>
      </FlexContainer>
    </StyledMain>
  );
};
const StyledMain = styled.div`
  min-height: 100vh;
`
const StyledText = styled.div`
  color: #FFFFFF;
`
const Photo = styled.img`
  width: 444px;
  height: 444px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  color: #C778DD`

const Greetings = styled.h2`
  color: #FFFFFF;
`