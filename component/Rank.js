import React from 'react'
import {Card,Avatar,Button,Image,Badge,Form} from 'antd'
import { MdCircle } from 'react-icons/md';
import axios from 'axios'

function Rank() {
    const { Meta } = Card;
    const user=[
      
        {
            userId:2,
            userName:'재현',
            userImage:"//joeschmoe.io/api/v1/jed",
            mmr:123
        },
        {
            userId:3,
            userName:'현종',
            userImage:"//joeschmoe.io/api/v1/jon",
            mmr:100

        },
        {
            userId:4,
            userName:'새별',
            userImage:"//joeschmoe.io/api/v1/jess",
            mmr:30

        },
        
       
        
    
    ]
    const my= {
        userId:1,
        userName:'동영',
        userImage:"//joeschmoe.io/api/v1/josh",
        mmr:20

    }
    const server=()=>{
        axios.post(`https://2yubi.shop/api/logout`)
        .then((res)=>{
          console.log('donggg',res)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    
  return (

    <div>
   
    
   <Button onClick={server}>로그아웃</Button>


    <div style={{display:'flex'}}>
   
    {user.map((v,index)=>(
        <div>
<a>{index+1}위</a>
<Card
hoverable
style={{ width: 200, height:190,borderRadius:30,marginRight:30 }}
cover={<Image src={v.userImage} style={{ width: 110, marginLeft:45 }} />}
>
    
<Meta title={v.userName} description={v.mmr} />
</Card>

      
</div>
    ))
    }
   <Card
hoverable
style={{ width: 270, height:220,borderRadius:30,marginLeft:20}}
cover={<Image src={my.userImage} style={{ width: 120, marginLeft:80 }} />}
>
<Meta title={my.userName} description={my.mmr} />
</Card>

    </div>

     
    
    




</div>



  )
}

export default Rank