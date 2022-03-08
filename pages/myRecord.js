import { Card,Button } from 'antd'
import React ,{useState,useEffect}from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {LOAD_CREATEMAP_REQUEST} from '../reducers/map';
import Link from 'next/link'




function myRecord() {
    const [propsId,setPropsId]=useState()
    const dispatch=useDispatch()
    const {me}=useSelector((state)=>state.user)
    
    const createLink=(data)=>{
        console.log('aa',data.id)
        setPropsId(data.id)
        console.log('qqqq',propsId)
        


    }

    useEffect(()=>{
        if(propsId){
            dispatch({
                type:LOAD_CREATEMAP_REQUEST,
                data:propsId
              })
                
            Router.push({
                pathname: '/Create/[id]',
                query: {id:propsId},
            });
        }
        

    },[propsId])
  return (
    <div>
        <h1>내가 뛴목록</h1>
        {me.posts.map((v)=>(
            <Card
            hoverable
            >
                {v.title}
                <Button style={{fontSize:15,marginLeft:800}} onClick={()=>createLink(v)}>경로만들기</Button>
            </Card>
        ))}
    </div>
  )
}

export default myRecord