import styled from "styled-components";
import {font, theme} from "styles";

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  opacity: 50%;
  margin-right: 16px;
`
const MainStyledContacts = styled.div`
  padding-bottom: 16px;
  @media ${theme.media.mobile}{
    padding: 0 15px 0 15px;
  }
`
const StyledContacts = styled.div`
  margin-right: 60px;

`
const StyledText = styled.div`
  color: ${theme.colors.font};
  @media ${theme.media.mobile}{
    margin-bottom: 24px;
  }
`
const ConnectText = styled.h2`
  ${font({weight:600, Fmax:32,Fmin:24})}
  color: ${theme.colors.purple};
  margin-bottom: 16px;
`
const MainTitle = styled.h4`
  color: ${theme.colors.font};
  margin-bottom: 24px;
  font-weight: 500;
`
const ContactTable = styled.h3`
  ${font({weight:500, Fmax:24,Fmin:18})}
  color: ${theme.colors.font};
  margin-bottom: 24px;
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
  border: none;
  padding: 20px 16px;
  color:${theme.colors.font};
  background: rgb(245, 245, 245, 0.1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;

  &::placeholder {
    font-weight: bolder;
    opacity: 0.5;
    padding-left: 16px;
    text-align: start;
  }

  &:focus-visible {
    outline: 2px solid rgb(245, 245, 245, 0.1);
  }
`
const SocialLink = styled.a`
  display: inline;
  margin-right:18px;
  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`
export const S = {
  StyledText,
  MainTitle,
  ConnectText,
  ContactTable,
  Field,
  SocialLink,
  StyledForm,
  MainStyledContacts,
  Image,
  StyledContacts
}