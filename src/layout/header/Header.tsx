import React from 'react';
import styled from "styled-components";
import {Logo} from '../../components/logo/Logo'
import {Menu} from "../../components/menu/Menu";
import {Main} from "../../layout/section/main/Main";
import {Skills} from "../../layout/section/skills/Skills";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";

const items = ['Home', 'Skills', 'Projects', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
          <Container>
            <FlexContainer justify={"space-between"} align={"center"}>
              <MainName>Mike Berasneu</MainName>
              <Menu menuItems={items}/>
            </FlexContainer>
          </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header
`
background-color: #181824;
  //display: flex;
  //justify-content: space-between;
`
const MainName = styled.h3`
  color: rgb(117, 98, 224);
`
