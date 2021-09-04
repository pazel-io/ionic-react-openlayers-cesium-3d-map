import React, { useContext, useEffect, useState } from "react";
import { Zoom } from "ol/control";
import MapContext from "../Map/MapContext";

const ZoomControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		let zoomControl = new Zoom({});

		map.controls.push(zoomControl);

		return () => map.controls.remove(zoomControl);
	}, [map]);

	return null;
};

export default ZoomControl;
