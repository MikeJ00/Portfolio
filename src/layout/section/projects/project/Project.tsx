import React from 'react';
import {S} from "../../projects/Projects_Styles";

type ProjectType = {
    projectTitle: string
    projectText: string
    src: string
}
export const Project = (props: ProjectType) => {
    return (
        <S.StyledProject>
            <S.Image src={props.src} alt=""/>
            <S.TitleProject>
                {props.projectTitle}
            </S.TitleProject>
            <S.StyledText>
                {props.projectText}
            </S.StyledText>
            <S.ButtonsBlock>
                <S.StyledButton href={"#"}>View Live</S.StyledButton>
                <S.StyledButton href={"#"}>Github Repo</S.StyledButton>
            </S.ButtonsBlock>
        </S.StyledProject>
    );
};

