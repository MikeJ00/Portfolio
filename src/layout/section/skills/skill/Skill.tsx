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
      <Icon iconId={props.iconId}  />
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
  width: 30%;
  border: 3px solid black;
  border-radius: 5%;
  margin: 5px;
`
const SkillTitle = styled.h3`
`
const SkillText = styled.p`
  color: white;
`