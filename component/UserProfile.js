import React,{useCallback,useState}from 'react'
import {Card,Avatar,Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {  logoutRequestAction, LOGOUT_REQUEST} from '../reducers/user';
import Following from './Following';
import Follower from './Follower';

function UserProfile() {
    const {me,logOutLoading}=useSelector((state)=>state.user)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibless, setIsModalVisibless] = useState(false);
    const [data,setData]=useState([])

    const FollowingModal = () => {
     
      setIsModalVisible(true);
      
    };

    const FollowerModal=()=>{
  


        setIsModalVisibless(true);
    }
  

    const dispatch=useDispatch();

  
    const onLogoutForm=useCallback(()=>{
       
        dispatch({
            type:LOGOUT_REQUEST
        })
    },[])

    return (
        <div>
            <Card
            style={{height:220,width:220,marginTop:50,marginLeft:100,borderRadius:30,position:'fixed'}}
            hoverable


               actions={[
                   <button onClick={FollowingModal} > <div key="following">팔로잉<br/>{me.Followings.length}</div></button>
                   
                ,
                <button onClick={FollowerModal} > <div key="follower">팔로워<br/>{me.Followers.length}</div>
                </button>,
                <div key="twit">게시물수<br/>{me.Posts.length}<br/></div>
               ,

                
            ]} 
             
         
            >
                <Following visible={isModalVisible} setIsModalVisible={setIsModalVisible} data={me.Followings}></Following>
                <Follower visible={isModalVisibless} setIsModalVisible={setIsModalVisibless} data={me.Followers}></Follower>
                <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
                
                />

{/* <Button onClick={onLogoutForm} loading={logOutLoading} size='small' style={{marginLeft:35}}> 로그아웃</Button> */}
                라이딩점수:200
              


                
            </Card>
          
            
        </div>
    )
}

export default UserProfile
