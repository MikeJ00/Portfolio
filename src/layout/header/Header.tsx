import React from 'react';
import styled from "styled-components";
import {Logo} from '../../components/logo/Logo'
import {Menu} from "../../components/menu/Menu";
import {Main} from "../../layout/section/main/Main";
import {Skills} from "../../layout/section/skills/Skills";

export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
           <Menu/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header
`
background-color: #181824;
  display: flex;
  justify-content: space-between;
`
