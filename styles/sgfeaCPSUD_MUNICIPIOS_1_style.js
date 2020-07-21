var size = 0;
var placement = 'point';

var style_sgfeaCPSUD_MUNICIPIOS_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Calibri\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#000000";
    var bufferWidth = 0.4000000000000001;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("TX_NOMBRE") !== null) {
        labelText = String(feature.get("TX_NOMBRE"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(4,0,254,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(145,82,45,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
