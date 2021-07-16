require([
	"esri/map",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/graphic",
	"esri/geometry/Point",
    "esri/SpatialReference",
    "esri/layers/GraphicsLayer",
], function(
	Map, SimpleMarkerSymbol, Graphic, Point, SpatialReference, GraphicsLayer
	){
	let flowerPath = "M128 0Q186.778525 47.098301 158.564833 85.931116Q186.778525 47.098301 249.735234 88.445825Q223.105652 158.901699 177.454939 144.068884Q223.105652 158.901699 203.236512 231.554175Q128 228 128 180Q128 228 52.763488 231.554175Q32.894348 158.901699 78.545061 144.068884Q32.894348 158.901699 6.264766 88.445825Q69.221475 47.098301 97.435167 85.931116Q69.221475 47.098301 128 0Q186.778525 47.098301 158.564833 85.931116z";
	flowerPoints = [
		new Point(-734881.5497728498, 7054058.989659605, new SpatialReference({"wkid": 102100})), 
		new Point(-735022.4805437387, 7054055.4066739045, new SpatialReference({"wkid": 102100})), 
		new Point(-735207.6014716012, 7054057.795331038, new SpatialReference({"wkid": 102100})), 
		new Point(-735180.1319145635, 7054251.276558869, new SpatialReference({"wkid": 102100})), 
		new Point(-735205.2128144675, 7054437.591815298, new SpatialReference({"wkid": 102100})), 
		new Point(-735202.8241573338, 7054561.801986251, new SpatialReference({"wkid": 102100})), 
		new Point(-735036.8124865409, 7054246.4992446015, new SpatialReference({"wkid": 102100})), 
		new Point(-735014.1202437707, 7054393.4016583245, new SpatialReference({"wkid": 102100})), 
		new Point(-734862.4405157801, 7054198.7261019265, new SpatialReference({"wkid": 102100})), 
		new Point(-734881.5497728498, 7053901.33828878, new SpatialReference({"wkid": 102100})), 
		new Point(-734838.553944443, 7053719.8003466185, new SpatialReference({"wkid": 102100})), 
		new Point(-734710.7607877895, 7053918.058888716, new SpatialReference({"wkid": 102100})), 
		new Point(-734619.9918167085, 7053766.3791607255, new SpatialReference({"wkid": 102100})), 
		new Point(-735060.699057878, 7053743.686917955, new SpatialReference({"wkid": 102100})), 
		new Point(-734602.0768882057, 7053624.25406127, new SpatialReference({"wkid": 102100})), 
		new Point(-734763.3112447311, 7053621.865404136, new SpatialReference({"wkid": 102100})), 
		new Point(-735411.8316565333, 7053463.019704744, new SpatialReference({"wkid": 102100})), 
		new Point(-735390.33374233, 7053318.505948154, new SpatialReference({"wkid": 102100})), 
		new Point(-734385.9034176049, 7053212.210705705, new SpatialReference({"wkid": 102100})), 
		new Point(-734557.886731232, 7053216.988019972, new SpatialReference({"wkid": 102100})), 
		new Point(-734556.6924026652, 7053065.308291981, new SpatialReference({"wkid": 102100})), 
		new Point(-734161.3696470362, 7053686.359146746, new SpatialReference({"wkid": 102100}))
    ];

	// Make a new map in our div container
	let map = new Map("map-container", {
	    basemap: "hybrid",
	    center: [-6.5965, 53.3819],
	    zoom: 16
	});

	var flowerLayer = new GraphicsLayer({ id: "flowers" });
    map.addLayer(flowerLayer);

    map.on("load", function(e) {
		flowerPoints.forEach(function(p) {
			var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
			markerSymbol.setPath(flowerPath);
			markerSymbol.setColor(new dojo.Color("#fc60b1"));
			markerSymbol.setOutline(null);
			var gr = new Graphic(p, markerSymbol);
			flowerLayer.add(gr);
		});
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