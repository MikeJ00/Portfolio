import React from 'react';
import mainPhoto from '../../../assets/images/shortTop.png'
import {FlexContainer} from "../../../components/FlexContainer";
import {Container} from "../../../components/Container";
import {S} from "../main/Main_Styles";

export const Main = () => {
  return (
    <S.StyledMain>
      <Container>
      <FlexContainer align={"center"} justify={"space-between"} wrap={"wrap"} >
      <div>
        <S.Greetings>Hello, i’m</S.Greetings>
        <S.MainTitle>Frontend Developer</S.MainTitle>
        <S.Name>Mike Berasneu</S.Name>
      </div>
        {/*<PhotoWrapper>*/}
      <S.Photo src={mainPhoto} alt=""/>
        {/*</PhotoWrapper>*/}
      </FlexContainer>
      </Container>
    </S.StyledMain>
  );
};
