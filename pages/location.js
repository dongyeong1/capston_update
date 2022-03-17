import React ,{useEffect}from 'react'

function location() {

    function getLocation() {
        if (navigator.geolocation) { // GPS를 지원하면
          navigator.geolocation.getCurrentPosition(function(position) {
            alert(position.coords.latitude + ' ' + position.coords.longitude);
          }, function(error) {
            console.error(error);
          }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
          });
        } else {
          alert('GPS를 지원하지 않습니다');
        }
      }
    //   getLocation();

      useEffect(()=>{
       getLocation();
             },[])
  return (

     
    <div>

ss
    </div>
  )
}

export default location