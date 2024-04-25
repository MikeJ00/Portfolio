import styled, {css} from "styled-components";
import {font, theme} from "styles";
import {Fade} from "react-awesome-reveal";

type StyledSkillType = {isOdd?:boolean}

const StyledSkills = styled.section`
  background-color: ${theme.colors.secondaryBg};
  @media ${theme.media.mobile} {
    //padding: 0 15px 0 15px;
  }
`
const SectionTitle = styled.h2`
  ${font({weight: 600, Fmax: 32, Fmin: 24})};
  color: ${theme.colors.purple};
  margin-bottom: 16px;
`
const SkillTitle = styled.h3`
  margin: 8px 0 0;
  color: ${theme.colors.font};
  text-align: center;
  // &:nth-child(even) {
  //   color: ${theme.colors.accent};
  // }
`
const StyledSkill = styled(Fade)<StyledSkillType>`
  
width: 342px;
height: 338px;
padding: 0 22px 0;
border: 3px solid ${theme.colors.font};
border-radius: 16px;
margin: 5px;
flex-grow: 1;
  ${props => props.isOdd && css<StyledSkillType>`
     border-color: ${theme.colors.accent};`
  }${props => !props.isOdd  && css<StyledSkillType>`
    ${SkillTitle}{ color: ${theme.colors.accent};}`
  }
// &:nth-child(odd) {
//   //border-color: ${theme.colors.accent};
// }
// &:nth-child(even) {
//   // ${SkillTitle}{ color: ${theme.colors.accent};}
// }
img {
  margin: 60px 0 0 0;
  height: 50px;
  opacity: 0.8;
}
`

const SkillText = styled.p`
  margin: 16px 0 0;
  color: ${theme.colors.font};
  text-align: center;
`
export const S = {
    SectionTitle,
    StyledSkills,
    StyledSkill,
    SkillTitle,
    SkillText,
}