import React from 'react';
import {S} from "../mobileVersion/mobileVersion_Styles";
import {Icon} from "components/icon/Icon";

export const ExampleComp = () => {
    return (
        <>
            <S.SocialItem>
                <S.NavLink activeClass={"active"}
                           to={"home"}
                           smooth={true}
                           spy={true}
                           offset={0}
                    // href={`#${"home"}`}
                >
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileHome"}/>
                </S.NavLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.NavLink
                    activeClass={"active"}
                    to={"skills"}
                    smooth={true}
                    spy={true}
                    offset={8}
                    // href={`#${"skills"}`}
                >
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileSkills"}/>
                </S.NavLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.NavLink
                    activeClass={"active"}
                    to={"projects"}
                    smooth={true}
                    spy={true}
                    offset={8}
                    // href={`#${"projects"}`}
                >
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"portfolio"}/>
                </S.NavLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.NavLink
                    activeClass={"active"}
                    to={"contacts"}
                    smooth={true}
                    spy={true}
                    offset={8}
                    // href={`#${"contacts"}`}
                >
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"contacts"}/>
                </S.NavLink>
            </S.SocialItem>
        </>
    );
};