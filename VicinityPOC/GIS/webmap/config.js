config = {
  basemap: 'gray-vector',
   zoom: 19,
   center: [145.090421, -37.900921],
   levelQuery: {
        levels: [0, -1],
        defaultLevel: '-1',
        field: 'floor',
        queryLayers: ['zones', 'structures', 'beacons', 'workers', 'historical']
   },

  // An array of layer definitions
  // See further options parameters at https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#properties-summary
  layers: {
    zones: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/7',
      options: {
        title: 'Zones',
        outFields: ['siteid', 'zoneid', 'description']
      }
    },
    structures: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/6',
      options: {
        title: 'structures',
        opacity: 0.5,
        minScale: 500000
      }
    },
    sites: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/4',
      options: {
        title: 'Sites',
        opacity: 0.5,
        minScale: 250000
      }
    },
    beacons: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/2',
      options: {
        title: 'Beacons',
        opacity: 0.5,
        minScale: 250000
      }
    },
    workers: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/1',
      options: {
        title: 'Latest worker positions',
        outFields: ['serialnumber', 'deviceid', 'userid', 'signalstrength', 'reading_timestamp', 'floor'],
        minScale: 250000,
        refreshInterval: 1,
        popupEnabled: true
      }
    },
    historical: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/8',
      options: {
        title: 'Historical worker positions',
        outFields: ['serialnumber', 'deviceid', 'userid', 'signalstrength', 'reading_timestamp', 'floor'],
        minScale: 250000,
        popupEnabled: true,
        visible: false
      }
    },
    tasks: {
      url: 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC/FeatureServer/9',
      options: {
        title: 'Tasks',
        outFields: ['category', 'description', 'beaconid', 'timeinterval', 'userid', 'status'],
        minScale: 250000,
        popupEnabled: true,
        visible: false
      }
    }
  }  
}
