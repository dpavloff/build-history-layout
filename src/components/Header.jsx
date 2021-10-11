import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    @media screen and (max-width: 840px) {
      align-items: flex-start;
      padding-top: 1rem;
    }
  `;

  const { title, titleColor = "black" } = props;

  const componentStyle = {
      color: titleColor,
  }

  return (
    <React.Fragment>
        <Header>
        <h2 style={componentStyle}>{title}</h2>
        {props.children}
        </Header>
    </React.Fragment>
  );
}
