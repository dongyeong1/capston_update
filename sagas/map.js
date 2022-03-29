import { all,call,fork,put,takeLatest, take} from 'redux-saga/effects'
import axios from 'axios'
import { SEARCH_MAP_REQUEST ,
SEARCH_MAP_SUCCESS,
SEARCH_MAP_FAILURE,
LOAD_MAP_REQUEST,
LOAD_MAP_SUCCESS,
LOAD_MAP_FAILURE,
MOVING_MAP_SUCCESS,
MOVING_MAP_REQUEST,
MOVING_MAP_FAILURE,
RUNNING_MAP_FAILURE,
RUNNING_MAP_SUCCESS,
RUNNING_MAP_REQUEST,
BIKE_MAP_REQUEST,
BIKE_MAP_SUCCESS,
BIKE_MAP_FAILURE,
LOAD_CREATEMAP_REQUEST,
LOAD_CREATEMAP_SUCCESS,
LOAD_CREATEMAP_FAILURE,
ADD_TRACK_REQUEST,
ADD_TRACK_SUCCESS,
ADD_TRACK_FAILURE,
LOAD_MY_LOCATION_REQUEST,
LOAD_MY_LOCATION_SUCCESS,
LOAD_MY_LOCATION_FAILURE
} from '../reducers/map'



function searchMapAPI(data){
    // 13.124.24.179/api/track/search?bounds=128.4642505645752&bounds=35.8402903083385&bounds=128.5250186920166&bounds=128.5250186920166&zoom=16&event=B
    return axios.get(`http://13.124.24.179/api/tracks/search?bounds=${data.north.lng}&bounds=${data.north.lat}&bounds=${data.south.lng}&bounds=${data.south.lat}&event=${data.event}`)
    // return axios.get(`http://13.124.24.179/api/track/search?bounds=128.4642505645752&bounds=35.8402903083385&bounds=128.5250186920166&bounds=128.5250186920166&zoom=16&event=B`)
    }
    

function* searchMap(action){
    try{
        const result = yield call(searchMapAPI,action.data)
        yield put({
            type:SEARCH_MAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:SEARCH_MAP_FAILURE,
            error:err.response.data,
             
        })

    }
}


function loadMapAPI(data){
    return axios.get(`http://13.124.24.179/api/tracks/${data}/ranks`)
    }
    

function* loadMap(action){
    try{
        const result = yield call(loadMapAPI,action.data)
        console.log('maedong',result.data)
        yield put({
            type:LOAD_MAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:LOAD_MAP_FAILURE,
            error:'ss',
             
        })

    }
}

function movingMapAPI(data){
    return axios.get(`http://13.124.24.179/api/tracks/search?bounds=${data.north.lng}&bounds=${data.north.lat}&bounds=${data.south.lng}&bounds=${data.south.lat}&event=${data.event}`)
    }
    

function* movingMap(action){
    try{
        const result = yield call(movingMapAPI,action.data)
        yield put({
            type:MOVING_MAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:MOVING_MAP_FAILURE,
            error:err.response.data,
        })

    }
}

function runningMapAPI(data){
    return axios.get(`http://13.124.24.179/api/tracks/search?bounds=${data.north.lng}&bounds=${data.north.lat}&bounds=${data.south.lng}&bounds=${data.south.lat}&event=${data.event}`)    }
    

function* runningMap(action){
    try{
        const result = yield call(runningMapAPI,action.data)
        yield put({
            type:RUNNING_MAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:RUNNING_MAP_FAILURE,
            error:err.response.data,
        })

    }
}


function bikeMapAPI(data){
    return axios.get(`http://13.124.24.179/api/tracks/search?bounds=${data.north.lng}&bounds=${data.north.lat}&bounds=${data.south.lng}&bounds=${data.south.lat}&event=${data.event}`)
    }
    

function* bikeMap(action){
    try{
        const result = yield call(bikeMapAPI,action.data)
        yield put({
            type:BIKE_MAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:BIKE_MAP_FAILURE,
            error:err.response.data,
        })

    }
}


function createmapLoadAPI(data){
    return axios.get(`http://13.124.24.179/api/gpsdata/${data}`) 
   }


function* createmapLoad(action){
    try{
        const result = yield call(createmapLoadAPI,action.data)
        console.log('zxct',result.data)
        yield put({
            type:LOAD_CREATEMAP_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:LOAD_CREATEMAP_FAILURE,
            error:err.response.data,
        })

    }
}



function addTrackAPI(data){
    console.log('jong',data)
    return axios.post(`http://13.124.24.179/api/tracks`,data) 
   }


function* addTrack(action){
    try{
        const result = yield call(addTrackAPI,action.data)
        console.log('dsss',result)
        yield put({
            type:ADD_TRACK_SUCCESS,
        })

    }catch(err){
        yield put({
            type:ADD_TRACK_FAILURE,
            error:err.response.data,
        })

    }
}


function myLocationAPI(data){
    return axios.get(`http://13.124.24.179/api/tracks/search?bounds=${data.north.lng}&bounds=${data.north.lat}&bounds=${data.south.lng}&bounds=${data.south.lat}&event=${data.event}`)
}
   


function* myLocation(action){
    try{
        const result = yield call(myLocationAPI,action.data)
        yield put({
            type:LOAD_MY_LOCATION_SUCCESS,
            data:result.data
        })

    }catch(err){
        yield put({
            type:LOAD_MY_LOCATION_FAILURE,
            error:err.response.data,
        })

    }
}



function* watchSearchMap(){
    yield takeLatest(SEARCH_MAP_REQUEST,searchMap)
}

function* wahchLoadMap(){
    yield takeLatest(LOAD_MAP_REQUEST,loadMap)
}

function* watchMovingMap(){
    yield takeLatest(MOVING_MAP_REQUEST,movingMap)
}

function* watchBikeMap(){
    yield takeLatest(BIKE_MAP_REQUEST,bikeMap)
}

function* watchRunningMap(){
    yield takeLatest(RUNNING_MAP_REQUEST,runningMap)
}

function* watchCreateMapLoad(){
    yield takeLatest(LOAD_CREATEMAP_REQUEST,createmapLoad)
}

function* watchAddTrack(){
    yield takeLatest(ADD_TRACK_REQUEST,addTrack)
}

function* watchMyLocation(){
    yield takeLatest(LOAD_MY_LOCATION_REQUEST,myLocation)
}





export default function* rootSaga(){

    yield all([
        fork(watchSearchMap),
        fork(wahchLoadMap),
        fork(watchMovingMap),
        fork(watchBikeMap),
        fork(watchRunningMap),
        fork(watchCreateMapLoad),
        fork(watchAddTrack),
        fork(watchMyLocation),
        

      
    ])

}
