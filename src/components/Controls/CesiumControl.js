import React, {useContext, useEffect, useRef, useState} from "react";
import MapContext from "../Map/MapContext";
import OLCesium from "olcs/OLCesium";

const CesiumControl = () => {
    const {map} = useContext(MapContext);
    const ol3dRef = useRef();
    const [cesiumEnabled, setCesiumEnabled] = useState(null);

    const toggle3d = () => {
        ol3dRef.current.setEnabled(!cesiumEnabled);
        setCesiumEnabled(!cesiumEnabled);
    }

    useEffect(() => {
        if (!map) return;

        ol3dRef.current = new OLCesium({map: map}); // ol2dMap is the ol.Map instance
        window.ol3d = ol3dRef; // temporary hack for easy console debugging

    }, [map]);

    return <div className="ol-3d ol-unselectable ol-control" onClick={toggle3d}>
        <button className="ol-full-screen-false" type="button" title="Enable 3D" style={{display: cesiumEnabled ? 'none' : 'block'}}>3D</button>
        <button className="ol-full-screen-false" type="button" title="Disable 3D" style={{display: !cesiumEnabled ? 'none' : 'block'}}>2D</button>
    </div>;
};

export default CesiumControl;
