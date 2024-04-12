import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer";

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
  padding: 0px 22px 0px;
  border: 3px solid black;
  border-radius: 5%;
  margin: 5px;
  img {
    margin: 60px 0 0 0;
    height: 50px;
  }
`
const SkillTitle = styled.h3`
  margin: 8px 0 0;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`
const SkillText = styled.p`
  margin: 16px 0 0;
  color: white;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`