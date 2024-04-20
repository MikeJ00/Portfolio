import React from 'react';
import {Container} from "../../../components/Container";
// import {Container} from "components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "../mobileVersion/mobileVersion_Styles";
import {ExampleComp} from "../mobileVersion/ExampleComp";

export const MobileVersion: React.FC = () => {
    return (
        <S.StyledHeaderMenu>
            <Container>
                <FlexContainer direction={"column"} justify={"space-around"} align={"center"}>
                    <S.SocialListMobile>
                        <ExampleComp/>
                    </S.SocialListMobile>
                </FlexContainer>
            </Container>
        </S.StyledHeaderMenu>
    );
};
