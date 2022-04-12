import React, { useState, useCallback ,useEffect} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';


import {
  Card,
  Button,
  Avatar,
  Popover,
  Descriptions,
  List,
  Comment,
} from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  CommentOutlined,
  StepForwardOutlined,
  TrophyTwoTone, // 추가한것
  TrophyOutlined, // 추가한것
} from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";

import CommentForm from "./CommentForm";
// import PostCardContent from './PostCardContent';
// import PostImages from './PostImages';
import FollowButton from "./FollowButton";
import postcss from "postcss";


const CardWrapper = styled.div`
  margin-bottom: 20px;
`;



const mapContainerStyle = {
  height: "200px",
  width: "400px",
};

const options = {
  strokeColor: '#348feb',
  strokeOpacity: 0.8,
  strokeWeight: 5,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
        [
            {lat:  35.969997373905, lng: 128.45170755523503},
            {lat:35.985501427015464, lng:128.40407191943035},
            {lat: 35.89580489690752, lng: 128.62238368221892}
        ]
  ],
  zIndex: 1
};




const PostCard = ({post}) => {
  // useEffect(()=>{
  //   setAdditional({
  //     destination: { lat: "", lng: "" },
  //     overview: "",
  //     inProgress: false,
  //     additional: [],
  // })
  // },[])

  
  const [leftPath,setLeftPath]=useState({
    lat:post.gpsData.gps.coordinates[0][1],lng:post.gpsData.gps.coordinates[0][0]
  })
const [rightPath,setRightPath]=useState({
  lat:post.gpsData.gps.coordinates[post.gpsData.gps.coordinates.length-1][1],lng:post.gpsData.gps.coordinates[post.gpsData.gps.coordinates.length-1][0]
})


  


  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (

    <>
      <Card
        hoverable
        // cover={post.Images[0] && <PostImages images={post.Images} />}
        style={{width:500, height:'29vw',borderRadius:20, marginBottom:20,marginLeft:100}}
        // actions={[
        //   <RetweetOutlined key="retweet" />,
        //   liked
        //     ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
        //     : <HeartOutlined key="heart" onClick={onToggleLike} />,
        //   <MessageOutlined key="message" onClick={onToggleComment} />,
        //   <Popover
        //     key="ellipsis"
        //     content={(
        //       <Button.Group>
        //         <Button>신고</Button>
        //         <Button>수정</Button>
        //         <Button danger>삭제</Button>
        //       </Button.Group>
        //     )}
        //   >
        //     <EllipsisOutlined />
        //   </Popover>,
        // ]}
        // extra={<FollowButton post={post} />}
      >
        <Card.Meta
        style={{position:'relative'}}
          avatar={<Avatar>{post.user.name}</Avatar>}
        
        //   description={'1 hours ago'}
        
         
        />

        <a style={{bottom:30,fontSize:20,position:'relative'}}>{post.user.name}</a><br/>
        {/* {isFollowing===true ? <Button style={{bottom:30,fontSize:15,position:'relative',left:460,bottom:60}}>언팔로잉</Button> :<Button >팔로잉</Button>} */}
        {/* <FollowButton  post={post}></FollowButton> */}

        <a style={{bottom:60,left:40,color:'gray',fontSize:12,position:'relative'}}>1 hours ago</a>
        <div>{post.content}</div>
        
        
        
        {/* <img   width={300} height={300} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> */}
        <LoadScript
        googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
        >
        
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={{
          
            // lat: createMap.gps.coordinates[createMap.gps.coordinates.length%2][1],
            // lng: createMap.gps.coordinates[createMap.gps.coordinates.length%2][0],
            lat:post.gpsData.gps.coordinates[post.gpsData.gps.coordinates.length%2][1],
            lng: post.gpsData.gps.coordinates[post.gpsData.gps.coordinates.length%2][0],

        }}>
        
        <Marker position={leftPath} icon={{url:' http://maps.google.com/mapfiles/ms/icons/blue.png',}} ></Marker>
        <Marker position={rightPath} ></Marker>
    
         <Polyline   options={options} path={post.gpsData.gps.coordinates.map((m)=>(
            {
                lat:m[1],
                lng:m[0]
            }
        ))}></Polyline> 
        

        </GoogleMap>
        </LoadScript>      
        <div style={{marginTop:10}}>
            <Button style={{borderWidth:0}}>{liked
           ? <HeartTwoTone style={{fontSize:25}} twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined style={{fontSize:25}} key="heart" onClick={onToggleLike} />}<a style={{marginLeft:5,fontSize:15}}>28</a></Button>
            <Button  style={{marginLeft:10,borderWidth:0}}>
                <CommentOutlined style={{fontSize:25}} /><a style={{marginLeft:5,fontSize:15}}>10</a>
            </Button>
        </div>
        
        
        <Button style={{width:160,marginLeft:90,borderRadius:15,top:10}}>{liked
           ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />}Like</Button>
        <Button style={{width:160,marginLeft:10,borderRadius:15,top:10}} onClick={onToggleComment}><CommentOutlined />comment</Button>
        {/* <Button style={{width:160,marginLeft:10,borderRadius:15,top:10}}><StepForwardOutlined/>retweet</Button> */}
      </Card>
       {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
          rowKey={()=>post.id}
          // key={post.id}
          style={{width:500,marginLeft:100}}
            header={`${post.comment.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.comment}
            renderItem={(item) => (
              <li>
                <Comment
                // key={item.id}
                  author={item.name}
                  // avatar={(
                  //   // <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      
                  //   // </Link>
                  //   // <a><Avatar>{item.name[0]}</Avatar></a>
                  // )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )} 
      </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    createdAt: PropTypes.object,
  }),
};

export default PostCard;