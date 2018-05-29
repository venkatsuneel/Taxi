const app = express();

var privateKey = fs.readFileSync(__dirname + '/config/certs/server_key.pem', 'utf8');
var certificate = fs.readFileSync(__dirname + '/config/certs/server_cert.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(7777);


const API ={
GET_CAB_LOCATION:'/cab/location',
GET_CUSTOMER_LOCATION:'/cust/location',
GET_FARE:'/fare'
}

var cabLocation = {
    car1: {
        color:"red", 
        location:{
            lattitude:'12.851899',
           longitude:'77.659983'
        }
    },
     car2: {
        color:"red", 
        location:{
            lattitude:'11.851899',
           longitude:'89.6566983'
        }
    },
     car3: {
        color:"pink", 
        location:{
            lattitude:'12.850899',
           longitude:'45.6809093'
        }
    }
}


function getCabLocation(req,res){
    if(progress == "false"){ return; }
	navigator.geolocation.getCurrentPosition(function(position) {
			var latlng = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			
			getCustomerLocation(latlng.lat, latlng.lng);
	}, 
	function() {
	  alert("Unable to get current location");
	});
}

function assignCabToCustomer(req,res){

}

function getCustomerLocation(req,res){
    if(status == "false"){
		start = {lat:lat,lng:lng};
		status = "true";
		getGeoLocationName(start, "source_placeholder", "Pickup at: ");
	}
	
	stop = {lat:lat,lng:lng};
	
	waypts.push({
		location: lat + "," + lng,
		stopover: false
	});
	
	setTimeout("getCurrentLocation()", 5000);
}

function calculateFare( req,res){

}

function carColor(){

}

app.post(API.GET_CAB_LOCATION,getCabLocation);
app.post(API.GET_CUSTOMER_LOCATION,getCustomerLocation)
app.get(API.GET_FARE,calculateFare)