import React,{useEffect,useState} from 'react'
import AppLayout from '../../component/AppLayout';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import { MdDirectionsBike } from 'react-icons/md';
import {LOAD_MAP_REQUEST} from '../../reducers/map'


import wrapper from '../../store/configureStore'
import { END } from 'redux-saga';
import axios from 'axios'


import {Card,Table,Row,Col} from 'antd'
import SideBar from '../../component/Layout/SideBar';

import { useRouter } from 'next/router';
import RouteInformation from '../../component/RouteInformation';

// import wrapper from '../../store/configureStore';



import {
    VerticalGridLines,
    HorizontalGridLines,
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    Crosshair
  } from "react-vis";
  import "react-vis/dist/style.css";



const mapContainerStyle = {
    height: "300px",
    width: "500px",
    marginLeft:'50px',
    marginTop:'20px'
  };

const dummyLank=[
    {
        'userId':1,
        'userNickname':'동영',
        'record':'02:36:02',
        'speed':'27',
        'date':'2021년2월22일'
    },
    {
        'userId':2,
        'userNickname':'재현',
        'record':'02:38:57',
        'speed':'26',
        'date':'2021년2월22일'
    },
    {
        'userId':3,
        'userNickname':'현종',
        'record':'02:40:22',
        'speed':'25',
        'date':'2021년2월22일'
    },
    {
        'userId':4,
        'userNickname':'새별',
        'record':'02:52:11',
        'speed':'25',
        'date':'2021년2월22일'
    },
    {
        'userId':5,
        'userNickname':'대영',
        'record':'02:55:32',
        'speed':'24',
        'date':'2021년2월22일'
    },
    {
        'userId':6,
        'userNickname':'세준',
        'record':'02:58:06',
        'speed':'24',
        'date':'2021년2월22일'
    }
]

function id(){
    const router=useRouter()
    const {id}=router.query;


    return id
}


function oneRoute() {
    const router=useRouter()

    const {loadMap,searchMap}=useSelector((state)=>state.map)

        const {id}=router.query;
        const dispatch=useDispatch()

        // useEffect(()=>{
        //    dispatch({
        //         type:LOAD_MAP_REQUEST,
        //         data:id
        //     })

        // },[])


    // const dispatch=useDispatch()
  
    


    
  

    // useEffect(()=>{
    //     console.log(router.query)
    // },[])


const [strokeWeight,setStrokeWeight]=useState(5)


const mouseOut=()=>{
    setStrokeWeight(5)
    console.log('aaa')
}

const mouseOver=()=>{
    setStrokeWeight(10)
    console.log('over')
}
   

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: strokeWeight,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        //-27부터 호주 시작해서 점찍고 점찍고 한다
        paths: [
              [
                  {lat:  35.969997373905, lng: 128.45170755523503},
                  {lat:35.985501427015464, lng:128.40407191943035},
              
                  {lat: 35.89580489690752, lng: 128.62238368221892}
                  
              ]
        
        ],
        zIndex: 1
      };

      //elevmarker

      const [elevPath, setElevPath]=useState({
          lat:'',
          lng:'',
      })

      const [state,setState]=useState({
        crosshairValue:[]
    })
    const [index,setIndex]=useState('')

    const handleMouseOver=()=>{
        console.log('qqqq')
        setState({crosshairValue:[]})
        setIndex(0)
    }
    const qq=(value,{index})=>{
        console.log(value)
        console.log('aa',index)
        setIndex(index)

        setState({crosshairValue:loadMap.track.altitude.map(d=>d)})
        setElevPath({
            lat:loadMap.track.gps.coordinates[index][1],
            lng:loadMap.track.gps.coordinates[index][0]
        })
        console.log('ha',state)
    }
      //elevmarker



  return (
    <div>
     

    <Row>
      
        <Col span={20}>

        <Row>
        <Col span={10}>
        <div style={{fontSize:33,marginLeft:50,marginTop:50}}>{loadMap.track.trackName}</div> 
        
      

 <LoadScript
 googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
 >
     
   <GoogleMap
     id="marker-example"
     mapContainerStyle={mapContainerStyle}
     zoom={13}
     center={{lat:loadMap.track.start_latlng[1],lng:loadMap.track.start_latlng[0]}}
    
     
   
     
   >
 
 <Marker  position={{lat:loadMap.track.start_latlng[1],lng:loadMap.track.start_latlng[0]}}  />

 {elevPath&&<Marker position={elevPath} icon={{url:' http://maps.google.com/mapfiles/ms/icons/blue.png',}} ></Marker>}
 
 

      <Polyline onMouseOver={mouseOver} onMouseOut={mouseOut}  options={options} path={loadMap.track.gps.coordinates.map((m)=>(
         {
             lat:m[1],
             lng:m[0]
         }
     ))}></Polyline> 
  
 
 
 
 
 
     
   </GoogleMap>
   </LoadScript>

   
    <XYPlot height={300} width={500} onMouseLeave={handleMouseOver}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={loadMap.track.altitude} onNearestX={qq} />
          <Crosshair
          values={state.crosshairValue}
          className={'test-class-name'}
        >
            <div style={{background:'gray',width:100,height:100}}>
                <h3>dong</h3>
                <div style={{fontSize:20,marginLeft:20}}>{index && state.crosshairValue[index].y}</div>
            </div>

            </Crosshair>
        </XYPlot>

        </Col>
        <Col span={6}>

            

            <RouteInformation></RouteInformation>

            <div style={{marginTop:200}}>
          <div style={{marginBottom:10,marginLeft:50}}>순위</div>
        <div style={{ height:400,marginTop:20, marginLeft:50,width:700,overflow:'auto'}}>
            <Card style={{backgroundColor:'gray' ,height:50,height:50,width:785,borderRadius:30}}>
            <span style={{position:'absolute',bottom:12,left:20}}>순위</span>

<span style={{position:'absolute',bottom:12,left:50}}>이름</span>
<span style={{position:'absolute',bottom:12,left:125}}>속도</span>
<span style={{position:'absolute',bottom:12,left:220}}>기록</span>

<span style={{position:'absolute',bottom:12,left:370}}>날짜</span>
            </Card>
          
        {loadMap.rank==='gpsData가 존재하지 않습니다.'?'':loadMap.rank.map((b,index)=>(
                <Card style={{marginBottom:10,borderRadius:30}}>
                                     <a>{index+1+'위'}</a>

                    <span style={{marginLeft:10}}>{b.user.name}</span>
                    <span style={{marginLeft:50,top:10,fontSize:11}}>100km</span>
                    <span style={{marginLeft:80,top:10,fontSize:11}}>{b.totalTime}</span>
                    
                    <span style={{marginLeft:100,top:10,fontSize:11}}>{b.createdAt}</span>
                </Card>
                
            ))
            
            }
        </div>
       
    

  
    </div>

        </Col>
        </Row>     
   

 
        </Col>
    </Row>

  


    



  
 </div>




 )
}

export async function getStaticPaths(){
    const posts= await axios.get('http://13.124.24.179/api/track')
   

var paths1=posts.data.trackId.map((id)=>({
     params:{id:id._id}
 }))

 return{
     paths:paths1,
     fallback:false
 }
}


export const getStaticProps=wrapper.getStaticProps(async (context)=>{
 
     context.store.dispatch({
             type:LOAD_MAP_REQUEST,
             data:context.params.id
         })
     context.store.dispatch(END)
     await context.store.sagaTask.toPromise()
})



export default oneRoute