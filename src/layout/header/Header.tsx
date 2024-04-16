import React from 'react';
import styled from "styled-components";
import {Skills} from "../../layout/section/skills/Skills";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {HeaderMenu} from "../../../src/layout/header/headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";

const items = ['Home', 'Skills', 'Projects', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
          <Container>
            <FlexContainer justify={"space-between"} align={"center"}>
              <MainName>Mike Berasneu</MainName>
              <HeaderMenu menuItems={items}/>
            </FlexContainer>
          </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header
`
background-color: #181824;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  //display: flex;
  //justify-content: space-between;
  @media ${theme.media.mobile} {
    padding: 0 15px 0 15px;
  }
`
const MainName = styled.h3`
  color: rgb(117, 98, 224);
`
