import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import AppLayout from '../component/AppLayout';
// import Streetview from 'react-google-streetview';// import RecordElevation from '../component/RecordElavation'
import { SEARCH_MAP_REQUEST } from '../reducers/map';
import {LOAD_MAP_REQUEST} from '../reducers/map'
import GeomHandle from '../component/GoogleMap'
import { Input,Col,Row,Button } from 'antd';
import SideBar from '../component/Layout/SideBar';
import { InfoWindow } from '@react-google-maps/api';
import Router from 'next/router'
// import {useHistory} from 
import Link from 'next/link'
// import InfoWindow from '../component/InfoWindow';



const iconPin={
    path:'https://png.pngtree.com/png-clipart/20190921/original/pngtree-label-free-png-picture-png-image_4700172.jpg',
    scale:1
}



const mapContainerStyle = {
  height: "400px",
  width: "800px"
};

const call=()=>{
    console.log('cccccc')
}

const center = {lat:  35.969997373905, lng: 128.45170755523503};





const path = [
[
    {lat:  35.969997373905, lng: 128.45170755523503},
    {lat:35.985501427015464, lng:128.40407191943035},

    {lat: 35.89580489690752, lng: 128.62238368221892}
    
]
,
[
    {lat:  35.24651100148735,   lng: 128.87070362130143},
   
    {lat: 35.24752656439432,   lng:128.8729993854958},
    {lat:35.248984786322424, lng:128.87318007064073},
    {lat:35.25018259185734, lng:128.87332887017186},
    {lat:35.25065129355367, lng:128.87505069331763},
    {
        lat:35.25145581526787, lng:128.87358573620605
    }

    
]


   
    
];

const markerPosition=[
    {lat: 35.89580489690752, lng: 128.62238368221892},{
        lat:35.25145581526787, lng:128.87358573620605
    }
]


function createKey(location) {
    return location.lat + location.lng
  }


const optionss = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }


function polyline() {

    //////

    const {searchMap}=useSelector((state)=>state.map)

    const dispatch=useDispatch()

    const [propsPosition,setPropsPosition]=useState()


//InfoWindow
const [target,setTarget]=useState(false)

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
  }

const [infoPosition,setInfoPosition]=useState({
    lat:'',
    lng:'',
})

const [propsId,setPropsId]=useState()

const closeClick=()=>{
    setTarget(false)
}
const i=1

const oneRoute=()=>{
   
    Router.push({
        pathname: '/Route/[id]',
        query: {id:propsId},
      });

      console.log('dong',searchMap)
}


//InfoWindow

    //polyline

const [strokeWeight,setStrokeWeight]=useState(Array.from({length: searchMap.length}, () => 5))
const strokeWeights= Array.from({length: searchMap.length}, () => 5);

const onLoad = polyline => {
    console.log('polyline: ', polyline)
   
  };



function mouseOut(index){
    strokeWeights[index]=5
    setStrokeWeight(strokeWeights)
    // setStrokeWeight(5)
    console.log('aaa')

}

function mouseOver(index){
    console.log('ssss',strokeWeight)
    strokeWeights[index]=10
    setStrokeWeight(strokeWeights)
    console.log('over')
}




const polylineClick=(positionData)=>{
    console.log('click')
    console.log('cc',searchMap)

    setInfoPosition({
        lat:positionData.gps.coordinates[3][1],
        lng:positionData.gps.coordinates[3][0]
    })
    setPropsId(positionData.id)
    setPropsPosition(positionData)
    setTarget(true)
    console.log('ppp',positionData)
    
}

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    // strokeWeight: strokeWeight,
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
          ,
          [
              {lat:  35.24731788471166,  lng: 128.86906207420088},
             
              {lat: 35.260354548127424,  lng:128.81198466603703}
              
          ]
        
    
      
    ],
    zIndex: 1
  };



//polyline




    const [elev,setElev]=useState()
    const [mapref, setMapRef] = useState(null);
    const handleOnLoad = map => {
      setMapRef(map);
      const elevator = new google.maps.ElevationService();
      setElev(elevator)
      console.log(elevator)
      console.log('onLoad')
    };
    const handleCenterChanged = () => {
      if (mapref) {
        // ElevationService()
        const zoom=mapref.getZoom()
        
        // const ele=mapref.getElevationService();
        const lat = mapref.getCenter().lat();
        const lng = mapref.getCenter().lng();
        const ne=mapref.getBounds().getNorthEast();
        // const nw=mapref.getBounds().getNorthWest();
        const sw=mapref.getBounds().getSouthWest();
        // const se=mapref.getBounds().getSouthEast();
     
        // displayLocationElevation(lat, elevator, infowindow);
        console.log('zoom',zoom);
        console.log('north', ne.lat(),',',ne.lng())
        console.log('south',sw.lat(),',',sw.lng())
 

    
      }
      // dispatch({
      //   type:MOVING_MAP_REQUEST,
      //   data:{
      //     north:{
      //       lat:ne.lat(),
      //       lng:ne.lng()
      //     },
      //     south:{
      //       lat:sw.lat(),
      //       lng:ne.lat()
      //     },

      //   }
      // })
    
    }

  


    const myLatLng = { lat: -25.363, lng: 131.044 };
    // const map = new google.maps.Map(document.getElementById("map"), {
    //   zoom: 4,
    //   center: myLatLng,
    // });
    const [geom ,setGeom]=useState({lat:35.969997373905, lng: 128.45170755523503})

    const handleButton = async() => {
        const currentAddr = document.getElementById('address').value
        if (currentAddr){
          const {lat, lng} = await GeomHandle(currentAddr)
          setGeom({lat:lat,lng:lng})

          dispatch({
            type:SEARCH_MAP_REQUEST,
            data:'1'
        })
        console.log('aaa',searchMap)



       
        }
      }

      const [mapState,setMapState]=useState(false)

      const selectMap=()=>{
        setMapstate(mapState)
      }

      
  
    return (
        <div>
            <Row>
            <Col span={4}>
                <SideBar ></SideBar>

                </Col>
                <Col span={12}>
                검색하기
        <Input.Search id="address"  style={{verticalAlign:'middle' ,marginLeft:'10px',width:'500px'}} /><br></br>
        <button onClick={handleButton}>클릭</button>
        <Button onclick={selectMap}>자전거</Button>
        <Button onclick={selectMap}>달리기</Button>
              

        <LoadScript
        googleMapsApiKey="AIzaSyAYsO2CGL0YCjMoLk29eyitFC2PIJnJbYE"
        >
            
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={geom}
            onLoad={handleOnLoad}
            onDragEnd={handleCenterChanged}
            onZoomChanged={handleCenterChanged}
          
            
          >

<MarkerClusterer options={optionss}>
          {(clusterer) =>
            searchMap.map((p) => (
              <Marker  key={createKey(p)} position={{lat:p.start_latlng[1],lng:p.start_latlng[0]}} onClick={call} clusterer={clusterer}  icon={{
              scaledSize: new google.maps.Size(30,30),} } />
            ))
          }
        </MarkerClusterer>
      

        {searchMap.map((m,index)=>(
            <Polyline  onRightClick={()=>polylineClick(m)} onMouseOver={()=>mouseOver(index)} onMouseOut={()=>mouseOut(index)} onLoad={onLoad}  options={{strokeWeight:strokeWeight[index],clickable:true,visible:true,strokeColor: '#FF0000',fillColor: '#FF0000',}} path={m.gps.coordinates.map((p)=>(
                {
                    lat:p[1],
                    lng:p[0]
                }
            ))}></Polyline>
            
            ))}
            
    {target&&<InfoWindow position={infoPosition} onCloseClick={closeClick}>
        <div style={divStyle}>
            <h1>동영</h1>
                {/* <Link href={{
                    pathname:'/Route/[id]',
                    query: {id:propsId},
                }}><a>상세보기</a></Link> */}
            <button onClick={oneRoute}>상세보기</button>
        </div>
        </InfoWindow>} 
         

        
       
            
          </GoogleMap>
          </LoadScript>
             

                </Col>


            </Row>
           
       
         </div>

    )
  }
  
  export default React.memo(polyline)