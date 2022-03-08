import React,{useEffect,useState} from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Polyline ,Marker,StreetViewPanorama,MarkerClusterer} from '@react-google-maps/api';

function createdPath({mapContainerStyle,options,dummyMap,newPath}) {
  return (
    <div>
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
   
    
    
   
         {newPath&&<Polyline   options={options} path={newPath.map((m)=>(
            {
                lat:m[1],
                lng:m[0]
            }
        ))}></Polyline>} 
     
    
    
    
    
    
        
      </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default createdPath