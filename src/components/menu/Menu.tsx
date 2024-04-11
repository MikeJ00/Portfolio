import React from 'react';
import styled from "styled-components";

type MenuType = {
  menuItems: Array<string>
}
export const Menu = (props: MenuType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((el,index) => {
          return <li key={index}>
            <a href={""}>{el}</a>
          </li>
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  //margin-right: 160px;
  //font-weight: bolder;
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
  }
  a{
    color: white;
    text-decoration: none;
  }
`

