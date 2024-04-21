import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const StyledSkills = styled.section`
  background-color: ${theme.colors.secondaryBg};
  @media ${theme.media.mobile} {
    padding: 0 15px 0 15px;
  }
`
const SectionTitle = styled.h2`
  ${font({weight: 600, Fmax: 32, Fmin: 24})};
  color: ${theme.colors.purple};
  margin-bottom: 16px;
`
const Photo = styled.img`
  width: 75px;
  height: 75px;
  object-fit: cover;
`
const StyledSkill = styled.div`
  width: 342px;
  height: 338px;
  padding: 0 22px 0;
  border: 3px solid ${theme.colors.font};
  border-radius: 5%;
  margin: 5px;
  flex-grow: 1;
  &:nth-child(odd) {
    border-color: ${theme.colors.accent};
  }
  img {
    margin: 60px 0 0 0;
    height: 50px;
  }
`
const SkillTitle = styled.h3`
  margin: 8px 0 0;
  color: ${theme.colors.font};
  text-align: center;
  // &:nth-child(even) {
  //   color: ${theme.colors.accent};
  // }
`
const SkillText = styled.p`
  margin: 16px 0 0;
  color: ${theme.colors.font};
  text-align: center;
`
export const S = {
    Photo,
    SectionTitle,
    StyledSkills,
    StyledSkill,
    SkillTitle,
    SkillText
}