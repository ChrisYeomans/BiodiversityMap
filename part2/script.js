require([
	"esri/map",
], function(
	Map
	){
	// Make a new map in our div container
	let map = new Map("map-container", {
	    basemap: "hybrid",
	    center: [-6.5965, 53.3819],
	    zoom: 16
	});
});