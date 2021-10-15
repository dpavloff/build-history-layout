import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
@media screen and (max-width: 840px) {
  align-items: flex-start;
}
`;

const HeaderTitle = styled.h2`
color: ${props => props.titleColor};
font-size: 24px;
font-weight: ${props => props.isBold ? 500 : 100};

@media screen and (max-width: 840px) {
  font-size: 18px
}
`;

export default function Header(props) {
  const { title, titleColor = "black", isBold } = props;

  return (
    <React.Fragment>
        <HeaderContainer>
          <HeaderTitle titleColor={titleColor} isBold={isBold}>
            {title}
          </HeaderTitle>
        {props.children}
        </HeaderContainer>
    </React.Fragment>
  );
}
