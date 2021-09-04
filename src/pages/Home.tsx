import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Layers, TileLayer } from '../components/Layers';
import Map from '../components/Map';
import mapConfig from '../config.json';
import React, { useState } from 'react';
import { osm, satellite } from '../components/Source';
import { fromLonLat, get } from 'ol/proj';
import { Controls, CesiumControl, FullScreenControl } from '../components/Controls';

const MapContainer = () => {
    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(12);

    return (
        <Map center={fromLonLat(center)} zoom={zoom}>
            <Layers>
                <TileLayer source={osm()} zIndex={0}/>
            </Layers>
            <Controls>
                <FullScreenControl/>
                <CesiumControl/>
            </Controls>
        </Map>
    );
};

const Home: React.FC = () => {
    let [showMap, setShowMap] = useState(false);

    setTimeout(() => setShowMap(true), 100);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic - 3D map</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen scrollY={false}>
                {showMap && <MapContainer/>}
            </IonContent>
        </IonPage>
    );
};

export default Home;
