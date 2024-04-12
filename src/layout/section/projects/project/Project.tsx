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
  width: 100%;
  max-width: 340px;
`
const Image = styled.img`
  width: 100%;
  height: 172px;
  object-fit: cover;
  opacity: 50%;
  margin: 16px 0 16px 16px;
`
const TitleProject = styled.h3`
color: rgb(117, 98, 224);
  font-size: large;
  margin: 16px 0 10px 16px;
`
const StyledText = styled.p`
color: white;
  margin: 0 0 24px 16px;
`

const StyledButton = styled.a`
  text-decoration: none;
  margin: 0 0 0  16px;
`