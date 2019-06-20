function submitworkerposition()
{
	var data = document.getElementById('jsondata').value;
	var http = new XMLHttpRequest();
	var url = 'https://vicinitygis.ewn.com.au:6443/arcgis/rest/services/POC_readings/FeatureServer/1/addFeatures';
	var params = 'features='+data+'&f=pjson';
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() {//Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	        alert(http.responseText);
	    }
	}
	http.send(params);
}