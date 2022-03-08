import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import Router from 'next/router'
import {LOAD_MAP_REQUEST} from '../../reducers/map'
import { MOVING_MAP_REQUEST,BIKE_MAP_REQUEST,RUNNING_MAP_REQUEST,SEARCH_MAP_REQUEST } from '../../reducers/map';
import {Input,Button,Row,Col,Card} from 'antd'
import GeomHandle from '../GoogleMap'
import SearchList from '../SearchList';
import Link from 'next/link';
import styled from "styled-components";


function selectMap({}) {

    const [isState,setIsState]=useState(false)
    const [mapState,setMapState]= useState('B')

   
    const dispatch=useDispatch()

    const mapContainerStyle = {
    marginTop:60,
    height: "400px",
    width: "700px"
    };
  

    const {searchMap}=useSelector((state)=>state.map)

    // const [geom ,setGeom]=useState({lat:35.969997373905, lng: 128.45170755523503})
    const [mapref, setMapRef] = useState(null);


    const handleOnLoad = map => {
        setMapRef(map);
        console.log('load됨')
        
      };

      const [nelat,setNelat]=useState()
      const [nelng,setNelng]=useState()

      const [swlat,setSwlat]=useState()
      const [swlng,setSwlng]=useState()



      const handleCenterChanged = () => {
        if (mapref) {
            
        //   var zoom=mapref.getZoom()
          var nt=mapref.getBounds().getNorthEast().lat();
          var ng=mapref.getBounds().getNorthEast().lng();

          var st=mapref.getBounds().getSouthWest().lat();
          var sg=mapref.getBounds().getSouthWest().lng();

          setNelat(nt)
          setNelng(ng)
          setSwlat(st)
          setSwlng(sg)

        
        }

        dispatch({ 
          type:MOVING_MAP_REQUEST,
          data:{
            north:{
                lat:mapref.getBounds().getNorthEast().lat(),
                lng:mapref.getBounds().getNorthEast().lng()
              },
              south:{
                lat:mapref.getBounds().getSouthWest().lat(),
                lng:mapref.getBounds().getSouthWest().lng()
              },
            event:mapState
  
          }
        })
      
      }

      //////markercluseter


    const optionss = {
        imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
    }


    function createKey(location) {
        return location.lat + location.lng
    }

      //////markercluseter


   ///주소검색

    const {searchmapLoading}=useSelector((state)=>state.map)

   const [geom ,setGeom]=useState({lat:35.969997373905, lng: 128.45170755523503})


   const handleButton = async() => {
       const currentAddr = document.getElementById('address').value
       if (currentAddr){
         const {lat, lng} = await GeomHandle(currentAddr)
         setGeom({lat:lat,lng:lng})

         dispatch({
           type:SEARCH_MAP_REQUEST,
           data:{
            north:{
              lat:mapref.getBounds().getNorthEast().lat(),
              lng:mapref.getBounds().getNorthEast().lng()
            },
            south:{
              lat:mapref.getBounds().getSouthWest().lat(),
              lng:mapref.getBounds().getSouthWest().lng()
            },
            event:mapState
  
          }
       })
       console.log('aaa',searchMap)



      
       }
     }


   //주소검색



      //polyline

    //   const [propsPosition,setPropsPosition]=useState()

      const [propsId,setPropsId]=useState()


      const [infoPosition,setInfoPosition]=useState({
        lat:'',
        lng:'',
        })
    
      const [target,setTarget]=useState(false)


      const [strokeWeight,setStrokeWeight]=useState(Array.from({length: searchMap.length}, () => 3))
      const strokeWeights= Array.from({length: searchMap.length}, () => 3);


      const polylineClick=(positionData)=>{
     
    
        setInfoPosition({
            lat:positionData.gps.coordinates[3][1],
            lng:positionData.gps.coordinates[3][0]
        })
        setPropsId(positionData._id)
        // setPropsPosition(positionData)
        setTarget(true)
        
    }
    

    function mouseOver(index){
        strokeWeights[index]=10
        setStrokeWeight(strokeWeights)
    }

    function mouseOut(index){
        strokeWeights[index]=3
        setStrokeWeight(strokeWeights)

    }

      //polyline

      //infoWindow
      const closeClick=()=>{
        setTarget(false)
    }



    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15
    }


  const oneRoute=()=>{
    dispatch({
               type:LOAD_MAP_REQUEST,
               data:propsId
             })
               
    Router.push({
        pathname: '/Route/[id]',
        query: {id:propsId},
      });

      console.log('dong',searchMap)
}


      //infoWindow

    //   const [mapState,setMapState]=useState()
    // const {mapState}=useSelector((state)=>state.map)
    const bikeSelectMap=()=>{
        setMapState('B')
        setIsState(true)
    }

    const runningSelectMap=()=>{
        setMapState('R')
        setIsState(true)
    }
   
    useEffect(()=>{

        if(mapState==='B'&&isState===true){
            dispatch({
                type:BIKE_MAP_REQUEST,
                data:{
                    event:mapState,
                    north:{
                        lat:mapref.getBounds().getNorthEast().lat(),
                        lng:mapref.getBounds().getNorthEast().lng()
                      },
                      south:{
                        lat:mapref.getBounds().getSouthWest().lat(),
                        lng:mapref.getBounds().getSouthWest().lng()
                      },  
                }
            })
            setIsState(false)
        }else if(mapState==='R'&&isState===true){
            dispatch({
                type:RUNNING_MAP_REQUEST,
                data:{
                    event:mapState,
                    north:{
                        lat:mapref.getBounds().getNorthEast().lat(),
                        lng:mapref.getBounds().getNorthEast().lng()
                      },
                      south:{
                        lat:mapref.getBounds().getSouthWest().lat(),
                        lng:mapref.getBounds().getSouthWest().lng()
                      },
                }
            })
            setIsState(false)

        }
    },[mapState,isState])



  
    


  return (
    <div>

        <Row>
            <Col span={10}>
                <Input.Search 
                loading={searchmapLoading} enterButton="검색" onPressEnter={handleButton}
                id="address"  style={{verticalAlign:'middle' ,width:'300px'}} /><br></br>
                
                <Buttons>
                <Button onClick={bikeSelectMap}>자전거</Button>
                <Button onClick={runningSelectMap}>달리기</Button> 
                </Buttons>

                 <div>
                    {
                        searchMap.map((p,index)=>(
                            
                          <SearchList setInfoPosition={setInfoPosition} setPropsId={setPropsId} setTarget={setTarget} index={index} setStrokeWeight={setStrokeWeight} list={p} key={p.id} ></SearchList>
                            
                        ))
                        }
                </div> 
                
            </Col>

            <Col span={10}>
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
            // onZoomChanged={handleCenterChanged}
          >

        <MarkerClusterer options={optionss}>
                {(clusterer) =>
                    searchMap.map((p) => (
                    <Marker  key={createKey(p)} position={{lat:p.start_latlng[1],lng:p.start_latlng[0]}} clusterer={clusterer}  icon={{
                    scaledSize: new google.maps.Size(30,30),} } />
                    ))
                }
        </MarkerClusterer>
            

        {searchMap.map((m,index)=>(
            <Polyline  onRightClick={()=>polylineClick(m)} onMouseOver={()=>mouseOver(index)} onMouseOut={()=>mouseOut(index)}  options={{strokeWeight:strokeWeight[index],clickable:true,visible:true,strokeColor: '#FF0000',fillColor: '#FF0000',}} path={m.gps.coordinates.map((p)=>(
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
                    }}><a>상세보기</a></Link>
                     */}
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

export default selectMap

const Buttons= styled.div`


Button:hover {
    background:#1683e8;
    border-color: #1683e8;
    color: #fff;
  }

  Button:focus {
    background:#1683e8;
    color: #fff;
  }
`