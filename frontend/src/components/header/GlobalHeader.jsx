import React from "react";

import { Row } from "antd";

const GlobalHeader = ({ children }) => {
  return (
    <Row justify="space-between" align="middle">
      {children}
    </Row>
  );
};

export default GlobalHeader;
