import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {font, theme} from "../../../styles";


const StyledProjects = styled.section`
  ${FlexContainer} {
    gap: 16px;
  }

  @media ${theme.media.mobile} {
    padding: 0 15px;
  }
`
const SectionTitle = styled.h2`
  ${font({weight: 600, Fmax: 32, Fmin: 24})};
  color: ${theme.colors.purple};
  margin-bottom: 16px;
  margin-top: 10px
`
const StyledText = styled.div`
  color: ${theme.colors.font};
  font-size: 18px;
  margin-bottom: 36px;
`
const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 20px;
  flex-grow: 1;
  min-height: 420px;
  border-radius: 8px;
  background: rgb(49, 49, 63);
  width: 320px;

`
const Image = styled.img`
  width: 100%;
  height: 172px;
  object-fit: cover;
  opacity: 50%;
  margin-bottom: 16px;
`
const TitleProject = styled.h3`
  color: rgb(117, 98, 224);
  font-size: large;

  background: rgb(49, 49, 63);
`
const StyledTextProject = styled.p`
  flex-grow: 1;

  color: white;
  background: rgb(49, 49, 63);
  margin: 5px 0 24px;
`
const ButtonsBlock = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`
const StyledButton = styled.a`
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  background: rgb(49, 49, 63);
  color: white;
  padding: 12px 25px 12px 25px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid rgb(117, 98, 224);

  &:hover {
    background: rgb(117, 98, 224);
  }
`
export const S = {
    StyledText,
    StyledProjects,
    SectionTitle,
    FlexContainer,
    TitleProject,
    StyledTextProject,
    StyledProject,
    StyledButton,
    Image,
    ButtonsBlock,

}