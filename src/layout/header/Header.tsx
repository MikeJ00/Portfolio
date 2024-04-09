import React from 'react';
import styled from "styled-components";
import {Logo} from '../../components/logo/Logo'
import {Menu} from "../../components/menu/Menu";
import {Main} from "../../layout/section/main/Main";
import {Skills} from "../../layout/section/skills/Skills";

const items = ['Home', 'Skills', 'Projects', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
          <MainName>Mike Berasneu</MainName>
           <Menu menuItems={items}/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header
`
background-color: #181824;
  display: flex;
  justify-content: space-between;
`
const MainName = styled.h3`
  color: rgb(117, 98, 224);
  padding: 0 0 0 70px;
`
