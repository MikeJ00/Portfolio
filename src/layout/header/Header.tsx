import React from 'react';
import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import {HeaderDesktop} from "../header/headerDesktop/HeaderDesktop";
import {S} from "../header/Header_Styles";


export const Header:React.FC = () => {
    return (
        <S.StyledHeader >
          <Container>
            <FlexContainer justify={"space-between"} align={"center"}>
              <S.MainName>MikeJ0</S.MainName>
              <HeaderDesktop/>
            </FlexContainer>
          </Container>
        </S.StyledHeader>
    );
};


