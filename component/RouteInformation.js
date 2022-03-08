import React from 'react'


import { Card,Avatar,Image } from 'antd';
import RunningChart from './RunningChart';
import BikeChart from './BikeChart'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { FaRunning } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import { Affix, Button } from 'antd';
import { useSelector } from 'react-redux';


function RouteInformation() {
  const {loadMap}=useSelector((state)=>state.map)
  return (
  
        <div >
            <div style={{position:'fixed',marginTop:70,marginLeft:55}}>코스정보</div>
             <Card 
             
        hoverable
        style={{ width: 340 ,marginLeft:50 ,marginTop:100,borderRadius:30,position:'fixed'}}
        
        bordered
       
      >
        <div>-{loadMap.track.name}-</div>
         거리:{loadMap.track.distance}<br></br>
         예상시간:{3+':'+20+':'+55}<br></br>
         생성날짜:{loadMap.track.createdAt}


       
    
       
      </Card>
      
      
        </div>
      )
  
}

export default RouteInformation




