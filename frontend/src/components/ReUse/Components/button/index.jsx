import React from "react";
import PropTypes from "prop-types";
import LoaderForButton from "../../LoaderForButton";

const defaultStyles = {
  backgroundColor: "#2B59FF",
  width: "-webkit-fill-available",
  height: "50px",
  borderRadius: "50px",
  color: "#FFFFFF",
  fontSize: "20px",
  fontWeight: "500",
  padding: "auto",
  margin: "auto",
};

const GlobalButton = ({
  onClick,
  className = "",
  bgColor = defaultStyles.backgroundColor,
  width = defaultStyles.width,
  height = defaultStyles.height,
  borderRadius = defaultStyles.borderRadius,
  color = defaultStyles.color,
  fontSize = defaultStyles.fontSize,
  fontWeight = defaultStyles.fontWeight,
  padding = defaultStyles.padding,
  margin = defaultStyles.margin,
  loading = false,
  statusMessage = "",
  children,
}) => {
  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={onClick}
      disabled={loading}
      style={{
        backgroundColor: bgColor,
        width,
        height,
        borderRadius,
        color,
        fontSize,
        fontWeight,
        padding,
        margin
      }}
    >
      {loading ? <LoaderForButton /> : statusMessage || children}
    </button>
  );
};

GlobalButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GlobalButton;
