require([
	"esri/map",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/graphic",
], function(
	Map, SimpleMarkerSymbol, Graphic
	){
	let flowerPath = "M128 0Q186.778525 47.098301 158.564833 85.931116Q186.778525 47.098301 249.735234 88.445825Q223.105652 158.901699 177.454939 144.068884Q223.105652 158.901699 203.236512 231.554175Q128 228 128 180Q128 228 52.763488 231.554175Q32.894348 158.901699 78.545061 144.068884Q32.894348 158.901699 6.264766 88.445825Q69.221475 47.098301 97.435167 85.931116Q69.221475 47.098301 128 0Q186.778525 47.098301 158.564833 85.931116z";
	// Make a new map in our div container
	let map = new Map("map-container", {
	    basemap: "hybrid",
	    center: [-6.5965, 53.3819],
	    zoom: 16
	});

	// Onclick to plot our points
	map.on("click", function(e) {
        let markerSymbol = new SimpleMarkerSymbol();
        markerSymbol.setPath(flowerPath);
        markerSymbol.setColor(new dojo.Color("#fc60b1"));
        markerSymbol.setOutline(null);
        let gr = new Graphic(e.mapPoint, markerSymbol);
        map.graphics.add(gr);

        console.log(e.mapPoint);

    });
});