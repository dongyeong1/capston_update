import produce from 'immer'
import { LOAD_MY_LOCATION_REQUEST } from './map'
import Router from 'next/router'

export const initialState={
    
  
    me:null,
    searchUsers:[],
    weekRecord:null,
    userRate:null,
    

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
    weekRecordLoading:false,
    weekRecordDone:false,
    weekRecordError:null,
    deleteMyPostLoading:false,
   deleteMyPostDone:false,
   deleteMyPostError:null,
   userRateLoading:false,
   userRateDone:false,
   userRateError:null,


}

export const USER_RATE_REQUEST='USER_RATE_REQUEST'
export const USER_RATE_SUCCESS='USER_RATE_SUCCESS'
export const USER_RATE_FAILURE='USER_RATE_FAILURE'

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

export const WEEKRECORD_REQUEST='WEEKRECORD_REQUEST'
export const WEEKRECORD_SUCCESS='WEEKRECORD_SUCCESS'
export const WEEKRECORD_FAILURE='WEEKRECORD_FAILURE'

export const DELETE_MYPOST_REQUEST='DELETE_MYPOST_REQUEST'
export const DELETE_MYPOST_SUCCESS='DELETE_MYPOST_SUCCESS'
export const DELETE_MYPOST_FAILURE='DELETE_MYPOST_FAILURE'




const reducer=(state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            case WEEKRECORD_REQUEST:
                draft.weekRecordLoading=true
                draft.weekRecordDone=false
                break;
            case WEEKRECORD_SUCCESS:
                draft.weekRecordLoading=false
                draft.weekRecordDone=true
                console.log('ghjka',action.data)
                draft.weekRecord=action.data
                break;
            case WEEKRECORD_FAILURE:
                draft.weekRecordDone=false;
                draft.weekRecordLoading=false;
                draft.weekRecordError='error'
                break;
                case USER_RATE_REQUEST:
                    draft.userRateLoading=true
                    draft.userRateDone=false
                    break;
                case USER_RATE_SUCCESS:
                    draft.userRateLoading=false
                    draft.userRateDone=true
                    console.log('ghjka',action.data)
                    draft.userRate=action.data
                    break;
                case USER_RATE_FAILURE:
                    draft.userRateDone=false;
                    draft.userRateLoading=false;
                    draft.userRateError='error'
                    break;
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
                window.location.href='/LoginTest'
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
                                draft.searchUsers=action.data.data;
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
                                case DELETE_MYPOST_REQUEST:
                                    draft.deleteMyPostLoading=true;
                                    draft.deleteMyPostDone=false;
                                    break;
                                  case DELETE_MYPOST_SUCCESS:
                                    draft.deleteMyPostLoading=false;
                                    draft.deleteMyPostDone=true;
                                    // draft.me.followings = draft.me.followings.filter((v) => v.id !== action.data);
                                    draft.me.posts=draft.me.posts.filter((v)=>v.id!==action.data)
                                    break;
                                  case DELETE_MYPOST_FAILURE:
                                    draft.deleteMyPostLoading=false;
                                    draft.deleteMyPostDone=false;
                                    draft.deleteMyPostError='error'
                                    break;
                         
                                default:
                                    return state
        }
    })
}

export default reducer