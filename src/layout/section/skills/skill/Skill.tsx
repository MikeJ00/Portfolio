import React from 'react';
import {FlexContainer} from "components/FlexContainer";
import {S} from "../../skills/Skills_Styles";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string
    isOdd?: boolean
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill isOdd={props.isOdd} >
            <FlexContainer direction={"column"} align={"center"}>
                <img src={props.iconId}/>
                <S.SkillTitle>
                    {props.skillTitle}
                    <S.SkillText>
                        {props.description}
                    </S.SkillText>
                </S.SkillTitle>
            </FlexContainer>
        </S.StyledSkill>
    );
};
