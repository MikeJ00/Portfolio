import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../src/styles/Theme";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import mobileHome from "../../../assets/images/mobileHome.svg"
import {Icon} from "../../../components/icon/Icon";

const menuItems = ["home", "skills", "projects", "contacts"]
export const MobileBurger = () => {
  return (
    <StyledHeaderMenu>
      <Container>
        <FlexContainer direction={"column"}  justify={"space-around"} align={"center"} >
      <SocialListMobile>
        <SocialItem>
            <Link>
              <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileHome"}/>
            </Link>
        </SocialItem>
        <SocialItem>
          <Link>
            <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"mobileSkills"}/>
          </Link>
        </SocialItem>
        <SocialItem>
          <Link>
            <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"portfolio"}/>
          </Link>
        </SocialItem>
        <SocialItem>
          <Link>
            <Icon width={"18"} height={"18"} viewBox={"0 0 18 18"} iconId={"contacts"}/>
          </Link>
        </SocialItem>
      </SocialListMobile>
          </FlexContainer>
    </Container>
    </StyledHeaderMenu>
  );
};
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
  color: white;
  background-color: #1A1A29;
  :hover{
    color: #1A1A29;
    background-color: white;
  }
`

const SocialListMobile = styled.ul`
  gap: 35px;
  display: flex;
  //flex: auto;
  //justify-content: space-around
`
const StyledHeaderMenu = styled.div`
  display: none;
  @media ${theme.media.tablet}{
    height: 80px;
    display: flex;
    position: fixed;
    //top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background-color: #7562E0;
  //display: flex;
  //z-index: 99999999999999999;
  //margin-right: 160px;
  //font-weight: bolder;
  p {
    display: flex;
    gap: 30px;
    //justify-content: center;
    //align-items: center;
    //flex-direction: column;
    //list-style-type: none;
  }
  // @media ${theme.media.tablet}{
  //   display: flex;
  // }
  }
`
// const ListItem = styled.li`
// display:  inline-block;
// `
// // const Link = styled.a`
// //   color: ${theme.colors.font};
// //   font-size: 18px;
// //   font-weight: 600;
// //   text-align: left;
// //   &:hover{
// //     color: ${theme.colors.accent};
// //   }
// `
