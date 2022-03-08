
import React,{useState} from 'react'
import "../styles/styles.js";
import Head from "next/head";
import { Global } from "../styles/styles.js";
import "antd/dist/antd.css";
import AppLayout from "../component/Layout/AppLayout.js";
import Link from "next/link";
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
  import { GoogleMap, LoadScript } from '@react-google-maps/api';
  import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';






function testPage({ Component, pageProps, children }) {


   ////elev marker

   const [elevPath, setElevPath]=useState()

   

   ////elev marker

    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
      ];

    const [state,setState]=useState({
        crosshairValue:[]
    })
    const [index,setIndex]=useState()

    const handleMouseOver=()=>{
        console.log('qqqq')
        setState({crosshairValue:[]})
        setIndex(0)
    }
    const qq=(value,{index})=>{
        console.log(value)
        console.log('aa',index)
        setIndex(index)

        setState({crosshairValue:data.map(d=>d)})
        setElevPath(path[index])
        console.log('ha',state)
    }

    /////googlemap

    const [strokeWeight,setStrokeWeight]=useState(5)


const mapContainerStyle = {
    height: "400px",
    width: "800px",
    marginLeft:'50px',
    marginTop:'20px'
  };

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
            {lat:  35.24651100148735,   lng: 128.87070362130143},
   
            {lat: 35.24752656439432,   lng:128.8729993854958},
            {lat:35.248984786322424, lng:128.87318007064073},
            {lat:35.25018259185734, lng:128.87332887017186},
            {lat:35.25065129355367, lng:128.87505069331763},
            {lat:35.25145581526787, lng:128.87358573620605},
            {lat:35.246751651411415, lng:128.86898534191548},
            {lat:35.245507442943605, lng:128.8669897784343},
            {lat:35.2479607934602, lng:128.86665718452073},
            {lat:35.248425169309606, lng:128.86413590807936}
          ]
    
    ],
    zIndex: 1
  };

  const path=[
    {lat:  35.24651100148735,   lng: 128.87070362130143},
   
    {lat: 35.24752656439432,   lng:128.8729993854958},
    {lat:35.248984786322424, lng:128.87318007064073},
    {lat:35.25018259185734, lng:128.87332887017186},
    {lat:35.25065129355367, lng:128.87505069331763},
    {lat:35.25145581526787, lng:128.87358573620605},
    {lat:35.246751651411415, lng:128.86898534191548},
    {lat:35.245507442943605, lng:128.8669897784343},
    {lat:35.2479607934602, lng:128.86665718452073},
    {lat:35.248425169309606, lng:128.86413590807936}
  ]


const mouseOut=()=>{
    setStrokeWeight(5)
    console.log('aaa')
}

const mouseOver=()=>{
    setStrokeWeight(10)
    console.log('over')
}
   


    /////googlemap

   

    
    
      
  return (
    <>

<LoadScript
 googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
 >
     
   <GoogleMap
     id="marker-example"
     mapContainerStyle={mapContainerStyle}
     zoom={14}
     center={{lat:35.248984786322424, lng:128.87318007064073}}
    
     
   
     
   >
 
 <Marker  position={path[path.length-1]}  />
 {elevPath&&<Marker position={elevPath} icon={{url:'https://cdn.crowdpic.net/list-thumb/thumb_l_0CC86DFEB7C075B18E0680E5B0FC975B.png',
              scaledSize: new google.maps.Size(30,30),} }></Marker>}
 
 
 
     <Polyline onMouseOver={mouseOver} onMouseOut={mouseOut}  options={options} path={path}></Polyline>
     
 
 
 
 
 
     
   </GoogleMap>
   </LoadScript>


    <XYPlot height={300} width={300} onMouseLeave={handleMouseOver}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} onNearestX={qq} />
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
    
    
  </>
);
}

export default testPage
