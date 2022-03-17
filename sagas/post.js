
import { all,call,fork,put,takeLatest, take} from 'redux-saga/effects'

import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS,LOAD_POSTS_REQUEST,ADD_COMMENT_REQUEST,ADD_COMMENT_FAILURE,ADD_COMMENT_SUCCESS} from '../reducers/post'
import axios from 'axios'

function addPostAPI(data){
// return axios.post('/signup',data)
}

function* addPost(action){

    try{
        // const result=yield call(addPostAPI,action.data)
        console.log('ddddddddd')
          yield put({
              type:ADD_POST_SUCCESS,
              data:action.data
          })
      }catch(err){
          yield put({
              type:ADD_POST_FAILURE,
              error:err.response.data,
               
          })
      }
}


const loadPostsAPI =async()=>{
    console.log('1111')
    const res=await axios.get('https://2yubi.shop/api/post/index')

    const data=await res.data
    return data
    }
    

function* loadPosts(action){
    try{
        const result = yield call(loadPostsAPI)
        console.log('dongresultss',result)
        yield put({
            type:LOAD_POSTS_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:LOAD_POSTS_FAILURE,
            error:'xx',
             
        })

    }
}

function addCommentAPI(data){
    // return axios.post('/loadPosts',data)
    }
    

function* addComment(action){
    try{
        // const result = yield call(addCommentAPI,action.data)
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:action.data
        })

    }catch(err){
        yield put({
            type:ADD_COMMENT_FAILURE,
            error:'err.response.data',
             
        })

    }
}



function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost)
}

function* watchLoadPosts(){
    yield takeLatest(LOAD_POSTS_REQUEST,loadPosts)
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment)
}

export default function* rootSaga(){

    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchAddComment),
        
      
    ])

}
