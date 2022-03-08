import React ,{useEffect}from 'react'
import { Menu, Button,Row,Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../component/LoginForm';
import UserProfile from '../component/UserProfile';
import UserBadge from '../component/userBadge';
import axios from 'axios'

import wrapper from '../store/configureStore';
import PostCard from '../component/PostCard';
import Guild from '../component/Guild';
// import AppLayout from '../component/AppLayout';
import MyNote from '../component/MyNote';
import PostForm from '../component/postForm';
import Badge from '../component/badge';
import {LOAD_POSTS_REQUEST} from '../reducers/post'
import SideBar from '../component/Layout/SideBar';
// import wrapper from '../store/configureStore'
import { END } from 'redux-saga';
function index() {
    const {searchMap}=useSelector((state)=>state.map)
    const {me} =useSelector((state)=>state.user)
    const {mainPosts,hasMorePosts,loadPostsLoading}=useSelector((state)=>state.post)
  const dispatch=useDispatch()

  useEffect(()=>{
 
  },[])

  // useEffect(()=>{
  //   function onScroll(){
  //       if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300){
  //           if(hasMorePosts && !loadPostsLoading){
  //               dispatch({
  //                   type:LOAD_POSTS_REQUEST
  //               })
  //              }
  //       }
  //   }
  //   window.addEventListener('scroll',onScroll)
  //   return()=>{
  //   window.removeEventListener('scroll',onScroll)    
  //   }
  //   },[hasMorePosts,loadPostsLoading])


  return (
    <div style={{backgroundColor:'gray'}}> 
    {/* <AppLayout></AppLayout> */}
    
    <Row gutter={12} >
                {/* <Col span={12}>asd</Col>
                <Col span={12}>asds</Col> */}
                {/* <Col span={6}> */}
                    {/* <UserProfile></UserProfile>`` */}
                    {/* {me? <UserProfile></UserProfile>:<LoginForm></LoginForm>}
                    <MyNote></MyNote> */}
                    {/* <oneExerciseChart/> */}
                {/* </Col> */}
               
                <Col  span={16} >
                    {/* <PostForm></PostForm> */}
                {mainPosts.map((post)=> <PostCard post={post} key={post.id}/> )}
                </Col>
                <Col span={6}>
                    {/* <Badge></Badge> */}
                    <MyNote></MyNote>
                    <Guild ></Guild>

                    {/* <UserBadge></UserBadge> */}
                    </Col>

            </Row>
    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  //   const cookie = context.req ? context.req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  // if (context.req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
// context.store.dispatch({
//     type:LOAD_MY_INFO_REQUEST
//   });
  context.store.dispatch({
      type:LOAD_POSTS_REQUEST
  })
  context.store.dispatch(END)
  await context.store.sagaTask.toPromise()
})

export default index;
