import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';

const Carte = ({moviesmap, markerUp}) => {
    // markerUp = moviesmap ? markerUp: [moviesmap[0].lat, moviesmap[0].lng]
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/9800/9800512.png",
        iconSize: [20, 20]
    })

    return (
        <MapContainer zoom={13} center={markerUp} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                moviesmap.map((e, index) => (
                    <Marker key={index} position={[e.lat, e.lng]} icon={customIcon}>
                        <Popup>
                            <h2>{e.title}</h2>
                            <h4>ville: {e.locations}</h4>                            
                            <p>Year: {e.release_year} </p>
                            <p>Director: {e.director} </p>
                            <p>Actors: {e.actor_1}, {e.actor_1}, {e.actor_1} </p>
                            <p>Localisation: {e.locations} </p>
                            <p>Production company: {e.production_company} </p>
                            <p>Distributor: {e.distributor} </p><br />
                            <h3>Writer: {e.writer} </h3>
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    );
}

export default Carte;