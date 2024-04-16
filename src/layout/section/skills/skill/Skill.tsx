import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
  iconId:string
  skillTitle:string
  description:string
}
export const Skill = (props:SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexContainer direction={"column"} align={"center"}>
      <img src={props.iconId}/>
      {/*<Icon iconId={props.iconId}  />*/}
      <SkillTitle>
        {props.skillTitle}
        <SkillText>
          {props.description}
        </SkillText>
      </SkillTitle>
      </FlexContainer>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 342px;
  height: 338px;
  padding: 0 22px 0;
  border: 3px solid black;
  border-radius: 5%;
  margin: 5px;
  flex-grow: 1;
  img {
    margin: 60px 0 0 0;
    height: 50px;
  }
  // @media ${theme.media.mobile}{
  //   padding: 0;
  // }
`
const SkillTitle = styled.h3`
  margin: 8px 0 0;
  color: white;
  text-align: center;
  
`
const SkillText = styled.p`
  margin: 16px 0 0;
  color: white;
  text-align: center;
  
`