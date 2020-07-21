var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_sgfeaCPSUD_MUNICIPIOS_1 = new ol.format.GeoJSON();
var jsonSource_sgfeaCPSUD_MUNICIPIOS_1 = new ol.source.Vector({
    attributions: ' ',
    format: format_sgfeaCPSUD_MUNICIPIOS_1
});var lyr_sgfeaCPSUD_MUNICIPIOS_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_sgfeaCPSUD_MUNICIPIOS_1, 
    style: style_sgfeaCPSUD_MUNICIPIOS_1,
    interactive: true,
    title: "sgfea:CPSUD_MUNICIPIOS"
});

function getsgfeaCPSUD_MUNICIPIOS_1Json(geojson) {
    var features_sgfeaCPSUD_MUNICIPIOS_1 = format_sgfeaCPSUD_MUNICIPIOS_1.readFeatures(geojson);
    jsonSource_sgfeaCPSUD_MUNICIPIOS_1.addFeatures(features_sgfeaCPSUD_MUNICIPIOS_1);
}
var format_Cortado_2 = new ol.format.GeoJSON();
var features_Cortado_2 = format_Cortado_2.readFeatures(json_Cortado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortado_2.addFeatures(features_Cortado_2);
var lyr_Cortado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cortado_2, 
                style: style_Cortado_2,
                interactive: true,
                title: '<img src="styles/legend/Cortado_2.png" /> Cortado'
            });
var format_ESTACIONESCONTROL_3 = new ol.format.GeoJSON();
var features_ESTACIONESCONTROL_3 = format_ESTACIONESCONTROL_3.readFeatures(json_ESTACIONESCONTROL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESCONTROL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESCONTROL_3.addFeatures(features_ESTACIONESCONTROL_3);
var lyr_ESTACIONESCONTROL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONESCONTROL_3, 
                style: style_ESTACIONESCONTROL_3,
                interactive: true,
    title: 'ESTACIONES CONTROL<br />\
    <img src="styles/legend/ESTACIONESCONTROL_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/ESTACIONESCONTROL_3_1.png" /> 1 - 5<br />\
    <img src="styles/legend/ESTACIONESCONTROL_3_2.png" /> 5-15<br />\
    <img src="styles/legend/ESTACIONESCONTROL_3_3.png" /> 15-50<br />\
    <img src="styles/legend/ESTACIONESCONTROL_3_4.png" /> >50<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_sgfeaCPSUD_MUNICIPIOS_1.setVisible(true);lyr_Cortado_2.setVisible(true);lyr_ESTACIONESCONTROL_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_sgfeaCPSUD_MUNICIPIOS_1,lyr_Cortado_2,lyr_ESTACIONESCONTROL_3];
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldAliases', {'ID_MUNICIPIO': 'ID_MUNICIPIO', 'ID_PROVINCIA': 'ID_PROVINCIA', 'CD_MUNICIPIO': 'CD_MUNICIPIO', 'CD_INE': 'CD_INE', 'TX_NOMBRE': 'TX_NOMBRE', });
lyr_Cortado_2.set('fieldAliases', {'ID_POLIGON': 'ID_POLIGON', 'CD_PROVINC': 'CD_PROVINC', 'CD_MUNICIP': 'CD_MUNICIP', 'CD_POLIGON': 'CD_POLIGON', });
lyr_ESTACIONESCONTROL_3.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'LAYER': 'LAYER', 'PATH': 'PATH', 'CIF': 'CIF', 'NOMBRE_COM': 'NOMBRE_COM', 'AUTO_FIRMA': 'AUTO_FIRMA', 'FECHA_FIRM': 'FECHA_FIRM', 'EST_CONTRO': 'EST_CONTRO', 'CONTROL': 'CONTROL', });
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldImages', {'ID_MUNICIPIO': 'TextEdit', 'ID_PROVINCIA': 'TextEdit', 'CD_MUNICIPIO': 'TextEdit', 'CD_INE': 'TextEdit', 'TX_NOMBRE': 'TextEdit', });
lyr_Cortado_2.set('fieldImages', {'ID_POLIGON': 'TextEdit', 'CD_PROVINC': 'TextEdit', 'CD_MUNICIP': 'TextEdit', 'CD_POLIGON': 'TextEdit', });
lyr_ESTACIONESCONTROL_3.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'LAYER': 'TextEdit', 'PATH': 'TextEdit', 'CIF': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'AUTO_FIRMA': 'TextEdit', 'FECHA_FIRM': 'TextEdit', 'EST_CONTRO': 'TextEdit', 'CONTROL': 'TextEdit', });
lyr_sgfeaCPSUD_MUNICIPIOS_1.set('fieldLabels', {'ID_MUNICIPIO': 'no label', 'ID_PROVINCIA': 'no label', 'CD_MUNICIPIO': 'no label', 'CD_INE': 'no label', 'TX_NOMBRE': 'no label', });
lyr_Cortado_2.set('fieldLabels', {'ID_POLIGON': 'no label', 'CD_PROVINC': 'no label', 'CD_MUNICIP': 'no label', 'CD_POLIGON': 'no label', });
lyr_ESTACIONESCONTROL_3.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'LAYER': 'no label', 'PATH': 'no label', 'CIF': 'no label', 'NOMBRE_COM': 'no label', 'AUTO_FIRMA': 'no label', 'FECHA_FIRM': 'no label', 'EST_CONTRO': 'no label', 'CONTROL': 'no label', });
lyr_ESTACIONESCONTROL_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});