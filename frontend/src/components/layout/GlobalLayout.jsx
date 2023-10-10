import React from "react";

import { Layout } from "antd";

const GlobalLayout = ({ children }) => {
  return <Layout className="container">{children}</Layout>;
};

export default GlobalLayout;
