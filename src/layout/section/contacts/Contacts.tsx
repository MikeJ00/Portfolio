import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";
import gmail from "../../../assets/images/gmail.svg"
import telegram from "../../../assets/images/telegram.svg"
import github from "../../../assets/images/github.svg"
import linkedIn from "../../../assets/images/linkedIn.svg"
import {Container} from "../../../components/Container";

export const Contacts = () => {
  return (
    <MainStyledContacts>
      <Container>
        <FlexContainer align={"first"} justify={"space-between"}>
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
      </Container>
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
  //background-color: #1A1A29;
  //min-height: 100vh;
  padding-bottom: 16px;
`
const StyledContacts = styled.div`
  //background-color: #1A1A29;

`
const StyledText = styled.div`
  color: #FFFFFF;
`
const ConnectText = styled.h2`
  color: #C778DD;
  //margin: 16px;
  padding-bottom: 16px;
`
const MainTitle = styled.h4`
  color: #FFFFFF;
  padding-bottom: 24px;
`
const ContactTable = styled.h3`
  color: white;
  padding-bottom: 24px;`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`
const Field = styled.input`
  //opacity: 11%;
  min-height: 2px;
  padding-bottom: 16px;
  color: rgb(245, 245, 245);
  background: rgb(245, 245, 245, 0.1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  //border-radius: 5%;
  ::placeholder {
    font-weight: bolder;
    opacity: 0.5;
    padding-left: 16px;
    //display: flex;
    //align-content: center;
    text-align: start;
  }
`