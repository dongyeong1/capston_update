import shortid from "shortid";
import produce  from "immer";
import faker from 'faker';


export const initialState={
//    mainPosts:[{
    
//     id: 1,
//     User: {
//       id: 1,
//       nickname: '동영',
//     },
//     content: '첫 번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[{
//         User:{
//           id:1,
//           nickname:'현종'
//         },
//         content:'안녕'
//       } ]


// },

// {
//     id: 2,
//     User: {
//       id: 2,
//       nickname: '재현',
//     },
//     content: '두 번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[{
//         User:{
//           id:1,
//           nickname:'현종'
//         },
//         content:'안녕'
//       } ]
  

// }
// ,
// {
    
//     id: 3,
//     User: {
//       id: 3,
//       nickname: '현종',
//     },
//     content: '세번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[{
//         User:{
//           id:1,
//           nickname:'동영'
//         },
//         content:'안녕'
//       } ]
  

// },
// {
    
//     id: 4,
//     User: {
//       id: 4,
//       nickname: '대영',
//     },
//     content: '네 번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[]
    
  

// },
// {
    
//     id: 5,
//     User: {
//       id: 5,
//       nickname: '새별',
//     },
//     content: '다섯번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[]
  

// },
// {
    
//     id: 6,
//     User: {
//       id: 6,
//       nickname: '세준',
//     },
//     content: '여섯번째 게시글',
//     Images: [{
//       src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
//     }, {
//       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
//     }],
//     Comments:[]
  

// },

// ],
mainPosts:[],
   addCommentDone:false,
   addCommentLoading:false,
   addCommentError:false,
   loadPostsLoading: false,
   loadPostsDone: false,
   loadPostsError: null,
   loadsPostsLoading: false,
   loadsPostsDone: false,
   loadsPostsError: null,
   addPostLoading:false,
   addPostDone:false,
   hasMorePosts:true,
   loadMorePostLoading:false,
   loadMorePostDone:false,
   loadMorePostError:null

}

export const LOAD_MORE_POST_SUCCESS='LOAD_MORE_POST_SUCCESS'
export const LOAD_MORE_POST_REQUEST='LOAD_MORE_POST_REQUEST'
export const LOAD_MORE_POST_FAILURE='LOAD_MORE_POST_FAILURE'

export const LOADS_POSTS_REQUEST = 'LOADS_POSTS_REQUEST';
export const LOADS_POSTS_SUCCESS = 'LOADS_POSTS_SUCCESS';
export const LOADS_POSTS_FAILURE = 'LOADS_POSTS_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST ='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS ='ADD_POST_SUCCESS';
export const ADD_POST_FAILURE ='ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST='ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE='ADD_COMMENT_FAILURE'




const dummyPost=(data)=>({
    id:shortid.generate(),
    User:{
      id:shortid.generate(),
      nickname:faker.name.findName()
    },
    content:data,
    Images:[
      {
        src:faker.image.imageUrl()
      }
    ],
    Comments:[{
      User:{
        id:shortid.generate(),
        nickname:faker.name.findName()
      },
      content:faker.lorem.sentence()
    } ]
})

export const generateDummyPost=(data)=> Array(number).fill().map(( )=>({
    id:shortid.generate(),
    User:{
      id:shortid.generate(),
      nickname:faker.name.findName()
    },
    content:faker.lorem.paragraph(),
    Images:[
      {
        src:faker.image.imageUrl()
      }
    ],
   
  })) 
  




const reducer=(state=initialState,action)=>{
    return produce(state,(draft)=>{
        switch(action.type){
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
              case ADD_POST_SUCCESS: 
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
              case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
                case LOAD_POSTS_REQUEST:
                    draft.loadPostsLoading = true;
                    draft.loadPostsDone = false;
                    draft.loadPostsError = null;
                    break;
                    case LOAD_POSTS_SUCCESS:
                      
                    draft.loadPostsLoading = false;
                    draft.loadPostsDone = true;
                    // draft.hasMorePosts = draft.mainPosts.length < 50;
                    // draft.mainPosts = action.data.concat(draft.mainPosts);
                    //  백만들어지면 포스트 불러올것
                    console.log('nexq',action.data.nextPage)
                    draft.mainPosts=action.data
                    break;
                    case LOAD_POSTS_FAILURE:
                    draft.loadPostsLoading = false; 
                    draft.loadPostsError = "ㅇㅇㅇ";
                    break;


                    case LOAD_MORE_POST_REQUEST:
                      draft.loadMorePostLoading = true;
                      draft.loadMorePostDone = false;
                      draft.loadMorePostError = null;
                      break;
                      case LOAD_MORE_POST_SUCCESS:
                        
                      draft.loadMorePostLoading = false;
                      draft.loadMorePostDone = true;
                      draft.hasMorePosts = draft.mainPosts.data.length < 30;
                      // draft.mainPosts = action.data.concat(draft.mainPosts);
                      //  백만들어지면 포스트 불러올것
                      draft.mainPosts.nextPage=action.data.nextPage
                      draft.mainPosts.data.push(...action.data.data)
                      break;
                      case LOAD_MORE_POST_FAILURE:
                      draft.loadMorePostLoading = false; 
                      draft.loadMorePostError = "ㅇㅇㅇ";
                      break;





                    case LOADS_POSTS_REQUEST:
                      draft.loadsPostsLoading = true;
                      draft.loadsPostsDone = false;
                      draft.loadsPostsError = null;
                      break;
                      case LOADS_POSTS_SUCCESS:
                        
                      draft.loadsPostsLoading = false;
                      draft.loadsPostsDone = true;

                      draft.mainPosts=action.data
                      break;
                      case LOADS_POSTS_FAILURE:
                      draft.loadsPostsLoading = false; 
                      draft.loadsPostsError = "ㅇㅇㅇ";
                      break;

                    case ADD_COMMENT_REQUEST:
                    draft.addCommentLoading = true;
                    draft.addCommentDone = false;
                    break;
                    case ADD_COMMENT_SUCCESS:
                    draft.addCommentLoading = false;
                    draft.addCommentDone = true;

                    const commentpost=draft.mainPosts.find((v)=>v.id===action.data.id)
                    commentpost.comment.unshift(action.data.result.comment)
                    // draft.mainPosts.find((v)=>v.id===action.data.id)
                  
                    draft.mainPosts=draft.mainPosts
                    break;
                    case ADD_COMMENT_FAILURE:
                    draft.addCommentLoading = false; 
                    draft.addCommentError = 'ss';
                    break;
           
           
            default:
                return state
        }
    })
}

export default reducer