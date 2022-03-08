import produce from 'immer'

export const initialState={
    
    // me:{
    //     "id": 2,
    //     "name": "서민성",
    //     "email": "test@gmail.com",
    //     "sex": "여",
    //     "weight": "38kg",
    //     "profile": "img",
    //     "birth": "1999",
    //     "introduce": "토토",
    //     "location": "구미",
    //     "mmr": 42,
    //     "created_at": "2022-03-03T11:34:56.000000Z",
    //     "updated_at": "2022-03-03T11:34:56.000000Z",
    //     "followings": [
    //         {
    //             "id": 1,
    //             "name": "황현종",
    //             "sex": "여",      
    //             "profile": "img",           
    //             "mmr": 90,
                
    //         },
    //         {
    //             "id": 4,
    //             "name": "장재현",
    //             "sex": "여",          
    //             "profile": "img",             
    //             "mmr": 49,           
    //         }
    //     ],
    //     "followers": [],
    //     "posts": [
    //         {
    //             "id": 17,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 10,
    //             "created_at": "2022-03-04T07:19:27.000000Z",
    //             "updated_at": "2022-03-04T07:19:27.000000Z"
    //         },
    //         {
    //             "id": 18,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 13,
    //             "created_at": "2022-03-04T07:27:05.000000Z",
    //             "updated_at": "2022-03-04T07:27:05.000000Z"
    //         },
    //         {
    //             "id": 19,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 16,
    //             "created_at": "2022-03-04T07:27:06.000000Z",
    //             "updated_at": "2022-03-04T07:27:06.000000Z"
    //         },
    //         {
    //             "id": 20,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 19,
    //             "created_at": "2022-03-04T07:43:30.000000Z",
    //             "updated_at": "2022-03-04T07:43:30.000000Z"
    //         },
    //         {
    //             "id": 21,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 19,
    //             "created_at": "2022-03-04T07:43:31.000000Z",
    //             "updated_at": "2022-03-04T07:43:31.000000Z"
    //         },
    //         {
    //             "id": 22,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "달리기",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 19,
    //             "created_at": "2022-03-04T07:44:39.000000Z",
    //             "updated_at": "2022-03-04T07:44:39.000000Z"
    //         },
    //         {
    //             "id": 23,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "자전거",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 19,
    //             "created_at": "2022-03-04T07:48:12.000000Z",
    //             "updated_at": "2022-03-04T07:48:12.000000Z"
    //         },
    //         {
    //             "id": 25,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "자전거",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 22,
    //             "created_at": "2022-03-04T07:50:26.000000Z",
    //             "updated_at": "2022-03-04T07:50:26.000000Z"
    //         },
    //         {
    //             "id": 26,
    //             "user_id": 2,
    //             "title": "내일의 달리기",
    //             "event": "자전거",
    //             "time": 1111111111,
    //             "calorie": 2500.5,
    //             "average_speed": 20,
    //             "altitude": 20,
    //             "distance": 7.3,
    //             "img": null,
    //             "content": "test",
    //             "range": "public",
    //             "track_id": 1,
    //             "gps_id": 1,
    //             "mmr": 32,
    //             "created_at": "2022-03-04T07:50:27.000000Z",
    //             "updated_at": "2022-03-04T07:50:27.000000Z"
    //         }
    //     ]
    // },
    me: {
        "id": 1,
        "name": "김동영",
        "email": "dong@gmail.com",
        "sex": "여성",
        "weight": "30kg",
        "profile": null,
        "birth": "2020-02-27",
        "introduce": null,
        "location": "김해",
        "mmr": 0,
        "created_at": "2022-03-06T07:40:01.000000Z",
        "updated_at": "2022-03-06T07:40:01.000000Z",
        "followings": [{
                        "id": 1,
                       "name": "황현종",
                       "sex": "여",      
                        "profile": "img",           
                        "mmr": 90,
                        
                    },],
        "followers": [],
        "posts": [
                    {
                        "id": '622561232d6ee07c40f75bda',
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": "62256147dc2958292cb17114",
                        "mmr": 10,
                        "created_at": "2022-03-04T07:19:27.000000Z",
                        "updated_at": "2022-03-04T07:19:27.000000Z"
                    },
                    {
                        "id": 18,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 13,
                        "created_at": "2022-03-04T07:27:05.000000Z",
                        "updated_at": "2022-03-04T07:27:05.000000Z"
                    },
                    {
                        "id": 19,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 16,
                        "created_at": "2022-03-04T07:27:06.000000Z",
                        "updated_at": "2022-03-04T07:27:06.000000Z"
                    },
                    {
                        "id": 20,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 19,
                        "created_at": "2022-03-04T07:43:30.000000Z",
                        "updated_at": "2022-03-04T07:43:30.000000Z"
                    },
                    {
                        "id": 21,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 19,
                        "created_at": "2022-03-04T07:43:31.000000Z",
                        "updated_at": "2022-03-04T07:43:31.000000Z"
                    },
                    {
                        "id": 22,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "달리기",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 19,
                        "created_at": "2022-03-04T07:44:39.000000Z",
                        "updated_at": "2022-03-04T07:44:39.000000Z"
                    },
                    {
                        "id": 23,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "자전거",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 19,
                        "created_at": "2022-03-04T07:48:12.000000Z",
                        "updated_at": "2022-03-04T07:48:12.000000Z"
                    },

                    {
                        "id": 25,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "자전거",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 22,
                        "created_at": "2022-03-04T07:50:26.000000Z",
                        "updated_at": "2022-03-04T07:50:26.000000Z"
                    },
                    {
                        "id": 26,
                        "user_id": 2,
                        "title": "내일의 달리기",
                        "event": "자전거",
                        "time": 1111111111,
                        "calorie": 2500.5,
                        "average_speed": 20,
                        "altitude": 20,
                        "distance": 7.3,
                        "img": null,
                        "content": "test",
                        "range": "public",
                        "track_id": 1,
                        "gps_id": 1,
                        "mmr": 32,
                        "created_at": "2022-03-04T07:50:27.000000Z",
                        "updated_at": "2022-03-04T07:50:27.000000Z"
                    }
                ]
    }
,
    loadLogInLoading:false,
    loadLogInDone:false,
    loadLogInError:null,
    
    logInLoading:false,
    LogInDone:false,
    logInError:null,
    logOutLoading:false,
    logOutDone:false,
    logOutError:null,
    followLoading: false,
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
}

export const LOAD_LOGIN_REQUEST='LOAD_LOGIN_REQUEST'
export const LOAD_LOGIN_SUCCESS='LOAD_LOGIN_SUCCESS'
export const LOAD_LOGIN_FAILURE='LOAD_LOGIN_FAILURE'

export const SIGNUP_SUCCESS='SIGNUP_SUCCESS'
export const SIGNUP_REQUEST='SIGNUP_REQUEST'
export const SIGNUP_FAIL='SIGNUP_FAIL'

export const LOGOUT_REQUEST='LOGOUT_REQUEST'
export const LOGOUT_SUCCESS='LOGOUT_SUCCESS'
export const LOGOUT_FAIL='LOGOUT_FAIL'


export const LOGIN_REQUEST='LOGIN_REQUEST'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAIL='LOGIN_FAIL'

export const FOLLOWING_REQUEST='FOLLOWING_REQUEST'
export const FOLLOWING_SUCCESS='FOLLOWING_SUCCESS'
export const FOLLOWING_FAIL='FOLLOWING_FAIL'

export const UNFOLLOWING_REQUEST='UNFOLLOWING_REQUEST'
export const UNFOLLOWING_SUCCESS='UNFOLLOWING_SUCCESS'
export const UNFOLLOWING_FAIL='UNFOLLOWING_FAIL'


const dummyUser=(data)=>(
    {
        ...data,
        nickname:'동영',
        id:1,
        Posts:[],
        Followings:[{nickname:'dong'},{nickname:'kim'},{nickname:'doeeng'}],
        Followers:[{nickname:'dongsss'},{nickname:'kimsss'},{nickname:'doeengsss'}],
        

    }
)

const reducer=(state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            case LOGIN_REQUEST:
                draft.logInLoading=true              
                break;
            case LOGIN_SUCCESS:
                draft.logInLoading=false
                // draft.me=dummyUser(action.data)  
                draft.me=action.data             
                break;
            case LOGIN_FAIL:
                draft.logInLoading=false
                break;
                case LOAD_LOGIN_REQUEST:
                    draft.loadLogInLoading=true              
                    break;
                case LOAD_LOGIN_SUCCESS:
                    draft.loadLogInLoading=false
                    // draft.me=dummyUser(action.data)  
                    // draft.me=action.data             
                    break;
                case LOAD_LOGIN_FAILURE:
                    draft.loadLogInLoading=false
                    break;
            case LOGOUT_REQUEST:
                draft.logOutLoading=true        
                break;
            case LOGOUT_SUCCESS:
                draft.logOutLoading=false
                draft.me=null
                break;
            case LOGOUT_FAIL:
                draft.logOutLoading=false
                break;
                    case FOLLOWING_REQUEST:
                        draft.followLoading = true;
                        draft.followError = null;
                        draft.followDone = false;
                        break;
                    case FOLLOWING_SUCCESS:
                        draft.followLoading = false;
                        draft.me.followings.push({ 
                            id: action.data.id ,
                            name:action.data.name,
                            sex:action.data.sex,
                            profile:action.data.profile,
                            mmr:action.data.mmr});
                        draft.followDone = true;
                        break;
                    case FOLLOWING_FAIL:
                        draft.followLoading = false;
                        draft.followError = action.error;
                        break;
                    case  UNFOLLOWING_REQUEST:
                        draft.unfollowLoading = true;
                        draft.unfollowError = null;
                        draft.unfollowDone = false;
                        break;
                    case  UNFOLLOWING_SUCCESS:
                        draft.unfollowLoading = false;
                        draft.me.followings = draft.me.followings.filter((v) => v.id !== action.data);
                        draft.unfollowDone = true;
                        break;
                    case  UNFOLLOWING_FAIL:
                        draft.unfollowLoading = false;
                        draft.unfollowError = action.error;
                        break;
                        case SIGNUP_REQUEST:
                            draft.signUpLoading = true;
                            draft.signUpError = null;
                            draft.signUpDone = false;
                            break;
                          case SIGNUP_SUCCESS:
                            draft.signUpLoading = false;
                            draft.signUpDone = true;
                            break;
                          case SIGNUP_FAIL:
                            draft.signUpLoading = false;
                            draft.signUpError = action.error;
                            break;
            default:
                return state
        }
    })
}

export default reducer