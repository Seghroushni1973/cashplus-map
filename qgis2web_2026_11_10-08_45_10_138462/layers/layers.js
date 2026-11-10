var wms_layers = [];


        var lyr_OSMFRANCE_0 = new ol.layer.Tile({
            'title': 'OSM FRANCE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
            })
        });
var format_cashpluscasa_1 = new ol.format.GeoJSON();
var features_cashpluscasa_1 = format_cashpluscasa_1.readFeatures(json_cashpluscasa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cashpluscasa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cashpluscasa_1.addFeatures(features_cashpluscasa_1);
var lyr_cashpluscasa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cashpluscasa_1, 
                style: style_cashpluscasa_1,
                popuplayertitle: 'cashplus-casa',
                interactive: true,
                title: '<img src="styles/legend/cashpluscasa_1.png" /> cashplus-casa'
            });

lyr_OSMFRANCE_0.setVisible(true);lyr_cashpluscasa_1.setVisible(true);
var layersList = [lyr_OSMFRANCE_0,lyr_cashpluscasa_1];
lyr_cashpluscasa_1.set('fieldAliases', {'hfpxzc href': 'hfpxzc href', 'xxVWCe': 'xxVWCe', 'MW4etd': 'MW4etd', 'UY7F9': 'UY7F9', 'W4Efsd': 'W4Efsd', 'W4Efsd 2': 'W4Efsd 2', 'W4Efsd 3': 'W4Efsd 3', 'W4Efsd 4': 'W4Efsd 4', 'W4Efsd 5': 'W4Efsd 5', 'W4Efsd 6': 'W4Efsd 6', 'UsdlK': 'UsdlK', 'lcr4fd href': 'lcr4fd href', 'Cw1rxd': 'Cw1rxd', 'R8c4Qb': 'R8c4Qb', 'Cw1rxd 2': 'Cw1rxd 2', 'R8c4Qb 2': 'R8c4Qb 2', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_cashpluscasa_1.set('fieldImages', {'hfpxzc href': '', 'xxVWCe': '', 'MW4etd': '', 'UY7F9': '', 'W4Efsd': '', 'W4Efsd 2': '', 'W4Efsd 3': '', 'W4Efsd 4': '', 'W4Efsd 5': '', 'W4Efsd 6': '', 'UsdlK': '', 'lcr4fd href': '', 'Cw1rxd': '', 'R8c4Qb': '', 'Cw1rxd 2': '', 'R8c4Qb 2': '', 'field_17': '', 'field_18': '', });
lyr_cashpluscasa_1.set('fieldLabels', {'hfpxzc href': 'no label', 'xxVWCe': 'no label', 'MW4etd': 'no label', 'UY7F9': 'no label', 'W4Efsd': 'no label', 'W4Efsd 2': 'no label', 'W4Efsd 3': 'no label', 'W4Efsd 4': 'no label', 'W4Efsd 5': 'no label', 'W4Efsd 6': 'no label', 'UsdlK': 'no label', 'lcr4fd href': 'no label', 'Cw1rxd': 'no label', 'R8c4Qb': 'no label', 'Cw1rxd 2': 'no label', 'R8c4Qb 2': 'no label', 'field_17': 'no label', 'field_18': 'no label', });
lyr_cashpluscasa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});