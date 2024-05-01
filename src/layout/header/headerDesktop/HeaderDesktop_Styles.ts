import styled from "styled-components";
import {theme} from "styles";
import {Link} from "react-scroll";
// import {theme} from "styles";

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
  }
  @media ${theme.media.tablet}{
    display: none;
  }
`
const ListItem = styled.li`

`
const NavLink = styled(Link)`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  &:hover, 
  &.active{
    color: ${theme.colors.accent};
  }
`
export const S = {
  StyledHeaderMenu,
  NavLink,
  ListItem
}
