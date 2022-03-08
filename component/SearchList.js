import { Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';

function SearchList({setInfoPosition,setPropsId,index,list,setStrokeWeight,setTarget}) {
    
    const {searchMap}=useSelector((state)=>state.map)

    const strokeWeights= Array.from({length: searchMap.length}, () => 3);

    function mouseOver(index){
        strokeWeights[index]=10
        setStrokeWeight(strokeWeights)
    }

    function mouseOut(index){
        strokeWeights[index]=3
        setStrokeWeight(strokeWeights)

    }



    const polylineClick=(positionData)=>{
     

        setInfoPosition({
            lat:positionData.gps.coordinates[3][1],
            lng:positionData.gps.coordinates[3][0]
        })
        setPropsId(positionData._id)
        // (positionData)
        setTarget(true)
        
    }
    
   
  return (
    <>
    
    <Card
    style={{borderRadius:20,marginTop:10}}
    >
        <button onClick={()=>polylineClick(list)} onMouseOver={()=>mouseOver(index)} onMouseOut={()=>mouseOut(index)} >{list.trackName}</button>

        {/* <Card.Meta
        
        description={list.name}
        >
            
        </Card.Meta> */}

    </Card>
    </>
  )
}

export default SearchList