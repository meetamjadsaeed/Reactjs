import React from "react";

import { Layout } from "antd";
const { Header } = Layout;

import "../styles/HomePage.css";

import NavBar from "../components/header/NavBar";
import LayoutBody from "../components/body/LayoutBody";
import GlobalLayout from "../components/layout/GlobalLayout";

const Home = () => {
  return (
    <GlobalLayout>
      <Header className="header">
        <NavBar />
      </Header>
      <LayoutBody />
    </GlobalLayout>
  );
};

export default Home;
