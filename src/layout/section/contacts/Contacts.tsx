import React, {ElementRef, useRef} from 'react';
import {FlexContainer} from "components/FlexContainer";
import {Button} from "components/Button";
import {Container} from "components/Container";
import {S} from "../contacts/Contacts_Styles";
import {Icon} from "components/icon/Icon";
import emailjs from '@emailjs/browser';

const ContactsItemsData = [
    {
        iconId: "telegram",
        href: 'https://t.me/MikeJ0'
    },
    {
        iconId: "linkedIn",
        href: 'https://www.linkedin.com/in/mike-berasnev-b2108119b/'
    },
    {
        iconId: "github",
        href: 'https://github.com/MikeJ00'
    },
    {
        iconId: "gmail",
        href: 'mailto:misha7709123@gmail@gmail.com',
    },]

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm('service_i5ks4to', 'template_xncsl6s', form.current, {
                    publicKey: 'UbNMP7RQosGdaPiBX',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            e.target.reset();
        }
    }
    return (
        <S.MainStyledContacts id={"contacts"}>
            <Container>
                <FlexContainer align={"first"} justify={"space-between"} wrap={"wrap"}>
                    <S.StyledText>
                        <S.ConnectText>Connect with me:</S.ConnectText>
                        <S.MainTitle>Satisfied with me?
                            Please contact me</S.MainTitle>
                        {ContactsItemsData.map((el, index) => {
                            return (
                                <S.SocialLink target={"_blank"} href={el.href}>
                                    <Icon
                                        key={index}
                                        width={"50"}
                                        height={"50"}
                                        viewBox={"0 0 50 50"}
                                        iconId={el.iconId}
                                        opacity={"50%"}
                                    />
                                </S.SocialLink>
                            )
                        })}
                    </S.StyledText>
                    <S.StyledContacts>
                        <S.ContactTable>
                            Contact me, let’s make magic together
                        </S.ContactTable>
                        <S.StyledForm ref={form} onSubmit={sendEmail}>
                            <S.Field required={true} placeholder={"Name"} name={'user_name'}/>
                            <S.Field required={true} placeholder={"Email"} name="user_email"/>
                            <S.Field required={true} placeholder={"Message"} as={"textarea"} name={"message"}/>
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