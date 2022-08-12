import { TabContext } from "context/tabsContext";
import { PropTypes } from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";

TabHeader.prototype = {
  label: PropTypes.string,
  selected: PropTypes.array,
  disable: PropTypes.bool,
};

export default function TabHeader(props) {
  const value = useContext(TabContext);
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(false);

  const checkVariant = (event) => {
    if (event.propStyle.variant === "borderline") {
      return "transparent";
    } else if (event.propStyle.backgroundColor) {
      return event.propStyle.backgroundColor;
    } else {
      return "#003A61";
    }
  };

  const styleCheck = {
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "500",
    borderRadius: value.propStyle.variant === "borderline" ? "0px" : "25px",
    backgroundColor: checkVariant(value),
    borderBottom:
      value.propStyle.variant === "borderline" ? "1px solid #003A61" : null,
    cursor: props.disable ? "not-allowed" : null,
  };

  var customStyle = { ...styleCheck, ...props.selected };

  useEffect(
    (e) => {
      setKey(value.activeKey);
    },
    [value.activeKey]
  );
  return (
    <>
      <input
        type="radio"
        name="tabs"
        id={props.id}
        disabled={true}
        ref={ref}
        onChange={(e) => {}}
        onClick={(e) => {
          try {
            props.onClick();
          } catch (error) {}
        }}
      />
      <label htmlFor={props.id} style={key === props.id ? customStyle : null}>
        <span>{props.label}</span>
      </label>
    </>
  );
}
