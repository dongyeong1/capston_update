import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import AppLayout from '../component/AppLayout';
// import Streetview from 'react-google-streetview';// import RecordElevation from '../component/RecordElavation'
import { BIKE_MAP_REQUEST, SEARCH_MAP_REQUEST } from '../reducers/map';
import {LOAD_MAP_REQUEST} from '../reducers/map'
import GeomHandle from '../component/GoogleMap'
import { Input,Col,Row,Button } from 'antd';
import SideBar from '../component/Layout/SideBar';
import { InfoWindow } from '@react-google-maps/api';
import Router from 'next/router'
// import {useHistory} from 
import Link from 'next/link'
import SelectMap from '../component/map/selectMap'
// import InfoWindow from '../component/InfoWindow';











   
    




function polylineTest() {


    // const {searchMap}=useSelector((state)=>state.map)

    // const dispatch=useDispatch()

//    useEffect(()=>{
//     dispatch({
//         type:BIKE_MAP_REQUEST
//     })

//    },[])
    // const [propsPosition,setPropsPosition]=useState()







    
    
      
 

  


    
  

    
      
  
    return (
        <div>
            <Row>
            <Col span={4}>
                {/* <SideBar ></SideBar> */}

                </Col>
             
                <Col span={10}>
       
       
       
              

       <SelectMap></SelectMap>

                </Col>


            </Row>
           
       
         </div>

    )}
  
  
  export default React.memo(polylineTest)