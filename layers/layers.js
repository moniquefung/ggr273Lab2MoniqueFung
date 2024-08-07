var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: false,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_water_1 = new ol.format.GeoJSON();
var features_water_1 = format_water_1.readFeatures(json_water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_1.addFeatures(features_water_1);
var lyr_water_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_1, 
                style: style_water_1,
                popuplayertitle: "water",
                interactive: false,
                title: '<img src="styles/legend/water_1.png" /> water'
            });
var format_Fish_Stocking_Points_2 = new ol.format.GeoJSON();
var features_Fish_Stocking_Points_2 = format_Fish_Stocking_Points_2.readFeatures(json_Fish_Stocking_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fish_Stocking_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fish_Stocking_Points_2.addFeatures(features_Fish_Stocking_Points_2);
var lyr_Fish_Stocking_Points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fish_Stocking_Points_2, 
                style: style_Fish_Stocking_Points_2,
                popuplayertitle: "Fish_Stocking_Points",
                interactive: true,
    title: 'Fish_Stocking_Points<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_0.png" /> 15 - 2200<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_1.png" /> 2200 - 5600<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_6.png" /> 110000 - 1613075<br />'
        });

lyr_Alberta_0.setVisible(true);lyr_water_1.setVisible(true);lyr_Fish_Stocking_Points_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_water_1,lyr_Fish_Stocking_Points_2];
lyr_Alberta_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_water_1.set('fieldAliases', {'fid': 'fid', 'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_Fish_Stocking_Points_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'stockingnum': 'stockingnum', 'PLANNED ST': 'PLANNED ST', 'MapAuthor': 'MapAuthor', 'StockingNum': 'StockingNum', });
lyr_Alberta_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_water_1.set('fieldImages', {'fid': 'TextEdit', 'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_Fish_Stocking_Points_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'stockingnum': 'TextEdit', 'PLANNED ST': 'TextEdit', 'MapAuthor': 'TextEdit', 'StockingNum': 'Range', });
lyr_Alberta_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_water_1.set('fieldLabels', {'fid': 'no label', 'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_Fish_Stocking_Points_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'stockingnum': 'hidden field', 'PLANNED ST': 'no label', 'MapAuthor': 'inline label - always visible', 'StockingNum': 'inline label - always visible', });
lyr_Fish_Stocking_Points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});