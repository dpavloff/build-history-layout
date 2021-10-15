import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const { title, titleColor = "black", isBold } = props;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    @media screen and (max-width: 840px) {
      align-items: flex-start;
    }
  `;

  const HeaderTitle = styled.h2`
    color: ${titleColor};
    font-size: 24px;
    font-weight: ${isBold ? 500 : 100};

    @media screen and (max-width: 840px) {
      font-size: 18px
    }
  `;

  return (
    <React.Fragment>
        <Header>
          <HeaderTitle>
            {title}
          </HeaderTitle>
        {props.children}
        </Header>
    </React.Fragment>
  );
}
