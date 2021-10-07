import { useState } from "react";
import styles from "../styles/yandexbutton.module.css";

const YandexButton = ({
  label = "button",
  onClick,
  icon,
  isGray,
  isDisabled = false,
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const toggleFocus = () => {
    setFocus(!focus);
  };

  let enabled = {
    backgroundColor: isGray ? "#E6E6E6" : "#fc0",
    cursor: "pointer",
  };

  let hovered = {
    backgroundColor: isGray ? "#DBDBDB" : "#F2C200",
  };

  let focused = {
    border: isGray ? "2px solid #B3B3B3" : "2px solid #B38F00",
  };

  let disabled = {
    backgroundColor: "#F2F2F2",
    color: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <button
      style={
        isDisabled
          ? { ...disabled }
          : {
              ...enabled,
              ...(hover ? hovered : null),
              ...(focus ? focused : null),
            }
      }
      className={styles.btn}
      onFocus={toggleFocus}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      type="button"
      onClick={isDisabled ? onClick : () => {}}
    >
      {icon ? <img src={icon} alt="" /> : ""}
      <span> </span>
      {label}
    </button>
  );
};

export default YandexButton;