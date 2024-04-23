import React from 'react';
import {S} from "../headerDesktop/HeaderDesktop_Styles";

// const items = ['Home', 'Skills', 'Projects', 'Contacts']
const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "Skills",
        href: "skills",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contacts",
        href: "contacts",
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
                                   // spy={true}
                            // href={`#${el.href}`}
                        >{el.title}</S.NavLink>
                    </S.ListItem>
                })}
            </ul>
        </S.StyledHeaderMenu>
    );
};

