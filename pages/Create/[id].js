import React,{useEffect,useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import {Card,Table,Button,Slider, Switch,Row,Col} from 'antd'
import { fa } from 'faker/lib/locales';
// import CreatedPath from './createdPath';
import SideBar from '../../component/Layout/SideBar';
import { useDispatch, useSelector } from 'react-redux';
// import { BIKE_MAP_REQUEST } from '../reducers/map';
import { END } from 'redux-saga';
import wrapper from '../../store/configureStore';
import { ADD_TRACK_REQUEST, LOAD_CREATEMAP_REQUEST } from '../../reducers/map';
import axios from 'axios';
import create from '@ant-design/icons/lib/components/IconFont';



function createPath() {

    const {createMap}=useSelector((state)=>state.map)

const dispatch=useDispatch()


const dummyMap={
    id:2,
    name:'경북대학교',
    distance:350,
    userId:1,
    description:'설명',
    event:'bike',
    gps:{
        type:"LineString",
        coordinates: [
            [
                128.6107980854627,
                35.892532678390346
            ],
            [
                128.6068460393017,
                35.88766339206395
            ],
            [
                 128.61174492985546,
                 35.88602911241712
            ],
            [128.6145031287387,
                35.88856389908935
            ],
            [
                128.6123212699206,
                35.89099855199497
            ],
            [
                128.6128976099858,
                35.89463371630573
            ]
           
        ],
        id: "62133c5ff58346f2e09756af"
    
    },
    altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
    ],
    start_latlng: [
        128.6107980854627,
        35.892532678390346
    ],
    end_latlng: [
        128.6128976099858,
        35.89463371630573
    ],
    createdAt: "2022-02-21T07:16:47.648Z",
    }


const mapContainerStyle = {
    height: "400px",
    width: "800px",
    marginLeft:'50px',
    marginTop:'20px'
  };

    

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

      const drag=()=>{
          console.log('drag')
      }

      const onLoad = polyline => {
        console.log('polyline: ', polyline)
      };

      const [number,setNumber]=useState([0,createMap.track.gps.coordinates.length-1])
      
      const [leftPath,setLeftPath]=useState({
          lat:createMap.track.start_latlng[1],lng:createMap.track.start_latlng[0]
        })
      const [rightPath,setRightPath]=useState({
        lat:createMap.track.end_latlng[1],lng:createMap.track.end_latlng[0]
      })

      const change=(value)=>{
        setNumber(value)
       
      }

      useEffect(()=>{
          setLeftPath({
              lat:createMap.track.gps.coordinates[number[0]][1],
              lng:createMap.track.gps.coordinates[number[0]][0]
          
            })
            console.log(number[0])

      },[number[0]])
      useEffect(()=>{
        setRightPath({
            lat:createMap.track.gps.coordinates[number[1]][1],
            lng:createMap.track.gps.coordinates[number[1]][0]
        
          })
          console.log(number[1])


    },[number[1]])
    const storePath=[]
    const [newPath,setNewPath]=useState()

    const pathStore=()=>{
        
        for(var i=number[0]; i<number[1]+1; i++){
            storePath.push(createMap.track.gps.coordinates[i])
            // console.log(storePath)
            // setNewPath([...newPath,storePath])
            
        }
        // dummyMap.gps.coordinates=storePath
        setNewPath(storePath)
        // console.log('aaa',newPath)
        // console.log('qq',dummyMap.gps.coordinates)


        
        console.log('..',newPath)
        const altitudes=[]
      createMap.track.altitude.map((v)=>(
        altitudes.push(v.y)
        ))

        dispatch({
            type:ADD_TRACK_REQUEST,
            data:{
                trackName:createMap.track.trackName,
                totalDistance:createMap.track.totalDistance,
                userId:createMap.track.user.userId,
                name:createMap.track.user.name,
                description:createMap.track.description,
                event:createMap.track.event,
                checkPoint:createMap.track.checkPoint,
                gps:storePath,
                altitude:altitudes
            }
        })
      
    }

  return (
    <div>
        <Row>
            <Col span={4}>
                <SideBar></SideBar>
            </Col>
            <Col span={12}>
            <h1>{number[0]}</h1>
<h1>{number[1]}</h1>
        <Slider range defaultValue={number} max={createMap.track.gps.coordinates.length-1} onChange={change} />
        {/* {state&&<Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />} */}
    <LoadScript
    googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
    >
        
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        
        center={{lat:35.89567677518036, lng:  128.6200643553443}}
       
        
      
        
      >
    
    {/* <Marker  position={{lat:dummyMap.start_latlng[1],lng:dummyMap.start_latlng[0]}}  /> */}
   
    <Marker position={leftPath} icon={{url:' http://maps.google.com/mapfiles/ms/icons/blue.png',}} ></Marker>
    <Marker position={rightPath} ></Marker>
    
   
         <Polyline onDragStart={drag} onLoad={onLoad}  options={options} path={createMap.track.gps.coordinates.map((m)=>(
            {
                lat:m[1],
                lng:m[0]
            }
        ))}></Polyline> 
     
    
    
    
    
    
        
      </GoogleMap>
      </LoadScript>
      
      <Button onClick={pathStore}>경로만들기</Button>

    <div>
        {/* <CreatedPath mapContainerStyle={mapContainerStyle} options={options} newPath={newPath} dummyMap={dummyMap}></CreatedPath> */}
        </div>  

            </Col>
        </Row>



{/* <Slider defaultValue={number} onChange={change} /> */}

    </div>
  )
}

// export async function getStaticProps() {
//     return {
//       props: {
//         data: dispatch({
//             type:BIKE_MAP_REQUEST
//         }),
//       },
//       // revalidate: 10,
//     };
//   }

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
        type:LOAD_CREATEMAP_REQUEST,
        data:context.params.id
    })
    context.store.dispatch(END)
    await context.store.sagaTask.toPromise()
})


export default createPath