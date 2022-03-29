
import { all,call,fork,put,takeLatest, take} from 'redux-saga/effects'
import {LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,LOGOUT_FAIL, SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,
    FOLLOWING_SUCCESS,FOLLOWING_REQUEST,FOLLOWING_FAIL,UNFOLLOWING_REQUEST,
    UNFOLLOWING_SUCCESS,UNFOLLOWING_FAIL, LOAD_LOGIN_REQUEST, LOAD_LOGIN_SUCCESS, LOAD_LOGIN_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SEARCH_FAILURE} from '../reducers/user'
import axios from 'axios'
import { FaCookie } from 'react-icons/fa';
import cookie from 'react-cookies'
import { setCookie, getCookie, removeCookie } from 'react-cookies'
import { withCookies, Cookies } from 'react-cookie';
import  Router  from 'next/router';

var cookies=new Cookies()





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
       
        cookie.save('login_token',data.access_token, {
            path: "/",
          });
       
          return data

    }catch(err){
        console.log(err)
    }
}


function* login(action){

try{
    const result =yield call(logInAPI,action.data)
console.log('userResult',result)
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


const logOutAPI=async(data)=>{
    // return axios.post('https://2yubi.shop/api/logout')

    try{
        const res= await fetch("https://2yubi.shop/api/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
           
       
          });
          const data= await res.json()
       
        cookie.remove('login_token', {
            path: "/",
          });
          
       
          return data

    }catch(err){
        console.log(err)
    }
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


const followAPI=async(datas)=>{
    // return axios.post(`http://3.35.239.14/api/follow/${data.id}`)
    try{
        const res= await fetch(`https://2yubi.shop/api/follow/${datas.id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
           
          });
          const data= await res.json()
      
       
          return data

    }catch(err){
        console.log(err)
    }
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


    const unfollowAPI=async(datas)=>{
        // return axios.post(`http://3.35.239.14/api/follow/${data}`)
        try{
            const res= await fetch(`https://2yubi.shop/api/follow/${datas}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                credentials: "include",
               
              });
              const data= await res.json()
          
           
              return data
    
        }catch(err){
            console.log(err)
        }
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



        
  

const loadLoginAPI=async()=>{

    try{
        const res= await fetch("https://2yubi.shop/api/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
           
          });
          const data= await res.json()
       
      
       
          return data

    }catch(err){
        console.log(err)
    }




    


}

    function* loadLogin(action){
    
        try{
            
            const result=yield call(loadLoginAPI)
            
            
              yield put({
                  type:LOAD_LOGIN_SUCCESS,
                  data:result
              })
          }catch(err){
              yield put({
                  type:LOAD_LOGIN_FAILURE,
                  error:err.response.data,
                   
              })
          }
    }
    
      
        




       


const loadUserInfoAPI=async()=>{
    console.log('dosin',axios.defaults.headers)

        const res=await axios.get('https://2yubi.shop/api/user')
   
          
          
    
         
          const data= await res.data          
          return data

   
}

        function* loadUserInfo(action){
        
            try{
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
        ////////

        const userSearchAPI=async(datas)=>{



            try{
                const res= await fetch('https://2yubi.shop/api/userSearch', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        keyword:datas,
                       
                  }),
                  });
                  const data= await res.json()
              
               
                  return data
        
            }catch(err){
                console.log(err)
            }






        
       
              
              
        
             
    
       
    }
    
            function* userSearch(action){
            
                try{
                    const result=yield call(userSearchAPI,action.data)
                    console.log('userSearchresult',result)
                    
                      yield put({
                          type:USER_SEARCH_SUCCESS,
                          data:result
                      })
                  }catch(err){
                      yield put({
                          type:USER_SEARCH_FAILURE,
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
function* watchLoadLogin(){
    yield takeLatest(LOAD_LOGIN_REQUEST,loadLogin)
}

function* watchUserInfo(){
    yield takeLatest(LOAD_MY_INFO_REQUEST,loadUserInfo)
}
function* watchUserSearch(){
    yield takeLatest(USER_SEARCH_REQUEST,userSearch)
}


export default function* rootSaga(){

    yield all([
        fork(watchLoadLogin),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchFollowing),
        fork(watchUnFollowing),
        fork(watchUserInfo),
        fork(watchUserSearch)
    ])

}