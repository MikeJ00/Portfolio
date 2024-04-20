import styled from "styled-components";
import {theme} from "../../../../src/styles/Theme";

const SocialItem = styled.li`
  width: 40px;
  height: 40px;
`
const Link = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  //display: inline;
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};
  :hover{
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.font};
  }
`
const SocialListMobile = styled.ul`
  gap: 35px;
  display: flex;
`

const StyledHeaderMenu = styled.div`
  display: none;
  @media ${theme.media.tablet} {
    height: 80px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.accent};
    p {
      display: flex;
      gap: 30px;
    }
      // @media ${theme.media.tablet}{
    //   display: flex;
    // }
  }
`
export const S = {
    SocialItem,
    Link,
    SocialListMobile,
    StyledHeaderMenu
}