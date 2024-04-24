import React from 'react';
import {S} from "../mobileVersion/mobileVersion_Styles";
import {Icon} from "../../../components/icon/Icon";

export const ExampleComp = () => {
    return (
        <>
            <S.SocialItem>
                <S.Link href={`#${"home"}`}>
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileHome"}/>
                </S.Link>
            </S.SocialItem>
            <S.SocialItem>
                <S.Link href={`#${"skills"}`}>
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileSkills"}/>
                </S.Link>
            </S.SocialItem>
            <S.SocialItem>
                <S.Link href={`#${"projects"}`}>
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"portfolio"}/>
                </S.Link>
            </S.SocialItem>
            <S.SocialItem>
                <S.Link href={`#${"contacts"}`}>
                    <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"contacts"}/>
                </S.Link>
            </S.SocialItem>
        </>
    );
};