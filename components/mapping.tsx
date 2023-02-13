import mapboxgl from "mapbox-gl";
import React from "react";


//Not working right now...

mapboxgl.accessToken = 'pk.eyJ1IjoicG90YXRvODQiLCJhIjoiY2xkbTRxeWYyMDYxMTNxcnVyZGd6YWl2ZSJ9.sgt1eZXeOzyfffFLyVrMkg';

   
export default function Mapboxmap(){
    
    const mapContainer = React.useRef<any>(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = React.useState(-74.0632);
    const [lat, setLat] = React.useState(40.7346); 
    const [zoom, setZoom] = React.useState(12);
    

    React.useEffect(() => {
        mapContainer: 'map';
        style: 'mapbox://styles/mapbox/streets-v12';
        center: [setLng, setLat];
        zoom: [setZoom]
    });
        return (
            <div>
                <div ref={mapContainer} className="map-container" />
            </div>
        )
}