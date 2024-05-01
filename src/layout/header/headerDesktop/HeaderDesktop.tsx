import React from 'react';
import {S} from "../headerDesktop/HeaderDesktop_Styles";

// const items = ['Home', 'Skills', 'Projects', 'Contacts']
const items = [
    {
        title: "Home",
        href: "home",
        offset:0
    },
    {
        title: "Skills",
        href: "skills",
        offset:6
    },
    {
        title: "Projects",
        href: "projects",
        offset:6
    },
    {
        title: "Contacts",
        href: "contacts",
        // offset:-250
        offset:0
    }]
export const HeaderDesktop = () => {
    return (
        <S.StyledHeaderMenu>
            <ul>
                {items.map((el, index) => {
                    return <S.ListItem key={index}>
                        <S.NavLink activeClass={"active"}
                                   to={el.href}
                                   smooth={true}
                                   spy={true}
                                   offset={el.offset}
                        >{el.title}</S.NavLink>
                    </S.ListItem>
                })}
            </ul>
        </S.StyledHeaderMenu>
    );
};

