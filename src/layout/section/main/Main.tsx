import React from 'react';
import mainPhoto from '../../../assets/images/shortTop.png'
import {FlexContainer} from "components/FlexContainer";
import {Container} from "components/Container";
import {S} from "../main/Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id={"home"}>
            <Container>
                <FlexContainer align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.Greetings>Hello, I’m</S.Greetings>
                        {/*<S.MainTitle>Frontend Developer</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>Frontend Developer</p>
                            <Typewriter
                            options={{
                                strings: ['Frontend Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed:250,
                                delay:300,
                            }}
                        /></S.MainTitle>
                        <S.Name>Mikhail Berasneu</S.Name>
                    </div>
                    {/*<PhotoWrapper>*/}
                    <S.Photo src={mainPhoto} alt=""/>
                    {/*</PhotoWrapper>*/}
                </FlexContainer>
            </Container>
        </S.StyledMain>
    );
};
