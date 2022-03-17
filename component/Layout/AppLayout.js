import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {} from "@ant-design/icons";
import SideBar from "./SideBar";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const { Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  const [isSide, setIsSide] = useState(false);

  const showSide = () => {
    setIsSide((prev) => !prev);
}
  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <SideBar isSide={!isSide} showSide={showSide} />
        <Layout style={{ backgroundColor: "white" }}>
          <Header />
       
           <Content
            style={{
              padding:"3% 12%",
             
            }}
          >
            {children}
          </Content> 
         
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;