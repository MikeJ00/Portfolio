import React from 'react';
import {FlexContainer} from "components/FlexContainer";
import {Project} from "../projects/project/Project";
import socialNetwork from '../../../../src/assets/images/socialNetwork.jpg'
import todo from '../../../../src/assets/images/todolist.jpg'
import cards from '../../../../src/assets/images/cards.jpg'
import calc2 from '../../../../src/assets/images/calc2.jpg'
import {Container} from "components/Container";
import {S} from "layout/section/projects/Projects_Styles";

const workData = [
    {
        projectTitle: "Social Network",
        projectText: "Technology stack: React, TypeScript, Redux, Axios,React-Router-Dom.",
        src: socialNetwork,
        repoLink: 'https://github.com/MikeJ00/Social_Network',
        demoLink: ''
    }, {
        projectTitle: "Organizer",
        projectText: "Technology stack: Redux Toolkit, Axios, Redux-Thunk, " +
            "Material UI, Unit testing.",
        src: todo,
        repoLink: '',
        demoLink: ''
    }, {
        projectTitle: "Cards",
        projectText: "Technology stack: RTK Query, TypeScript, React hook form, Material UI.",
        src: cards,
        repoLink: '',
        demoLink: ''
    },
    // {
    //     projectTitle: "Counter with settings",
    //     projectText: "Technology stack: React, TypeScript, Redux.",
    //     src: calc2,
    // }, {
    //     projectTitle: "Game",
    //     projectText: "Technology stack: JS native",
    //     src: socialNetwork,
    // },{
    //     projectTitle: "Game",
    //     projectText: "Technology stack: JS native",
    //     src: socialNetwork,
    // },
]
export const Projects: React.FC = () => {
    return (
        <S.StyledProjects id={"projects"}>
            <Container>
                <S.SectionTitle>
                    Projects
                </S.SectionTitle>
                <S.StyledText>
      <span>I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects.</span>
                </S.StyledText>
                <FlexContainer justify={"space-between"} wrap={"wrap"}>
                    {workData.map((el, index) =>
                        <Project key={index}
                                 projectTitle={el.projectTitle}
                                 projectText={el.projectText}
                                 src={el.src}
                                 repoLink={el.repoLink}
                                 demoLink={el.demoLink}/>)}
                </FlexContainer>
            </Container>
        </S.StyledProjects>
    );
};