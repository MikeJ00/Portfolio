import React from 'react';
import {S} from "../../projects/Projects_Styles";

type ProjectType = {
    projectTitle: string
    projectText: string
    src: string
    repoLink:string
    demoLink:string
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
                <S.StyledButton href={props.demoLink} target={'_blank'}>View Live</S.StyledButton>
                <S.StyledButton href={props.repoLink} target={'_blank'}>Github Repo</S.StyledButton>
            </S.ButtonsBlock>
        </S.StyledProject>
    );
};

