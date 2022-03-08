import styled, { createGlobalStyle } from "styled-components";
import { DingtalkOutlined } from "@ant-design/icons";
import { Layout, Avatar } from "antd";
const { Header, Sider } = Layout;

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
.ant-layout {
  margin:0;
  padding:0;
}
`;

// 헤더
export const HeaderWrapper = styled(Header)`
  display: inline-block;
  width: 100%;
  background: #fff;
  padding: 0 20px;
  position: relative;
  border-bottom: 1px solid #bdbdbd;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // & img {
  //   width: 20px;
  //   height: 20px;
  // }
  & p {
    color: black;
    font-weight: bold;
    padding-left: 4px;
    margin-left: 4px;
    margin-bottom: 0;
    text-overflow: hidden;
  }
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  width: 500px;
  margin: 0 auto;
  align-items: center;
  & > span {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  & .ant-input {
    border-radius: 30px;
  }
  &
    .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    width: 80px;
    border-radius: 30px;
    position: relative;
    right: 15px;
    z-index: 1;
  }
  .ant-input-group-addon {
    background-color: #fff;
  }
`;

export const IconList = styled.div`
  display: flex;
  float: right;
  height: 64px;
  & ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  & li {
    list-style: none;
    padding-right: 20px;
  }
  & a {
    font-size: 25px;
  }
`;