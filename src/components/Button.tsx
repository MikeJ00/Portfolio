import styled from "styled-components";
import {theme} from "../styles";

export const Button = styled.button`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.font};
  width: 174px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  // border-radius: 5%;
  // border: 1px solid rgb(117, 98, 224)
`