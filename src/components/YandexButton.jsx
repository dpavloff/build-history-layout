import styled from "styled-components";
import React from 'react'

export default function YandexButton({label, h = "28px", w = "28px", onClick, icon, type = "button", isGray = false, isDisabled = false}) {

  const ButtonContent = ({icon, label}) => (
    <div>
      {icon ? <img src={icon} alt="" /> : ""} <span> </span> {label}
    </div>
  );
  
  const Button = styled.button`
    width: ${props => props.w};
    height: ${props => props.h};
    border: 2px solid transparent;
    border-radius: 4px;
    background-color: ${props => props.isGray ? "#E6E6E6" : "#fc0"};
    cursor: pointer;
    height: 28px;
    width: 87px;
  
    &:hover {
      background-color: ${props => props.isGray ? "#DBDBDB" : "#F2C200"};
    }
  
    &:focus {
      border: 2px solid ${props => props.isGray ? "#B3B3B3" : "#B38F00"};
    }
  `;
  
  const DisabledButton = styled(Button)`
    cursor: auto;
    background-color: #f2f2f2;
    color: rgba(0, 0, 0, 0.5);
  
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  
    &:focus {
      border: none;
    }
  `;

  return (
    isDisabled ? 
    <DisabledButton as={type} onClick={() => {}}>
      <ButtonContent icon={icon} label={label} />
    </DisabledButton>
    : 
    <Button w={w} h={h} isGray={isGray} as={type} onClick={onClick}>
      <ButtonContent icon={icon} label={label} />
    </Button>
  )
}
