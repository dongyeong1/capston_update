import React from "react";
import { Card, Avatar, Descriptions } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const UserForm = () => {
  const {me}=useSelector((state)=>state.user)
  return (
    <Container>
   {me&&<CardWrapper
  bordered={true}
  actions={[
    
    <div key="followings">
      팔로잉
      <br />{me.followings.length}
    </div>,
    <div key="followings">
      팔로워
      <br />{me.followers.length}
    </div>,
    <div key="twit">
      게시물
      <br />{me.posts.length}
    </div>,
  ]}
>
  <CardMetaWrapper
    avatar={
      <Avatar size={52} style={{ background: "#00a2ae" }}>
        Image
      </Avatar>
    }
    style={{}}
  />
  <div>{me.name}</div>
  <Global />
</CardWrapper>} 
  </Container>
  );
};
const Container = styled.div`
  height: 220px;
`;

const CardMetaWrapper = styled(Card.Meta)`
  height: 60px;
  .ant-card-meta-avatar {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0;
  }
`;

const DescriptionWrapper = styled(Descriptions)`
  .ant-descriptions-header {
    text-align: center;
    margin: 0;
    padding-top: 20px;
  }
`;

const CardWrapper = styled(Card)`
  // z-index: 1;
  box-shadow: 0px 8px 24px rgb(13 13 18 / 4%);
  .ant-card-actions li {
    overflow: hidden;
  }

  div {
    text-align: center;
    // padding-top: 3px;
  }
`;

const Global = createGlobalStyle`
.ant-card {
  width: 200px;
  margin: 0 10px;
  margin-top: 20px;
  position: relative;
}
.ant-card-body {
  padding-bottom:17px;
}
`;

export default UserForm;






