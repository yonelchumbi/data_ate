var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MZ_ATE_1 = new ol.format.GeoJSON();
var features_MZ_ATE_1 = format_MZ_ATE_1.readFeatures(json_MZ_ATE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MZ_ATE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MZ_ATE_1.addFeatures(features_MZ_ATE_1);
var lyr_MZ_ATE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MZ_ATE_1, 
                style: style_MZ_ATE_1,
                interactive: true,
                title: '<img src="styles/legend/MZ_ATE_1.png" /> MZ_ATE'
            });
var format_BZ_ATE_2 = new ol.format.GeoJSON();
var features_BZ_ATE_2 = format_BZ_ATE_2.readFeatures(json_BZ_ATE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BZ_ATE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BZ_ATE_2.addFeatures(features_BZ_ATE_2);
var lyr_BZ_ATE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BZ_ATE_2, 
                style: style_BZ_ATE_2,
                interactive: true,
                title: '<img src="styles/legend/BZ_ATE_2.png" /> BZ_ATE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MZ_ATE_1.setVisible(true);lyr_BZ_ATE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MZ_ATE_1,lyr_BZ_ATE_2];
lyr_MZ_ATE_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICTCO': 'DISTRICTCO', 'SQUARECODE': 'SQUARECODE', 'GLOBALID': 'GLOBALID', 'STATUSSOCI': 'STATUSSOCI', 'SQUAREPROP': 'SQUAREPROP', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BZ_ATE_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'FACILITYID': 'FACILITYID', 'MHTYPE': 'MHTYPE', 'MHSHAPE': 'MHSHAPE', 'DIAMETER': 'DIAMETER', 'CVTYPE': 'CVTYPE', 'WALLMAT': 'WALLMAT', 'FLOWDIR': 'FLOWDIR', 'SUMFLOW': 'SUMFLOW', 'ACCESSTYPE': 'ACCESSTYPE', 'SPECIALFAL': 'SPECIALFAL', 'PLACEMENT': 'PLACEMENT', 'INVERT': 'INVERT', 'RIMELEV': 'RIMELEV', 'CUTDEPTH': 'CUTDEPTH', 'LOCDESC': 'LOCDESC', 'GPSDATE': 'GPSDATE', 'ROTATION': 'ROTATION', 'ENABLED': 'ENABLED', 'ACTIVEFLAG': 'ACTIVEFLAG', 'OWNEDBY': 'OWNEDBY', 'MAINTBY': 'MAINTBY', 'LASTUPDATE': 'LASTUPDATE', 'LASTEDITOR': 'LASTEDITOR', 'LASTREVDAT': 'LASTREVDAT', 'CONDITION': 'CONDITION', 'LASTREPAIR': 'LASTREPAIR', 'REPAIRS': 'REPAIRS', 'INSTALLDAT': 'INSTALLDAT', 'INSTALLER': 'INSTALLER', 'EXPEDIENTC': 'EXPEDIENTC', 'SAPCODE': 'SAPCODE', 'DISTRICT': 'DISTRICT', 'CENTERCOST': 'CENTERCOST', 'ANCILLARYR': 'ANCILLARYR', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'GPSEDITOR': 'GPSEDITOR', 'CODPRIM': 'CODPRIM', 'BZPRIM': 'BZPRIM', 'DESCRIPCIO': 'DESCRIPCIO', 'DISTRIBUCI': 'DISTRIBUCI', });
lyr_MZ_ATE_1.set('fieldImages', {'OBJECTID': '', 'DISTRICTCO': '', 'SQUARECODE': '', 'GLOBALID': '', 'STATUSSOCI': '', 'SQUAREPROP': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BZ_ATE_2.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'FACILITYID': '', 'MHTYPE': '', 'MHSHAPE': '', 'DIAMETER': '', 'CVTYPE': '', 'WALLMAT': '', 'FLOWDIR': '', 'SUMFLOW': '', 'ACCESSTYPE': '', 'SPECIALFAL': '', 'PLACEMENT': '', 'INVERT': '', 'RIMELEV': '', 'CUTDEPTH': '', 'LOCDESC': '', 'GPSDATE': '', 'ROTATION': '', 'ENABLED': '', 'ACTIVEFLAG': '', 'OWNEDBY': '', 'MAINTBY': '', 'LASTUPDATE': '', 'LASTEDITOR': '', 'LASTREVDAT': '', 'CONDITION': '', 'LASTREPAIR': '', 'REPAIRS': '', 'INSTALLDAT': '', 'INSTALLER': '', 'EXPEDIENTC': '', 'SAPCODE': '', 'DISTRICT': '', 'CENTERCOST': '', 'ANCILLARYR': '', 'X': '', 'Y': '', 'Z': '', 'GPSEDITOR': '', 'CODPRIM': '', 'BZPRIM': '', 'DESCRIPCIO': '', 'DISTRIBUCI': '', });
lyr_MZ_ATE_1.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICTCO': 'no label', 'SQUARECODE': 'no label', 'GLOBALID': 'no label', 'STATUSSOCI': 'no label', 'SQUAREPROP': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BZ_ATE_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'FACILITYID': 'no label', 'MHTYPE': 'no label', 'MHSHAPE': 'no label', 'DIAMETER': 'no label', 'CVTYPE': 'no label', 'WALLMAT': 'no label', 'FLOWDIR': 'no label', 'SUMFLOW': 'no label', 'ACCESSTYPE': 'no label', 'SPECIALFAL': 'no label', 'PLACEMENT': 'no label', 'INVERT': 'no label', 'RIMELEV': 'no label', 'CUTDEPTH': 'no label', 'LOCDESC': 'no label', 'GPSDATE': 'no label', 'ROTATION': 'no label', 'ENABLED': 'no label', 'ACTIVEFLAG': 'no label', 'OWNEDBY': 'no label', 'MAINTBY': 'no label', 'LASTUPDATE': 'no label', 'LASTEDITOR': 'no label', 'LASTREVDAT': 'no label', 'CONDITION': 'no label', 'LASTREPAIR': 'no label', 'REPAIRS': 'no label', 'INSTALLDAT': 'no label', 'INSTALLER': 'no label', 'EXPEDIENTC': 'no label', 'SAPCODE': 'no label', 'DISTRICT': 'no label', 'CENTERCOST': 'no label', 'ANCILLARYR': 'no label', 'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'GPSEDITOR': 'no label', 'CODPRIM': 'no label', 'BZPRIM': 'no label', 'DESCRIPCIO': 'no label', 'DISTRIBUCI': 'no label', });
lyr_BZ_ATE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});