import React from 'react';
import styled from "styled-components";
import mainPhoto from '../../../assets/images/shortTop.png'
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
      <FlexContainer align={"center"} justify={"space-between"} wrap={"wrap"} >
      <div>
        <Greetings>Hello, i’m</Greetings>
        <MainTitle>Frontend Developer</MainTitle>
        <Name>Mike Berasneu</Name>
      </div>
        {/*<PhotoWrapper>*/}
      <Photo src={mainPhoto} alt=""/>
        {/*</PhotoWrapper>*/}
      </FlexContainer>
      </Container>
    </StyledMain>
  );
};
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 486px;
    height: 486px;
    background-color: rgb(117, 98, 224);
    clip-path: ellipse(closest-side farthest-side);
    position: absolute;
    top:78px;
    z-index: -1;
    
  }

  //clip-path: ellipse(closest-side farthest-side);
  //background-color: rgb(117, 98, 224);
`

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  @media ${theme.media.mobile} {
    padding: 0 15px 0 15px;
  }
`
const StyledText = styled.div`
  color: #FFFFFF;
`
const Photo = styled.img`
  width: 444px;
  height: 444px;
  object-fit: cover;
  border-radius: 150px;
  @media ${theme.media.mobile}{
    width: 310px;
    height: 380px;
    border-radius:100px;
  }
`
const MainTitle = styled.h1`
  ${font({family:"Poppins", weight:600, Fmax:52, Fmin:36})};
  color: rgb(199, 120, 221);
  //font-size: 52px;
  //font-weight: 600;
  line-height: 78px;
  text-align: left;`

const Greetings = styled.h2`
  ${font({family:"Poppins", weight:600, Fmax:32, Fmin:20})};
  color: rgb(255, 255, 255);
  //font-size: 32px;
  //font-weight: 600;
  line-height: 48px;
  text-align: left;
`
const Name = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;`