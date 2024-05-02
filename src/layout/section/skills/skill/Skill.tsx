import React, {useState} from 'react';
import {FlexContainer} from "components/FlexContainer";
import {S} from "../../skills/Skills_Styles";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import {Fade} from "react-awesome-reveal";

type SkillPropsType = {
    iconId: string
    skillTitle: string
    description: string
    isOdd?: boolean
}
export const Skill = (props: SkillPropsType) => {
    const content = (
        <FlexContainer direction={"column"} align={"center"}>
            <img src={props.iconId}/>
            <S.SkillTitle>
                {props.skillTitle}
                <S.SkillText>
                    {props.description}
                </S.SkillText>
            </S.SkillTitle>
        </FlexContainer>
    )

    return (
        <>
            <MediaQuery minWidth={0} maxWidth={786}>
                <S.StyledSkillMobile isOdd={props.isOdd}>
                    {content}
                </S.StyledSkillMobile>
            </MediaQuery>
            <MediaQuery minWidth={786}>
                <S.StyledSkillFade isOdd={props.isOdd}>
                    {content}
                </S.StyledSkillFade>
            </MediaQuery>
        </>
    );
};
