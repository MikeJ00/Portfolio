import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "components/FlexContainer";
import {theme} from "styles";
import {Container} from "components/Container";

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer direction={'column'} align={'center'}>
                    <Copyright>
                        ©2024 Mikhail Berasneu, All Rights Reserved.
                    </Copyright>
                </FlexContainer>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 20px 0;
  @media ${theme.media.mobile}{
    padding: 20px 0 100px;
  }
`
const Copyright = styled.h5`
  color: ${theme.colors.font};
  opacity: 50%`