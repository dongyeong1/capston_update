import React, { useState, useCallback } from "react";
import { Layout, Card, Form, Input, Button, Modal } from "antd";
import Signup from "./SignUpTest";
import styled from "styled-components";
import Link from "next/link";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN_REQUEST } from "../reducers/user";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const signin = () => {

    const dispatch=useDispatch()
  const [form] = Form.useForm();

  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const openModal = () => {
    setIsModal((prev) => !prev);
    console.log(isModal);
  };

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = () => {
    let body = {
      email: id,
      password: password,
    };

    console.log(body);

    dispatch({
        type:LOGIN_REQUEST,
        data:body
    })

    
  };

  return (
    <Layout>
      <HeaderWrapper>Runnable</HeaderWrapper>
      <ContentWrapper>
        <CardStyle>
          <MetaDiv>
            <Meta title="Runnable 로그인" />
          </MetaDiv>
          <FormDiv>
            <FormWrapper
              onFinish={onSubmit}
              form={form}
              size="large"
            >
              <Form.Item>
                <Input
                  value={id}
                  onChange={onChangeId}
                  placeholder="이메일 또는 전화번호"
                  required
                />
              </Form.Item>
              <Form.Item>
                <Input.Password
                  value={password}
                  onChange={onChangePassword}
                  placeholder="비밀번호"
                  required
                />
              </Form.Item>
              <Form.Item>
                <Button type="default" htmlType="submit">
                  Signin
                </Button>
              </Form.Item>
            </FormWrapper>
          </FormDiv>
          <QuestionDiv>
            <div style={{ marginBottom: "10px" }}>
              <Link href="/findId">
                <a>계정을 잊으셨나요?</a>
              </Link>
            </div>
            <Meta description="또는" />
          </QuestionDiv>
          <SignupBtn>
            <Button type="primary" onClick={showModal} ghost>
              새로운 계정 생성
            </Button>
            <Signup isModal={isModal} openModal={openModal} />
          </SignupBtn>
        </CardStyle>
      </ContentWrapper>
      <Footer style={{ height: "20vh", background: "#fff" }}></Footer>
    </Layout>
  );
};

signin.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default signin;

const SignupBtn = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 10px;

  & Button {
    height: 40px;
    border-radius: 7px;
  }
`;

const QuestionDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 40px;
  text-align: center;
  margin-top:10px;

  & div {
    
  }

  & a {
    font-size: 16px;
  }

  .ant-card-meta-description::before {
    context:'';
    background:color: rgba(0, 0, 0, 0.45);
  }
`;

const MetaDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 40px;
  text-align: center;

  .ant-card-meta-title {
    font-size: 18px;
  }
`;

const FormWrapper = styled(Form)`
  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-input {
    height: 54px;
    border-radius: 7px;
  }

  .ant-input-affix-wrapper {
    height: 54px;
    border-radius: 7px;
  }

  .ant-input-affix-wrapper > .ant-input {
    height: 41px;
  }

  .ant-card-meta {
    display: inline-block;
    width: 100%;
    height: 40px;
    text-align: center;
  }
`;

const FormDiv = styled.div`
  Button {
    width: 100%;
    background: #32a89b;
    background: #1890ff;
    color: #fff;
    height: 48px;
    margin-top: 5px;
    font-weight: bold;
    border-radius: 7px;
  }

  Button:hover {
    background: #1683e8;
    border-color: #1683e8;
    color: #fff;
  }

  Button:focus {
    background: #1683e8;
    color: #fff;
  }
`;

const CardStyle = styled(Card)`
  width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  // 0 5px 12px 4px rgb(0 0 0 / 9%);
`;

const HeaderWrapper = styled(Header)`
  display: inline-block;
  width: 100%;
  height: 100px;
  background: #f0f2f5;
  //   opacity: 0.5;
  font-size: 51px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  color: #1890ff;
  margin-top: 30px;
`;

const ContentWrapper = styled(Content)`
  height: 60vh;
  background: #f0f2f5;
`;