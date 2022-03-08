import React, { useState } from "react";
import { Calendar, Card, Alert } from "antd";
import { moment } from "moment";
import styled from "styled-components";

// const [value, setValue] = useState(moment().format("2022-01-01"));

// const onSelect = (value) => {
//   setValue(value);
// };

// const onPanelChange = (value) => {
//   setValue(value);
// };

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

const musclePurpose = () => {
  return (
    <Container>
      <Title>나의 운동목표</Title>
      <Card>
        <Calendar onPanelChange={onPanelChange} />
      </Card>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const Container = styled.div`
  height: 100%;
  // padding: 0 100px;

  .ant-picker-calendar-header {
    padding-top: 0;
  }

  .ant-picker-calendar-date {
    width: 90% !important;
  }

  .ant-picker-calendar-date-content {
    height: 75px !important;
  }

  .ant-card {
    border-radius: 9px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  .ant-card-body {
    padding: 28px 28px 0 28px;
  }
`;

export default musclePurpose;