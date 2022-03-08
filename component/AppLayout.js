import React,{useState} from 'react'
import Link from 'next/link'
import {Menu,Input,Row,Col,Badge, Affix, Button} from 'antd'
import { NotificationOutlined} from '@ant-design/icons';
import { MdDirectionsBike } from 'react-icons/md';



import {useSelector} from 'react-redux'

function AppLayout({children}) {
    const [top, setTop] = useState(0);
  return (
    <Affix offsetTop={top}> 
     <Menu onClick={() => setTop(top )} mode="horizontal" style={{backgroundColor:'#4B87FF'}}>
        <Menu.Item style={{fontSize:33 }} > <Link href="/"><a><MdDirectionsBike size={50}/></a></Link></Menu.Item>
    <Menu.Item>
        
        <Link href="/"><a>대쉬보드</a></Link>

        </Menu.Item>

        <Menu.Item>
        <Link href="/RiddingRoute"><a>라이딩경로</a></Link>

        </Menu.Item>
        <Menu.Item>
        <Link href="/polyline"><a>테스트</a></Link>

        </Menu.Item>
      

        <Menu.Item>
        
        <Input.Search enterButton  title='검색' style={{verticalAlign:'middle' ,marginLeft:300}}/>

        </Menu.Item>

        <Menu.Item style={{marginLeft:1000,color:"blue",width:100}}>   
        <Badge count={5}>
        <NotificationOutlined />
        </Badge>
        </Menu.Item>
      


    </Menu>
    </Affix>
  )
}

export default AppLayout