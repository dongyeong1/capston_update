import { Layout, Progress, Card, Avatar } from "antd";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";
import UserForm from "./UserForm";
import MenuMenu from "./Menu";
// import Image from "next/image";

const { Sider } = Layout;
const { Meta } = Card;

const SideBar = ({ isSide, showSide }) => {
  return (
    <SiderWrapper
      width={220}
      collapsible
      collapsed={isSide}
      onCollapse={showSide}
    >
      <Global />
      <LogoWrapper>
        <div>
          <Logo>
            {/* <SideLogo>
              <Link href="/">
                <a><img src="rider.png" /></a>
              </Link>
            </SideLogo> */}
            {!isSide && (
              <Link href="/" style={{ display: "none" }}>
                <a>
                  <p>Runnable</p>
                </a>
              </Link>
            )}
          </Logo>
        </div>
      </LogoWrapper>

      {isSide ? (
        <SpaceDiv>
          <Avatar size={44} src="kurumi.jpg" />
        </SpaceDiv>
      ) : (
        <UserForm />
      )}
      <MenuMenu />
      {/* <ProgressDiv>
        {!isSide && (
          <Card hoverable>
            <TrophyImg src="/gold.png" width={80} height={80} />
            <Meta title="운동 목표 달성까지" description="www.Runnable.com" />
          </Card>
        )}
      </ProgressDiv> */}
    </SiderWrapper>
  );
};

const LogoWrapper = styled.div`
  // display: inline-block;
  height: 50px;
  line-height: 50px;
  // background: #1890ff;
  background: linear-gradient(to right, #66b5ff, #3fa3ff, #1890ff);
`;

// const TrophyImg = styled()`
//   display: block;
//   width: 100% !important;
//   // margin: 0 auto;
//   position: relative;
//   left: 50% !important;
//   text-align: center;

//   img {
//     width: 100%;
//   }
// `;

const ProgressDiv = styled.div`
  display: flex;
  justify-content: center;

  & .ant-card-meta-title {
    font-size: 14px;
    padding-top: 8px;
    margin-bottom: 0 !important;
  }

  & .ant-card {
    margin-top: 20px;
    border-radius: 12px;
  }

  .ant-card-body {
    padding: 14px;
  }
`;

const SpaceDiv = styled.div`
  // 빈공간
  height: 240px;

  .ant-avatar {
    display: block;
    position: relative;
    top: 20%;
    margin: 0 auto;
    text-align: center;
    background: #00a2ae;
  }
`;

const SiderWrapper = styled(Sider)`
  // 사이드바
  overflow: auto;
  position: sticky;
  top: 0;
  height: 100vh;
  border-radius: 20px;
  // margin-bottom: 48px;

  & .ant-card-meta-title {
    font-weight: bold;
    margin-top: 5px;
  }

  @media screen and ${(props) => props.theme.mobile} {
    // display: none;
  }

  .ant-layout-sider-trigger {
    background: linear-gradient(to right, #66b5ff, #3fa3ff, #1890ff);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    // opacity:0.5;
  }

  .ant-layout-sider-children {
    border-radius: 20px;
  }

  .ant-menu-light .ant-menu-item:hover,
  .ant-menu-light .ant-menu-item-active {
    color: #1890ff;
  }

  .a:hover {
    color: #1890ff;
  }
`;

const Global = createGlobalStyle` // 전역 css
    .ant-layout-sider {
      // background-color: rgba( 255, 255, 255, 0.8);
      background: #fff;
      border-right: 1px solid #dadde1;
      border-radius: 20px;

    }

    .slick-slide {
      display:inline-block;
    }
    .ant-card-cover {
      transform: none !important;
    }

    .ant-card-meta {
      text-align:center;

      
    }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding-left: 4px;
    margin-left: 4px;
    margin-bottom: 0;
    text-overflow: hidden;
  }
`;

const SideLogo = styled.div`
  // 로고
  display: inline-block;
  text-align: center;

  & img {
    width: 35px;
    heigh: 35px;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export default SideBar;