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
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <MainStyledContacts>
      <Container>
        <FlexContainer align={"first"} justify={"space-between"} wrap={"wrap"}>
          <StyledText>
            <ConnectText>Connect with me:</ConnectText>
            <MainTitle>Satisfied with me?
              Please contact me</MainTitle>
            <SocialLink>
              <Image src={telegram}/>
            </SocialLink>
            <SocialLink>
              <Image src={linkedIn}/>
            </SocialLink>
            <SocialLink>
              <Image src={github}/>
            </SocialLink>
            <SocialLink>
              <Image src={gmail}/>
            </SocialLink>
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
  margin-right: 16px;
`
const MainStyledContacts = styled.div`
  //background-color: #1A1A29;
  //min-height: 100vh;
  padding-bottom: 16px;
  @media ${theme.media.mobile}{
    padding: 0 15px 0 15px;
    //width: 360px;
    //text-align: center;
  }
`
const StyledContacts = styled.div`
  //background-color: #1A1A29;
  margin-right: 60px;

`
const StyledText = styled.div`
  color: #FFFFFF;
  @media ${theme.media.mobile}{
    padding-bottom: 24px;
  }
`
const ConnectText = styled.h2`
  ${font({weight:600, Fmax:32,Fmin:24})}
  color: #C778DD;
  //margin: 16px;
  padding-bottom: 16px;
`
const MainTitle = styled.h4`
  color: #FFFFFF;
  padding-bottom: 24px;
  font-weight: 500;
`
const ContactTable = styled.h3`
  ${font({weight:500, Fmax:24,Fmin:18})}
  color: white;
  padding-bottom: 24px;
  @media ${theme.media.mobile}{
    display: none;
  }
  // @media ${theme.media.tablet}{
  //   display: none;
  // }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    resize: none;
    font-family: "Poppins";
    min-height: 98px;
  }
    @media ${theme.media.mobile}{
    min-width: 330px;
  }

`
const Field = styled.input`
  //opacity: 11%;
  //font-family: "Popins";
  min-height: 62px;
  //padding-bottom: 16px;
  color: rgb(245, 245, 245);
  background: rgb(245, 245, 245, 0.1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;

  &::placeholder {
    font-weight: bolder;
    opacity: 0.5;
    padding-left: 16px;
    //text-align:center;
    //display: flex;
    //align-content: center;
    text-align: start;
  }

  &:focus-visible {
    outline: 2px solid rgb(245, 245, 245, 0.1);
  }
`

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: inline;
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`