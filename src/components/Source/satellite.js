import * as olSource from "ol/source";

function satellite() {
    //https://access.maxar.com/earthservice/tmsaccess/tms/1.0.0/DigitalGlobe:ImageryTileService@EPSG:3857@jpg/20/947477/404121.jpg?connectId=d3cd40e5-bf36-45d4-b5a0-7437e248b203
    return new olSource.XYZ({
        url: 'https://access.maxar.com/earthservice/tmsaccess/tms/1.0.0/DigitalGlobe:ImageryTileService@EPSG:3857@jpg'
    });
}

export default satellite;
