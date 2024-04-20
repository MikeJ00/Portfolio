import React from 'react';
import {S} from "../headerMenu/HeaderMenu_Styles";

type MenuType = {
  menuItems: Array<string>
}
export const HeaderMenu = (props: MenuType) => {
  return (
    <S.StyledHeaderMenu>
      <ul>
        {props.menuItems.map((el,index) => {
          return <S.ListItem key={index}>
            <S.Link href={""}>{el}</S.Link>
          </S.ListItem>
        })}
      </ul>
    </S.StyledHeaderMenu>
  );
};

