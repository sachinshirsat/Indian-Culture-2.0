import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import './HistoricStates.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,

});

L.Marker.prototype.options.icon = DefaultIcon;

function StateMap() {
    const bounds = [
        [10.5, 79.0], 
        [11.0, 79.5] 
    ];

    // 
    const rivergomti = () => {
        window.open('/rivergomti', '_parent');
      };
    return (
        <>
            <MapContainer 
                center={[10.7869994, 79.1378273999999]} 
                zoom={14} 
                style={{ height: '600px', width: '100%' }}
                maxBounds={bounds}          
                maxBoundsViscosity={1.0}    
                minZoom={12}                 
                maxZoom={18}                
                scrollWheelZoom={false}      
                zoomControl={true}          
            >
                <TileLayer
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png'

                />
                
                {/* Markers */}
                <Marker position={[10.7869994, 79.1378273999999]} >
                    <Popup>
                        River Gomti, Lucknow, India<br></br>
                        <a href='https://www.google.com/' target='_blank' rel='noreferrer' onClick={rivergomti}> Click here!</a>
                    </Popup>
                </Marker>

                <Marker position={[10.7955434, 79.134656]} >
                    <Popup>
                        ST. PETER'S HIGHER SECONDARY SCHOOL, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 3rd Marker */}
                <Marker position={[10.6671885, 79.4527411]} >
                    <Popup>
                        RAJA VEEDHI, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 4th Marker */}
                <Marker position={[10.791557514929158, 79.13612309656686]} >
                    <Popup>
                        TANJORE MARATHA CUISINE, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 5th Marker */}
                <Marker position={[10.7869994, 79.1378274]} >
                    <Popup>
                        THANJAVUR CANNON, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 6th Marker */}
                <Marker position={[10.7912734, 79.136062]} >
                    <Popup>
                        SERFOJI II, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 7th Marker */}
                <Marker position={[10.7691833, 79.1266978]} >
                    <Popup>
                    River Gomti, Lucknow, India<br></br>
                        <a href='#' target='_blank' rel='noreferrer' onClick={rivergomti}> Click here!</a>
                    </Popup>
                </Marker>

                {/* 8th Marker */}
                <Marker position={[10.7913862, 79.1362484]} >
                    <Popup>
                        DARBAR HALL, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 11th Marker */}
                <Marker position={[10.7917445, 79.1366239]} >
                    <Popup>
                        SARASWATI MAHAL LIBRARY, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 12th Marker */}
                <Marker position={[10.7915083, 79.1359791]} >
                    <Popup>
                        MARATHA PALACE, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 13th Marker */}
                <Marker position={[10.7943451, 79.1380117]} >
                    <Popup>
                        THANJAVUR VEENA, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

 
                {/* 18th Marker */}
                <Marker position={[10.7884742, 79.1361643]} >
                    <Popup>
                        VEENA MAKERS OF THANJAVUR, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 19th Marker */}
                <Marker position={[10.7856883, 79.1313266]} >
                    <Popup>
                        SCHWARTZ CHURCH, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                 {/* 25th Marker */}
                <Marker position={[10.7826954, 79.1314587]} >
                    <Popup>
                        BRIHADESWARA TEMPLE COMPLEX, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

                {/* 26th Marker */}
                <Marker position={[10.7825762, 79.1312391]} >
                    <Popup>
                        NANDI MANDAPA, Thanjavur, India<br></br>
                        <a href='https://www.example.com/' target='_blank' rel='noreferrer'> Click here!</a>
                    </Popup>
                </Marker>

            </MapContainer>
        </>
    )
}

export default StateMap
