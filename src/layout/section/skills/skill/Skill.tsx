import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId:string
  skillTitle:string
  description:string
}
export const Skill = (props:SkillPropsType) => {
  return (
    <StyledSkill>
      <img src={props.iconId}/>
      {/*<Icon iconId={props.iconId}  />*/}
      <SkillTitle>
        {props.skillTitle}
        <SkillText>
          {props.description}
        </SkillText>
      </SkillTitle>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  width: 342px;
  height: 338px;
  padding: 0px 22px 0px;
  border: 3px solid black;
  border-radius: 5%;
  margin: 5px;
  img {
    height: 50px;
  }
`
const SkillTitle = styled.h3`
  color: white;
`
const SkillText = styled.p`
  color: white;
`