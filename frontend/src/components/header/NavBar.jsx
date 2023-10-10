import React from "react";

import { Button, Col } from "antd";

import GlobalHeader from "./GlobalHeader";
import GlobalButton from "../ReUse/Components/button";
const NavBar = () => {
  return (
    <GlobalHeader>
      <Col>
        <div className="logo">SwiftSwap</div>
      </Col>
      <Col >
        <GlobalButton
          width="211px"
          padding="7.65px 9.56px 7.65px 9.56px"
          borderRadius="23.91px"
        >
          Connect wallet
        </GlobalButton>
      </Col>
    </GlobalHeader>
  );
};

export default NavBar;
