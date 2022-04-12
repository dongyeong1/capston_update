import React,{useEffect,useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import {Form,Card,Table,Button,Slider, Switch,Row,Col,Input,Modal} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import wrapper from '../../store/configureStore';
import { ADD_TRACK_REQUEST, LOAD_CREATEMAP_REQUEST } from '../../reducers/map';
import axios from 'axios';
import useInput from '../../hooks/useInput';

import { LOAD_LOGIN_REQUEST } from '../../reducers/user';


function createPath() {
    const {createMap}=useSelector((state)=>state.map)

    const [createDistance,setCreateDistance]=useState(createMap.distance[createMap.distance.length-1])

    const [trackName,onChangeTrackName]=useInput('');
    const [trackDescription,onChangeTrackDescription]=useInput('')


    const [number,setNumber]=useState([0,createMap.gps.coordinates.length-1])
    const [twoPolyline,setTwoPolyline]=useState([createMap.gps.coordinates])
    
    const [leftPath,setLeftPath]=useState({
        lat:createMap.gps.coordinates[0][1],lng:createMap.gps.coordinates[0][0]
      })
    const [rightPath,setRightPath]=useState({
      lat:createMap.gps.coordinates[createMap.gps.coordinates.length-1][1],lng:createMap.gps.coordinates[createMap.gps.coordinates.length-1][0]
    })

    const [slope,setSlope]=useState([createMap.slope])


    const dispatch=useDispatch()
   

        
        useEffect(()=>{
            dispatch({
                type: LOAD_LOGIN_REQUEST
                });
        },[])


        useEffect(()=>{
            setLeftPath({
                lat:createMap.gps.coordinates[number[0]][1],
                lng:createMap.gps.coordinates[number[0]][0]
            
              })
            setTwoPolyline([createMap.gps.coordinates.slice(number[0],number[1])])
              setCreateDistance(createMap.distance[number[1]]-createMap.distance[number[0]])
              setSlope(createMap.slope.slice(number[0],number[1]))
              console.log('two',twoPolyline)
              console.log(number[0])
  
        },[number[0]])
        useEffect(()=>{
          setRightPath({
              lat:createMap.gps.coordinates[number[1]][1],
              lng:createMap.gps.coordinates[number[1]][0]
          
            })
            setCreateDistance(createMap.distance[number[1]]-createMap.distance[number[0]])
            setTwoPolyline([createMap.gps.coordinates.slice(number[0],number[1])])
            setSlope(createMap.slope.slice(number[0],number[1]))

            console.log('three',twoPolyline)
            console.log(number[1])
  
  
      },[number[1]])

const mapContainerStyle = {
    height: "500px",
    width: "600px",
    marginTop:30 
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


      const options111 = {
        strokeColor: '#d43b24',
        strokeOpacity: 0.8,
        strokeWeight: 5,
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



   
      const change=(value)=>{
          console.log('value',value)
        setNumber(value)
       
      }

      const createSuccess=()=>{
        Modal.success({
          title:'경로만들기 성공'
        })
      }

    
    const storePath=[]
    const altitudes=[]
   
    var totalDistance=0
  
    

    const pathStore=()=>{
        
        for(var i=number[0]; i<number[1]+1; i++){
            storePath.push(createMap.gps.coordinates[i])
            altitudes.push(createMap.altitude[i].y)
            
        }
        totalDistance=createMap.distance[number[1]]-createMap.distance[number[0]]
        console.log(totalDistance,'al',altitudes)
       
        dispatch({
            type:ADD_TRACK_REQUEST,
            data:{
                trackName,
                totalDistance,
                // userId:createMap.track.user.userId,//나중에포스트 sns되면
                // name:createMap.track.user.name,//나중에 포스트Sns되면
            // desription:createMap.track.description,//나중에포스트sns되면
                // checkPoint:createMap.track.checkPoint//나중에포스트sns되면
                //더미
                userId:createMap.user.userId,
                name:createMap.user.name,
                description:trackDescription,
                checkPoint:[[1,2]],
                //더미
                event:createMap.event,
                
                gps:storePath,
                altitude:altitudes
            }
        })

        createSuccess()
        window.location.href='/myRecord'
      
    }

  return (
<div>
<Row>
    <Col span={12}>
            <h1 style={{fontSize:40}}>경로만들기</h1>
            <div
            >
                {createDistance}
            </div>
        <div style={{marginLeft:40}}><Slider range defaultValue={number} max={createMap.gps.coordinates.length-1} onChange={change} /></div>
        
        <LoadScript
        googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
        >
        
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={{
            lat: createMap.gps.coordinates[createMap.gps.coordinates.length%2][1],
            lng: createMap.gps.coordinates[createMap.gps.coordinates.length%2][0],
        }}>
        
        <Marker position={leftPath} icon={{url:' http://maps.google.com/mapfiles/ms/icons/blue.png',}} ></Marker>
        <Marker position={rightPath} ></Marker>
    
         <Polyline   options={options} path={createMap.gps.coordinates.map((m)=>(
            {
                lat:m[1],
                lng:m[0]
            }
        ))}></Polyline> 
        <Polyline  options={options111} path={twoPolyline[0].map((m)=>(
            {
                lat:m[1],
                lng:m[0]
            }
        ))}></Polyline> 

        </GoogleMap>
        </LoadScript>       
    </Col>

    <Col span={12}>         
            <Card style={{marginTop:150,borderRadius:40,marginLeft:90}}>
                <Input  style={{}} placeholder='경로이름을 입력해주세요' value={trackName} onChange={onChangeTrackName}/>
                <Input.TextArea placeholder='경로내용을 입력해주세요' value={trackDescription} onChange={onChangeTrackDescription}/>
            
                <Button  onClick={pathStore}>경로만들기</Button>
            </Card>
    </Col>
</Row>
</div>
  )
}

export async function getStaticPaths(){
    const posts= await axios.get('http://13.124.24.179/api/gpsdata')
   

var paths1=posts.data.map((id)=>({
     params:{id:id._id}
 }))

 return{
     paths:paths1,
    // paths:[  { params: { id: '62256147dc2958292cb17110' } },],
     fallback:false
 }
}

export const getStaticProps=wrapper.getStaticProps(async (context)=>{
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
   
    context.store.dispatch({
        type:LOAD_CREATEMAP_REQUEST,
        data:context.params.id
    })
    context.store.dispatch(END)
    await context.store.sagaTask.toPromise()
})

export default createPath