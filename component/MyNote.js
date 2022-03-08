import React ,{useState}from 'react'
import { Card } from 'antd';
import RunningChart from './RunningChart';
import BikeChart from './BikeChart'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { FaRunning } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import { Affix, Button } from 'antd';


const { TabPane } = Tabs;

import LoginForm from './LoginForm';

const { Meta } = Card;

const tabList = [
    {
      key: 'tab1',
      tab: <MdDirectionsBike size={28}/>,
    },
    {
      key: 'tab2',
      tab: <FaRunning  size={28}/>,
    },
    
  ];

  const contentList = {
    tab1: <p>이번주거리:20km<BikeChart/>총거리:150km</p>,
    tab2: <p>이번주거리:20km<RunningChart/>총거리:150km</p>,
   
  };


function MyNote() {
    const [top, setTop] = useState(100);

   


    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  
    const onTab1Change = key => {
      setActiveTabKey1(key);
    };
 

  return (
    <div >
        <div style={{position:'fixed',marginTop:30,marginLeft:55}}>일주일통계</div>
         <Card 
         
    hoverable
    style={{ width: 240 ,height:'40vh', marginLeft:50 ,marginTop:70,borderRadius:30,position:'fixed'}}
    
    bordered={false}
    tabList={tabList}
    activeTabKey={activeTabKey1}
    onTabChange={key => {
      onTab1Change(key);
    }}
  >
      {contentList[activeTabKey1]}
        {/* <Chart></Chart> */}

     
    
  </Card>
  
  
    </div>
  )
}

export default MyNote