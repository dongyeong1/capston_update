import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';
import AppLayout from '../component/AppLayout';
// import Streetview from 'react-google-streetview';// import RecordElevation from '../component/RecordElavation'
import { BIKE_MAP_REQUEST, LOAD_MY_LOCATION_REQUEST, LOAD_MY_LOCATION_SUCCESS, SEARCH_MAP_REQUEST } from '../reducers/map';
import {LOAD_MAP_REQUEST} from '../reducers/map'
import GeomHandle from '../component/GoogleMap'
import { Input,Col,Row,Button } from 'antd';
import SideBar from '../component/Layout/SideBar';
import { InfoWindow } from '@react-google-maps/api';
import Router from 'next/router'
// import {useHistory} from 
import Link from 'next/link'
import { END } from 'redux-saga';

import SelectMap from '../component/map/selectMap'
import wrapper from '../store/configureStore';
// import InfoWindow from '../component/InfoWindow';











   
    




function polylineTest() {


    return (
        <div>
         
               
       
       
       
              

       <SelectMap></SelectMap>

               


           
           
       
         </div>

    )}





  
  
  export default React.memo(polylineTest)

