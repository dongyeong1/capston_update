import produce from 'immer'
import { LOAD_MY_LOCATION_REQUEST } from './map'
import Router from 'next/router'

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







    // me: {
    //     'id':1,
    //     "name": "김동영",
    //     "email": "dong@gmail.com",
    //     "sex": "여성",
    //     "weight": "30kg",
    //     "profile": null,
    //     "birth": "2020-02-27",
    //     "introduce": null,
    //     "location": "김해",
    //     "mmr": 0,
    //     "created_at": "2022-03-06T07:40:01.000000Z",
    //     "updated_at": "2022-03-06T07:40:01.000000Z",
    //     "followings": [{
    //                     "id": 1,
    //                    "name": "황현종",
    //                    "sex": "여",      
    //                     "profile": "img",           
    //                     "mmr": 90,
                        
    //                 },],
    //     "followers": [{
    //         "id": 1,
    //        "name": "황현종",
    //        "sex": "여",      
    //         "profile": "img",           
    //         "mmr": 90,
            
    //     },],
    //     "posts": [
    //                 // {
    //                 //     "trackId": '622561232d6ee07c40f75bda',
    //                 //     "user_id": 2,
    //                 //     "title": "내일의 달리기",
    //                 //     "event": "달리기",
    //                 //     "time": 1111111111,
    //                 //     "calorie": 2500.5,
    //                 //     "average_speed": 20,
    //                 //     "altitude": 20,
    //                 //     "distance": 7.3,
    //                 //     "img": null,
    //                 //     "content": "test",
    //                 //     "range": "public",
    //                 //     "track_id": 1,
    //                 //     "gps_id": "62256147dc2958292cb17114",
    //                 //     "mmr": 10,
    //                 //     "created_at": "2022-03-04T07:19:27.000000Z",
    //                 //     "updated_at": "2022-03-04T07:19:27.000000Z"
    //                 // },
    //                 {
    //                     id:'62256147dc2958292cb17110',
    //                     trackId: "622561232d6ee07c40f75bda",
    //                     title:'경북대학교한바퀴 gps데이터',
    //                     totalTime: 5000,
    //                     user: {
    //                       userId: 1,
    //                       name: "3조",
    //                     },
    //                     speed: [
    //                       42, 40, 41, 45, 42, 46, 41, 42, 42, 48, 47, 40, 46, 43, 49, 49, 44, 48,
    //                       41, 48, 44, 49, 40, 42, 46, 46, 48, 41, 41, 47, 48, 45, 43, 40, 43, 42,
    //                       45, 41, 48, 42, 41, 45, 47, 42, 42, 44, 41, 46, 43, 43, 47, 49, 48, 42,
    //                       43, 45, 42, 41, 41, 46, 42, 40, 41, 43, 41,
    //                     ],
    //                     event: "B",
    //                     gps: {
    //                       coordinates: [
    //                         [128.61303806304932, 35.89588170142396],
    //                         [128.61265182495117, 35.89560358073926],
    //                         [128.61237287521362, 35.895290693801016],
    //                         [128.61194372177124, 35.89487350929305],
    //                         [128.61162185668942, 35.89457800226974],
    //                         [128.61117124557495, 35.89421296265922],
    //                         [128.61084938049316, 35.89386530432244],
    //                         [128.6104416847229, 35.89344811230307],
    //                         [128.6100125312805, 35.8931525999592],
    //                         [128.60951900482178, 35.89271802097918],
    //                         [128.6090898513794, 35.89237035607764],
    //                         [128.6085319519043, 35.89210960639962],
    //                         [128.60801696777344, 35.891796705652425],
    //                         [128.60726594924927, 35.89136211922988],
    //                         [128.606858253479, 35.89117090044829],
    //                         [128.6064076423645, 35.890979681204854],
    //                         [128.60582828521729, 35.890736310590775],
    //                         [128.60514163970947, 35.89038863698731],
    //                         [128.6043906211853, 35.88997142664797],
    //                         [128.60406875610352, 35.88976282065393],
    //                         [128.60376834869382, 35.889189151336524],
    //                         [128.60376834869382, 35.888685014262876],
    //                         [128.60402584075928, 35.887954879017514],
    //                         [128.60436916351318, 35.88739858097851],
    //                         [128.60490560531616, 35.886651049334596],
    //                         [128.6056137084961, 35.88656412659245],
    //                         [128.6062788963318, 35.88656412659245],
    //                         [128.6074161529541, 35.88642505000656],
    //                         [128.60799551010132, 35.88626858855547],
    //                         [128.60836029052732, 35.885833971791584],
    //                         [128.6087679862976, 35.88552104624466],
    //                         [128.60945463180542, 35.885312428526404],
    //                         [128.60994815826416, 35.885833971791584],
    //                         [128.60996961593628, 35.886355511622014],
    //                         [128.6105489730835, 35.886355511622014],
    //                         [128.6111283302307, 35.886355511622014],
    //                         [128.61196517944336, 35.88632074240684],
    //                         [128.61286640167236, 35.886146896102005],
    //                         [128.61372470855713, 35.88560797013171],
    //                         [128.61411094665527, 35.884808266771834],
    //                         [128.61456155776978, 35.88508642537816],
    //                         [128.61499071121216, 35.885347198184284],
    //                         [128.6154842376709, 35.885799202347435],
    //                         [128.61565589904785, 35.88663366479379],
    //                         [128.61584901809692, 35.88715519935755],
    //                         [128.61606359481812, 35.8876245775282],
    //                         [128.61640691757202, 35.88823302657146],
    //                         [128.61664295196533, 35.8886154778629],
    //                         [128.61685752868652, 35.888928391181906],
    //                         [128.61625671386716, 35.889484678473636],
    //                         [128.6161708831787, 35.89005834564997],
    //                         [128.61599922180176, 35.890579857658125],
    //                         [128.61561298370358, 35.89104921552864],
    //                         [128.61546277999878, 35.891466420188856],
    //                         [128.61522674560547, 35.8919531561806],
    //                         [128.61492633819577, 35.892509422221465],
    //                         [128.61475467681885, 35.89278755377628],
    //                         [128.6145830154419, 35.8931352168458],
    //                         [128.6143684387207, 35.8937436235439],
    //                         [128.6141324043274, 35.8941086653185],
    //                         [128.6139178276062, 35.89436940841269],
    //                         [128.6136817932129, 35.89497780562615],
    //                         [128.61421823501587, 35.89534284170994],
    //                         [128.61376762390137, 35.89567311100204],
    //                         [128.6132526397705, 35.89588170142396],
    //                       ],
    //                     },
    //                     altitude: [
    //                       143, 142, 141, 144, 145, 143, 142, 144, 143, 142, 142, 141, 143, 144, 141,
    //                       142, 141, 142, 141, 138, 137, 135, 134, 133, 132, 129, 126, 127, 128, 129,
    //                       124, 122, 120, 113, 115, 111, 110, 107, 102, 111, 115, 120, 122, 124, 125,
    //                       123, 122, 125, 128, 129, 130, 131, 132, 133, 135, 136, 138, 140, 141, 142,
    //                       144, 146, 143, 144, 144,
    //                     ],
    //                     distance: [
    //                       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //                       22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    //                       40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    //                       58, 59, 60, 61, 62, 63, 64, 65,
    //                     ],
    //                     time: [
    //                       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //                       22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    //                       40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    //                       58, 59, 60, 61, 62, 63, 64, 65,
    //                     ],
    //                   }
                    
    //             ]
    // },

    me:null,
    searchUsers:[],
    

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
    myInfoLoading:false,
    myInfoDone:false,
    myInfoError:null,
    userSearchDone:false,
    userSearchError:null,
    userSearchLoading:false,

}

export const USER_SEARCH_REQUEST='USER_SEARCH_REQUEST'
export const USER_SEARCH_SUCCESS='USER_SEARCH_SUCCESS'
export const USER_SEARCH_FAILURE='USER_SEARCH_FAILURE'


export const LOAD_MY_INFO_REQUEST='LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS='LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE='LOAD_MY_INFO_FAILURE'


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
                draft.me=null
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
                    draft.me=action.data

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



                            case USER_SEARCH_REQUEST:
                                draft.userSearchLoading = true;
                                draft.userSearchError = null;
                                draft.userSearchDone = false;
                                break;
                              case USER_SEARCH_SUCCESS:
                                draft.userSearchLoading = false;
                                draft.userSearchDone = true;
                                draft.searchUsers=action.data;
                                break;
                              case USER_SEARCH_FAILURE:
                                draft.userSearchLoading = false;
                                draft.userSearchError = action.error;
                                break;



                            case LOAD_MY_INFO_REQUEST:
                                draft.myInfoLoading = true;
                                draft.myInfoError = null;
                                draft.myInfoDone = false;
                                break;
                              case LOAD_MY_INFO_SUCCESS:
                                draft.myInfoLoading = false;
                                draft.myInfoDone = false;
                                // draft.me=null
                                console.log('데이터정보',action.data)

                                draft.me=action.data
                                break;
                              case LOAD_MY_INFO_FAILURE:
                                draft.myInfoLoading = false;
                                draft.myInfoError = action.error;
                                break;
            default:
                return state
        }
    })
}

export default reducer