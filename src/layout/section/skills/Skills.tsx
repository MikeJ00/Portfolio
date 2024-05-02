import React from 'react';
import {Skill} from "layout/section/skills/skill/Skill";
import {Container} from "components/Container";
import {S} from "../skills/Skills_Styles";

const SkillData = [
    {
        iconId: "react",
        skillTitle: "React",
        description: "FLUX Cycle, Hooks, Thunks." +
            "Understanding the component life cycle and asynchronous queries"
    },
    {
        iconId: "redux",
        skillTitle: "Redux",
        description: "Using Redux as state management library " +
            "and centralizing application state."
    },
    {
        iconId: "typescript",
        skillTitle: "Typescript",
        description: "Understanding TypeScript helps me avoid development mistakes. " +
            "My best friend in big apps."
    },
    {
        iconId: "javascript",
        skillTitle: "Javascript",
        description: "Knowledge of OOP principles, data types and promises."
    },
    {
        iconId: "storybook",
        skillTitle: "Storybook",
        description: "Tool allows me and my team to view the interface " +
            "during the development process in isolation."
        // "Tool for building UI components and pages in isolation."
    },
    {
        iconId: "git",
        skillTitle: "Git",
        description: "Ability to use a hosting platform for version control and team collaboration."
    },
    {
        iconId: "mui",
        skillTitle: "Material UI",
        description: "Library that allows import and use different components to create a user interface."
    },
    {
        iconId: "axios",
        skillTitle: "Axios",
        description: "Used a promise-based library to make asynchronous HTTP requests."
    },
    {
        iconId: "jest",
        skillTitle: "Jest",
        description: "JavaScript library for creating and running tests. " +
            "Adds confidence that the code will work."
    },


]
export const Skills: React.FC = () => {
    const skills = SkillData.map((el, index) => {
        return <Skill key={index}
                      iconId={el.iconId}
                      skillTitle={el.skillTitle}
                      description={el.description}
            // isOdd={index % 2 === 0 ? "1" : "0"}
                      isOdd={index % 2 === 0}
        />
    })
    return (
        <S.StyledSkills id={"skills"}>
            <Container>
                <S.SectionTitle>Skills</S.SectionTitle>
                <S.GridContainer>
                        {skills}
                </S.GridContainer>
            </Container>
        </S.StyledSkills>
    );
};


