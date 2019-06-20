# GIS Database and ArcGIS Server REST API

The database is stored in PostgreSQL with PostGIS. Interacting with the database occurs via ArcGIS Server REST API calls.

## ArcGIS Server REST API

The BlueCats SDK sends a POST request to the ArcGIS Server using the URL https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC_readings/FeatureServer/1/addFeatures

The format is a JSON object containing an array of readings using the format:

```
[
  {
    "attributes" : {
      "serialnumber" : "bluetooth beacon serial number",
      "deviceid": "IMEI identifier for the phone",
      "userid": "User ID",
      "signalstrength": -30, // signal strength value from the BlueCats SDK
      "accuracy": 2, // accuracy value from the BlueCats SDK
      "reading_timestamp": "YYYY-MM-DD HH:MM:SS",
    }
  }
]
```

## Tables and Featureclasses

The following tables and featureclasses should be created using ArcCatalog, so that ArcGIS can be used to manage the features during creation and editing. For the proof of concept, the schema `vicinity` was used to store these tables and featureclasses.

These layers and tables are accessible via ArcGIS Server using the endpoint https://vicinitygis.ewn.com.au:6443/arcgis/rest/services with various services created for use in the Vicinity web map.


### Table: vicinity.readings
```
    deviceid character varying(255)                 // the IMEI of the phone
    userid character varying(255)                   // the ID of the user currently logged into the phone
    serial_number character varying                 // the serial number of the nearest beacon
    signal_strength float                           // the signal strength value from the BlueCats SDK
    accuracy float                                  // the accuracy value from the BlueCats SDK
    reading_timestamp timestamp without time zone
```

### Featureclass: vicinity.beacons
```
    serial_number character varying // the device's serial number
    floor integer                   // the floor on which the beacon is located
    alias character varying(255)    // a description of the beacon's location
    siteid character varying(255)   // the identifier of the site where the beacon is located, eg Oakleigh
    shape geometry                  // point features
```

### Featureclass: vicinity.structures
```
    id character varying(255)       // any internal IDs used for this structure (eg store number)
    name character varying(255)     // the name to display on the map (eg Woolworths, Factory X)
    floor integer                   // the floor on which the structure is located
    siteid character varying(255)   // the identifier of the site where the structure is located, eg Oakleigh
    shape geometry                  // polygon features

```
### Featureclass: vicinity.zones
```
    zoneid character varying(255)   // any internal IDs used for this zone (eg zone number)
    siteid character varying(255)   // the identifier of the site where the zone is located, eg Oakleigh
    description character varying(255)  // the description to appear on the map (eg Food Court)
    floor integer,                  // the floor on which the zone is located
    shape geometry                  // polygon features
```
### Featureclass: vicinity.sites
```
    name character varying(255)     // the name of this site (eg Oakleigh)
    address character varying(255)  // street address
    suburb character varying(255)   // suburb
    state character varying(255)    // state
    siteid character varying(255)   // the identifier of the site, eg Oakleigh
    shape geometry                  // polygon features
```

## Views

The following views simplify the readings from the BlueCats SDK, in order to show the user's position on the map and to filter out the latest readings.

### View: vicinity.positions

This view joins the readings to the beacon locations based on the common beacon serial number, allowing the users' positions to be viewed on the map:

```
CREATE OR REPLACE VIEW vicinity.positions AS
 SELECT r.serialnumber,
    r.reading_timestamp,
    r.deviceid,
    r.userid,
    r.signalstrength,
    r.accuracy,
    b.shape,
    b.floor,
    b.latitude,
    b.longitude,
    row_number() OVER (ORDER BY r.reading_timestamp)::integer AS row_number
   FROM vicinity.readings r
     JOIN vicinity.beacons b USING (serialnumber);

ALTER VIEW vicinity.positions OWNER TO vicinity;
```

### View: vicinity.latestreadings

This view shows the latest reading for each unique device ID:

```
CREATE OR REPLACE VIEW vicinity.latestreadings AS
select r.serialnumber, r.reading_timestamp, r.deviceid, r.userid, r.signalstrength, r.accuracy
from vicinity.readings r
inner join (
    select deviceid, max(reading_timestamp) as MaxDate
    from vicinity.readings
    group by deviceid
) tm on r.deviceid = tm.deviceid and r.reading_timestamp = tm.MaxDate;

ALTER VIEW vicinity.latestreadings OWNER TO vicinity;
```

### View: vicinity.latestpositions

This view shows the latest location for each unique device ID, and is used on the web map to show each user's current position:

```
CREATE OR REPLACE VIEW vicinity.latestpositions AS
     SELECT r.serialnumber,
    r.reading_timestamp,
    r.deviceid,
    r.userid,
    r.signalstrength,
    r.accuracy,
    b.shape,
    b.alias,
    b.floor,
    row_number() OVER (ORDER BY r.reading_timestamp)::integer AS row_number
   FROM vicinity.latestreadings r
     JOIN vicinity.beacons b USING (serialnumber);

ALTER VIEW vicinity.latestpositions OWNER TO vicinity;
```

The following high-level image summarises the relationship between the PostgreSQL tables and views:

![tables and views](https://i.imgur.com/kqCZ2Af.png "High level overview of tables and views")

The `position` views are exposed via ArcGIS Server, but are not directly editable. Instead, to add worker position data, write a record to the POC_readings table via https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC_readings/FeatureServer/1
unique device ID:

```
CREATE OR REPLACE VIEW vicinity.latestreadings AS
select r.serialnumber, r.reading_timestamp, r.deviceid, r.userid, r.signalstrength, r.accuracy
from vicinity.readings r
inner join (
    select deviceid, max(reading_timestamp) as MaxDate
    from vicinity.readings
    group by deviceid
) tm on r.deviceid = tm.deviceid and r.reading_timestamp = tm.MaxDate;

ALTER VIEW vicinity.latestreadings OWNER TO vicinity;
```
