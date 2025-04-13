import {useEffect} from 'react'

const GoogleMap = () => {

  useEffect(() => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script)
  script.onload = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })
  }
  },[])
  return (
      <div id="map" style={{height:"400px",width:'100%'}}></div>
  )
}

export default GoogleMap