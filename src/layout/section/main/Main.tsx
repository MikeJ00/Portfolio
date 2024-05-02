import React from 'react';
import mainPhoto from '../../../assets/images/shortTop.png'
import {FlexContainer} from "components/FlexContainer";
import {Container} from "components/Container";
import {S} from "../main/Main_Styles";
import Typewriter from 'typewriter-effect';
import MediaQuery, {useMediaQuery} from 'react-responsive'

export const Main: React.FC = () => {


    return (
        <S.StyledMain id={"home"}>
            <Container>
                <FlexContainer align={"center"} justify={"space-between"}>
                    <div>
                        <S.Greetings>Hello, I’m</S.Greetings>
                        {/*<S.MainTitle>Frontend Developer</S.MainTitle>*/}
                        <S.MainTitle>
                            <MediaQuery minWidth={0} maxWidth={768}>
                                {/*<p>Frontend Developer</p>*/}
                                <h1>Frontend Developer</h1>
                            </MediaQuery>
                            <MediaQuery minWidth={768}>
                                <Typewriter
                                    options={{
                                        strings: ['Frontend Developer'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 250,
                                        delay: 300,
                                    }}
                                />
                            </MediaQuery>
                        </S.MainTitle>
                        <S.Name>Mikhail Berasneu</S.Name>
                    </div>
                    <S.Photo src={mainPhoto} alt=""/>
                </FlexContainer>
            </Container>
        </S.StyledMain>
    );
};
