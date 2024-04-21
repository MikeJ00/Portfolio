import React from 'react';
import {FlexContainer} from "../../../components/FlexContainer";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "../contacts/Contacts_Styles";
import {Icon} from "../../../components/icon/Icon";

const ContactsItemsData = [
    {
        iconId: "telegram",
    },
    {
        iconId: "linkedIn",
    },
    {
        iconId: "github",
    },
    {
        iconId: "gmail",
    },]
export const Contacts: React.FC = () => {
    return (
        <S.MainStyledContacts>
            <Container>
                <FlexContainer align={"first"} justify={"space-between"} wrap={"wrap"}>
                    <S.StyledText>
                        <S.ConnectText>Connect with me:</S.ConnectText>
                        <S.MainTitle>Satisfied with me?
                            Please contact me</S.MainTitle>
                        {ContactsItemsData.map((el, index) => {
                            return (
                                <S.SocialLink>
                                    <Icon
                                        key={index}
                                        width={"50"}
                                        height={"50"}
                                        viewBox={"0 0 50 50"}
                                        iconId={el.iconId}
                                        opacity={"50%"}/>
                                </S.SocialLink>
                            )
                        })}
                    </S.StyledText>
                    <S.StyledContacts>
                        <S.ContactTable>
                            Contact me, let’s make magic together
                        </S.ContactTable>
                        <S.StyledForm>
                            <S.Field placeholder={"Name"}/>
                            <S.Field placeholder={"Email"}/>
                            <S.Field placeholder={"Message"} as={"textarea"}/>
                            <Button type={"submit"}>
                                Send
                            </Button>
                        </S.StyledForm>
                    </S.StyledContacts>
                </FlexContainer>
            </Container>
        </S.MainStyledContacts>

    );
};