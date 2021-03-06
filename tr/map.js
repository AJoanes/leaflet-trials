const tilesProvider = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([42.85, -2.39], 9)

L.tileLayer(tilesProvider, {
    maxZoom: 18,
    }).addTo(myMap)
var popup = L.popup();
var blackIcon=L.icon(
  
)
  
//    let vacIcon = L.icon({
  //    iconUrl: 'vaccine.png',
    //  shadowSize:   [50, 64], //size of the shadow
      //iconSize:     [38, 38], // size of the icon
      //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
 //});
 //let marker = L.marker([42.505, -2.09],{icon: vacIcon}).addTo(myMap);
  //L.geoJSON(data, {
    // pointToLayer: function (feature, latlng) {
      //    return L.marker(latlng, {icon: vacIcon});
      //}
  //}).addTo(map);
    
   // function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
     //   if (feature.properties && feature.properties.popupContent) {
       //     layer.bindPopup(feature.properties.popupContent);
       // }
    //}

    var SomeGeojsonFeature = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "departure",
              "marker-color": "#e6194b",
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "0",
              "arrival": "2021-04-04T00:00:00Z",
              "stop_idx": "0",
              "marker-size": "medium",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T01:46:01Z",
              "marker-color": "#e6194b",
              "jobs_ids": "CSBegona",
              "tour_idx": "0",
              "marker-symbol": "vacIcon",
              "stop_idx": "1",
              "arrival": "2021-04-04T01:26:01Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9163390398025513,
                43.25886604595848
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "jobs_ids": "CSSantutxuSolokoetxe,break",
              "tour_idx": "0",
              "arrival": "2021-04-04T01:46:35Z",
              "stop_idx": "2",
              "marker-color": "#e6194b",
              "marker-symbol": "beer",
              "departure": "2021-04-04T02:26:35Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9207003116607666,
                43.25553743163037
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "jobs_ids": "CSCascoViejo",
              "marker-size": "medium",
              "stop_idx": "3",
              "arrival": "2021-04-04T02:26:46Z",
              "departure": "2021-04-04T02:46:46Z",
              "tour_idx": "0",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9225349426269527,
                43.25611174779537
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T02:47:26Z",
              "stop_idx": "4",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:07:26Z",
              "jobs_ids": "CSMiribilla",
              "marker-size": "medium",
              "marker-color": "#e6194b",
              "tour_idx": "0"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9292377829551697,
                43.25376756611834
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "tour_idx": "0",
              "stop_idx": "5",
              "jobs_ids": "CSBomberoEtxaniz",
              "arrival": "2021-04-04T03:08:33Z",
              "departure": "2021-04-04T03:28:33Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9399585723876953,
                43.25828394226155
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSIndautxu",
              "tour_idx": "0",
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:49:10Z",
              "arrival": "2021-04-04T03:29:10Z",
              "stop_idx": "6"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9425978660583496,
                43.26287420622754
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "7",
              "departure": "2021-04-04T04:10:13Z",
              "marker-symbol": "vacIcon",
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "tour_idx": "0",
              "jobs_ids": "CSSaenzdeBuruaga",
              "arrival": "2021-04-04T03:50:13Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.931080460548401,
                43.26440161306945
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "stop_idx": "8",
              "departure": "2021-04-04T04:30:56Z",
              "marker-symbol": "vacIcon",
              "jobs_ids": "CSGazteleku",
              "tour_idx": "0",
              "arrival": "2021-04-04T04:10:56Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9233717918395996,
                43.26556960420879
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "0",
              "marker-size": "medium",
              "marker-color": "#e6194b",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T05:57:35Z",
              "departure": "2021-04-04T05:57:35Z",
              "stop_idx": "9",
              "jobs_ids": "arrival"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "0",
              "marker-size": "medium",
              "marker-color": "#808080",
              "tour_idx": "1",
              "departure": "2021-04-04T00:00:00Z",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808080",
              "marker-size": "medium",
              "stop_idx": "1",
              "tour_idx": "1",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T01:20:56Z",
              "arrival": "2021-04-04T01:00:56Z",
              "jobs_ids": "CsLandako"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6269501447677612,
                43.1719421341983
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T01:34:25Z",
              "jobs_ids": "CsIgorre",
              "marker-symbol": "vacIcon",
              "tour_idx": "1",
              "marker-size": "medium",
              "departure": "2021-04-04T01:54:25Z",
              "marker-color": "#808080",
              "stop_idx": "2"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.775826156139374,
                43.16273973431708
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "1",
              "jobs_ids": "CsArrigorriaga",
              "departure": "2021-04-04T02:26:00Z",
              "marker-color": "#808080",
              "stop_idx": "3",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T02:06:00Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8882321715354915,
                43.207951968164785
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "1",
              "departure": "2021-04-04T02:51:25Z",
              "jobs_ids": "CSLaPena",
              "marker-color": "#808080",
              "stop_idx": "4",
              "arrival": "2021-04-04T02:31:25Z",
              "marker-symbol": "vacIcon",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9250535368919373,
                43.24254745397505
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808080",
              "tour_idx": "1",
              "marker-symbol": "vacIcon",
              "stop_idx": "5",
              "arrival": "2021-04-04T02:53:27Z",
              "jobs_ids": "CSRekalde",
              "departure": "2021-04-04T03:13:27Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.944239377975464,
                43.251095088934655
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "beer",
              "departure": "2021-04-04T03:54:39Z",
              "tour_idx": "1",
              "marker-color": "#808080",
              "jobs_ids": "CSBasurto,break",
              "marker-size": "medium",
              "stop_idx": "6",
              "arrival": "2021-04-04T03:14:39Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9521840810775757,
                43.258905113121415
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808080",
              "jobs_ids": "PabellonAreilza",
              "marker-symbol": "vacIcon",
              "tour_idx": "1",
              "stop_idx": "7",
              "arrival": "2021-04-04T03:55:05Z",
              "departure": "2021-04-04T04:15:05Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.952125072479248,
                43.26246402650738
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "warehouse",
              "stop_idx": "8",
              "departure": "2021-04-04T05:44:19Z",
              "jobs_ids": "arrival",
              "arrival": "2021-04-04T05:44:19Z",
              "marker-color": "#808080",
              "marker-size": "medium",
              "tour_idx": "1"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T00:00:00Z",
              "departure": "2021-04-04T00:08:48Z",
              "jobs_ids": "departure",
              "marker-symbol": "warehouse",
              "marker-color": "#000075",
              "marker-size": "medium",
              "stop_idx": "0",
              "tour_idx": "2"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "FrontonArrateAndoain",
              "marker-size": "medium",
              "marker-color": "#000075",
              "tour_idx": "2",
              "marker-symbol": "vacIcon",
              "stop_idx": "1",
              "departure": "2021-04-04T00:35:45Z",
              "arrival": "2021-04-04T00:15:45Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.0193976163864136,
                43.2208691831495
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "2",
              "departure": "2021-04-04T01:00:40Z",
              "marker-color": "#000075",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "2",
              "arrival": "2021-04-04T00:40:40Z",
              "jobs_ids": "CSVillabona"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.0522868633270264,
                43.18920854196271
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "3",
              "arrival": "2021-04-04T01:27:35Z",
              "marker-color": "#000075",
              "departure": "2021-04-04T01:47:35Z",
              "tour_idx": "2",
              "marker-symbol": "vacIcon",
              "jobs_ids": "H.Zumarraga"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.3129653930664062,
                43.08356616102995
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "2",
              "stop_idx": "4",
              "marker-symbol": "beer",
              "arrival": "2021-04-04T01:48:26Z",
              "marker-size": "medium",
              "departure": "2021-04-04T02:28:26Z",
              "marker-color": "#000075",
              "jobs_ids": "CSZumarraga,break"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.3204004764556885,
                43.08767986708493
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "2",
              "stop_idx": "5",
              "marker-color": "#000075",
              "arrival": "2021-04-04T02:32:59Z",
              "departure": "2021-04-04T02:52:59Z",
              "jobs_ids": "CSLegazpi"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.3335808515548706,
                43.0522243683301
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "2",
              "stop_idx": "6",
              "marker-color": "#000075",
              "arrival": "2021-04-04T03:05:17Z",
              "marker-size": "medium",
              "jobs_ids": "CSBeasain",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:25:17Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.197866439819336,
                43.04522097666605
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSOrdizia",
              "tour_idx": "2",
              "arrival": "2021-04-04T03:27:20Z",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:47:20Z",
              "marker-color": "#000075",
              "marker-size": "medium",
              "stop_idx": "7"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.178138792514801,
                43.05351989833822
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSAlegia",
              "marker-color": "#000075",
              "marker-size": "medium",
              "stop_idx": "8",
              "marker-symbol": "vacIcon",
              "tour_idx": "2",
              "departure": "2021-04-04T04:16:35Z",
              "arrival": "2021-04-04T03:56:35Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.0986568927764893,
                43.10071457255362
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T04:41:24Z",
              "stop_idx": "9",
              "jobs_ids": "CSIbarra",
              "marker-size": "medium",
              "arrival": "2021-04-04T04:21:24Z",
              "marker-color": "#000075",
              "tour_idx": "2",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.0687663555145264,
                43.132916315373976
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T05:02:08Z",
              "tour_idx": "2",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T04:42:08Z",
              "marker-color": "#000075",
              "marker-size": "medium",
              "stop_idx": "10",
              "jobs_ids": "FrontonBeotibarTolosa"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.0753753185272217,
                43.136478669868765
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "11",
              "tour_idx": "2",
              "departure": "2021-04-04T05:20:21Z",
              "jobs_ids": "arrival",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T05:20:21Z",
              "marker-color": "#000075"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808000",
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "arrival": "2021-04-04T00:00:00Z",
              "marker-size": "medium",
              "tour_idx": "3",
              "jobs_ids": "departure",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T00:01:50Z",
              "marker-size": "medium",
              "stop_idx": "1",
              "departure": "2021-04-04T00:21:50Z",
              "jobs_ids": "Hernanipolideportivo",
              "marker-symbol": "vacIcon",
              "marker-color": "#808000",
              "tour_idx": "3"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.9763696193695068,
                43.268167229908265
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808000",
              "tour_idx": "3",
              "departure": "2021-04-04T00:44:49Z",
              "stop_idx": "2",
              "jobs_ids": "Vacunauto",
              "arrival": "2021-04-04T00:24:49Z",
              "marker-size": "medium",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.971316337585449,
                43.2919508565733
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "HUDConsultasExternas",
              "stop_idx": "3",
              "marker-size": "medium",
              "marker-color": "#808000",
              "tour_idx": "3",
              "arrival": "2021-04-04T00:44:55Z",
              "departure": "2021-04-04T01:04:55Z",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.970221996307373,
                43.2923100781703
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "3",
              "jobs_ids": "HUDUrgenciasZonaX",
              "stop_idx": "4",
              "marker-color": "#808000",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T01:05:02Z",
              "departure": "2021-04-04T01:25:02Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.968891620635986,
                43.29210704013706
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "5",
              "tour_idx": "3",
              "arrival": "2021-04-04T01:25:43Z",
              "marker-symbol": "vacIcon",
              "jobs_ids": "Illunbe",
              "marker-color": "#808000",
              "departure": "2021-04-04T01:45:43Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.9687950611114504,
                43.29761225450028
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T01:48:56Z",
              "marker-size": "medium",
              "marker-symbol": "beer",
              "stop_idx": "6",
              "marker-color": "#808000",
              "departure": "2021-04-04T02:28:56Z",
              "jobs_ids": "PACBengoetxeaDonostia,break",
              "tour_idx": "3"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.981763541698456,
                43.32182342281399
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T02:50:01Z",
              "jobs_ids": "A.Gros",
              "stop_idx": "7",
              "arrival": "2021-04-04T02:30:01Z",
              "marker-color": "#808000",
              "tour_idx": "3"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.9707021117210384,
                43.32544304670988
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "ItsasEtxeaHondarribia",
              "arrival": "2021-04-04T03:06:49Z",
              "marker-color": "#808000",
              "marker-symbol": "vacIcon",
              "stop_idx": "8",
              "departure": "2021-04-04T03:26:49Z",
              "tour_idx": "3",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.7929548025131226,
                43.36731352927655
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "9",
              "arrival": "2021-04-04T03:30:31Z",
              "jobs_ids": "CSIrunCentro",
              "departure": "2021-04-04T03:50:31Z",
              "marker-color": "#808000",
              "marker-symbol": "vacIcon",
              "tour_idx": "3",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.795116662979126,
                43.337467235140274
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "3",
              "stop_idx": "10",
              "departure": "2021-04-04T04:10:45Z",
              "arrival": "2021-04-04T03:50:45Z",
              "marker-size": "medium",
              "marker-color": "#808000",
              "jobs_ids": "AsociaciondeVecinosdeElitxuIrun",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.7950844764709473,
                43.33563927492161
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "RenteriaSalaReina",
              "marker-color": "#808000",
              "arrival": "2021-04-04T04:20:40Z",
              "marker-symbol": "vacIcon",
              "stop_idx": "11",
              "marker-size": "medium",
              "tour_idx": "3",
              "departure": "2021-04-04T04:40:40Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.9008064270019531,
                43.3129773643906
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T04:49:23Z",
              "jobs_ids": "arrival",
              "marker-color": "#808000",
              "stop_idx": "12",
              "departure": "2021-04-04T04:49:23Z",
              "marker-size": "medium",
              "tour_idx": "3"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "departure",
              "tour_idx": "4",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "marker-color": "#800000",
              "arrival": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "1",
              "jobs_ids": "PolideportivoZubialdePortugalete",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "arrival": "2021-04-04T01:35:35Z",
              "tour_idx": "4",
              "departure": "2021-04-04T01:55:35Z",
              "marker-color": "#800000"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0194860696792603,
                43.321856595548525
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "2",
              "marker-color": "#800000",
              "arrival": "2021-04-04T01:56:59Z",
              "jobs_ids": "AmbulatorioSanturtziKabiezes",
              "departure": "2021-04-04T02:16:59Z",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "tour_idx": "4"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0343106389045715,
                43.32519133860228
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#800000",
              "marker-size": "medium",
              "jobs_ids": "SalaKulturaKresalaSanturtziKabiezes",
              "tour_idx": "4",
              "arrival": "2021-04-04T02:17:19Z",
              "marker-symbol": "vacIcon",
              "stop_idx": "3",
              "departure": "2021-04-04T02:37:19Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.033750057220459,
                43.32784983087052
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#800000",
              "departure": "2021-04-04T02:58:04Z",
              "jobs_ids": "KulturGuneMamariga",
              "marker-size": "medium",
              "tour_idx": "4",
              "stop_idx": "4",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T02:38:04Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0387067794799805,
                43.33279870673904
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "jobs_ids": "PlazaAjedrezGetxo",
              "departure": "2021-04-04T03:20:41Z",
              "marker-symbol": "vacIcon",
              "marker-color": "#800000",
              "stop_idx": "5",
              "tour_idx": "4",
              "arrival": "2021-04-04T03:00:41Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0107903480529785,
                43.32710156242691
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "4",
              "arrival": "2021-04-04T03:22:37Z",
              "marker-symbol": "beer",
              "marker-color": "#800000",
              "departure": "2021-04-04T04:02:37Z",
              "marker-size": "medium",
              "jobs_ids": "CSLeioa,break",
              "stop_idx": "6"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9895687103271484,
                43.325013776441615
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "4",
              "jobs_ids": "CarpaLeioacercacentrosalud",
              "arrival": "2021-04-04T04:02:42Z",
              "departure": "2021-04-04T04:22:42Z",
              "marker-color": "#800000",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "stop_idx": "7"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.98877477645874,
                43.32481865258964
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "8",
              "marker-color": "#800000",
              "jobs_ids": "arrival",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "tour_idx": "4",
              "arrival": "2021-04-04T05:55:33Z",
              "departure": "2021-04-04T05:55:33Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#9a6324",
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "5",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "stop_idx": "0"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "tour_idx": "5",
              "marker-symbol": "vacIcon",
              "jobs_ids": "CSAretxabaleta",
              "marker-color": "#9a6324",
              "stop_idx": "1",
              "arrival": "2021-04-04T00:56:14Z",
              "departure": "2021-04-04T01:16:14Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.5048935413360596,
                43.035619170024056
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T01:39:03Z",
              "stop_idx": "2",
              "jobs_ids": "CSEskoriatza",
              "marker-size": "medium",
              "tour_idx": "5",
              "arrival": "2021-04-04T01:19:03Z",
              "marker-color": "#9a6324"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.524924278259277,
                43.01822701869165
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "5",
              "arrival": "2021-04-04T02:06:42Z",
              "marker-size": "medium",
              "jobs_ids": "CSMurgia,break",
              "stop_idx": "3",
              "marker-symbol": "beer",
              "marker-color": "#9a6324",
              "departure": "2021-04-04T02:46:42Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.818167507648468,
                42.95526823613394
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CsAmurrio",
              "departure": "2021-04-04T03:27:26Z",
              "marker-color": "#9a6324",
              "marker-symbol": "vacIcon",
              "stop_idx": "4",
              "marker-size": "medium",
              "arrival": "2021-04-04T03:07:26Z",
              "tour_idx": "5"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.003172874450683,
                43.05429994707944
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T03:59:08Z",
              "tour_idx": "5",
              "stop_idx": "5",
              "jobs_ids": "FrontoikoetxeaLaudio",
              "marker-color": "#9a6324",
              "marker-size": "medium",
              "arrival": "2021-04-04T03:39:08Z",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9642432928085327,
                43.1445577905019
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "tour_idx": "5",
              "arrival": "2021-04-04T03:59:44Z",
              "departure": "2021-04-04T04:19:44Z",
              "marker-color": "#9a6324",
              "stop_idx": "6",
              "jobs_ids": "CsLlodio",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9583048820495605,
                43.14667525164088
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "tour_idx": "5",
              "stop_idx": "7",
              "departure": "2021-04-04T05:50:40Z",
              "jobs_ids": "arrival",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T05:50:40Z",
              "marker-color": "#9a6324"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T00:00:00Z",
              "marker-size": "medium",
              "marker-color": "#e6beff",
              "marker-symbol": "warehouse",
              "tour_idx": "6",
              "departure": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "stop_idx": "0"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "tour_idx": "6",
              "stop_idx": "1",
              "marker-symbol": "beer",
              "arrival": "2021-04-04T01:45:25Z",
              "departure": "2021-04-04T02:25:25Z",
              "marker-color": "#e6beff",
              "jobs_ids": "PolideportivoZalla,break"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.1295371055603027,
                43.21127536296301
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6beff",
              "arrival": "2021-04-04T02:46:19Z",
              "marker-size": "medium",
              "jobs_ids": "CSKarrantza",
              "tour_idx": "6",
              "stop_idx": "2",
              "departure": "2021-04-04T03:06:19Z",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.3609044551849365,
                43.22297031756375
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6beff",
              "stop_idx": "3",
              "jobs_ids": "CasaCulturaBalmaseda",
              "marker-symbol": "vacIcon",
              "tour_idx": "6",
              "marker-size": "medium",
              "arrival": "2021-04-04T03:21:28Z",
              "departure": "2021-04-04T03:41:28Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.1985074281692505,
                43.19154738519674
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "6",
              "stop_idx": "4",
              "jobs_ids": "FrontonMunicipalSodupe",
              "marker-color": "#e6beff",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:55:03Z",
              "departure": "2021-04-04T04:15:03Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0479872226715083,
                43.19661196426677
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "6",
              "marker-symbol": "warehouse",
              "marker-color": "#e6beff",
              "arrival": "2021-04-04T05:53:16Z",
              "jobs_ids": "arrival",
              "marker-size": "medium",
              "stop_idx": "5",
              "departure": "2021-04-04T05:53:16Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#008080",
              "departure": "2021-04-04T00:00:00Z",
              "marker-size": "medium",
              "tour_idx": "7",
              "jobs_ids": "departure",
              "arrival": "2021-04-04T00:00:00Z",
              "stop_idx": "0",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "1",
              "marker-color": "#008080",
              "marker-symbol": "vacIcon",
              "jobs_ids": "FrontonZarautz",
              "tour_idx": "7",
              "marker-size": "medium",
              "arrival": "2021-04-04T00:18:57Z",
              "departure": "2021-04-04T00:38:57Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.169574499130249,
                43.28038434917129
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T01:03:14Z",
              "jobs_ids": "CsOndarroa",
              "stop_idx": "2",
              "marker-color": "#008080",
              "departure": "2021-04-04T01:23:14Z",
              "marker-size": "medium",
              "tour_idx": "7"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4338874220848083,
                43.319655447773414
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "3",
              "departure": "2021-04-04T02:04:37Z",
              "tour_idx": "7",
              "marker-symbol": "vacIcon",
              "marker-color": "#008080",
              "arrival": "2021-04-04T01:44:37Z",
              "jobs_ids": "H.GernikaLumo"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6715070009231567,
                43.31875779369757
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "4",
              "departure": "2021-04-04T02:45:28Z",
              "arrival": "2021-04-04T02:05:28Z",
              "tour_idx": "7",
              "jobs_ids": "CsGernika,break",
              "marker-size": "medium",
              "marker-symbol": "beer",
              "marker-color": "#008080"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6798634231090546,
                43.31554954769443
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:06:28Z",
              "marker-color": "#008080",
              "tour_idx": "7",
              "departure": "2021-04-04T03:26:28Z",
              "stop_idx": "5",
              "marker-size": "medium",
              "jobs_ids": "CSOtxarkoaga"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9005515575408936,
                43.26060451044793
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#008080",
              "stop_idx": "6",
              "jobs_ids": "CSTxurdinaga",
              "tour_idx": "7",
              "arrival": "2021-04-04T03:27:15Z",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "departure": "2021-04-04T03:47:15Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9068976640701294,
                43.25628365090033
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T03:48:33Z",
              "marker-color": "#008080",
              "marker-size": "medium",
              "stop_idx": "7",
              "tour_idx": "7",
              "departure": "2021-04-04T04:08:33Z",
              "jobs_ids": "CSMinadelMorro",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.918345332145691,
                43.2499541711442
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "7",
              "jobs_ids": "CsEtxebarri",
              "marker-color": "#008080",
              "arrival": "2021-04-04T04:11:19Z",
              "stop_idx": "8",
              "departure": "2021-04-04T04:31:19Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.887634038925171,
                43.248946082161574
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "warehouse",
              "stop_idx": "9",
              "departure": "2021-04-04T05:54:46Z",
              "marker-color": "#008080",
              "jobs_ids": "arrival",
              "arrival": "2021-04-04T05:54:46Z",
              "tour_idx": "7",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "8",
              "marker-color": "#bcf60c",
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "marker-symbol": "warehouse",
              "jobs_ids": "departure",
              "marker-size": "medium",
              "arrival": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#bcf60c",
              "departure": "2021-04-04T01:15:47Z",
              "stop_idx": "1",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T00:55:47Z",
              "tour_idx": "8",
              "jobs_ids": "CSAraia"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.314785271883011,
                42.88816336893744
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "2",
              "arrival": "2021-04-04T01:24:05Z",
              "departure": "2021-04-04T01:44:05Z",
              "marker-symbol": "vacIcon",
              "tour_idx": "8",
              "marker-size": "medium",
              "marker-color": "#bcf60c",
              "jobs_ids": "CSAgurain"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.3907816410064697,
                42.85064986048793
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSAlegria,break",
              "arrival": "2021-04-04T01:55:20Z",
              "tour_idx": "8",
              "stop_idx": "3",
              "marker-symbol": "beer",
              "departure": "2021-04-04T02:35:20Z",
              "marker-color": "#bcf60c",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.5144556164741516,
                42.84289583862805
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "HUASantiago",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:09:10Z",
              "arrival": "2021-04-04T02:49:10Z",
              "marker-color": "#bcf60c",
              "marker-size": "medium",
              "stop_idx": "4",
              "tour_idx": "8"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6669740676879883,
                42.846095498441805
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#bcf60c",
              "tour_idx": "8",
              "marker-symbol": "vacIcon",
              "stop_idx": "5",
              "jobs_ids": "HUAConsultasExternas",
              "marker-size": "medium",
              "departure": "2021-04-04T03:31:39Z",
              "arrival": "2021-04-04T03:11:39Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.691945433616638,
                42.854299400470616
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "FrontonLakua",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:31:54Z",
              "marker-size": "medium",
              "departure": "2021-04-04T03:51:54Z",
              "stop_idx": "6",
              "marker-color": "#bcf60c",
              "tour_idx": "8"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6945579051971436,
                42.855085911012395
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T04:12:13Z",
              "arrival": "2021-04-04T03:52:13Z",
              "marker-color": "#bcf60c",
              "stop_idx": "7",
              "marker-size": "medium",
              "tour_idx": "8",
              "marker-symbol": "vacIcon",
              "jobs_ids": "HUATxagorritxu"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6910924911499023,
                42.85501512547384
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "8",
              "arrival": "2021-04-04T04:45:24Z",
              "marker-color": "#bcf60c",
              "departure": "2021-04-04T05:05:24Z",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "8",
              "jobs_ids": "CSOnati"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.416737377643585,
                43.032931257554175
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#bcf60c",
              "jobs_ids": "arrival",
              "stop_idx": "9",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "departure": "2021-04-04T05:55:02Z",
              "tour_idx": "8",
              "arrival": "2021-04-04T05:55:02Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "warehouse",
              "departure": "2021-04-04T00:00:00Z",
              "stop_idx": "0",
              "arrival": "2021-04-04T00:00:00Z",
              "marker-size": "medium",
              "tour_idx": "9",
              "jobs_ids": "departure",
              "marker-color": "#f032e6"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T01:23:28Z",
              "marker-size": "medium",
              "marker-color": "#f032e6",
              "departure": "2021-04-04T01:43:28Z",
              "tour_idx": "9",
              "jobs_ids": "PolideportivoDerio",
              "stop_idx": "1",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.886979579925537,
                43.29347948595516
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "2",
              "departure": "2021-04-04T02:32:11Z",
              "arrival": "2021-04-04T01:52:11Z",
              "marker-color": "#f032e6",
              "jobs_ids": "CSRontegi,break",
              "marker-symbol": "beer",
              "marker-size": "medium",
              "tour_idx": "9"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9836517572402954,
                43.29660495465739
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "H.SanEloy",
              "marker-size": "medium",
              "arrival": "2021-04-04T02:33:04Z",
              "marker-symbol": "vacIcon",
              "stop_idx": "3",
              "marker-color": "#f032e6",
              "departure": "2021-04-04T02:53:04Z",
              "tour_idx": "9"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9935169219970703,
                43.29668694480331
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "4",
              "arrival": "2021-04-04T02:53:23Z",
              "departure": "2021-04-04T03:13:23Z",
              "marker-color": "#f032e6",
              "jobs_ids": "CSSanVicente",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "9"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9970279335975643,
                43.2961871936258
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:14:03Z",
              "stop_idx": "5",
              "departure": "2021-04-04T03:34:03Z",
              "marker-color": "#f032e6",
              "tour_idx": "9",
              "jobs_ids": "CSZaballa"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.990546375513077,
                43.29885671527511
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "9",
              "marker-color": "#f032e6",
              "departure": "2021-04-04T03:54:44Z",
              "stop_idx": "6",
              "arrival": "2021-04-04T03:34:44Z",
              "marker-symbol": "vacIcon",
              "jobs_ids": "CSUrban",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.983193099498749,
                43.30023584087372
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "9",
              "arrival": "2021-04-04T03:55:57Z",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "jobs_ids": "CSErandio",
              "stop_idx": "7",
              "departure": "2021-04-04T04:15:57Z",
              "marker-color": "#f032e6"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9712170362472534,
                43.30474876922975
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T05:47:03Z",
              "jobs_ids": "arrival",
              "tour_idx": "9",
              "marker-size": "medium",
              "marker-color": "#f032e6",
              "stop_idx": "8",
              "marker-symbol": "warehouse",
              "departure": "2021-04-04T05:47:03Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "10",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "marker-color": "#46f0f0",
              "stop_idx": "0",
              "arrival": "2021-04-04T00:00:00Z",
              "departure": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T00:38:12Z",
              "marker-color": "#46f0f0",
              "stop_idx": "1",
              "marker-symbol": "vacIcon",
              "tour_idx": "10",
              "jobs_ids": "H.Mendaro",
              "departure": "2021-04-04T00:58:12Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.38527774810791,
                43.25030582616632
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "10",
              "stop_idx": "2",
              "departure": "2021-04-04T01:49:33Z",
              "arrival": "2021-04-04T01:29:33Z",
              "marker-symbol": "vacIcon",
              "jobs_ids": "CsAmorebieta",
              "marker-size": "medium",
              "marker-color": "#46f0f0"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.730453908443451,
                43.21840050201569
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "jobs_ids": "CsGaldakao",
              "marker-symbol": "vacIcon",
              "tour_idx": "10",
              "marker-color": "#46f0f0",
              "stop_idx": "3",
              "departure": "2021-04-04T02:20:01Z",
              "arrival": "2021-04-04T02:00:01Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8444531559944153,
                43.23434938965365
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "tour_idx": "10",
              "marker-color": "#46f0f0",
              "arrival": "2021-04-04T02:23:37Z",
              "jobs_ids": "CsBasaurAriz,break",
              "marker-symbol": "beer",
              "stop_idx": "4",
              "departure": "2021-04-04T03:03:37Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8842008113861084,
                43.23764496627252
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CsElKalero",
              "marker-color": "#46f0f0",
              "marker-size": "medium",
              "arrival": "2021-04-04T03:04:53Z",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:24:53Z",
              "tour_idx": "10",
              "stop_idx": "5"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8981858491897583,
                43.2377387600931
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "6",
              "jobs_ids": "HogardeljubiladoArizgoitiBasauri",
              "marker-color": "#46f0f0",
              "tour_idx": "10",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:45:47Z",
              "arrival": "2021-04-04T03:25:47Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.888824939727783,
                43.2351515609431
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T04:12:20Z",
              "marker-size": "medium",
              "stop_idx": "7",
              "tour_idx": "10",
              "jobs_ids": "H.GaldakaoUsansolo",
              "marker-symbol": "vacIcon",
              "marker-color": "#46f0f0",
              "arrival": "2021-04-04T03:52:20Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.817971706390381,
                43.22331626484531
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "LandakoGuneaDurango",
              "marker-symbol": "vacIcon",
              "stop_idx": "8",
              "marker-color": "#46f0f0",
              "marker-size": "medium",
              "tour_idx": "10",
              "arrival": "2021-04-04T04:30:26Z",
              "departure": "2021-04-04T04:50:26Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6306167244911194,
                43.17079582239404
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "arrival": "2021-04-04T05:51:43Z",
              "stop_idx": "9",
              "jobs_ids": "arrival",
              "marker-symbol": "warehouse",
              "departure": "2021-04-04T05:51:43Z",
              "marker-color": "#46f0f0",
              "tour_idx": "10"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#911eb4",
              "tour_idx": "11",
              "departure": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "stop_idx": "0",
              "marker-size": "medium",
              "arrival": "2021-04-04T00:00:00Z",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSKanpezu",
              "marker-size": "medium",
              "stop_idx": "1",
              "arrival": "2021-04-04T01:20:51Z",
              "marker-color": "#911eb4",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T01:40:51Z",
              "tour_idx": "11"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.350669205188751,
                42.669689671699366
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#911eb4",
              "arrival": "2021-04-04T02:06:38Z",
              "departure": "2021-04-04T02:26:38Z",
              "marker-size": "medium",
              "stop_idx": "2",
              "tour_idx": "11",
              "jobs_ids": "CSLaguardia",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.586008906364441,
                42.5537382443097
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "11",
              "arrival": "2021-04-04T02:32:11Z",
              "jobs_ids": "ConsultorioElciego",
              "departure": "2021-04-04T02:52:11Z",
              "marker-size": "medium",
              "stop_idx": "3",
              "marker-color": "#911eb4",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.61974036693573,
                42.51637594928051
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "11",
              "arrival": "2021-04-04T02:59:50Z",
              "stop_idx": "4",
              "departure": "2021-04-04T03:39:50Z",
              "marker-size": "medium",
              "marker-symbol": "beer",
              "marker-color": "#911eb4",
              "jobs_ids": "H.Leza,break"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.639443874359131,
                42.576458145137146
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "11",
              "marker-color": "#911eb4",
              "departure": "2021-04-04T05:09:42Z",
              "arrival": "2021-04-04T04:49:42Z",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "stop_idx": "5",
              "jobs_ids": "CSLazkao"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.188210487365722,
                43.03416837850006
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "arrival",
              "marker-size": "medium",
              "tour_idx": "11",
              "stop_idx": "6",
              "marker-color": "#911eb4",
              "arrival": "2021-04-04T05:44:08Z",
              "departure": "2021-04-04T05:44:08Z",
              "marker-symbol": "warehouse"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#f58231",
              "tour_idx": "12",
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "jobs_ids": "departure",
              "arrival": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "marker-color": "#f58231",
              "arrival": "2021-04-04T01:10:38Z",
              "stop_idx": "1",
              "departure": "2021-04-04T01:30:38Z",
              "tour_idx": "12",
              "marker-size": "medium",
              "jobs_ids": "CSLegutio"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6434001326560974,
                42.97823188094157
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "marker-color": "#f58231",
              "tour_idx": "12",
              "marker-symbol": "vacIcon",
              "stop_idx": "2",
              "departure": "2021-04-04T02:32:40Z",
              "arrival": "2021-04-04T02:12:40Z",
              "jobs_ids": "CSEspejo"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0469465255737305,
                42.810606780919414
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "12",
              "jobs_ids": "CSZanbrana",
              "marker-size": "medium",
              "marker-color": "#f58231",
              "arrival": "2021-04-04T02:56:43Z",
              "marker-symbol": "vacIcon",
              "stop_idx": "3",
              "departure": "2021-04-04T03:16:43Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8790201246738434,
                42.660282759382454
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "beer",
              "marker-color": "#f58231",
              "stop_idx": "4",
              "arrival": "2021-04-04T03:37:06Z",
              "departure": "2021-04-04T04:17:06Z",
              "tour_idx": "12",
              "jobs_ids": "CSNanclares,break",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.809058725833893,
                42.81691287206185
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T05:51:10Z",
              "jobs_ids": "arrival",
              "departure": "2021-04-04T05:51:10Z",
              "marker-symbol": "warehouse",
              "marker-color": "#f58231",
              "marker-size": "medium",
              "tour_idx": "12",
              "stop_idx": "5"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#4363d8",
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "13",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "marker-symbol": "warehouse",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CsLekeitio",
              "departure": "2021-04-04T01:10:39Z",
              "tour_idx": "13",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "marker-color": "#4363d8",
              "arrival": "2021-04-04T00:50:39Z",
              "stop_idx": "1"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.5064867734909058,
                43.359845043819114
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "jobs_ids": "CsBermeo",
              "stop_idx": "2",
              "arrival": "2021-04-04T01:31:32Z",
              "marker-color": "#4363d8",
              "departure": "2021-04-04T01:51:32Z",
              "tour_idx": "13",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.7228444814682007,
                43.42153093169636
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "arrival": "2021-04-04T02:05:02Z",
              "marker-color": "#4363d8",
              "stop_idx": "3",
              "jobs_ids": "CSMungia",
              "tour_idx": "13",
              "departure": "2021-04-04T02:25:02Z",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.844032049179077,
                43.35712262048268
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T02:40:54Z",
              "marker-symbol": "beer",
              "stop_idx": "4",
              "tour_idx": "13",
              "jobs_ids": "BEC,break",
              "departure": "2021-04-04T03:20:54Z",
              "marker-color": "#4363d8",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9913926124572754,
                43.28667161623122
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "5",
              "departure": "2021-04-04T03:41:25Z",
              "marker-color": "#4363d8",
              "jobs_ids": "CSRetuerto",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "tour_idx": "13",
              "arrival": "2021-04-04T03:21:25Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9941874742507935,
                43.283049683027066
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSLaPaz",
              "tour_idx": "13",
              "marker-size": "medium",
              "stop_idx": "6",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T04:02:19Z",
              "arrival": "2021-04-04T03:42:19Z",
              "marker-color": "#4363d8"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9854488372802734,
                43.279646236074186
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T04:06:37Z",
              "marker-color": "#4363d8",
              "marker-symbol": "vacIcon",
              "tour_idx": "13",
              "stop_idx": "7",
              "jobs_ids": "CSAlonsotegi",
              "departure": "2021-04-04T04:26:37Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.988581657409668,
                43.244901836544656
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "8",
              "departure": "2021-04-04T05:59:10Z",
              "tour_idx": "13",
              "marker-symbol": "warehouse",
              "marker-size": "medium",
              "marker-color": "#4363d8",
              "arrival": "2021-04-04T05:59:10Z",
              "jobs_ids": "arrival"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "marker-color": "#3cb44b",
              "departure": "2021-04-04T00:00:00Z",
              "stop_idx": "0",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "tour_idx": "14"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#3cb44b",
              "tour_idx": "14",
              "marker-symbol": "vacIcon",
              "jobs_ids": "FrontonAstelena(Eibar)",
              "marker-size": "medium",
              "arrival": "2021-04-04T00:47:09Z",
              "departure": "2021-04-04T01:07:09Z",
              "stop_idx": "1"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4745523929595947,
                43.183572265576075
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#3cb44b",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T01:07:54Z",
              "marker-size": "medium",
              "tour_idx": "14",
              "stop_idx": "2",
              "departure": "2021-04-04T01:27:54Z",
              "jobs_ids": "H.Eibar"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4825990200042725,
                43.18231273503781
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T01:39:30Z",
              "tour_idx": "14",
              "marker-symbol": "vacIcon",
              "stop_idx": "3",
              "departure": "2021-04-04T01:59:30Z",
              "marker-color": "#3cb44b",
              "marker-size": "medium",
              "jobs_ids": "CSMatiena"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.6093655824661255,
                43.16631600168613
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "14",
              "departure": "2021-04-04T02:56:36Z",
              "arrival": "2021-04-04T02:16:36Z",
              "marker-symbol": "beer",
              "jobs_ids": "H.ArrasateVacunauto,break",
              "marker-size": "medium",
              "marker-color": "#3cb44b",
              "stop_idx": "4"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4831300973892207,
                43.06329918878738
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "14",
              "jobs_ids": "CSArrasate",
              "stop_idx": "5",
              "arrival": "2021-04-04T02:56:40Z",
              "marker-color": "#3cb44b",
              "departure": "2021-04-04T03:16:40Z",
              "marker-size": "medium",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.482534646987915,
                43.06306011451481
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T03:45:44Z",
              "arrival": "2021-04-04T03:25:44Z",
              "marker-size": "medium",
              "tour_idx": "14",
              "stop_idx": "6",
              "jobs_ids": "CSBergara",
              "marker-color": "#3cb44b",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4184405803680415,
                43.11946753577654
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#3cb44b",
              "jobs_ids": "CSAzkoitia",
              "tour_idx": "14",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "stop_idx": "7",
              "arrival": "2021-04-04T03:57:24Z",
              "departure": "2021-04-04T04:17:24Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.3148322105407715,
                43.17593645192926
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "8",
              "marker-symbol": "vacIcon",
              "marker-size": "medium",
              "tour_idx": "14",
              "marker-color": "#3cb44b",
              "arrival": "2021-04-04T04:21:40Z",
              "departure": "2021-04-04T04:41:40Z",
              "jobs_ids": "CSAzpeitia"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.2681617736816406,
                43.18150693479038
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "9",
              "arrival": "2021-04-04T05:10:53Z",
              "departure": "2021-04-04T05:10:53Z",
              "jobs_ids": "arrival",
              "marker-symbol": "warehouse",
              "marker-color": "#3cb44b",
              "tour_idx": "14"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "stop_idx": "0",
              "marker-symbol": "warehouse",
              "tour_idx": "15",
              "departure": "2021-04-04T00:00:00Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "stop_idx": "1",
              "arrival": "2021-04-04T00:26:42Z",
              "marker-size": "medium",
              "departure": "2021-04-04T00:46:42Z",
              "jobs_ids": "FrontonZumaia",
              "tour_idx": "15",
              "marker-symbol": "vacIcon"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.254589796066284,
                43.29049833022032
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "15",
              "arrival": "2021-04-04T01:51:01Z",
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "marker-symbol": "beer",
              "jobs_ids": "H.Urduliz,break",
              "departure": "2021-04-04T02:31:01Z",
              "stop_idx": "2"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.959989309310913,
                43.3751242302757
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "15",
              "stop_idx": "3",
              "marker-symbol": "vacIcon",
              "jobs_ids": "PlazaBihotzAlaiGetxo",
              "marker-color": "#e6194b",
              "departure": "2021-04-04T02:56:29Z",
              "arrival": "2021-04-04T02:36:29Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.011428713798523,
                43.35163059825675
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "15",
              "stop_idx": "4",
              "arrival": "2021-04-04T02:58:00Z",
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "jobs_ids": "PolideportivoAndraMariGetxo",
              "departure": "2021-04-04T03:18:00Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.017098903656006,
                43.36321865110707
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "15",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:21:18Z",
              "marker-size": "medium",
              "departure": "2021-04-04T03:41:18Z",
              "marker-color": "#e6194b",
              "jobs_ids": "CSSopela",
              "stop_idx": "5"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9868221282958984,
                43.37825914636071
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T03:47:29Z",
              "jobs_ids": "H.Gorliz",
              "marker-size": "medium",
              "stop_idx": "6",
              "departure": "2021-04-04T04:07:29Z",
              "marker-symbol": "vacIcon",
              "tour_idx": "15",
              "marker-color": "#e6194b"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.943563461303711,
                43.41719033700026
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T04:28:24Z",
              "jobs_ids": "CSGorlizPlentzia",
              "arrival": "2021-04-04T04:08:24Z",
              "stop_idx": "7",
              "tour_idx": "15",
              "marker-color": "#e6194b"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.934395670890808,
                43.41386454516395
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "departure": "2021-04-04T05:58:02Z",
              "marker-size": "medium",
              "tour_idx": "15",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T05:58:02Z",
              "stop_idx": "8",
              "jobs_ids": "arrival"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "departure",
              "marker-size": "medium",
              "tour_idx": "16",
              "departure": "2021-04-04T00:00:00Z",
              "stop_idx": "0",
              "marker-color": "#e6194b",
              "marker-symbol": "warehouse",
              "arrival": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "stop_idx": "1",
              "marker-symbol": "vacIcon",
              "tour_idx": "16",
              "departure": "2021-04-04T01:53:36Z",
              "jobs_ids": "CSKueto",
              "marker-color": "#e6194b",
              "arrival": "2021-04-04T01:33:36Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9987525939941406,
                43.30732520439184
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "2",
              "jobs_ids": "CSMarkonzaga,break",
              "departure": "2021-04-04T02:34:21Z",
              "marker-color": "#e6194b",
              "marker-size": "medium",
              "tour_idx": "16",
              "arrival": "2021-04-04T01:54:21Z",
              "marker-symbol": "beer"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.00675630569458,
                43.30589646747127
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T02:36:54Z",
              "marker-symbol": "vacIcon",
              "marker-color": "#e6194b",
              "departure": "2021-04-04T02:56:54Z",
              "tour_idx": "16",
              "stop_idx": "3",
              "jobs_ids": "PolideportivoTrapaga",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0349838733673096,
                43.30503764769848
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "arrival": "2021-04-04T02:58:25Z",
              "marker-color": "#e6194b",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:18:25Z",
              "jobs_ids": "ModulosJuvenilesdeOrtuella",
              "tour_idx": "16",
              "stop_idx": "4"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.0509912967681885,
                43.30891004813708
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "5",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T03:24:42Z",
              "jobs_ids": "CasaCulturaMuskiz",
              "marker-size": "medium",
              "departure": "2021-04-04T03:44:42Z",
              "tour_idx": "16",
              "marker-color": "#e6194b"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.1183898448944087,
                43.32200099429961
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSGallarta",
              "stop_idx": "6",
              "marker-symbol": "vacIcon",
              "tour_idx": "16",
              "arrival": "2021-04-04T03:48:38Z",
              "marker-color": "#e6194b",
              "departure": "2021-04-04T04:08:38Z",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -3.075098991394043,
                43.3175283763791
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#e6194b",
              "tour_idx": "16",
              "marker-symbol": "warehouse",
              "stop_idx": "7",
              "marker-size": "medium",
              "jobs_ids": "arrival",
              "arrival": "2021-04-04T05:49:10Z",
              "departure": "2021-04-04T05:49:10Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stop_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "marker-symbol": "warehouse",
              "marker-color": "#808080",
              "tour_idx": "17",
              "arrival": "2021-04-04T00:00:00Z",
              "jobs_ids": "departure",
              "marker-size": "medium"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "arrival": "2021-04-04T00:48:23Z",
              "jobs_ids": "CsMarkina",
              "marker-color": "#808080",
              "departure": "2021-04-04T01:08:23Z",
              "stop_idx": "1",
              "marker-symbol": "vacIcon",
              "tour_idx": "17"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.4984508752822876,
                43.26663991754853
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "beer",
              "tour_idx": "17",
              "departure": "2021-04-04T02:28:49Z",
              "marker-size": "medium",
              "marker-color": "#808080",
              "arrival": "2021-04-04T01:48:49Z",
              "stop_idx": "2",
              "jobs_ids": "CSDeusto,break"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.947305142879486,
                43.26927460505685
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T02:51:12Z",
              "marker-symbol": "vacIcon",
              "arrival": "2021-04-04T02:31:12Z",
              "stop_idx": "3",
              "marker-color": "#808080",
              "tour_idx": "17",
              "marker-size": "medium",
              "jobs_ids": "CSZorroza"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9723596572875977,
                43.27542436951664
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-color": "#808080",
              "marker-size": "medium",
              "tour_idx": "17",
              "arrival": "2021-04-04T02:52:32Z",
              "jobs_ids": "H.Cruces",
              "marker-symbol": "vacIcon",
              "departure": "2021-04-04T03:12:32Z",
              "stop_idx": "4"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9839360713958736,
                43.28221982969262
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-size": "medium",
              "arrival": "2021-04-04T03:13:53Z",
              "departure": "2021-04-04T03:33:53Z",
              "marker-color": "#808080",
              "tour_idx": "17",
              "stop_idx": "5",
              "marker-symbol": "vacIcon",
              "jobs_ids": "CSZuazo"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.988608479499817,
                43.29256485089735
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "jobs_ids": "CSAstrabudua",
              "tour_idx": "17",
              "marker-color": "#808080",
              "marker-size": "medium",
              "arrival": "2021-04-04T03:36:59Z",
              "marker-symbol": "vacIcon",
              "stop_idx": "6",
              "departure": "2021-04-04T03:56:59Z"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.9811787605285645,
                43.316974154723496
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "marker-symbol": "vacIcon",
              "marker-color": "#808080",
              "tour_idx": "17",
              "arrival": "2021-04-04T04:10:20Z",
              "marker-size": "medium",
              "stop_idx": "7",
              "departure": "2021-04-04T04:30:20Z",
              "jobs_ids": "FerialMungiavacunauto"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -2.8432327508926387,
                43.3567286780499
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "17",
              "jobs_ids": "arrival",
              "stop_idx": "8",
              "departure": "2021-04-04T05:50:38Z",
              "arrival": "2021-04-04T05:50:38Z",
              "marker-size": "medium",
              "marker-symbol": "warehouse",
              "marker-color": "#808080"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                -1.961442,
                43.258036
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stroke-width": "4",
              "shift_idx": "0",
              "distance": "159820",
              "tour_idx": "0",
              "activities": "11",
              "arrival": "2021-04-04T05:57:35Z",
              "departure": "2021-04-04T00:00:00Z",
              "stroke": "#e6194b",
              "vehicle_id": "van_10"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.9163390398025513,
                  43.25886604595848
                ],
                [
                  -2.9207003116607666,
                  43.25553743163037
                ],
                [
                  -2.9225349426269527,
                  43.25611174779537
                ],
                [
                  -2.9292377829551697,
                  43.25376756611834
                ],
                [
                  -2.9399585723876953,
                  43.25828394226155
                ],
                [
                  -2.9425978660583496,
                  43.26287420622754
                ],
                [
                  -2.931080460548401,
                  43.26440161306945
                ],
                [
                  -2.9233717918395996,
                  43.26556960420879
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "activities": "10",
              "shift_idx": "0",
              "arrival": "2021-04-04T05:44:19Z",
              "distance": "165877",
              "vehicle_id": "van_25",
              "departure": "2021-04-04T00:00:00Z",
              "stroke": "#3cb44b",
              "tour_idx": "1",
              "stroke-width": "4"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.6269501447677612,
                  43.1719421341983
                ],
                [
                  -2.775826156139374,
                  43.16273973431708
                ],
                [
                  -2.8882321715354915,
                  43.207951968164785
                ],
                [
                  -2.9250535368919373,
                  43.24254745397505
                ],
                [
                  -2.944239377975464,
                  43.251095088934655
                ],
                [
                  -2.9521840810775757,
                  43.258905113121415
                ],
                [
                  -2.952125072479248,
                  43.26246402650738
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "stroke": "#4363d8",
              "arrival": "2021-04-04T05:20:21Z",
              "departure": "2021-04-04T00:08:48Z",
              "stroke-width": "4",
              "activities": "13",
              "tour_idx": "2",
              "shift_idx": "0",
              "vehicle_id": "van_31",
              "distance": "82388"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.0193976163864136,
                  43.2208691831495
                ],
                [
                  -2.0522868633270264,
                  43.18920854196271
                ],
                [
                  -2.3129653930664062,
                  43.08356616102995
                ],
                [
                  -2.3204004764556885,
                  43.08767986708493
                ],
                [
                  -2.3335808515548706,
                  43.0522243683301
                ],
                [
                  -2.197866439819336,
                  43.04522097666605
                ],
                [
                  -2.178138792514801,
                  43.05351989833822
                ],
                [
                  -2.0986568927764893,
                  43.10071457255362
                ],
                [
                  -2.0687663555145264,
                  43.132916315373976
                ],
                [
                  -2.0753753185272217,
                  43.136478669868765
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "activities": "14",
              "shift_idx": "0",
              "distance": "44455",
              "stroke-width": "4",
              "arrival": "2021-04-04T04:49:23Z",
              "departure": "2021-04-04T00:00:00Z",
              "vehicle_id": "van_5",
              "tour_idx": "3",
              "stroke": "#f58231"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -1.9763696193695068,
                  43.268167229908265
                ],
                [
                  -1.971316337585449,
                  43.2919508565733
                ],
                [
                  -1.970221996307373,
                  43.2923100781703
                ],
                [
                  -1.968891620635986,
                  43.29210704013706
                ],
                [
                  -1.9687950611114504,
                  43.29761225450028
                ],
                [
                  -1.981763541698456,
                  43.32182342281399
                ],
                [
                  -1.9707021117210384,
                  43.32544304670988
                ],
                [
                  -1.7929548025131226,
                  43.36731352927655
                ],
                [
                  -1.795116662979126,
                  43.337467235140274
                ],
                [
                  -1.7950844764709473,
                  43.33563927492161
                ],
                [
                  -1.9008064270019531,
                  43.3129773643906
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "distance": "175985",
              "stroke": "#911eb4",
              "arrival": "2021-04-04T05:55:33Z",
              "tour_idx": "4",
              "vehicle_id": "van_14",
              "shift_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4",
              "activities": "10"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -3.0194860696792603,
                  43.321856595548525
                ],
                [
                  -3.0343106389045715,
                  43.32519133860228
                ],
                [
                  -3.033750057220459,
                  43.32784983087052
                ],
                [
                  -3.0387067794799805,
                  43.33279870673904
                ],
                [
                  -3.0107903480529785,
                  43.32710156242691
                ],
                [
                  -2.9895687103271484,
                  43.325013776441615
                ],
                [
                  -2.98877477645874,
                  43.32481865258964
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "vehicle_id": "van_15",
              "distance": "189596",
              "departure": "2021-04-04T00:00:00Z",
              "activities": "9",
              "tour_idx": "5",
              "arrival": "2021-04-04T05:50:40Z",
              "stroke": "#46f0f0",
              "stroke-width": "4",
              "shift_idx": "0"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.5048935413360596,
                  43.035619170024056
                ],
                [
                  -2.524924278259277,
                  43.01822701869165
                ],
                [
                  -2.818167507648468,
                  42.95526823613394
                ],
                [
                  -3.003172874450683,
                  43.05429994707944
                ],
                [
                  -2.9642432928085327,
                  43.1445577905019
                ],
                [
                  -2.9583048820495605,
                  43.14667525164088
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "vehicle_id": "van_29",
              "arrival": "2021-04-04T05:53:16Z",
              "stroke": "#f032e6",
              "tour_idx": "6",
              "shift_idx": "0",
              "distance": "227950",
              "activities": "7",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -3.1295371055603027,
                  43.21127536296301
                ],
                [
                  -3.3609044551849365,
                  43.22297031756375
                ],
                [
                  -3.1985074281692505,
                  43.19154738519674
                ],
                [
                  -3.0479872226715083,
                  43.19661196426677
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T05:54:46Z",
              "activities": "11",
              "stroke": "#bcf60c",
              "stroke-width": "4",
              "vehicle_id": "van_11",
              "distance": "157280",
              "shift_idx": "0",
              "tour_idx": "7",
              "departure": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.169574499130249,
                  43.28038434917129
                ],
                [
                  -2.4338874220848083,
                  43.319655447773414
                ],
                [
                  -2.6715070009231567,
                  43.31875779369757
                ],
                [
                  -2.6798634231090546,
                  43.31554954769443
                ],
                [
                  -2.9005515575408936,
                  43.26060451044793
                ],
                [
                  -2.9068976640701294,
                  43.25628365090033
                ],
                [
                  -2.918345332145691,
                  43.2499541711442
                ],
                [
                  -2.887634038925171,
                  43.248946082161574
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T00:00:00Z",
              "vehicle_id": "van_22",
              "tour_idx": "8",
              "shift_idx": "0",
              "arrival": "2021-04-04T05:55:02Z",
              "stroke": "#008080",
              "activities": "11",
              "distance": "157552",
              "stroke-width": "4"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.314785271883011,
                  42.88816336893744
                ],
                [
                  -2.3907816410064697,
                  42.85064986048793
                ],
                [
                  -2.5144556164741516,
                  42.84289583862805
                ],
                [
                  -2.6669740676879883,
                  42.846095498441805
                ],
                [
                  -2.691945433616638,
                  42.854299400470616
                ],
                [
                  -2.6945579051971436,
                  42.855085911012395
                ],
                [
                  -2.6910924911499023,
                  42.85501512547384
                ],
                [
                  -2.416737377643585,
                  43.032931257554175
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "vehicle_id": "van_27",
              "arrival": "2021-04-04T05:47:03Z",
              "distance": "168353",
              "tour_idx": "9",
              "shift_idx": "0",
              "activities": "10",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4",
              "stroke": "#e6beff"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.886979579925537,
                  43.29347948595516
                ],
                [
                  -2.9836517572402954,
                  43.29660495465739
                ],
                [
                  -2.9935169219970703,
                  43.29668694480331
                ],
                [
                  -2.9970279335975643,
                  43.2961871936258
                ],
                [
                  -2.990546375513077,
                  43.29885671527511
                ],
                [
                  -2.983193099498749,
                  43.30023584087372
                ],
                [
                  -2.9712170362472534,
                  43.30474876922975
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "shift_idx": "0",
              "vehicle_id": "van_18",
              "tour_idx": "10",
              "arrival": "2021-04-04T05:51:43Z",
              "stroke": "#9a6324",
              "activities": "11",
              "distance": "154536",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.38527774810791,
                  43.25030582616632
                ],
                [
                  -2.730453908443451,
                  43.21840050201569
                ],
                [
                  -2.8444531559944153,
                  43.23434938965365
                ],
                [
                  -2.8842008113861084,
                  43.23764496627252
                ],
                [
                  -2.8981858491897583,
                  43.2377387600931
                ],
                [
                  -2.888824939727783,
                  43.2351515609431
                ],
                [
                  -2.817971706390381,
                  43.22331626484531
                ],
                [
                  -2.6306167244911194,
                  43.17079582239404
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "activities": "8",
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "11",
              "vehicle_id": "van_26",
              "arrival": "2021-04-04T05:44:08Z",
              "stroke-width": "4",
              "distance": "201715",
              "shift_idx": "0",
              "stroke": "#800000"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.350669205188751,
                  42.669689671699366
                ],
                [
                  -2.586008906364441,
                  42.5537382443097
                ],
                [
                  -2.61974036693573,
                  42.51637594928051
                ],
                [
                  -2.639443874359131,
                  42.576458145137146
                ],
                [
                  -2.188210487365722,
                  43.03416837850006
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "shift_idx": "0",
              "stroke": "#808000",
              "activities": "7",
              "vehicle_id": "van_20",
              "stroke-width": "4",
              "arrival": "2021-04-04T05:51:10Z",
              "distance": "226058",
              "tour_idx": "12",
              "departure": "2021-04-04T00:00:00Z"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.6434001326560974,
                  42.97823188094157
                ],
                [
                  -3.0469465255737305,
                  42.810606780919414
                ],
                [
                  -2.8790201246738434,
                  42.660282759382454
                ],
                [
                  -2.809058725833893,
                  42.81691287206185
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "13",
              "departure": "2021-04-04T00:00:00Z",
              "activities": "10",
              "arrival": "2021-04-04T05:59:10Z",
              "vehicle_id": "van_28",
              "shift_idx": "0",
              "stroke-width": "4",
              "distance": "179243",
              "stroke": "#000075"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.5064867734909058,
                  43.359845043819114
                ],
                [
                  -2.7228444814682007,
                  43.42153093169636
                ],
                [
                  -2.844032049179077,
                  43.35712262048268
                ],
                [
                  -2.9913926124572754,
                  43.28667161623122
                ],
                [
                  -2.9941874742507935,
                  43.283049683027066
                ],
                [
                  -2.9854488372802734,
                  43.279646236074186
                ],
                [
                  -2.988581657409668,
                  43.244901836544656
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "arrival": "2021-04-04T05:10:53Z",
              "shift_idx": "0",
              "vehicle_id": "van_9",
              "distance": "117796",
              "activities": "11",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4",
              "tour_idx": "14",
              "stroke": "#808080"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.4745523929595947,
                  43.183572265576075
                ],
                [
                  -2.4825990200042725,
                  43.18231273503781
                ],
                [
                  -2.6093655824661255,
                  43.16631600168613
                ],
                [
                  -2.4831300973892207,
                  43.06329918878738
                ],
                [
                  -2.482534646987915,
                  43.06306011451481
                ],
                [
                  -2.4184405803680415,
                  43.11946753577654
                ],
                [
                  -2.3148322105407715,
                  43.17593645192926
                ],
                [
                  -2.2681617736816406,
                  43.18150693479038
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "shift_idx": "0",
              "distance": "178237",
              "stroke": "#e6194b",
              "vehicle_id": "van_6",
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "15",
              "stroke-width": "4",
              "activities": "10",
              "arrival": "2021-04-04T05:58:02Z"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.254589796066284,
                  43.29049833022032
                ],
                [
                  -2.959989309310913,
                  43.3751242302757
                ],
                [
                  -3.011428713798523,
                  43.35163059825675
                ],
                [
                  -3.017098903656006,
                  43.36321865110707
                ],
                [
                  -2.9868221282958984,
                  43.37825914636071
                ],
                [
                  -2.943563461303711,
                  43.41719033700026
                ],
                [
                  -2.934395670890808,
                  43.41386454516395
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "departure": "2021-04-04T00:00:00Z",
              "tour_idx": "16",
              "distance": "188237",
              "stroke-width": "4",
              "stroke": "#3cb44b",
              "activities": "9",
              "arrival": "2021-04-04T05:49:10Z",
              "shift_idx": "0",
              "vehicle_id": "van_2"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.9987525939941406,
                  43.30732520439184
                ],
                [
                  -3.00675630569458,
                  43.30589646747127
                ],
                [
                  -3.0349838733673096,
                  43.30503764769848
                ],
                [
                  -3.0509912967681885,
                  43.30891004813708
                ],
                [
                  -3.1183898448944087,
                  43.32200099429961
                ],
                [
                  -3.075098991394043,
                  43.3175283763791
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "tour_idx": "17",
              "arrival": "2021-04-04T05:50:38Z",
              "vehicle_id": "van_8",
              "stroke": "#4363d8",
              "activities": "10",
              "shift_idx": "0",
              "departure": "2021-04-04T00:00:00Z",
              "stroke-width": "4",
              "distance": "171553"
            },
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [
                  -1.961442,
                  43.258036
                ],
                [
                  -2.4984508752822876,
                  43.26663991754853
                ],
                [
                  -2.947305142879486,
                  43.26927460505685
                ],
                [
                  -2.9723596572875977,
                  43.27542436951664
                ],
                [
                  -2.9839360713958736,
                  43.28221982969262
                ],
                [
                  -2.988608479499817,
                  43.29256485089735
                ],
                [
                  -2.9811787605285645,
                  43.316974154723496
                ],
                [
                  -2.8432327508926387,
                  43.3567286780499
                ],
                [
                  -1.961442,
                  43.258036
                ]
              ]
            }
          }
        ]
      };
      L.geoJSON(SomeGeojsonFeature).addTo(myMap);

      var addedGeoJSON = L.geoJSON(geoJSON, {
        style: function(feature) {
          return {
            color: '#000',
            weight: 0.5
          }
        },
        pointToLayer: function(geoJsonPoint, latlng) {
          return L.marker(latlng, {
            icon: blackIcon
          });
        },
        onEachFeature: function(feature, layer) {
          if(feature.geometry.type==='Point') {
            layer.bindPopup(feature.geometry.coordinates.join(','));
            }
        }
      }).addTo.map(myMap);

      myMap.fitBounds(SomeGeojsonFeature.getBounds(),{
      padding: [20,20]})