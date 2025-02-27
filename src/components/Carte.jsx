import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import moviesmap from "../assets/data.json"
import { Icon } from 'leaflet';

const Carte = () => {

    const [location, setLocation] = useState(moviesmap)
    console.log(location[0])

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/9800/9800512.png",
        iconSize: [20, 20]
    })

    return (
            <MapContainer zoom={13} center={[37.773972, -122.431297]} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    location.map((e, index) => (
                        <Marker key={index} position={[e.lat, e.lng]} icon={customIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
    );
}

export default Carte;
