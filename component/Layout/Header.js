import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderWrapper,
  Logo,
  SearchWrapper,
  IconList,
} from "../../styles/styles";
import { Avatar, Input } from "antd";
import {
  CommentOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import styled, { createGlobalStyle } from "styled-components";

const { Search } = Input;

const Header = () => {
  return (
    <HeaderWrapper className="header">
      {/* <SearchWrapper>
        <Search placeholder="Search" enterButton="Writer" />
      </SearchWrapper> */}
      <IconList>
        <ul>
          <li>
            <a>
              <CommentOutlined />
            </a>
          </li>
          <li>
            <a>
              <BellOutlined />
            </a>
          </li>
        </ul>
        <AvatarDiv>
          <a>
            <Avatar>천</Avatar>
          </a>
        </AvatarDiv>
      </IconList>
    </HeaderWrapper>
  );
};

// 자전거 아이콘  제작자: Freepik - Flaticon

const AvatarDiv = styled.div`
  display: inline-block;
  line-height: 60px;
  a {
    font-size: 20px;
  }
  .ant-avatar {
    background: #00a2ae;
  }
`;

export default Header;