import React ,{useEffect}from 'react'
import { Menu, Button,Row,Col,Card} from 'antd';
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
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import {LOAD_POSTS_REQUEST} from '../reducers/post'
import SideBar from '../component/Layout/SideBar';
// import wrapper from '../store/configureStore'
import { END } from 'redux-saga';
import MyPurpose from '../component/myPurpose';
import Rank from '../component/Rank';
import Goal from '../component/goal'
import cookie from 'react-cookies'
import cookies from "next-cookies";

import { setCookie, getCookie, removeCookie } from 'react-cookies'

function index() {
    const {searchMap}=useSelector((state)=>state.map)
    const {me} =useSelector((state)=>state.user)
    const {mainPosts,hasMorePosts,loadPostsLoading}=useSelector((state)=>state.post)
  const dispatch=useDispatch()
  
// useEffect(()=>{
// dispatch({
//   type:LOAD_MY_INFO_REQUEST
// })
// },[])
  // useEffect(() => {
  //  dispatch({
  //    type:LOAD_MY_INFO_REQUEST
  //  })
   
  //  console.log('me',me)
  // },[]);

  // useEffect(()=>{
  //   dispatch({
  //     type:LOAD_POSTS_REQUEST
  //    })
  // },[me])

  const sss=()=>{
    dispatch({
      type:LOAD_POSTS_REQUEST
     })
  }

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
    <div > 
   
    
            <Row gutter={12} >
               <Button onClick={sss}>ssss</Button>
               
                <Col  span={14} >
                  
              
                  
                  <Rank></Rank>
                            <Row>
                            <Col span={16}>
                            <Goal/>
                            </Col>
                          <Col span={8}>
                            <MyNote></MyNote>
                              </Col>
                              </Row>

                    
                    {/* <MyPurpose></MyPurpose> */}
               
                </Col>
                
                    <Col span={8}>
                    <div style={{overflow:'auto' ,width: 700 ,marginLeft:50,height:'87vh',borderLeftWidth:0,borderTopWidth:0,borderBottomWidth:0,borderRightWidth:0,borderStyle:'solid',borderColor:'#1890ff'}} > 

                    {mainPosts.map((post)=> <PostCard post={post} key={post.id}/> )}
                    </div>
                    
                    </Col>

            </Row>
            
    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    
  // const cookie = context.req ? context.req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  // console.log('cookiqq',context.req.headers )
  // console.log('enddddddddd')
  // if (context.req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  // console.log('logindexqq',context.req.headers)
  // console.log('resetssssqqqq')
  
  // context.store.dispatch({
  //     type:LOAD_POSTS_REQUEST
  // })
  // context.store.dispatch(END)
  // await context.store.sagaTask.toPromise()

  //  console.log('logindexqq',context.req.headers.cookie['dong'])
  //   const tokens=cookies(context)
  //  console.log('dddddssss',tokens['dongs'])
  //  console.log('axios',axios.defaults.headers)
  // //  axios.defaults.headers.Cookie = tokens['dongs'];
  //  axios.defaults.headers.Authorization='';
  //  axios.defaults.headers.common['Authorization'] = `Bearer ${tokens['dongs']}`;
  //  axios.defaults.headers.Cookie=tokens['dongs']
  //  axios.defaults.headers.Cookie=context.req.headers.cookie
  //  axios.defaults.withCredentials = true;
  //  console.log('axios',axios.defaults.headers)
  //  if(axios.defaults.headers.Cookie=tokens['dongs']){
   
  //  }

  


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



  //  console.log('ddd')
  //     const coo=cookie.load('dongs')
  //     console.log('doongss',coo)
        //    context.store.dispatch({
        //   type: LOAD_MY_INFO_REQUEST,
        //   data: cookie,
        // });
    // if (context.req && cookie) {
      
    //     context.store.dispatch({
    //       type: LOAD_MY_INFO_REQUEST,
    //       data: cookie,
    //     });
      
    // }
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

export default index;
