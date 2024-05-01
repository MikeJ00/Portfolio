import styled from "styled-components";
import {font, theme} from "styles";

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    width: 486px;
    height: 486px;
    background-color: ${theme.colors.accent};
    clip-path: ellipse(closest-side farthest-side);
    position: absolute;
    top:78px;
    z-index: -1;
  }
`

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  @media ${theme.media.mobile} {
    //padding: 0 15px 0 15px;
    min-height: 80vh;
  }
`
const StyledText = styled.div`
  color: ${theme.colors.font};
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
  ${font({family: "Poppins", weight: 600, Fmax: 52, Fmin: 36})};
  //font-size: clamp(36px,calc( (100vw - 360px)/(1360 - 360) * (52 - 36 ) + 36px),52px);
  color: ${theme.colors.purple};
  //line-height: 78px;
  text-align: left;
  
  p {
    display: none;
  }
  // @media ${theme.media.mobile} {
  //   line-height: normal;
  // }
`

const Greetings = styled.h2`
  ${font({family:"Poppins", weight:600, Fmax:32, Fmin:20})};
  color: ${theme.colors.font};
  line-height: 48px;
  text-align: left;
`
const Name = styled.h2`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;`
export const S = {
    Name,
    Greetings,
    MainTitle,
    Photo,
    PhotoWrapper,
    StyledMain,
    StyledText
}