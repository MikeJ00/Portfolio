import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";


type ProjectType = {
  projectTitle:string
  projectText: string
  src: string
}
// const projectTitle = ["Social Network, Counter, Cards"]
export const Project = (props:ProjectType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt=""/>
      <TitleProject>
        {props.projectTitle}
        {/*{projectTitle.map((el, index) => {*/}
        {/*  return el*/}
        {/*})}*/}
      </TitleProject>
      <StyledText>
        {props.projectText}
      </StyledText>
      <ButtonsBlock>
        <StyledButton href={"#"}>View Live </StyledButton>
        <StyledButton href={"#"}>Github Repo</StyledButton>
        <StyledButton href={"#"}>Github Repo</StyledButton>
        <StyledButton href={"#"}>Github Repo</StyledButton>
        <StyledButton href={"#"}>Github</StyledButton>
        <StyledButton href={"#"}>Github</StyledButton>
      </ButtonsBlock>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 20px;
  //margin-bottom: 15px;
  //opacity: 50%;
  flex-grow: 1;
  min-height: 420px;
  border-radius: 8px;
  background: rgb(49, 49, 63);
  width: 320px;
  
`
const Image = styled.img`
  width: 100%;
  height: 172px;
  object-fit: cover;
  opacity: 50%;
  margin-bottom: 16px;
`
const TitleProject = styled.h3`
color: rgb(117, 98, 224);
  font-size: large;
  //margin: 0 0 5px 16px;
  
  background: rgb(49, 49, 63);
`
const StyledText = styled.p`
  flex-grow: 1;
  
color: white;
  //margin: 0 0 32px 16px;
  background: rgb(49, 49, 63);
  margin: 5px 0 24px;
`
const ButtonsBlock = styled.div`
display: flex;
  gap: 18px;
  flex-wrap: wrap;
`
const StyledButton = styled.a`
  display: inline-block;
  white-space: nowrap;
  
  text-decoration: none;
  //margin: 0 0 0  16px;
  background: rgb(49, 49, 63);
  color: white;
  padding: 12px 25px 12px 25px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 2px solid rgb(117, 98, 224);
  &:hover {
    background: rgb(117, 98, 224);
  }
`