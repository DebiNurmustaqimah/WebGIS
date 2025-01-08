var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_warung_1 = new ol.format.GeoJSON();
var features_warung_1 = format_warung_1.readFeatures(json_warung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warung_1.addFeatures(features_warung_1);
var lyr_warung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_warung_1, 
                style: style_warung_1,
                popuplayertitle: 'warung',
                interactive: true,
                title: '<img src="styles/legend/warung_1.png" /> warung'
            });
var format_tempat_ngaji_2 = new ol.format.GeoJSON();
var features_tempat_ngaji_2 = format_tempat_ngaji_2.readFeatures(json_tempat_ngaji_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempat_ngaji_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempat_ngaji_2.addFeatures(features_tempat_ngaji_2);
var lyr_tempat_ngaji_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempat_ngaji_2, 
                style: style_tempat_ngaji_2,
                popuplayertitle: 'tempat_ngaji',
                interactive: true,
                title: '<img src="styles/legend/tempat_ngaji_2.png" /> tempat_ngaji'
            });
var format_SPBU_3 = new ol.format.GeoJSON();
var features_SPBU_3 = format_SPBU_3.readFeatures(json_SPBU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_3.addFeatures(features_SPBU_3);
var lyr_SPBU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_3, 
                style: style_SPBU_3,
                popuplayertitle: 'SPBU',
                interactive: true,
                title: '<img src="styles/legend/SPBU_3.png" /> SPBU'
            });
var format_sekolah_4 = new ol.format.GeoJSON();
var features_sekolah_4 = format_sekolah_4.readFeatures(json_sekolah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_4.addFeatures(features_sekolah_4);
var lyr_sekolah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_4, 
                style: style_sekolah_4,
                popuplayertitle: 'sekolah',
                interactive: true,
                title: '<img src="styles/legend/sekolah_4.png" /> sekolah'
            });
var format_rumah_5 = new ol.format.GeoJSON();
var features_rumah_5 = format_rumah_5.readFeatures(json_rumah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_5.addFeatures(features_rumah_5);
var lyr_rumah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_5, 
                style: style_rumah_5,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_5.png" /> rumah'
            });
var format_rawa_6 = new ol.format.GeoJSON();
var features_rawa_6 = format_rawa_6.readFeatures(json_rawa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rawa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rawa_6.addFeatures(features_rawa_6);
var lyr_rawa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rawa_6, 
                style: style_rawa_6,
                popuplayertitle: 'rawa',
                interactive: true,
                title: '<img src="styles/legend/rawa_6.png" /> rawa'
            });
var format_rangkang_7 = new ol.format.GeoJSON();
var features_rangkang_7 = format_rangkang_7.readFeatures(json_rangkang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rangkang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rangkang_7.addFeatures(features_rangkang_7);
var lyr_rangkang_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rangkang_7, 
                style: style_rangkang_7,
                popuplayertitle: 'rangkang',
                interactive: true,
                title: '<img src="styles/legend/rangkang_7.png" /> rangkang'
            });
var format_puskesmas_8 = new ol.format.GeoJSON();
var features_puskesmas_8 = format_puskesmas_8.readFeatures(json_puskesmas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmas_8.addFeatures(features_puskesmas_8);
var lyr_puskesmas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puskesmas_8, 
                style: style_puskesmas_8,
                popuplayertitle: 'puskesmas',
                interactive: true,
                title: '<img src="styles/legend/puskesmas_8.png" /> puskesmas'
            });
var format_mesjid_meunasah_9 = new ol.format.GeoJSON();
var features_mesjid_meunasah_9 = format_mesjid_meunasah_9.readFeatures(json_mesjid_meunasah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid_meunasah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid_meunasah_9.addFeatures(features_mesjid_meunasah_9);
var lyr_mesjid_meunasah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid_meunasah_9, 
                style: style_mesjid_meunasah_9,
                popuplayertitle: 'mesjid_meunasah',
                interactive: true,
                title: '<img src="styles/legend/mesjid_meunasah_9.png" /> mesjid_meunasah'
            });
var format_lapangan_10 = new ol.format.GeoJSON();
var features_lapangan_10 = format_lapangan_10.readFeatures(json_lapangan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_10.addFeatures(features_lapangan_10);
var lyr_lapangan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_10, 
                style: style_lapangan_10,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_10.png" /> lapangan'
            });
var format_lahan_kosong_11 = new ol.format.GeoJSON();
var features_lahan_kosong_11 = format_lahan_kosong_11.readFeatures(json_lahan_kosong_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahan_kosong_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahan_kosong_11.addFeatures(features_lahan_kosong_11);
var lyr_lahan_kosong_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahan_kosong_11, 
                style: style_lahan_kosong_11,
                popuplayertitle: 'lahan_kosong',
                interactive: true,
                title: '<img src="styles/legend/lahan_kosong_11.png" /> lahan_kosong'
            });
var format_parit_12 = new ol.format.GeoJSON();
var features_parit_12 = format_parit_12.readFeatures(json_parit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parit_12.addFeatures(features_parit_12);
var lyr_parit_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parit_12, 
                style: style_parit_12,
                popuplayertitle: 'parit',
                interactive: true,
                title: '<img src="styles/legend/parit_12.png" /> parit'
            });
var format_lueng_13 = new ol.format.GeoJSON();
var features_lueng_13 = format_lueng_13.readFeatures(json_lueng_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lueng_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lueng_13.addFeatures(features_lueng_13);
var lyr_lueng_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lueng_13, 
                style: style_lueng_13,
                popuplayertitle: 'lueng',
                interactive: true,
                title: '<img src="styles/legend/lueng_13.png" /> lueng'
            });
var format_mesjidpoin_14 = new ol.format.GeoJSON();
var features_mesjidpoin_14 = format_mesjidpoin_14.readFeatures(json_mesjidpoin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjidpoin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjidpoin_14.addFeatures(features_mesjidpoin_14);
var lyr_mesjidpoin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjidpoin_14, 
                style: style_mesjidpoin_14,
                popuplayertitle: 'mesjidpoin',
                interactive: true,
                title: '<img src="styles/legend/mesjidpoin_14.png" /> mesjidpoin'
            });
var format_sekolahpoin_15 = new ol.format.GeoJSON();
var features_sekolahpoin_15 = format_sekolahpoin_15.readFeatures(json_sekolahpoin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolahpoin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolahpoin_15.addFeatures(features_sekolahpoin_15);
var lyr_sekolahpoin_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolahpoin_15, 
                style: style_sekolahpoin_15,
                popuplayertitle: 'sekolahpoin',
                interactive: true,
                title: '<img src="styles/legend/sekolahpoin_15.png" /> sekolahpoin'
            });
var format_warungpoin_16 = new ol.format.GeoJSON();
var features_warungpoin_16 = format_warungpoin_16.readFeatures(json_warungpoin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warungpoin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warungpoin_16.addFeatures(features_warungpoin_16);
var lyr_warungpoin_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_warungpoin_16, 
                style: style_warungpoin_16,
                popuplayertitle: 'warungpoin',
                interactive: true,
                title: '<img src="styles/legend/warungpoin_16.png" /> warungpoin'
            });
var format_tempatngajipoin_17 = new ol.format.GeoJSON();
var features_tempatngajipoin_17 = format_tempatngajipoin_17.readFeatures(json_tempatngajipoin_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatngajipoin_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatngajipoin_17.addFeatures(features_tempatngajipoin_17);
var lyr_tempatngajipoin_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatngajipoin_17, 
                style: style_tempatngajipoin_17,
                popuplayertitle: 'tempatngajipoin',
                interactive: true,
                title: '<img src="styles/legend/tempatngajipoin_17.png" /> tempatngajipoin'
            });
var format_rawapoin_18 = new ol.format.GeoJSON();
var features_rawapoin_18 = format_rawapoin_18.readFeatures(json_rawapoin_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rawapoin_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rawapoin_18.addFeatures(features_rawapoin_18);
var lyr_rawapoin_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rawapoin_18, 
                style: style_rawapoin_18,
                popuplayertitle: 'rawapoin',
                interactive: true,
                title: '<img src="styles/legend/rawapoin_18.png" /> rawapoin'
            });
var format_rumahpoin_19 = new ol.format.GeoJSON();
var features_rumahpoin_19 = format_rumahpoin_19.readFeatures(json_rumahpoin_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahpoin_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahpoin_19.addFeatures(features_rumahpoin_19);
var lyr_rumahpoin_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahpoin_19, 
                style: style_rumahpoin_19,
                popuplayertitle: 'rumahpoin',
                interactive: true,
                title: '<img src="styles/legend/rumahpoin_19.png" /> rumahpoin'
            });
var format_blangpoin_20 = new ol.format.GeoJSON();
var features_blangpoin_20 = format_blangpoin_20.readFeatures(json_blangpoin_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blangpoin_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blangpoin_20.addFeatures(features_blangpoin_20);
var lyr_blangpoin_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_blangpoin_20, 
                style: style_blangpoin_20,
                popuplayertitle: 'blangpoin',
                interactive: true,
                title: '<img src="styles/legend/blangpoin_20.png" /> blangpoin'
            });
var format_rangkangpoin_21 = new ol.format.GeoJSON();
var features_rangkangpoin_21 = format_rangkangpoin_21.readFeatures(json_rangkangpoin_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rangkangpoin_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rangkangpoin_21.addFeatures(features_rangkangpoin_21);
var lyr_rangkangpoin_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rangkangpoin_21, 
                style: style_rangkangpoin_21,
                popuplayertitle: 'rangkangpoin',
                interactive: true,
                title: '<img src="styles/legend/rangkangpoin_21.png" /> rangkangpoin'
            });
var format_lapanganpoin_22 = new ol.format.GeoJSON();
var features_lapanganpoin_22 = format_lapanganpoin_22.readFeatures(json_lapanganpoin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapanganpoin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapanganpoin_22.addFeatures(features_lapanganpoin_22);
var lyr_lapanganpoin_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapanganpoin_22, 
                style: style_lapanganpoin_22,
                popuplayertitle: 'lapanganpoin',
                interactive: true,
                title: '<img src="styles/legend/lapanganpoin_22.png" /> lapanganpoin'
            });
var format_kolampoint_23 = new ol.format.GeoJSON();
var features_kolampoint_23 = format_kolampoint_23.readFeatures(json_kolampoint_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kolampoint_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kolampoint_23.addFeatures(features_kolampoint_23);
var lyr_kolampoint_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kolampoint_23, 
                style: style_kolampoint_23,
                popuplayertitle: 'kolampoint',
                interactive: true,
                title: '<img src="styles/legend/kolampoint_23.png" /> kolampoint'
            });
var format_lahan_kosongpoin_24 = new ol.format.GeoJSON();
var features_lahan_kosongpoin_24 = format_lahan_kosongpoin_24.readFeatures(json_lahan_kosongpoin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahan_kosongpoin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahan_kosongpoin_24.addFeatures(features_lahan_kosongpoin_24);
var lyr_lahan_kosongpoin_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahan_kosongpoin_24, 
                style: style_lahan_kosongpoin_24,
                popuplayertitle: 'lahan_kosongpoin',
                interactive: true,
                title: '<img src="styles/legend/lahan_kosongpoin_24.png" /> lahan_kosongpoin'
            });
var format_kantorpoin_25 = new ol.format.GeoJSON();
var features_kantorpoin_25 = format_kantorpoin_25.readFeatures(json_kantorpoin_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantorpoin_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantorpoin_25.addFeatures(features_kantorpoin_25);
var lyr_kantorpoin_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantorpoin_25, 
                style: style_kantorpoin_25,
                popuplayertitle: 'kantorpoin',
                interactive: true,
                title: '<img src="styles/legend/kantorpoin_25.png" /> kantorpoin'
            });
var format_GORPoin_26 = new ol.format.GeoJSON();
var features_GORPoin_26 = format_GORPoin_26.readFeatures(json_GORPoin_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GORPoin_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GORPoin_26.addFeatures(features_GORPoin_26);
var lyr_GORPoin_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GORPoin_26, 
                style: style_GORPoin_26,
                popuplayertitle: 'GORPoin',
                interactive: true,
                title: '<img src="styles/legend/GORPoin_26.png" /> GORPoin'
            });
var format_blangpoin_27 = new ol.format.GeoJSON();
var features_blangpoin_27 = format_blangpoin_27.readFeatures(json_blangpoin_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blangpoin_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blangpoin_27.addFeatures(features_blangpoin_27);
var lyr_blangpoin_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_blangpoin_27, 
                style: style_blangpoin_27,
                popuplayertitle: 'blangpoin',
                interactive: true,
                title: '<img src="styles/legend/blangpoin_27.png" /> blangpoin'
            });
var format_blang_28 = new ol.format.GeoJSON();
var features_blang_28 = format_blang_28.readFeatures(json_blang_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blang_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blang_28.addFeatures(features_blang_28);
var lyr_blang_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_blang_28, 
                style: style_blang_28,
                popuplayertitle: 'blang',
                interactive: true,
                title: '<img src="styles/legend/blang_28.png" /> blang'
            });
var format_BlangPoin2_29 = new ol.format.GeoJSON();
var features_BlangPoin2_29 = format_BlangPoin2_29.readFeatures(json_BlangPoin2_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlangPoin2_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlangPoin2_29.addFeatures(features_BlangPoin2_29);
var lyr_BlangPoin2_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlangPoin2_29, 
                style: style_BlangPoin2_29,
                popuplayertitle: 'BlangPoin2',
                interactive: true,
                title: '<img src="styles/legend/BlangPoin2_29.png" /> BlangPoin2'
            });
var format_alfamartpoin_30 = new ol.format.GeoJSON();
var features_alfamartpoin_30 = format_alfamartpoin_30.readFeatures(json_alfamartpoin_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alfamartpoin_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alfamartpoin_30.addFeatures(features_alfamartpoin_30);
var lyr_alfamartpoin_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alfamartpoin_30, 
                style: style_alfamartpoin_30,
                popuplayertitle: 'alfamartpoin',
                interactive: true,
                title: '<img src="styles/legend/alfamartpoin_30.png" /> alfamartpoin'
            });
var format_lorong_31 = new ol.format.GeoJSON();
var features_lorong_31 = format_lorong_31.readFeatures(json_lorong_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lorong_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lorong_31.addFeatures(features_lorong_31);
var lyr_lorong_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lorong_31, 
                style: style_lorong_31,
                popuplayertitle: 'lorong',
                interactive: true,
                title: '<img src="styles/legend/lorong_31.png" /> lorong'
            });
var format_jalan_32 = new ol.format.GeoJSON();
var features_jalan_32 = format_jalan_32.readFeatures(json_jalan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_32.addFeatures(features_jalan_32);
var lyr_jalan_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_32, 
                style: style_jalan_32,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_32.png" /> jalan'
            });
var format_batasan_gampong_33 = new ol.format.GeoJSON();
var features_batasan_gampong_33 = format_batasan_gampong_33.readFeatures(json_batasan_gampong_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasan_gampong_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasan_gampong_33.addFeatures(features_batasan_gampong_33);
var lyr_batasan_gampong_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasan_gampong_33, 
                style: style_batasan_gampong_33,
                popuplayertitle: 'batasan_gampong',
                interactive: true,
                title: '<img src="styles/legend/batasan_gampong_33.png" /> batasan_gampong'
            });
var format_kuburan_34 = new ol.format.GeoJSON();
var features_kuburan_34 = format_kuburan_34.readFeatures(json_kuburan_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan_34.addFeatures(features_kuburan_34);
var lyr_kuburan_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan_34, 
                style: style_kuburan_34,
                popuplayertitle: 'kuburan',
                interactive: true,
                title: '<img src="styles/legend/kuburan_34.png" /> kuburan'
            });
var format_kolam_35 = new ol.format.GeoJSON();
var features_kolam_35 = format_kolam_35.readFeatures(json_kolam_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kolam_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kolam_35.addFeatures(features_kolam_35);
var lyr_kolam_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kolam_35, 
                style: style_kolam_35,
                popuplayertitle: 'kolam',
                interactive: true,
                title: '<img src="styles/legend/kolam_35.png" /> kolam'
            });
var format_kebun_36 = new ol.format.GeoJSON();
var features_kebun_36 = format_kebun_36.readFeatures(json_kebun_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebun_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebun_36.addFeatures(features_kebun_36);
var lyr_kebun_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebun_36, 
                style: style_kebun_36,
                popuplayertitle: 'kebun',
                interactive: true,
                title: '<img src="styles/legend/kebun_36.png" /> kebun'
            });
var format_kantor_37 = new ol.format.GeoJSON();
var features_kantor_37 = format_kantor_37.readFeatures(json_kantor_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor_37.addFeatures(features_kantor_37);
var lyr_kantor_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor_37, 
                style: style_kantor_37,
                popuplayertitle: 'kantor',
                interactive: true,
                title: '<img src="styles/legend/kantor_37.png" /> kantor'
            });
var format_hutan_38 = new ol.format.GeoJSON();
var features_hutan_38 = format_hutan_38.readFeatures(json_hutan_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_38.addFeatures(features_hutan_38);
var lyr_hutan_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_38, 
                style: style_hutan_38,
                popuplayertitle: 'hutan',
                interactive: true,
                title: '<img src="styles/legend/hutan_38.png" /> hutan'
            });
var format_GOR_39 = new ol.format.GeoJSON();
var features_GOR_39 = format_GOR_39.readFeatures(json_GOR_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOR_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOR_39.addFeatures(features_GOR_39);
var lyr_GOR_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOR_39, 
                style: style_GOR_39,
                popuplayertitle: 'GOR',
                interactive: true,
                title: '<img src="styles/legend/GOR_39.png" /> GOR'
            });
var format_alfamart_40 = new ol.format.GeoJSON();
var features_alfamart_40 = format_alfamart_40.readFeatures(json_alfamart_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alfamart_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alfamart_40.addFeatures(features_alfamart_40);
var lyr_alfamart_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alfamart_40, 
                style: style_alfamart_40,
                popuplayertitle: 'alfamart',
                interactive: true,
                title: '<img src="styles/legend/alfamart_40.png" /> alfamart'
            });

lyr_Google_0.setVisible(true);lyr_warung_1.setVisible(true);lyr_tempat_ngaji_2.setVisible(true);lyr_SPBU_3.setVisible(true);lyr_sekolah_4.setVisible(true);lyr_rumah_5.setVisible(true);lyr_rawa_6.setVisible(true);lyr_rangkang_7.setVisible(true);lyr_puskesmas_8.setVisible(true);lyr_mesjid_meunasah_9.setVisible(true);lyr_lapangan_10.setVisible(true);lyr_lahan_kosong_11.setVisible(true);lyr_parit_12.setVisible(true);lyr_lueng_13.setVisible(true);lyr_mesjidpoin_14.setVisible(true);lyr_sekolahpoin_15.setVisible(true);lyr_warungpoin_16.setVisible(true);lyr_tempatngajipoin_17.setVisible(true);lyr_rawapoin_18.setVisible(true);lyr_rumahpoin_19.setVisible(true);lyr_blangpoin_20.setVisible(true);lyr_rangkangpoin_21.setVisible(true);lyr_lapanganpoin_22.setVisible(true);lyr_kolampoint_23.setVisible(true);lyr_lahan_kosongpoin_24.setVisible(true);lyr_kantorpoin_25.setVisible(true);lyr_GORPoin_26.setVisible(true);lyr_blangpoin_27.setVisible(true);lyr_blang_28.setVisible(true);lyr_BlangPoin2_29.setVisible(true);lyr_alfamartpoin_30.setVisible(true);lyr_lorong_31.setVisible(true);lyr_jalan_32.setVisible(true);lyr_batasan_gampong_33.setVisible(true);lyr_kuburan_34.setVisible(true);lyr_kolam_35.setVisible(true);lyr_kebun_36.setVisible(true);lyr_kantor_37.setVisible(true);lyr_hutan_38.setVisible(true);lyr_GOR_39.setVisible(true);lyr_alfamart_40.setVisible(true);
var layersList = [lyr_Google_0,lyr_warung_1,lyr_tempat_ngaji_2,lyr_SPBU_3,lyr_sekolah_4,lyr_rumah_5,lyr_rawa_6,lyr_rangkang_7,lyr_puskesmas_8,lyr_mesjid_meunasah_9,lyr_lapangan_10,lyr_lahan_kosong_11,lyr_parit_12,lyr_lueng_13,lyr_mesjidpoin_14,lyr_sekolahpoin_15,lyr_warungpoin_16,lyr_tempatngajipoin_17,lyr_rawapoin_18,lyr_rumahpoin_19,lyr_blangpoin_20,lyr_rangkangpoin_21,lyr_lapanganpoin_22,lyr_kolampoint_23,lyr_lahan_kosongpoin_24,lyr_kantorpoin_25,lyr_GORPoin_26,lyr_blangpoin_27,lyr_blang_28,lyr_BlangPoin2_29,lyr_alfamartpoin_30,lyr_lorong_31,lyr_jalan_32,lyr_batasan_gampong_33,lyr_kuburan_34,lyr_kolam_35,lyr_kebun_36,lyr_kantor_37,lyr_hutan_38,lyr_GOR_39,lyr_alfamart_40];
lyr_warung_1.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_usah': 'jenis_usah', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_ban_1': 'luas_ban_1', 'luas_lahan': 'luas_lahan', });
lyr_tempat_ngaji_2.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_SPBU_3.set('fieldAliases', {'Id': 'Id', });
lyr_sekolah_4.set('fieldAliases', {'Id': 'Id', 'nama_sekol': 'nama_sekol', 'nama_kepse': 'nama_kepse', 'luas': 'luas', 'luas_bagun': 'luas_bagun', 'nama_sek_1': 'nama_sek_1', 'nama_kepal': 'nama_kepal', 'no_conta_1': 'no_conta_1', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', });
lyr_rumah_5.set('fieldAliases', {'Id': 'Id', 'no_rumah': 'no_rumah', 'status_kep': 'status_kep', 'jenis_bang': 'jenis_bang', 'jenis_lant': 'jenis_lant', 'nama_kk_pe': 'nama_kk_pe', 'pendidikan': 'pendidikan', 'pekerjaan': 'pekerjaan', 'no_telp': 'no_telp', 'no_ktp': 'no_ktp', 'jumlah_lk': 'jumlah_lk', 'jumlah_pr': 'jumlah_pr', 'total_huni': 'total_huni', 'luas': 'luas', });
lyr_rawa_6.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_rangkang_7.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_puskesmas_8.set('fieldAliases', {'Id': 'Id', });
lyr_mesjid_meunasah_9.set('fieldAliases', {'Id': 'Id', 'nama_mesji': 'nama_mesji', 'luas_bagun': 'luas_bagun', 'nama_imam': 'nama_imam', 'no_contact': 'no_contact', 'luas_tanah': 'luas_tanah', });
lyr_lapangan_10.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_kegi': 'jenis_kegi', 'luas_lahan': 'luas_lahan', 'luas_bangu': 'luas_bangu', });
lyr_lahan_kosong_11.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', });
lyr_parit_12.set('fieldAliases', {'Id': 'Id', });
lyr_lueng_13.set('fieldAliases', {'Id': 'Id', });
lyr_mesjidpoin_14.set('fieldAliases', {'Id': 'Id', 'nama_mesji': 'nama_mesji', 'luas_bagun': 'luas_bagun', 'nama_imam': 'nama_imam', 'no_contact': 'no_contact', 'luas_tanah': 'luas_tanah', 'ORIG_FID': 'ORIG_FID', });
lyr_sekolahpoin_15.set('fieldAliases', {'Id': 'Id', 'nama_sekol': 'nama_sekol', 'nama_kepse': 'nama_kepse', 'luas': 'luas', 'luas_bagun': 'luas_bagun', 'nama_sek_1': 'nama_sek_1', 'nama_kepal': 'nama_kepal', 'no_conta_1': 'no_conta_1', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'ORIG_FID': 'ORIG_FID', });
lyr_warungpoin_16.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_usah': 'jenis_usah', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_ban_1': 'luas_ban_1', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_tempatngajipoin_17.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_rawapoin_18.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_rumahpoin_19.set('fieldAliases', {'Id': 'Id', 'no_rumah': 'no_rumah', 'status_kep': 'status_kep', 'jenis_bang': 'jenis_bang', 'jenis_lant': 'jenis_lant', 'nama_kk_pe': 'nama_kk_pe', 'pendidikan': 'pendidikan', 'pekerjaan': 'pekerjaan', 'no_telp': 'no_telp', 'no_ktp': 'no_ktp', 'jumlah_lk': 'jumlah_lk', 'jumlah_pr': 'jumlah_pr', 'total_huni': 'total_huni', 'luas': 'luas', 'ORIG_FID': 'ORIG_FID', });
lyr_blangpoin_20.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', 'no_hp': 'no_hp', 'ORIG_FID': 'ORIG_FID', });
lyr_rangkangpoin_21.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_lapanganpoin_22.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_kegi': 'jenis_kegi', 'luas_lahan': 'luas_lahan', 'luas_bangu': 'luas_bangu', 'ORIG_FID': 'ORIG_FID', });
lyr_kolampoint_23.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_ikan': 'jenis_ikan', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_lahan_kosongpoin_24.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', 'ORIG_FID': 'ORIG_FID', });
lyr_kantorpoin_25.set('fieldAliases', {'Id': 'Id', 'nama_kanto': 'nama_kanto', 'nama_kepal': 'nama_kepal', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'ORIG_FID': 'ORIG_FID', });
lyr_GORPoin_26.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'status': 'status', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_blangpoin_27.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', 'no_hp': 'no_hp', 'ORIG_FID': 'ORIG_FID', });
lyr_blang_28.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'jenis_tana': 'jenis_tana', 'prediksi_j': 'prediksi_j', 'jenis_irig': 'jenis_irig', 'luas_lahan': 'luas_lahan', 'status': 'status', 'no_hp': 'no_hp', });
lyr_BlangPoin2_29.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'X': 'X', 'Y': 'Y', });
lyr_alfamartpoin_30.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_lorong_31.set('fieldAliases', {'Id': 'Id', 'nama_loron': 'nama_loron', 'panjang': 'panjang', 'lebar': 'lebar', 'status': 'status', 'kondisi': 'kondisi', 'kategori': 'kategori', 'pembiayaan': 'pembiayaan', 'tahun_perb': 'tahun_perb', });
lyr_jalan_32.set('fieldAliases', {'nama_jalan': 'nama_jalan', 'panjang_ja': 'panjang_ja', 'lebar': 'lebar', 'status_jal': 'status_jal', 'kondisi': 'kondisi', 'kategori': 'kategori', 'Pembiayaan': 'Pembiayaan', 'tahun_perb': 'tahun_perb', });
lyr_batasan_gampong_33.set('fieldAliases', {'Id': 'Id', });
lyr_kuburan_34.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'luas_lahan': 'luas_lahan', });
lyr_kolam_35.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'jenis_ikan': 'jenis_ikan', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_kebun_36.set('fieldAliases', {'Id': 'Id', });
lyr_kantor_37.set('fieldAliases', {'Id': 'Id', 'nama_kanto': 'nama_kanto', 'nama_kepal': 'nama_kepal', 'no_contact': 'no_contact', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', });
lyr_hutan_38.set('fieldAliases', {'Id': 'Id', });
lyr_GOR_39.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'status': 'status', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_alfamart_40.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'status_usa': 'status_usa', 'luas_bangu': 'luas_bangu', 'luas_lahan': 'luas_lahan', });
lyr_warung_1.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_usah': '', 'status_usa': '', 'luas_bangu': '', 'luas_ban_1': '', 'luas_lahan': '', });
lyr_tempat_ngaji_2.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_SPBU_3.set('fieldImages', {'Id': '', });
lyr_sekolah_4.set('fieldImages', {'Id': '', 'nama_sekol': '', 'nama_kepse': '', 'luas': '', 'luas_bagun': '', 'nama_sek_1': '', 'nama_kepal': '', 'no_conta_1': '', 'luas_bangu': '', 'luas_tanah': '', });
lyr_rumah_5.set('fieldImages', {'Id': '', 'no_rumah': '', 'status_kep': '', 'jenis_bang': '', 'jenis_lant': '', 'nama_kk_pe': '', 'pendidikan': '', 'pekerjaan': '', 'no_telp': '', 'no_ktp': '', 'jumlah_lk': '', 'jumlah_pr': '', 'total_huni': '', 'luas': '', });
lyr_rawa_6.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_rangkang_7.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_puskesmas_8.set('fieldImages', {'Id': '', });
lyr_mesjid_meunasah_9.set('fieldImages', {'Id': '', 'nama_mesji': '', 'luas_bagun': '', 'nama_imam': '', 'no_contact': '', 'luas_tanah': '', });
lyr_lapangan_10.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_kegi': '', 'luas_lahan': '', 'luas_bangu': '', });
lyr_lahan_kosong_11.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', });
lyr_parit_12.set('fieldImages', {'Id': '', });
lyr_lueng_13.set('fieldImages', {'Id': '', });
lyr_mesjidpoin_14.set('fieldImages', {'Id': '', 'nama_mesji': '', 'luas_bagun': '', 'nama_imam': '', 'no_contact': '', 'luas_tanah': '', 'ORIG_FID': '', });
lyr_sekolahpoin_15.set('fieldImages', {'Id': '', 'nama_sekol': '', 'nama_kepse': '', 'luas': '', 'luas_bagun': '', 'nama_sek_1': '', 'nama_kepal': '', 'no_conta_1': '', 'luas_bangu': '', 'luas_tanah': '', 'ORIG_FID': '', });
lyr_warungpoin_16.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_usah': '', 'status_usa': '', 'luas_bangu': '', 'luas_ban_1': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_tempatngajipoin_17.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_rawapoin_18.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_rumahpoin_19.set('fieldImages', {'Id': '', 'no_rumah': '', 'status_kep': '', 'jenis_bang': '', 'jenis_lant': '', 'nama_kk_pe': '', 'pendidikan': '', 'pekerjaan': '', 'no_telp': '', 'no_ktp': '', 'jumlah_lk': '', 'jumlah_pr': '', 'total_huni': '', 'luas': '', 'ORIG_FID': '', });
lyr_blangpoin_20.set('fieldImages', {'Id': '', 'nama_pemil': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', 'no_hp': '', 'ORIG_FID': '', });
lyr_rangkangpoin_21.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_lapanganpoin_22.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_kegi': '', 'luas_lahan': '', 'luas_bangu': '', 'ORIG_FID': '', });
lyr_kolampoint_23.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_ikan': '', 'status_usa': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_lahan_kosongpoin_24.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', 'ORIG_FID': '', });
lyr_kantorpoin_25.set('fieldImages', {'Id': '', 'nama_kanto': '', 'nama_kepal': '', 'no_contact': '', 'luas_bangu': '', 'luas_tanah': '', 'ORIG_FID': '', });
lyr_GORPoin_26.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'status': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_blangpoin_27.set('fieldImages', {'Id': '', 'nama_pemil': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', 'no_hp': '', 'ORIG_FID': '', });
lyr_blang_28.set('fieldImages', {'Id': '', 'nama_pemil': '', 'jenis_tana': '', 'prediksi_j': '', 'jenis_irig': '', 'luas_lahan': '', 'status': '', 'no_hp': '', });
lyr_BlangPoin2_29.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', 'X': '', 'Y': '', });
lyr_alfamartpoin_30.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'status_usa': '', 'luas_bangu': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_lorong_31.set('fieldImages', {'Id': '', 'nama_loron': '', 'panjang': '', 'lebar': '', 'status': '', 'kondisi': '', 'kategori': '', 'pembiayaan': '', 'tahun_perb': '', });
lyr_jalan_32.set('fieldImages', {'nama_jalan': '', 'panjang_ja': '', 'lebar': '', 'status_jal': '', 'kondisi': '', 'kategori': '', 'Pembiayaan': '', 'tahun_perb': '', });
lyr_batasan_gampong_33.set('fieldImages', {'Id': '', });
lyr_kuburan_34.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'luas_lahan': '', });
lyr_kolam_35.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'jenis_ikan': '', 'status_usa': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_kebun_36.set('fieldImages', {'Id': '', });
lyr_kantor_37.set('fieldImages', {'Id': '', 'nama_kanto': '', 'nama_kepal': '', 'no_contact': '', 'luas_bangu': '', 'luas_tanah': '', });
lyr_hutan_38.set('fieldImages', {'Id': '', });
lyr_GOR_39.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'status': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_alfamart_40.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'status_usa': '', 'luas_bangu': '', 'luas_lahan': '', });
lyr_warung_1.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_usah': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_ban_1': 'no label', 'luas_lahan': 'no label', });
lyr_tempat_ngaji_2.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_SPBU_3.set('fieldLabels', {'Id': 'no label', });
lyr_sekolah_4.set('fieldLabels', {'Id': 'no label', 'nama_sekol': 'no label', 'nama_kepse': 'no label', 'luas': 'no label', 'luas_bagun': 'no label', 'nama_sek_1': 'no label', 'nama_kepal': 'no label', 'no_conta_1': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', });
lyr_rumah_5.set('fieldLabels', {'Id': 'no label', 'no_rumah': 'no label', 'status_kep': 'no label', 'jenis_bang': 'no label', 'jenis_lant': 'no label', 'nama_kk_pe': 'no label', 'pendidikan': 'no label', 'pekerjaan': 'no label', 'no_telp': 'no label', 'no_ktp': 'no label', 'jumlah_lk': 'no label', 'jumlah_pr': 'no label', 'total_huni': 'no label', 'luas': 'no label', });
lyr_rawa_6.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_rangkang_7.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_puskesmas_8.set('fieldLabels', {'Id': 'no label', });
lyr_mesjid_meunasah_9.set('fieldLabels', {'Id': 'no label', 'nama_mesji': 'no label', 'luas_bagun': 'no label', 'nama_imam': 'no label', 'no_contact': 'no label', 'luas_tanah': 'no label', });
lyr_lapangan_10.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_kegi': 'no label', 'luas_lahan': 'no label', 'luas_bangu': 'no label', });
lyr_lahan_kosong_11.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', });
lyr_parit_12.set('fieldLabels', {'Id': 'no label', });
lyr_lueng_13.set('fieldLabels', {'Id': 'no label', });
lyr_mesjidpoin_14.set('fieldLabels', {'Id': 'no label', 'nama_mesji': 'no label', 'luas_bagun': 'no label', 'nama_imam': 'no label', 'no_contact': 'no label', 'luas_tanah': 'no label', 'ORIG_FID': 'no label', });
lyr_sekolahpoin_15.set('fieldLabels', {'Id': 'no label', 'nama_sekol': 'no label', 'nama_kepse': 'no label', 'luas': 'no label', 'luas_bagun': 'no label', 'nama_sek_1': 'no label', 'nama_kepal': 'no label', 'no_conta_1': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'ORIG_FID': 'no label', });
lyr_warungpoin_16.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_usah': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_ban_1': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_tempatngajipoin_17.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_rawapoin_18.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_rumahpoin_19.set('fieldLabels', {'Id': 'no label', 'no_rumah': 'no label', 'status_kep': 'no label', 'jenis_bang': 'no label', 'jenis_lant': 'no label', 'nama_kk_pe': 'no label', 'pendidikan': 'no label', 'pekerjaan': 'no label', 'no_telp': 'no label', 'no_ktp': 'no label', 'jumlah_lk': 'no label', 'jumlah_pr': 'no label', 'total_huni': 'no label', 'luas': 'no label', 'ORIG_FID': 'no label', });
lyr_blangpoin_20.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', 'no_hp': 'no label', 'ORIG_FID': 'no label', });
lyr_rangkangpoin_21.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_lapanganpoin_22.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_kegi': 'no label', 'luas_lahan': 'no label', 'luas_bangu': 'no label', 'ORIG_FID': 'no label', });
lyr_kolampoint_23.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_ikan': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_lahan_kosongpoin_24.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', 'ORIG_FID': 'no label', });
lyr_kantorpoin_25.set('fieldLabels', {'Id': 'no label', 'nama_kanto': 'no label', 'nama_kepal': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'ORIG_FID': 'no label', });
lyr_GORPoin_26.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'status': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_blangpoin_27.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', 'no_hp': 'no label', 'ORIG_FID': 'no label', });
lyr_blang_28.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'jenis_tana': 'no label', 'prediksi_j': 'no label', 'jenis_irig': 'no label', 'luas_lahan': 'no label', 'status': 'no label', 'no_hp': 'no label', });
lyr_BlangPoin2_29.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_alfamartpoin_30.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_lorong_31.set('fieldLabels', {'Id': 'no label', 'nama_loron': 'no label', 'panjang': 'no label', 'lebar': 'no label', 'status': 'no label', 'kondisi': 'no label', 'kategori': 'no label', 'pembiayaan': 'no label', 'tahun_perb': 'no label', });
lyr_jalan_32.set('fieldLabels', {'nama_jalan': 'no label', 'panjang_ja': 'no label', 'lebar': 'no label', 'status_jal': 'no label', 'kondisi': 'no label', 'kategori': 'no label', 'Pembiayaan': 'no label', 'tahun_perb': 'no label', });
lyr_batasan_gampong_33.set('fieldLabels', {'Id': 'no label', });
lyr_kuburan_34.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'luas_lahan': 'no label', });
lyr_kolam_35.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'jenis_ikan': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_kebun_36.set('fieldLabels', {'Id': 'no label', });
lyr_kantor_37.set('fieldLabels', {'Id': 'no label', 'nama_kanto': 'no label', 'nama_kepal': 'no label', 'no_contact': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', });
lyr_hutan_38.set('fieldLabels', {'Id': 'no label', });
lyr_GOR_39.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'status': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_alfamart_40.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'status_usa': 'no label', 'luas_bangu': 'no label', 'luas_lahan': 'no label', });
lyr_alfamart_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});