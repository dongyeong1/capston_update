
import { all,call,fork,put,takeLatest, take} from 'redux-saga/effects'
import {LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,LOGOUT_FAIL, SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,
    FOLLOWING_SUCCESS,FOLLOWING_REQUEST,FOLLOWING_FAIL,UNFOLLOWING_REQUEST,
    UNFOLLOWING_SUCCESS,UNFOLLOWING_FAIL, LOAD_LOGIN_REQUEST, LOAD_LOGIN_SUCCESS, LOAD_LOGIN_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE} from '../reducers/user'
import axios from 'axios'
import { FaCookie } from 'react-icons/fa';
import cookie from 'react-cookies'
import { setCookie, getCookie, removeCookie } from 'react-cookies'
import { withCookies, Cookies } from 'react-cookie';

var cookies=new Cookies()

// function logInAPI(data){
//     let config={
//         headers:{
//             'Content-Type': 'application/json',
//             Accept:"application/json"
//         }
      
       
//     }

//     return axios.post('https://2yubi.shop/api/login',data)
// }





const logInAPI=async(datas)=>{
    try{
        const res= await fetch("https://2yubi.shop/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              email:datas.email,
              password:datas.password,
        }),
          });
          const data= await res.json()
        //   axios.defaults.headers.common['x-access-token']=data.message
        cookie.save('login_token',data.login_token, {
            path: "/",
          });
        //   cookie.save("refreshToken", refreshToken, {
        //     path: "/",
        //   });
          return data

    }catch(err){
        console.log(err)
    }
}


function* login(action){

try{
    const result =yield call(logInAPI,action.data)
console.log('userResult',result.headers)
yield put({
    type:LOGIN_SUCCESS,
    data:result
})
}catch(err){
    yield put({
        type:LOGIN_FAIL,
        data:err.response.data
    })
}
} 


function logOutAPI(data){
    return axios.post('http://3.35.239.14/api/logout')
}

function* logout(){
    try{
        yield call(logOutAPI)
        yield put({
            type:LOGOUT_SUCCESS,
        })
    }catch(err){
        yield put({
            type:LOGOUT_FAIL,
            error:'error'
             
        })
    }
} 

function signupAPI(data){
return axios.post('http://3.35.239.14/api/register',data)
}

function* signup(action){

    try{
       yield call(signupAPI,action.data)
        
          yield put({
              type:SIGNUP_SUCCESS,
          })
      }catch(err){
          yield put({
              type:SIGNUP_FAIL,
              error:err.response.data,
               
          })
      }
}


function followAPI(data){
    return axios.post(`http://3.35.239.14/api/follow/${data.id}`)
    }
    
    function* following(action){
    
        try{
            const result=yield call(followAPI,action.data)
            
              yield put({
                  type:FOLLOWING_SUCCESS,
                  data:action.data
              })
          }catch(err){
              yield put({
                  type:FOLLOWING_FAIL,
                  error:err.response.data,
                   
              })
          }
    }


    function unfollowAPI(data){
        return axios.post(`http://3.35.239.14/api/follow/${data}`)
        }
        
        function* unfollowing(action){
        
            try{
                const result=yield call(unfollowAPI,action.data)
                
                  yield put({
                      type:UNFOLLOWING_SUCCESS,
                      data:action.data
                  })
              }catch(err){
                  yield put({
                      type:UNFOLLOWING_FAIL,
                      error:err.response.data,
                       
                  })
              }
        }



        // const logInAPI=async(datas)=>{
        //     try{
        //         const res= await fetch("https://2yubi.shop/api/login", {
        //             method: "POST",
        //             headers: {
        //               "Content-Type": "application/json",
        //               Accept: "application/json",
        //             },
        //             credentials: "include",
        //             body: JSON.stringify({
        //               email:datas.email,
        //               password:datas.password,
        //             }),
        //           });
        //           const data= await res.json()
        //           return data
        
        //     }catch(err){
        //         console.log(err)
        //     }
        // }
        




       


const loadUserInfoAPI=async()=>{
    
        // const res= await fetch("https://2yubi.shop/api/user", {
        //     headers: { "Content-Type": "application/json" },
        //     credentials: "include",
        //   })
    // console.log('axiosstart',axios.defaults)
        const res=await axios.get('https://2yubi.shop/api/user')
   
          
          
    
         
          const data= await res.data          
          return data

   
}

        function* loadUserInfo(action){
        
            try{
                console.log('byeongsin',axios.defaults.headers)
                const result=yield call(loadUserInfoAPI)
                console.log('로그인로드됨')
                console.log('zxctqwe',result)
                
                  yield put({
                      type:LOAD_MY_INFO_SUCCESS,
                      data:result
                  })
              }catch(err){
                  yield put({
                      type:LOAD_MY_INFO_FAILURE,
                      error:err.response.data,
                       
                  })
              }
        }
        
    
    
    



function* watchLogin(){
    yield takeLatest(LOGIN_REQUEST,login)
}

function* watchLogout(){
    yield takeLatest(LOGOUT_REQUEST,logout)
}
function* watchSignup(){
    yield takeLatest(SIGNUP_REQUEST,signup)
}
function* watchFollowing(){
    yield takeLatest(FOLLOWING_REQUEST,following)
}
function* watchUnFollowing(){
    yield takeLatest(UNFOLLOWING_REQUEST,unfollowing)
}
// function* watchLoadLogin(){
//     yield takeLatest(LOAD_LOGIN_REQUEST,loadLogin)
// }

function* watchUserInfo(){
    yield takeLatest(LOAD_MY_INFO_REQUEST,loadUserInfo)
}

export default function* rootSaga(){

    yield all([
        // fork(watchLoadLogin),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchFollowing),
        fork(watchUnFollowing),
        fork(watchUserInfo),
    ])

}