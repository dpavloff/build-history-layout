import styled from "styled-components";
import React from "react";

const Button = styled.button`
  padding: ${(props) => (props.isSettings ? "5px 8px" : "10px 13px")};
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: ${(props) => (props.isGray ? "#E6E6E6" : "#fc0")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isGray ? "#DBDBDB" : "#F2C200")};
  }

  &:focus {
    border: 2px solid ${(props) => (props.isGray ? "#B3B3B3" : "#B38F00")};
  }

  @media screen and (max-width: 840px) {
    font-size: ${(props) => (props.isSettings ? "0" : "inherit")};
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

export default function YandexButton({
  label,
  onClick,
  icon,
  type = "button",
  isGray = false,
  isDisabled = false,
  isSettings = false,
}) {
  const ButtonContent = ({ icon, label }) => (
    <div>
      {icon ? <img src={icon} width={12} height={12} alt="" /> : ""} <span> </span> {label}
    </div>
  );

  return isDisabled ? (
    <DisabledButton as={type} onClick={() => {}}>
      <ButtonContent icon={icon} label={label} />
    </DisabledButton>
  ) : (
    <Button isSettings={isSettings} isGray={isGray} as={type} onClick={onClick}>
      <ButtonContent icon={icon} label={label} />
    </Button>
  );
}
