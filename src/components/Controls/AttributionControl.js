import React, { useContext, useEffect, useState } from "react";
import {Attribution} from "ol/control";
import MapContext from "../Map/MapContext";

const AttributionControl = () => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;

		const attribution = new Attribution({
			collapsible: false,
		});

		map.controls.push(attribution);

		return () => map.controls.remove(attribution);
	}, [map]);

	return null;
};

export default AttributionControl;
