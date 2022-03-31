import React ,{useEffect}from 'react'
import { Menu, Button,Row,Col,Card} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../component/LoginForm';

import axios from 'axios'
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import PostCard from '../component/PostCard';
import MyNote from '../component/MyNote';
import styled from "styled-components";
import {LOAD_MORE_POST_REQUEST, LOAD_POSTS_REQUEST} from '../reducers/post'

import Rank from '../component/Rank';
import Goal from '../component/goal'


function index() {


    const {searchMap}=useSelector((state)=>state.map)
    const {me} =useSelector((state)=>state.user)
    const {mainPosts,hasMorePosts,loadMorePostLoading}=useSelector((state)=>state.post)
    const dispatch=useDispatch()
  



  useEffect(()=>{
    function onScroll(){
        if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300){
            if(hasMorePosts && !loadMorePostLoading){
              dispatch({
                type:LOAD_MORE_POST_REQUEST,
                data:mainPosts.nextPage
              })


               }
        }
    }
    window.addEventListener('scroll',onScroll)
    return()=>{
    window.removeEventListener('scroll',onScroll)    
    }
    },[hasMorePosts,loadMorePostLoading])
 


  return (
    <Container>
    <LeftDiv>
      {/* <Button onClick={sss}>ssss</Button> 포스트 새로불러오기 */}
      <Rank /> 
      {/* <MyPurpose></MyPurpose> 원래 주석처리 된거*/}
      <LeftBottomDiv>
        <Goal />
        <MyNote />
      </LeftBottomDiv>
    </LeftDiv>
    <RightDiv>
      <PostDiv>
        {mainPosts.data.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </PostDiv>
    </RightDiv>
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

  context.store.dispatch({
      type:LOAD_POSTS_REQUEST
  })
  console.log('getssr',new Date().toTimeString())
  
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

export default index;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 2%;
`;

const LeftDiv = styled.div`
  display: inline-block;
  width: 70%;
  height: 100%;
  // border: 1px solid grey;
`;

const LeftBottomDiv = styled.div`
  display: flex;
  width: 70%;
  // border: 1px solid grey;
`;

const RightDiv = styled.div`
  display: inline-block;
  width: 30%;
  // border: 1px solid grey;
  padding-left: 10px;
`;

const PostDiv = styled.div`
  // 무한스크롤
  
  width: 100%;
  padding-left: 5px;
  height: 84.2vh;
  border-lef-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-width: 0;
  // border-style: solid;
  // border-color: #1890ff;
`;