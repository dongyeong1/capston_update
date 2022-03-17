import { Card } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import {Button} from 'antd'
import styled from "styled-components";

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
    <Container>
    <Card>
      <button
        type="button"
        onClick={() => polylineClick(list)}
        onMouseOver={() => mouseOver(index)}
        onMouseOut={() => mouseOut(index)}
      >
        {list.trackName}
      </button>

      {/* <Card.Meta
      
      description={list.name}
      >
          
      </Card.Meta> */}
    </Card>
  </Container>
  )
}

export default SearchList
const Container = styled.div`
  .ant-card {
    // display: inline-block;
    // height: 33%;
    height: 150px;
  }
`;