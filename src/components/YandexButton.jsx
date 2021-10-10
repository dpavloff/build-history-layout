import { useState } from "react";
import "../styles/yandexbutton.css";

const YandexButton = ({
  label = "button",
  onClick,
  defaultClass,
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

  let classNames =
    "btn " +
    defaultClass +
    (isGray ? " isGray" : "") +
    (isDisabled ? " disabled" : "");

  return (
    <button
      className={classNames}
      onFocus={toggleFocus}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      type="button"
      onClick={isDisabled ? () => {} : onClick}
    >
      {icon ? <img src={icon} alt="" /> : ""}
      <span> </span>
      {label}
    </button>
  );
};

export default YandexButton;
