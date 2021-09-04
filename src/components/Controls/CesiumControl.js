import React, { useContext, useEffect, useState } from "react";
import MapContext from "../Map/MapContext";
import OLCesium from "olcs/OLCesium";

const CesiumControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		const ol3d = new OLCesium({map: map}); // ol2dMap is the ol.Map instance
		ol3d.setEnabled(true);
		window.ol3d = ol3d; // temporary hack for easy console debugging

	}, [map]);

	return null;
};

export default CesiumControl;
