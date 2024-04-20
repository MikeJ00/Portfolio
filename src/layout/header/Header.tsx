import React from 'react';
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {HeaderMenu} from "../../../src/layout/header/headerMenu/HeaderMenu";
import {S} from "../header/Header_Styles";

const items = ['Home', 'Skills', 'Projects', 'Contacts']
export const Header:React.FC = () => {
    return (
        <S.StyledHeader>
          <Container>
            <FlexContainer justify={"space-between"} align={"center"}>
              <S.MainName>Mike Berasneu</S.MainName>
              <HeaderMenu menuItems={items}/>
            </FlexContainer>
          </Container>
        </S.StyledHeader>
    );
};


