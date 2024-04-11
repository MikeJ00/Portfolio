import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";
import gmail from "../../../assets/images/gmail.svg"
import telegram from "../../../assets/images/telegram.svg"
import github from "../../../assets/images/github.svg"
import linkedIn from "../../../assets/images/linkedIn.svg"

export const Contacts = () => {
  return (
    <MainStyledContacts>
      <FlexContainer align={"center"} justify={"space-around"} >
        <StyledText>
          <ConnectText>Connect with me:</ConnectText>
          <MainTitle>Satisfied with me?
            Please contact me</MainTitle>
          <Image src={telegram}/>
          <Image src={github}/>
          <Image src={gmail}/>
          <Image src={linkedIn}/>
        </StyledText>
        <StyledContacts>
          <ContactTable>
            Contact me, let’s make magic together
          </ContactTable>
        <StyledForm>
          <Field placeholder={"Name"}/>
          <Field placeholder={"Email"}/>
          <Field placeholder={"Message"} as={"textarea"}/>
          <Button type={"submit"}>
            Send
          </Button>
        </StyledForm>
        </StyledContacts>
      </FlexContainer>
    </MainStyledContacts>

  );
};
const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  opacity: 50%;
`
const MainStyledContacts = styled.div`
  background-color: #1A1A29;
  min-height: 100vh;
`
const StyledContacts = styled.div`
  background-color: #1A1A29;
  
`
const StyledText = styled.div`
  color: #FFFFFF;
`
const ConnectText = styled.h1`
  color: #C778DD
`
const MainTitle = styled.h4`
  color: #FFFFFF;
`
const ContactTable = styled.h2`
color: white`

const StyledForm = styled.form`
width: 100%;
  display: flex;
  flex-direction: column;
gap:10px`

const Field = styled.input`
  opacity: 11%;
  height: 42px;
   //border-radius: 5%;

  ::placeholder {
    font-weight:bolder;
  }
`
