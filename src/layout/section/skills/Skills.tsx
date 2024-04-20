import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {Skill} from "../../../layout/section/skills/skill/Skill";
import react from "../../../assets/images/react.svg"
import redux from "../../../assets/images/redux.svg"
import typescript from "../../../assets/images/TS_icon.svg"
import javascript from "../../../assets/images/javascript.svg"
import storybook from "../../../assets/images/storybook.svg"
import git from "../../../assets/images/git.svg"
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles";

const SkillData = [
    {
        iconId: react,
        skillTitle: "React",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },
    {
        iconId: redux,
        skillTitle: "Redux",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },
    {
        iconId: typescript,
        skillTitle: "Typescript",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },
    {
        iconId: javascript,
        skillTitle: "Javascript",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },
    {
        iconId: storybook,
        skillTitle: "Storybook",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },
    {
        iconId: git,
        skillTitle: "Git",
        description: "I design beautiful web iterfaces with Figma and Adove XD " +
            "Under question"
    },

]
export const Skills = () => {
    return (
        <S.StyledSkills>
            <Container>
                <S.SectionTitle>Skills</S.SectionTitle>
                <FlexContainer wrap={"wrap"} justify={"space-between"}>
                    {SkillData.map((el, index) => {
                        return <Skill key={index}
                                      iconId={el.iconId}
                                      skillTitle={el.skillTitle}
                                      description={el.description}/>
                    })}
                </FlexContainer>
            </Container>
        </S.StyledSkills>
    );
};