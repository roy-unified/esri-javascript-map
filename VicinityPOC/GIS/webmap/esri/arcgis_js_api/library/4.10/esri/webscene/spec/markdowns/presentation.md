# presentation

A presentation consists of multiple slides, where each slide is a specific view into the web scene.

### Properties

| Property | Details
| --- | ---
| [slides](slide.md) | Array of slide objects.


### Example

```json
{
  "presentation": {
    "slides": [
      {
        "id": "slide_1",
        "title": {
          "text": "Slide 1"
        },
        "thumbnail": {
          "url": "data:image/jpeg;base64,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"
        },
        "description": {
          "text": "Slide description"
        },
        "baseMap": {
          "id": "basemap_3",
          "title": "Light Gray Canvas",
          "baseMapLayers": [
            {
              "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer",
              "layerType": "ArcGISTiledMapServiceLayer",
              "isReference": false,
              "title": "World Light Gray Canvas Base",
              "id": "World_Light_Gray_Base_1486"
            },
            {
              "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",
              "layerType": "ArcGISTiledMapServiceLayer",
              "isReference": true,
              "title": "World Light Gray Reference",
              "id": "World_Light_Gray_Reference_1486"
            }
          ]
        },
        "viewpoint": {
          "scale": 294288.68889219884,
          "targetGeometry": {
            "xmin": -6699655.673599025,
            "ymin": 2095589.1288518738,
            "xmax": -6233038.83376736,
            "ymax": 2562322.7919495814,
            "spatialReference": {
              "wkid": 102100
            }
          },
          "camera": {
            "position": {
              "x": -6409183.940944876,
              "y": 1696072.3376810949,
              "z": 140179.151083461,
              "spatialReference": {
                "wkid": 102100
              }
            },
            "heading": -11.142703441074717,
            "tilt": 74.27611784201275
          }
        },
        "visibleLayers": [
          {
            "id": "layerSphere"
          }
        ],
        "environment": {
          "lighting": {
            "datetime": 1426420800000,
            "directShadows": true
          }
        }
      }
    ]
  }
}
```

