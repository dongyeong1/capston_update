import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover,Row,Col, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined ,CommentOutlined,StepForwardOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

import CommentForm from './CommentForm';
// import PostCardContent from './PostCardContent';
// import PostImages from './PostImages';
import FollowButton from './FollowButton';

const dummyComments = [{
  User: {
    nickname: 'nero',
  },
  content: '우와 개정판이 나왔군요~',
}, {
  User: {
    nickname: 'hero',
  },
  content: '얼른 사고싶어요~',
}];

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;







const PostCard = ({post}) => {

  


  


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
        
        
        
        <img   width={300} height={300} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
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
          style={{width:500,marginLeft:100}}
            header={`${post.comment.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.comment}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.user.name}
                  avatar={(
                    // <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      
                    // </Link>
                    <a><Avatar>{item.user.name[0]}</Avatar></a>
                  )}
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