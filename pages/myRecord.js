import React ,{useState,useEffect}from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {LOAD_CREATEMAP_REQUEST} from '../reducers/map';
import Link from 'next/link'
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios'
import { Card, Button, Table, Select,Modal } from "antd";
import styled from "styled-components";
const { Column } = Table;
import moment from "moment";
import { DELETE_MYPOST_REQUEST } from '../reducers/user';
const { Option } = Select;


const Calculation=(data)=>{

  return data/1000
}

function myRecord() {


    const dateFormat = (d) => {
        let date = moment(d);
        return date.format("YYYY년 MM월 DD일");
      };
    const sortData = ["ascend", "descend", "ascend"];
    const [deleteBtn, setDeleteBtn] = useState(false);
    const onChangeDelete = () => {
        setDeleteBtn((prev) => !prev);
      };
    function timeChange(seconds) {
        //3항 연산자를 이용하여 10보다 작을 경우 0을 붙이도록 처리 하였다.
        var hour =
          parseInt(seconds / 3600) < 10
            ? // ? "0" + parseInt(seconds / 3600)
              parseInt(seconds / 3600)
            : null;
        var min =
          parseInt((seconds % 3600) / 60) < 10
            ? "0" + parseInt((seconds % 3600) / 60)
            : parseInt((seconds % 3600) / 60);
        var sec = seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;
        //연산한 값을 화면에 뿌려주는 코드
        const value = hour === 0 ? min + ":" + sec : hour + ":" + min + ":" + sec;
        return value;
      }


    useEffect(()=>{
      Modal.destroyAll()
    },[])
    const [gpsId,setGpsId]=useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [propsId,setPropsId]=useState()
    const dispatch=useDispatch()
    const {me}=useSelector((state)=>state.user)
    
    const createLink=(data)=>{
        setPropsId(data.gps_id)
    }

    // useEffect(()=>{
    //   window.location.reload
    // },[me.posts])
   
    useEffect(()=>{
        if(propsId){
            dispatch({
                type:LOAD_CREATEMAP_REQUEST,
                data:propsId
              })
                
            Router.push({
                pathname: '/Create/[id]',
                query: {id:propsId},
            });
        }
        

    },[propsId])


    const recordDelete=(gpsId)=>{
        dispatch({
          type:DELETE_MYPOST_REQUEST,
          data:gpsId
        })
    }

    const deleteModal=(data)=>{
      // setGpsId(data)
     var deleteform=confirm('진짜삭제하겠습니까?')
     if(deleteform){
       recordDelete(data)
     }else{
       console.log('다음에취소')
     }
     

      // setIsModalVisible(true)
    }

    const cancel=()=>{
      setIsModalVisible(false)
    }



  return (

    <Container>
      {/* <h1>내 활동기록</h1>
      {me.posts.map((v) => (
        <Card hoverable style={{ width: 1000 }}>
          {v.title}
          <Button
            style={{ fontSize: 15, marginLeft: 800 }}
            onClick={() => createLink(v)}
          >
            경로만들기
          </Button>
        </Card>
      ))} */}
      <h1>내 종합 운동기록</h1>
      <CardDiv>
        <Card>
          <TopDiv>
            <Card>빈공간</Card>
          </TopDiv>

          <Table
            style={{ marginTop: "30px" }}
            dataSource={me.posts}
            pagination={false}
          >
                    
            <Column
              title="유형"
              dataIndex="event"
              key="event"
              render={(e) => {
                if (e === "B") {
                  return <p>라이딩</p>;
                }
                return <p>달리기</p>;
              }}
              filters={[
                {
                  text: "라이딩",
                  value: "B",
                },
                {
                  text: "달리기",
                  value: "R",
                },
              ]}
              onFilter={(value, record) => record.event.indexOf(value) === 0}
            />

            <Column
              title="이름"
              dataIndex="title"
              key="title"
              render={(title) => <a>{title}</a>}
            />
            <Column
              title="거리"
              dataIndex="distance"
              key="distance"
              render={(v) => <p>{Calculation(v).toFixed(2)}km</p>}
            />
            <Column
              title="고도"
              dataIndex="altitude"
              key="altitude"
              sortDirections={sortData}
              sorter={(a, b) => a.altitude - b.altitude}
              render={(v) => <p>{v}m</p>}
            />
            <Column
              title="시간"
              dataIndex="time"
              key="time"
              render={(v) => timeChange(v)}
            />
            <Column
              title="날짜"
              dataIndex="created_at"
              key="created_at"
              render={(v) => dateFormat(v)}
              sorter={(a, b) => moment(a.created_at) - moment(b.created_at)}
            />
            <Column
              title={
                // <p onClick={onChangeDelete}>수정</p>
                <Select defaultValue="종목 선택">
                  <Option>달리기</Option>
                  <Option>라이딩</Option>
                </Select>
              }
              width="200px"
              align="right"
              dataIndex="id"
              key="id"
              render={(v, record) => (
                <>
                  <Button type="success" onClick={() => createLink(record)}>
                    경로만들기
                  </Button>
                  {/* {deleteBtn ? (
                    <Button type="danger" style={{ translate: "all 0.2" }}>
                      삭제
                    </Button>
                  ) : null} */}
                  <Button type="danger" onClick={()=>deleteModal(record.id)} style={{ translate: "all 0.2" }}>
                    삭제
                  </Button>
                </>
              )}

            />
              

          </Table>
          
        </Card>
      </CardDiv>
      
     
    </Container>
    
   
    
  )
}




export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    
    
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
     context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST
      });
    
      context.store.dispatch(END);
      await context.store.sagaTask.toPromise();
  })
  

export default myRecord

const Container = styled.div`
  padding: 0 7%;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .ant-card {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
    margin: 0;
  }

  .ant-table-row {
    height: 80px;
  }

  .ant-table-row:nth-child(2n) {
    background: #fafafa;
  }

  .ant-table-row:hover td {
    background: #e5e5e5 !important;
  }

  // .ant-table-row:nth-child(2n):hover td {
  //   background: #e5e5e5 !important;
  // }
`;

const CardDiv = styled.div`
  a {
    color: #1890ff;
  }

  p {
    margin: 0;
  }
`;

const TopDiv = styled.div`
  border: 1px solid grey;

  .ant-card {
    // background: #1890ff;
    border-radius: 0 !important;
    box-shadow: none !important;
    // color: #fff;
  }
`;