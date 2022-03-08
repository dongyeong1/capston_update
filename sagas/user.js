
import { all,call,fork,put,takeLatest, take} from 'redux-saga/effects'
import {LOGIN_FAIL, LOGIN_REQUEST,LOGIN_SUCCESS,LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,LOGOUT_FAIL, SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,
    FOLLOWING_SUCCESS,FOLLOWING_REQUEST,FOLLOWING_FAIL,UNFOLLOWING_REQUEST,
    UNFOLLOWING_SUCCESS,UNFOLLOWING_FAIL, LOAD_LOGIN_REQUEST, LOAD_LOGIN_SUCCESS, LOAD_LOGIN_FAILURE} from '../reducers/user'
import axios from 'axios'

// function logInAPI(data){
//     let config={
//         headers:{
//             'Content-Type': 'application/json',
//             Accept:"application/json"
//         }
       
//     }

//     return axios.post('http://3.35.239.14/api/login',data,config,{credentials:'include'})
// }


function logInAPI(data){
    return fetch('http://3.35.239.14/api/login',{
        method:'POST',
    headers: {'Content-Type': 'application/json',
    Accept:"application/json"
},
    credentials: 'include',
    // email:data.email,
    // password:data.password
    body: JSON.stringify({
        emali:data.email,
        password:data.password
    
})
   }   
   )
}

function* login(action){
const result =yield call(logInAPI,action.data)
try{
yield put({
    type:LOGIN_SUCCESS,
    data:result.data
})
}catch(err){
    yield({
        type:LOGIN_FAIL,
        data:'error'
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
        

    function loadLoginAPI(data){
        return axios.post(`http://3.35.239.14/api/user`,{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })

        })
        }
        
        function* loadLogin(action){
        
            try{
                const result=yield call(loadLoginAPI,action.data)
                
                  yield put({
                      type:LOAD_LOGIN_SUCCESS,
                      data:action.data
                  })
              }catch(err){
                  yield put({
                      type:LOAD_LOGIN_FAILURE,
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

export default function* rootSaga(){

    yield all([
        fork(watchLoadLogin),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
        fork(watchFollowing),
        fork(watchUnFollowing)
    ])

}