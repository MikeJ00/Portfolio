import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../src/styles/Theme";

type MenuType = {
  menuItems: Array<string>
}
export const HeaderMenu = (props: MenuType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((el,index) => {
          return <ListItem key={index}>
            <Link href={""}>{el}</Link>
          </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  //margin-right: 160px;
  //font-weight: bolder;
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
  }
`
const ListItem = styled.li`

`
const Link = styled.a`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  &:hover{
    color: ${theme.colors.accent};
  }
`
