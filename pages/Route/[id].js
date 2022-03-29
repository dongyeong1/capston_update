import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_LOGIN_REQUEST } from '../../reducers/user';
import {
  Polyline,
  Marker,
} from "@react-google-maps/api";
import { LOAD_MAP_REQUEST } from "../../reducers/map";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import { Card, Table, Popover, Avatar, Timeline } from "antd";
import styled from "styled-components";
import moment from "moment";
import { Title, CardDiv } from "../../component/map/selectMap";
const { Column } = Table;
import { useRouter } from "next/router";
import RouteInformation from "../../component/RouteInformation";

import {
  VerticalGridLines,
  HorizontalGridLines,
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  Crosshair,
} from "react-vis";
import "react-vis/dist/style.css";


function oneRoute() {
    const router = useRouter();



    const { loadMap, searchMap } = useSelector((state) => state.map);
    const {me}=useSelector((state)=>state.user)

    const [highAltitude,setHighAltitude]=useState('')
    const [lowAltitude,setLowAltitude]=useState('')
    const [strokeWeight, setStrokeWeight] = useState(5);
    const [elevPath, setElevPath] = useState({
        lat: "",
        lng: "",
      })
    const [state, setState] = useState({
        crosshairValue: [],
      });
    const [index, setIndex] = useState("");

    const dispatch = useDispatch();
    const [indexNumber,setIndexNumber]=useState('')
    const myRank=[]

    useEffect(()=>{

    },[])

    useEffect(()=>{
        console.log('qqqqqq',router.query.userId)
        if(loadMap.rank){
            for(var i=0; i<loadMap.rank.length; i++){
                if(router.query.userId==loadMap.rank[i].user.userId){
                    console.log('iiiiiii',i)
                    setIndexNumber(i)
                    myRank.push(loadMap.rank[indexNumber])
                    break
                }
            }
        }
    },[])

    // useEffect(()=>{
    //     myRank.push(loadMap.rank[indexNumber-1])
    //     myRank.push(loadMap.rank[indexNumber])
    //     myRank.push(loadMap.rank[indexNumber+1])
   
    //     console.log('myrankk',myRank)
    // },[indexNumber])

    useEffect(()=>{
        dispatch({
            type: LOAD_LOGIN_REQUEST
            });
        
            for(var i=1; i<loadMap.track.altitude.length; i++){
                setLowAltitude(loadMap.track.altitude[0].y)
                setHighAltitude(loadMap.track.altitude[0].y)


              

                if(lowAltitude>loadMap.track.altitude[i].y){
                    setLowAltitude(loadMap.track.altitude[i].y)
                }
                if(highAltitude<loadMap.track.altitude[i].y){
                    setHighAltitude(loadMap.track.altitude[i].y)
                }
            }
    },[])
 



 


  const mouseOut = () => {
    setStrokeWeight(5);
    console.log("aaa");
  };

  const mouseOver = () => {
    setStrokeWeight(10);
    console.log("over");
  };

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: strokeWeight,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    //-27부터 호주 시작해서 점찍고 점찍고 한다
    paths: [
      [
        { lat: 35.969997373905, lng: 128.45170755523503 },
        { lat: 35.985501427015464, lng: 128.40407191943035 },

        { lat: 35.89580489690752, lng: 128.62238368221892 },
      ],
    ],
    zIndex: 1,
  };

  //elevmarker

 

  const handleMouseOver = () => {
    console.log("qqqq");
    setState({ crosshairValue: [] });
    setIndex(0);
  };
  const qq = (value, { index }) => {
    console.log(value);
    console.log("aa", index);
    setIndex(index);

    setState({ crosshairValue: loadMap.track.altitude.map((d) => d) });
    setElevPath({
      lat: loadMap.track.gps.coordinates[index][1],
      lng: loadMap.track.gps.coordinates[index][0],
    });
    console.log("ha", state);
  };
  //elevmarker

  const data = [
    {
      userId: 1,
      userNickname: "새별",
      rank: 1,
      record: "02:52:11",
      altitude: 4,
      speed: 27,
      date: "2022-03-02",
    },
    {
      rank: 2,
      userId: 2,
      userNickname: "대영",
      altitude: 12,
      record: "02:55:32",
      speed: 27,
      date: "2022-03-04",
    },
    {
      rank: 3,
      userId: 3,
      userNickname: "세준",
      altitude: 11,
      record: "02:58:06",
      speed: 27,
      date: "2022-03-05",
    },
  ];

  const dateFormat = (d) => {
    let date = moment(d);
    return date.format("YYYY년 MM월 DD일");
  };

  const sortData = ["ascend", "descend", "ascend"];

  return (
    <>
      <Container>
        <TitleText>{loadMap.track.trackName}</TitleText>
        <OverviewDiv>
          <div>
            <div className="title">거리</div>
            <div className="item">{loadMap.track.totalDistance}km</div>
          </div>
          <div>
            <div className="title">소요 시간</div>
            <div className="item">29분</div>
          </div>
          <div>
            <div className="title">속도</div>
            <div className="item">21.4km/h</div>
          </div>
          <div>
            <div className="title">최고 고도</div>
            <div className="item">{highAltitude}m</div>
          </div>
          <div>
            <div className="title">최저 고도</div>
            <div className="item">{lowAltitude}m</div>
          </div>
        </OverviewDiv>
        <TopDiv>
          <LeftDiv>
            <MapDiv>
              <CardDiv>
                <LoadScript googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE">
                  <GoogleMap
                    id="marker-example"
                    mapContainerStyle={mapContainerStyle}
                    zoom={14}
                    center={{
                      lat: loadMap.track.start_latlng[1],
                      lng: loadMap.track.start_latlng[0],
                    }}
                  >
                    <Marker
                      position={{
                        lat: loadMap.track.start_latlng[1],
                        lng: loadMap.track.start_latlng[0],
                      }}
                    />

                    {elevPath && (
                      <Marker
                        position={elevPath}
                        icon={{
                          url: " http://maps.google.com/mapfiles/ms/icons/blue.png",
                        }}
                      ></Marker>
                    )}

                    <Polyline
                      onMouseOver={mouseOver}
                      onMouseOut={mouseOut}
                      options={options}
                      path={loadMap.track.gps.coordinates.map((m) => ({
                        lat: m[1],
                        lng: m[0],
                      }))}
                    ></Polyline>
                  </GoogleMap>
                </LoadScript>
              </CardDiv>
            </MapDiv>
            <MouseDiv>
              <CardDiv hoverable>
                <XYPlot width={700} height={200} onMouseLeave={handleMouseOver}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <LineSeries data={loadMap.track.altitude} onNearestX={qq} />
                  <Crosshair
                    values={state.crosshairValue}
                    className={"test-class-name"}
                  >
                    <div
                      style={{ background: "gray", width: 100, height: 100 }}
                    >
                      <h3>dong</h3>
                      <div style={{ fontSize: 20, marginLeft: 20 }}>
                        {index && state.crosshairValue[index].y}
                      </div>
                    </div>
                  </Crosshair>
                </XYPlot>
              </CardDiv>
            </MouseDiv>
          </LeftDiv>
          <RightDiv>
            <RouteInformation />
            <PDiv>나의랭크</PDiv>
            <div
              style={{
                width: "100%",
                overflow: "auto",
              }}
            >
              {/* <CardWrapper> */}
              <TopCard>
                <div>
                  <span>순위</span>
                  <span>이름</span>
                  <span>속도</span>
                  <span>기록</span>
                  <span>날짜</span>
                </div>
              </TopCard>

              {me === null
                ? ""
                : myRank.map((b, index) => (
                    <BottomCard>
                      <div>
                        <span>{index + 1 + "위"}</span>
                        <Popover
                          placement="topLeft"
                          title="Rider"
                          content={
                            <div
                              style={{
                                display: "flex",
                                margin: "0 auto",
                              }}
                            >
                              <Avatar src="kurumi.jpg" />
                              <p>서민성</p>
                            </div>
                          }
                          trigger="hover"
                        >
                          <a>
                            <span>{b.user.name}</span>
                          </a>
                        </Popover>
                        <span>36km</span>
                        <span>{b.totalTime}</span>
                        <span>{dateFormat(b.createdAt)}</span>
                      </div>
                    </BottomCard>
                  ))}
              {/* </CardWrapper> */}
            </div>
            {/* <Timeline>
              <Timeline.Item>Create a page site 2022-03-11</Timeline.Item>
              <Timeline.Item>
                Solve initial network problems 2022-03-11
              </Timeline.Item>
              <Timeline.Item>Technical testing 2022-03-11</Timeline.Item>
              <Timeline.Item>
                Network problems being solved 2022-03-11
              </Timeline.Item>
            </Timeline> */}
          </RightDiv>
        </TopDiv>
      </Container>
      <RankDiv>
        <Card>
          <Table
            dataSource={loadMap.rank}
            pagination={false}
            // scroll={{ y: 400 }}
          >
            <Column title="순위" dataIndex="rank" key="rank" />
            <Column
              title="이름"
              dataIndex='user'
              key="userNickname"
              render={(a) => <a>{a.name}</a>}
            />
            <Column
              title="속도"
              dataIndex="_id"
              key="speed"
              render={(v) => <p>{v}km</p>}
            />
            <Column
              title="기록"
              dataIndex="totalTime"
              key="record"
             
              render={(v) => <p>{v}m</p>}
            />
            <Column
              title="날짜"
              dataIndex="createdAt"
              key="date"
              render={(v) => dateFormat(v)}
              sorter={(a, b) => moment(a.date) - moment(b.date)}
            />
          </Table>
        </Card>
      </RankDiv>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await axios.get("http://13.124.24.179/api/tracks");

  var paths1 = posts.data.map((id) => ({
    params: { id: id._id },
  }));

  return {
    paths: paths1,
    fallback: false,
  };
}

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_MAP_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default oneRoute;

const mapContainerStyle = {
  //   width: "500px",
  height: "300px",
  width: "100%",
  // height: "30vh",
  borderRadius: "15px",
};

const Container = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 7% 0 7%;
`;

const TopDiv = styled.div`
  display: flex;
  width: 100%;
`;

const RankDiv = styled.div`
  margin-top: 10px;
  padding: 2% 7% 4% 7%;

  .ant-card {
    width: 100%;
    border-radius: 7px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }
`;

const LeftDiv = styled.div`
  width: 65%;
  // border: 1px solid grey;
  padding-right: 20px;
  padding-top: 10px;
  .ant-card {
    width: 100%;
  }
`;

const RightDiv = styled.div`
  width: 35%;
  // border: 1px solid grey;
  padding: 10px;

  .ant-card {
    width: 100%;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  .ant-timeline {
    position: relative;
    top: 40px;
    padding-left: 12px;
  }
`;

const PDiv = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-top: 20px;
`;

const MapDiv = styled.div`
  height: 55%;

  .ant-card-body {
    padding: 5px;
  }
`;

const MouseDiv = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 20px;
 
  .rv-xy-plot {
    display: inline-block;
    width: 100% !important;
    top: 7px;
  }

  .rv-xy-plot__inner {
      width:100%;
    margin: 0;
  }
`;

const TitleText = styled(Title)`
  height: 5%;
  font-weight: 32px;
  line-height: 30px;
  //   margin: 10px auto;
`;

const CardWrapper = styled(CardDiv)`
  .ant-card-body {
    padding: 0;
  }
`;

const TopCard = styled(Card)`
  width: 100%;
  height: 50px;
  line-height: 1px;
  font-weight: 530;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: #1890ff;

  color: #fff;

  .ant-card-body {
    padding: 24px 10px;
  }

  div {
    width: 100%;
    display: flex;
  }

  span:nth-child(-n + 3) {
    display: inline-block;
    width: 16.6%;
    text-align: left;
    padding-left: 10px;
  }

  span:nth-last-child(2) {
    display: inline-block;
    width: 22%;
    text-align: left;
    padding-left: 10px;
  }

  span:nth-last-child(1) {
    display: inline-block;
    width: 28%;
    text-align: left;
    padding-left: 10px;
  }
`;

const BottomCard = styled(Card)`
  width: 100%;

  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  .ant-card-body {
    padding: 24px 10px;
  }

  .ant-popover-title {
    color: #1890ff;
  }

  div {
    width: 100%;
    display: flex;
  }

  a:hover {
    color: black;
  }

  a,
  span:nth-child(-n + 3) {
    display: inline-block;
    width: 16.6%;

    text-align: left;
    padding-left: 10px;
  }

  span:nth-last-child(2) {
    display: inline-block;
    width: 22%;
    text-align: left;
    padding-left: 10px;
  }

  span:nth-last-child(1) {
    display: inline-block;
    width: 28%;
    text-align: left;
    padding-left: 10px;
  }
`;

const OverviewDiv = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;

  div {
    display: inline-block;
    width: 20%;
  }

  div > div {
    width: 100%;
  }

  div > .title {
    font-size: 20px;
  }

  div > .item {
    font-size: 30px;
    font-weight: bold;
  }
`;