import React, {useState} from 'react';
import {FlexContainer} from "components/FlexContainer";
import {Skill} from "layout/section/skills/skill/Skill";
import react from "../../../assets/images/react.svg"
import redux from "../../../assets/images/redux.svg"
import typescript from "../../../assets/images/TS_icon.svg"
import javascript from "../../../assets/images/javascript.svg"
import storybook from "../../../assets/images/storybook.svg"
import git from "../../../assets/images/git.svg"
import mui from "../../../assets/images/mui.svg"
import jest from "../../../assets/images/jest.svg"
import axios from "../../../assets/images/axios.svg"
import {Container} from "components/Container";
import {S} from "../skills/Skills_Styles";
// import {Fade} from "react-awesome-reveal";
import styled from "styled-components";
import {theme} from "styles";
import MediaQuery from "react-responsive";

const SkillData = [
    {
        iconId: react,
        skillTitle: "React",
        description: "FLUX Cycle, Hooks, Thunks." +
            "Understanding the component life cycle and asynchronous queries"
    },
    {
        iconId: redux,
        skillTitle: "Redux",
        description: "Using Redux as state management library " +
            "and centralizing application state."
    },
    {
        iconId: typescript,
        skillTitle: "Typescript",
        description: "Understanding TypeScript helps me avoid development mistakes. " +
            "My best friend in big apps."
    },
    {
        iconId: javascript,
        skillTitle: "Javascript",
        description: "Knowledge of OOP principles, data types and promises."
    },
    {
        iconId: storybook,
        skillTitle: "Storybook",
        description: "Tool allows me and my team to view the interface " +
            "during the development process in isolation."
        // "Tool for building UI components and pages in isolation."
    },
    {
        iconId: git,
        skillTitle: "Git",
        description: "Ability to use a hosting platform for version control and team collaboration."
    },
    {
        iconId: mui,
        skillTitle: "Material UI",
        description: "Library that allows import and use different components to create a user interface."
    },
    {
        iconId: axios,
        skillTitle: "Axios",
        description: "Used a promise-based library to make asynchronous HTTP requests."
    },
    {
        iconId: jest,
        skillTitle: "Jest",
        description: "JavaScript library for creating and running tests. " +
            "Adds confidence that the code will work."
    },


]
export const Skills: React.FC = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
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
                {/*<FlexContainer wrap={"wrap"} justify={"space-between"}>*/}
                <GridContainer>
                    <MediaQuery minWidth={0} maxWidth={786}>
                        {skills}
                    </MediaQuery>
                    <MediaQuery minWidth={786}>
                        {/*<Fade cascade={true} triggerOnce={true} damping={0.3}>*/}
                            {skills}
                        {/*</Fade>*/}
                    </MediaQuery>
                    {/*{isDesktop*/}
                    {/*    ? <Fade cascade={true} triggerOnce={true} damping={0.3}>*/}
                    {/*        {skills}*/}
                    {/*    </Fade>*/}
                    {/*    : skills*/}
                    {/*}*/}

                    {/*<Fade cascade={true}*/}
                    {/*      triggerOnce={true}*/}
                    {/*      // direction={isDesktop ? undefined : undefined}*/}
                    {/*    damping={0.3}>*/}

                    {/*</Fade>*/}
                </GridContainer>
                {/*</FlexContainer>*/}
            </Container>
        </S.StyledSkills>
    );
};
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(340px, auto);
  gap: 15px;
  @media ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

