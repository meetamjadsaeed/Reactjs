import React from "react";

const FieldError = ({ fieldName = "" }) => {
  return <p style={{ color: "red" }}>{fieldName || ""}</p>;
};

export default FieldError;
