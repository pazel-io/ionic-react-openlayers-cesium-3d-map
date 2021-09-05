import React, {useRef, useState, useEffect} from "react"
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";
import {defaults as defaultControls} from "ol/control";
import {defaults} from 'ol/interaction';
const Map = ({children, zoom, center}) => {
    const mapRef = useRef();
    const [map, setMap] = useState(null);
    // on component mount
    useEffect(() => {
        let options = {
            view: new ol.View({zoom, center}),
            layers: [],
            controls: defaultControls({
                attribution: true,
                attributionOptions: {
                  collapsible: true,
                },
                zoom: true,
                rotate: true,
            }),
            interactions: defaults(),
            overlays: []
        };

        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current);
        setMap(mapObject);

        return () => mapObject.setTarget(undefined);
    }, []);

    // zoom change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setZoom(zoom);
    }, [zoom]);

    // center change handler
    useEffect(() => {
        if (!map) return;

        map.getView().setCenter(center)
    }, [center])

    return (
        <MapContext.Provider value={{map}}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    )
}

export default Map;
