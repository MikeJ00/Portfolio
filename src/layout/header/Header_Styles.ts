import styled from "styled-components";
import {theme} from "../../../src/styles/Theme";
import {Link} from "react-scroll";

const StyledHeader = styled.header`
background-color: #181824;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  //opacity: 0.3;
  //display: flex;
  //justify-content: space-between;
  @media ${theme.media.mobile} {
    //padding: 0 15px 0 15px;
  }
`
const MainNameLink = styled(Link)`
  color: rgb(117, 98, 224);
  font-size: 24px;
  font-weight: 600;
  // @media ${theme.media.mobile} {
  //   display:none;
  // }
`

export const S = {
  StyledHeader,
  MainNameLink
}