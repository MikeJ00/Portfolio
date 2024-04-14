import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";


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
      <StyledButton href={"#"}>View Live </StyledButton>
      <StyledButton href={"#"}>Github Repo</StyledButton>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  //opacity: 50%;
  width: 100%;
  max-width: 340px;
  border-radius: 8px;
  background: rgb(49, 49, 63);
  
`
const Image = styled.img`
  width: 91%;
  height: 172px;
  object-fit: cover;
  opacity: 50%;
  margin: 16px 0 16px 16px;
`
const TitleProject = styled.h3`
color: rgb(117, 98, 224);
  font-size: large;
  margin: 16px 0 10px 16px;
  background: rgb(49, 49, 63);
`
const StyledText = styled.p`
color: white;
  margin: 0 0 24px 16px;
  background: rgb(49, 49, 63);
`

const StyledButton = styled.a`
  text-decoration: none;
  margin: 0 0 0  16px;
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