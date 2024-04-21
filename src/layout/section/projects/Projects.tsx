import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {Project} from "../projects/project/Project";
import socialNetwork from '../../../../src/assets/images/socialNetwork.jpg'
import todo from '../../../../src/assets/images/todolist.jpg'
import cards from '../../../../src/assets/images/cards.jpg'
import {Container} from "../../../components/Container";
import {S} from "../../..//layout/section/projects/Projects_Styles";

const workData = [
    {
        projectTitle: "Social Network",
        projectText: "A live Geolocation app for finding tweets and twitter users around you.",
        src: socialNetwork,
    }, {
        projectTitle: "Todolist",
        projectText: "A live Geolocation app for finding tweets and twitter users around you.",
        src: todo,
    }, {
        projectTitle: "Cards",
        projectText: "A live Geolocation app for finding tweets and twitter users around you.",
        src: cards,
    }, {
        projectTitle: "Future Project",
        projectText: "A live Geolocation app for finding tweets and twitter users around you.",
        src: socialNetwork,
    }, {
        projectTitle: "Future Project",
        projectText: "A live Geolocation app for finding tweets and twitter users around you.",
        src: socialNetwork,
    },
]
export const Projects: React.FC = () => {
    return (
        <S.StyledProjects>
            <Container>
                <S.SectionTitle>
                    Projects
                </S.SectionTitle>
                <S.StyledText>
      <span>I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects</span>
                </S.StyledText>
                <FlexContainer justify={"space-between"} wrap={"wrap"}>
                    {workData.map((el, index) =>
                        <Project key={index}
                                 projectTitle={el.projectTitle}
                                 projectText={el.projectText}
                                 src={el.src}/>)}
                </FlexContainer>
            </Container>
        </S.StyledProjects>
    );
};