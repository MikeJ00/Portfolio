import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../components/FlexContainer";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer direction={'column'} align={'center'} >
      <Copyright>
        ©2024 Mikhail Berasneu, All Rights Reserved.
      </Copyright>
      </FlexContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``
const Copyright = styled.small`
color: #FFFFFF;
opacity: 50%`