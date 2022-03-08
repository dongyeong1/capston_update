import React, { useState, useEffect, Component } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import {
  Layout,
  Card,
  Space,
  Avatar,
  Button,
  List,
  Calendar,
  Row,
  Col,
  Table,
  Tag,
} from "antd";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const { Meta } = Card;
const { Column } = Table;

// useEffect(() => {
//   const fetchEvents = async () => {
//     const res = await axios.get(
//       "/api/"
//     );
//     makeData(res.data);
//   };
// }, [])

const dashboard = () => {
  const bar = {
    // 바 그래프 더미데이터
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["월", "화", "수", "목", "금", "토", "일"],
      },
      grid: { show: false },
    },
    series: [
      {
        name: "라이딩 km",
        data: [30, 40, 45, 50, 49, 60, 90],
      },
    ],
  };

  const pie = {
    // 파이 차트 더미데이터
    series: [55, 20],
    chartOptions: {
      labels: ["러닝", "라이딩"],
      textAnchor: "middle",
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "40%",
          },
        },
      },
      colors: ["#0288D1", "#BBDEFB"],
      // "#1890ff"
    },
  };

  const cardScore = [
    // 차트그래프 옆 카드 더미데이터
    {
      title: "최고 누적 고도",
      distance: "2500",
    },
    {
      title: "총 운동 횟수",
      distance: "75",
    },
    {
      title: "최장 라이딩 거리",
      distance: "320km",
    },
    {
      title: "총 라이딩 거리",
      distance: "4500km",
    },
  ];

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

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

  return (
    <Container>
      <ChartWrapper>
        <ScoreDiv>
          <Row gutter={16}>
            {cardScore.map((card, index) => (
              <Col span={6}>
                <Card key={index}>
                  <h3>{card.title}</h3>
                  <p>{card.distance}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </ScoreDiv>
        <div>
          <ChartDiv>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <h1>라이딩 주간일지</h1>
                  <p>평균 주행기록은 ??km 입니다</p>
                  <div>
                    {typeof window !== "undefined" && (
                      <Chart
                        options={bar.options}
                        series={bar.series}
                        type="bar"
                        // width="480px"
                        height="250px"
                        styles={{ width: "48vw" }}
                      />
                    )}
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <LoadScript googleMapsApiKey="AIzaSyAONuIuF8EgvSHN6r53EJmqXI7iMDhvSvo">
                    <GoogleMap
                      mapContainerStyle={MapStyle}
                      center={center}
                      zoom={10}
                    />
                  </LoadScript>
                </Card>
              </Col>
            </Row>
          </ChartDiv>
        </div>
        <CardDiv>
          <Card>
            <Table dataSource={data} pagination={false}>
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
      </ChartWrapper>
      <ProfileDiv>
        <ProfileWrapper>
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                padding: "10px 20%",
              }}
            >
              <h1>My Profile</h1>
              <img src="option.png" />
            </div>

            <QuestionDiv>
              <Avatar
                src="kurumi.jpg"
                size={76}
                style={{ background: "#00a2ae" }}
              >
                Image
              </Avatar>
              <div style={{ marginBottom: "10px" }}>
                <h3>이름</h3>
              </div>
              <Meta description="Rider" />
              <Link href="/setting">
                <Button>
                  <a>Edit Profile</a>
                </Button>
              </Link>
            </QuestionDiv>
          </Card>
        </ProfileWrapper>
        <PieDiv>
          <CardWrapper size="default" title="나의 운동종목">
            <Chart
              type="donut"
              options={pie.chartOptions}
              series={pie.series}
              width={300}
              height={280}
            />
          </CardWrapper>
        </PieDiv>
      </ProfileDiv>
    </Container>
  );
};

export default dashboard;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // padding: 4% 9%;
  // margin: 0 auto;

  .ant-card {
    border-radius: 9px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }
`;

const ScoreDiv = styled.div`
  p {
    margin: 7px;
  }

  h3 {
    margin: 0;
    font-weight: bold;
  }

  .ant-card {
    height: 120px;
    border-radius: 9px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  .ant-card-body {
    margin-top: 20px;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: center;
  }
`;

const QuestionDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 40px;
  text-align: center;
  margin-top: 10px;

  & div {
  }

  & a {
    font-size: 16px;
  }

  .ant-card-meta-description {
    margin-bottom: 10px;
  }
`;

const CardWrapper = styled(Card)`
  width: 100%;
  height: 100%;
  // margin-top: 16px;

  .ant-card-body {
    padding: 0 !important;
  }
`;

const MapStyle = {
  width: "25vw",
  height: "30vh",
  borderRadius: "9px",
};

const ChartWrapper = styled.div`
  display: block;
  // display: flex;
  width: 100%;
  height: 100%;
`;

const CardDiv = styled.div`
  margin-top: 16px;

  a {
    color: #1890ff;
  }
`;

const ChartDiv = styled.div`
  display: inline-block;
  width: 100%;
  // height: 100%;
  margin-top: 16px;

  .apexcharts-canvas {
    text-align: center;
    margin: 0 auto;
  }

  .ant-card-head-title {
    padding: 10px 0;
  }

  .ant-card-body {
    min-height: 322px;
    padding: 0 24px;
  }

  .ant-card {
    border-radius: 9px;
  }

  p {
    margin: 0;
  }
`;

const BottomDiv = styled(ChartDiv)`
  .ant-card {
    width: 300px;
    height: 300px;
    border-radius: 9px;
  }
`;

const ProfileDiv = styled.div`
  display: inline-block;
  width: 20%;
  height: 100%;
  // border: 1px solid grey;
  margin-left: 16px;

  .ant-btn {
    display: inline-block;
    width: 110px;
    height: 35px;
    text-align: center;
    border-radius: 7px;
    background: #1890ff;
    color: #fff;
  }

  // .ant-card {
  //   width: 100%;
  //   border-radius: 0;
  // }
`;

const ProfileWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 60%;
  text-align: center;

  h1 {
    text-align: left;
  }

  .ant-card {
    height: 97%;
  }
`;

const PieDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 40%;

  .ant-card {
    width: 100%;
  }
`;