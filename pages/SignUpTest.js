import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  Modal,
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Space,
  Radio,
} from "antd";
import useInput from '../hooks/useInputTest';
import { useDispatch } from 'react-redux';
import {SIGNUP_REQUEST} from '../reducers/user'


const { Meta } = Card;
const { Option } = Select;

const Signup = ({ isModal, openModal }) => {


  const [form] = Form.useForm();

  const [btnValue, setBtnValue] = useState(null);

  const btnChange = (e) => {
    setBtnValue(e.target.value);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const months = [];

  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  const days = [];

  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  const [firstName, onChangeFirstName] = useInput("");
  const [lastName, onChangeLastName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [birthday, onChangeBirthday] = useInput();
  const [gender, onChangeGender] = useInput("");

  // /api/register

  const dispatch=useDispatch()

  const onSubmit = () => {
    let body = {
        
      name: "김동영",
      weight:'30kg',
      location:'김해',
      email: email,
      password: password,
      birth: '2020-02-27',
      sex: '여성',
    };

    console.log(body);

    dispatch({
        type:SIGNUP_REQUEST,
        data:body
    })

  };

  return (
    <ModalWrapper
      // centered
      visible={isModal}
      // onOk={openModal}
      onCancel={openModal}
      footer={null}
    >
      <TitleDiv>
        <div>새로운 계정 만들기</div>
        <span>간단합니다</span>
      </TitleDiv>
      <FormWrapper>
        <Form onFinish={onSubmit}  form={form} size="large">
          <FirstName rules={[{ required: true }]}>
            <Input
              value={firstName}
              onChange={onChangeFirstName}
              placeholder="성"
            />
          </FirstName>
          <SecondName rules={[{ required: true }]}>
            <Input
              value={lastName}
              onChange={onChangeLastName}
              placeholder="이름"
            />
          </SecondName>
          <MaleFemale>
            <Select placeholder="성별" onchange={onChangeGender}>
              <Option value={gender}>여성</Option>
              <Option value={gender}>남성</Option>
            </Select>
          </MaleFemale>
          <Form.Item rules={[{ required: true }]}>
            <Input
              value={email}
              onChange={onChangeEmail}
              placeholder="휴대폰 번호 또는 이메일"
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]}>
            <Input.Password
              value={password}
              onChange={onChangePassword}
              placeholder="새 비밀번호"
            />
          </Form.Item>
          <SmallTitle>생일</SmallTitle>
          <SpaceWrapper>
            <DatePicker
              placeholder="년도"
              // onChange={onchange}
              picker="year"
              value={birthday}
            />
            <Select defaultValue="월">
              {months.map((month, index) => (
                <Option key={index}>{month}</Option>
              ))}
            </Select>
            <Select defaultValue="일">
              {days.map((day, index) => (
                <Option key={index}>{day}</Option>
              ))}
            </Select>
          </SpaceWrapper>

          <Form.Item>
            <Button type="default" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </ModalWrapper>
  );
};

export default Signup;

const BtnWrapper = styled.div`
  // display: flex;
  // justify-content: start;
  // margin-top: 10px;

  .ant-radio-wrapper {
    height: 38px;
    line-height: 38px;
    padding: 0 5px;
    border: 1px solid #ccd0d5;
    border-radius: 5px;
  }
`;

const SmallTitle = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 3px;
`;

const SmallSecondTitle = styled(SmallTitle)`
  margin-top: 10px;
`;

const SpaceWrapper = styled(Space)`
  .ant-picker {
    width: 132px;
    border-radius: 5px !important;
  }

  .ant-select-single {
    width: 125px;
    border-radius: 5px;
    // color: rgba(0, 0, 0, 0.4);
  }

  .ant-select-selector {
    border-radius: 5px !important;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 470px;
  // vertical-align:middle;
  text-align: center;
  // max-width: 500px;
  padding: 16px;

  // & Button {
  //   width: 100%;
  //   background: #1890ff;
  //   color: #fff;
  //   height: 40px;
  //   margin-top: 5px;
  // }

  Button {
    width: 100%;
    background: #1890ff;
    color: #fff;
    height: 48px;
    margin-top: 5px;
    font-weight: bold;
    border-radius: 7px;
    margin-top: 20px;
  }

  Button:hover {
    background: #1683e8;
    border-color: #1683e8;
    color: #fff;
  }

  Button:focus {
    background: #1890ff;
    color: #fff;
  }

  .ant-input,
  .ant-input-lg {
    border: 1px solid #ccd0d5;
    border-radius: 5px;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .ant-form {
    width: 400px;
  }

  .ant-form-item-control-input-content {
    display: inline-block;
    width: 100%;
    height: 40.14px;
  }
`;

const FirstName = styled(Form.Item)`
  display: inline-block;
  width: 153px;
`;

const SecondName = styled(FirstName)`
  margin-left: 10px;
`;

const MaleFemale = styled(SecondName)`
  width: 74px;

  .ant-select-single {
    width: 74px;
    border-radius: 5px;
    // color: rgba(0, 0, 0, 0.4);
  }

  .ant-select-selector {
    border-radius: 5px !important;
  }
`;

const TitleDiv = styled.div`
  display: block;
  text-align: center;
  border-bottom: solid 1px #dadde1;
  padding: 10px 15px 9px 15px;

  div {
    margin-bottom: 0;
    font-size: 25px;
    font-weight: 700;
  }

  span {
    font-size: 15px;
    color: #606770;
  }
`;

const ModalWrapper = styled(Modal)`
  top: 130px;

  .ant-modal-content {
    width: 432px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }
  .ant-modal-header {
    border-radius: 15px;
  }

  .ant-modal-body {
    padding: 0;
  }
`;