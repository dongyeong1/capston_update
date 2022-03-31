import React from "react";
import { Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  CompassOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const MenuMenu = () => {
  const category = [
   
    {
      title: "나의 프로필",
      link: "/dashboard",
      icon: <UserOutlined />,
    },
    // {
    //   title: "나의 라이딩 경로",
    //   link: "/myData",
    //   icon: <CompassOutlined />,
    // },
    {
      title: "나의 운동목표",
      link: "/musclePurpose",
      icon: <CarryOutOutlined />,
    },
    {
      title: "운동경로만들기",
      link: "/myRecord",
      icon: <CompassOutlined />,
    },
    {
      title: "운동경로 탐색",
      link: "/polylineTest",
      icon: <CarryOutOutlined />,
    },
    {
      title: "설정",
      link: "/setting",
      icon: <SettingOutlined />,
    },
    {
      title: "유저탐색",
      link: "/userSearch",
      icon: <CompassOutlined />,
    },
  ];

  return (
    <MenuWrapper mode="inline">
      <Menu.Item icon={<HomeOutlined />}><a href="/">홈</a></Menu.Item>
      
      {category.map((menu, index) => (
        <Menu.Item key={index} icon={menu.icon}>
          <Link href={menu.link} shallow >
           <a>{menu.title}</a>
          </Link>
        </Menu.Item>
      ))}
    </MenuWrapper>
  );
};

const Space = styled.div`
  overflow: auto;
`;

const MenuWrapper = styled(Menu)`
  display: inline-block;
  position: relative;
  top: 3%;
  transition: all 0.2s;
  // background-color: rgba(255, 255, 255, 0.8);
  background: #fff;
  border-right: none;
  margin-bottom: 10px;

  .ant-menu-item {
    min-width: 79px;
    height: 50px;
    padding: 0 28px !important;
    line-height: 58px;
  }

  .ant-menu-title-content {
    height: 50px;
    line-height: 53px;
    font-weight: 700;
    padding-left: 15px;
    transition: none !important;
    transition: all 0.3s ease-out;
  }

  svg {
    font-size: 23px;
  }

  span {
    // margin: 0 10px;
    // padding-bottom: 10px;
  }

  .ant-menu-vertical,
  .ant-menu-item::after {
    // position: absolute;
    // top: 50;
    // left: 50%;
    // bottom: 0;
  }
`;

export default MenuMenu;