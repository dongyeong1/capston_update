import React from 'react'

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(23.634501, -102.552784),
      zoom: 5,
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  
    var marker = new google.maps.Marker({
      map: map,
    });
  
    marker.bindTo('position', map, 'center');
  
    map.addListener('dragend', function() {
      var Newlat = map.getCenter().lat();
      console.log(Newlat);
    });
  
  }
  google.maps.event.addDomListener(window, 'load', initialize);

function drag() {
  return (
    <div id="map"></div>
  )
}

export default drag