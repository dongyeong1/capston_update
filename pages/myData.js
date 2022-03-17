import React from "react";
import { Table, Card } from "antd";
import styled from "styled-components";
import moment from "moment";

const { Column } = Table;

const data = [
  {
    key: "1",
    kind: "라이딩",
    name: "6번 옥천교차로-> 오빈리",
    distance: 32,
    altitude: 4,
    time: "1:56",
    date: "2022-03-02",
  },
  {
    key: "2",
    kind: "라이딩",
    name: "두물머리",
    distance: 6.2,
    altitude: 12,
    time: "7:12",
    date: "2022-03-04",
  },
  {
    key: "3",
    kind: "라이딩",
    name: "구한시-수석교",
    distance: 2.07,
    altitude: 11,
    time: "2:35",
    date: "2022-03-05",
  },
];

const dateFormat = (d) => {
  let date = moment(d);
  return date.format("YYYY년 MM월 DD일");
};

const dummyData = [];

for (let i = 0; i <= 5; i++) {
  dummyData.push(
    {
      key: "1",
      kind: "라이딩",
      name: "6번 옥천교차로-> 오빈리",
      distance: 32,
      altitude: 4,
      time: "1:56",
      date: "2022-03-02",
    },
    {
      key: "2",
      kind: "라이딩",
      name: "두물머리",
      distance: 6.2,
      altitude: 12,
      time: "7:12",
      date: "2022-03-04",
    },
    {
      key: "3",
      kind: "라이딩",
      name: "구한시-수석교",
      distance: 2.07,
      altitude: 11,
      time: "2:35",
      date: "2022-03-05",
    }
  );
}

const sortData = ["ascend", "descend", "ascend"];

const myData = () => {
  return (
    <Container>
      <h1>내 라이딩 기록</h1>
      <CardDiv>
        <Card>
          <Table dataSource={data} pagination={false} scroll={{ y: 400 }}>
            <Column title="유형" dataIndex="kind" key="kind" />
            <Column
              title="이름"
              dataIndex="name"
              key="name"
              render={(name) => <a>{name}</a>}
            />
            <Column
              title="거리"
              dataIndex="distance"
              key="distance"
              render={(v) => <p>{v}km</p>}
            />
            <Column
              title="고도"
              dataIndex="altitude"
              key="altitude"
              sortDirections={sortData}
              sorter={(a, b) => a.altitude - b.altitude}
              render={(v) => <p>{v}m</p>}
            />
            <Column title="시간" dataIndex="time" key="time" />
            <Column
              title="날짜"
              dataIndex="date"
              key="date"
              render={(v) => dateFormat(v)}
              sorter={(a, b) => moment(a.date) - moment(b.date)}
            />
          </Table>
        </Card>
      </CardDiv>
    </Container>
  );
};

export default myData;

const Container = styled.div`
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .ant-card {
      width:100%;
    border-radius: 7px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }
`;

const CardDiv = styled.div`
  a {
    color: #1890ff;
  }

  p {
    margin: 0;
  }
`;