require([
	"esri/map",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/graphic",
	"esri/geometry/Point",
    "esri/SpatialReference",
    "esri/layers/GraphicsLayer",
    "dojo/dom-attr",
], function(
	Map, SimpleMarkerSymbol, Graphic, Point, SpatialReference, GraphicsLayer, domAttr
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

    treePath = "M 17 18 L 17 22 L 15 22 L 15 18 Z L 10 19 L 15 15 V 15 L 15 15 L 11 16 L 15 13 V 13 L 13 13 L 16 11 L 19 13 L 17 13 V 13 L 21 16 L 17 15 V 15 L 22 19 L 17 18"
    treePoints = [
		new Point(-734419.3446174471, 7053845.204846129, new SpatialReference({"wkid": 102100})),
		new Point(-734493.3929886003, 7053902.532617344, new SpatialReference({"wkid": 102100})),
		new Point(-734944.8491869216, 7053369.862076468, new SpatialReference({"wkid": 102100})),
		new Point(-734803.9184160171, 7053238.485934099, new SpatialReference({"wkid": 102100})),
		new Point(-734608.0485310311, 7053221.765334161, new SpatialReference({"wkid": 102100})),
		new Point(-734409.7899889112, 7053052.170677649, new SpatialReference({"wkid": 102100})),
		new Point(-734008.4955904034, 7053236.097276965, new SpatialReference({"wkid": 102100})),
		new Point(-734748.9793019356, 7053455.853733291, new SpatialReference({"wkid": 102100})),
		new Point(-734909.0193299119, 7053747.269903636, new SpatialReference({"wkid": 102100})),
		new Point(-734947.2378440555, 7054002.856216971, new SpatialReference({"wkid": 102100})),
		new Point(-734784.8091589452, 7054048.240702516, new SpatialReference({"wkid": 102100})),
		new Point(-734775.2545304094, 7053945.528445755, new SpatialReference({"wkid": 102100})),
		new Point(-734954.4038154575, 7053912.08724588, new SpatialReference({"wkid": 102100})),
		new Point(-734500.5589600023, 7054038.68607398, new SpatialReference({"wkid": 102100})),
		new Point(-734493.3929886003, 7054315.770301522, new SpatialReference({"wkid": 102100})),
		new Point(-734378.7374461696, 7054160.507587813, new SpatialReference({"wkid": 102100})),
		new Point(-734464.7291029927, 7054444.757786756, new SpatialReference({"wkid": 102100})),
		new Point(-734137.4830756382, 7054535.526757847, new SpatialReference({"wkid": 102100})),
		new Point(-733795.9051054798, 7054485.364958034, new SpatialReference({"wkid": 102100})),
		new Point(-733740.9659913983, 7054196.337444822, new SpatialReference({"wkid": 102100})),
		new Point(-733404.165335508, 7054055.4066739185, new SpatialReference({"wkid": 102100})),
		new Point(-734175.7015897817, 7054769.6151569765, new SpatialReference({"wkid": 102100})),
		new Point(-734175.7015897817, 7054920.100556417, new SpatialReference({"wkid": 102100})),
		new Point(-733929.6699049823, 7054965.485041963, new SpatialReference({"wkid": 102100})),
		new Point(-734501.7532885612, 7054804.250685421, new SpatialReference({"wkid": 102100})),
		new Point(-734293.9401179284, 7054697.955442971, new SpatialReference({"wkid": 102100})),
		new Point(-734330.964303501, 7054621.518414692, new SpatialReference({"wkid": 102100})),
		new Point(-734673.7366021883, 7054896.213985069, new SpatialReference({"wkid": 102100})),
		new Point(-734012.0785760196, 7053840.427531909, new SpatialReference({"wkid": 102100})),
		new Point(-735058.3104007005, 7054124.677730852, new SpatialReference({"wkid": 102100})),
		new Point(-735204.018485873, 7053286.259076827, new SpatialReference({"wkid": 102100})),
		new Point(-734969.9300867434, 7053133.385020253, new SpatialReference({"wkid": 102100}))
    ];

    waterPath = "M 17 13 L 15 16 C 14 18 15 19 17 19 C 19 19 20 18 19 16 L 17 13";
    waterPoints = [
		new Point(-734617.6031595279, 7053958.068895763, new SpatialReference({"wkid" :102100})),
		new Point(-734726.8842234194, 7053932.390831569, new SpatialReference({"wkid": 102100})),
		new Point(-734923.9484369941, 7053818.332453409, new SpatialReference({"wkid": 102100})),
		new Point(-735076.8224935854, 7053790.265732083, new SpatialReference({"wkid": 102100})),
		new Point(-735272.692378593, 7053792.654389217, new SpatialReference({"wkid": 102100})),
		new Point(-735402.2770281256, 7053801.61185347, new SpatialReference({"wkid": 102100})),
		new Point(-735542.0134704786, 7053823.109767678, new SpatialReference({"wkid": 102100})),
		new Point(-735685.332898533, 7053866.702760378, new SpatialReference({"wkid": 102100})),
		new Point(-734513.0289771894, 7053966.292464767, new SpatialReference({"wkid": 102100})),
		new Point(-734384.9372384227, 7054005.108143181, new SpatialReference({"wkid": 102100})),
		new Point(-734439.2791883055, 7053911.502641809, new SpatialReference({"wkid": 102100})),
		new Point(-734309.0973744894, 7053884.033084766, new SpatialReference({"wkid": 102100})),
		new Point(-734221.3142248061, 7053907.919656108, new SpatialReference({"wkid": 102100})),
		new Point(-734153.8346607639, 7053840.440092065, new SpatialReference({"wkid": 102100})),
		new Point(-734038.5819540368, 7053847.606063468, new SpatialReference({"wkid": 102100})),
		new Point(-733965.1307471589, 7053913.29413466, new SpatialReference({"wkid": 102100})),
		new Point(-733888.6937188633, 7053988.536834389, new SpatialReference({"wkid": 102100})),
		new Point(-733831.3659476415, 7054076.319984073, new SpatialReference({"wkid": 102100})),
		new Point(-733757.9147407636, 7054168.880448024, new SpatialReference({"wkid": 102100}))
    ];

    grassPath = "M 12 19 L 25 19 L 23 13 L 22 16 L 21 10 L 20 16 L 19 13 L 18 16 L 17 12 L 16 16 L 15 11 L 14 16 L 13 13 L 12 19";
    grassPoints = [
		new Point(-735407.0543423414, 7054492.530929439, new SpatialReference({"wkid": 102100})),
		new Point(-735516.9325705043, 7054182.005502022, new SpatialReference({"wkid": 102100})),
		new Point(-735294.7874570446, 7054148.564302146, new SpatialReference({"wkid": 102100})),
		new Point(-735290.0101427766, 7053666.055561083, new SpatialReference({"wkid": 102100})),
		new Point(-735072.6423435849, 7053472.574333231, new SpatialReference({"wkid": 102100})),
		new Point(-734943.6548583503, 7053248.040562637, new SpatialReference({"wkid": 102100})),
		new Point(-734709.5664592208, 7053355.5301336665, new SpatialReference({"wkid": 102100})),
		new Point(-734800.3354303119, 7053114.2757631345, new SpatialReference({"wkid": 102100})),
		new Point(-734568.6356883163, 7053033.061420579, new SpatialReference({"wkid": 102100})),
		new Point(-734394.2637175361, 7053126.219048805, new SpatialReference({"wkid": 102100})),
		new Point(-734167.3412898085, 7053396.137304944, new SpatialReference({"wkid": 102100})),
		new Point(-734344.1019177226, 7053563.343304322, new SpatialReference({"wkid": 102100})),
		new Point(-733923.6982621431, 7053386.582676408, new SpatialReference({"wkid": 102100})),
		new Point(-733586.8976062527, 7053513.1815045085, new SpatialReference({"wkid": 102100})),
		new Point(-733820.9860053821, 7054361.15478707, new SpatialReference({"wkid": 102100})),
		new Point(-733758.8809198989, 7054676.457528754, new SpatialReference({"wkid": 102100})),
		new Point(-733971.4714048225, 7054748.117242774, new SpatialReference({"wkid": 102100})),
		new Point(-733809.0427197124, 7054884.270699411, new SpatialReference({"wkid": 102100})),
		new Point(-734055.0744045117, 7054943.9871277595, new SpatialReference({"wkid": 102100})),
		new Point(-734516.0852313688, 7054912.934585018, new SpatialReference({"wkid": 102100})),
		new Point(-734635.5180880675, 7054996.537584707, new SpatialReference({"wkid": 102100})),
		new Point(-735120.4154862644, 7054910.545927884, new SpatialReference({"wkid": 102100})),
		new Point(-735380.7791138677, 7054793.50172832, new SpatialReference({"wkid": 102100})),
		new Point(-735227.9050572932, 7054619.129757539, new SpatialReference({"wkid": 102100})),
		new Point(-734673.7366022111, 7054607.186471869, new SpatialReference({"wkid": 102100})),
		new Point(-734415.7616317419, 7054303.827015854, new SpatialReference({"wkid": 102100})),
		new Point(-733653.7800060039, 7054399.373301214, new SpatialReference({"wkid": 102100}))
    ];

	// Make a new map in our div container
	let map = new Map("map-container", {
	    basemap: "hybrid",
	    center: [-6.5965, 53.3819],
	    zoom: 16
	});

	var flowerLayer = new GraphicsLayer({ id: "flowers" });
    map.addLayer(flowerLayer);
    var treeLayer = new GraphicsLayer({ id: "trees" });
    map.addLayer(treeLayer);
    var waterLayer = new GraphicsLayer({ id: "water" });
    map.addLayer(waterLayer);
    var grassLayer = new GraphicsLayer({ id: "grass" });
    map.addLayer(grassLayer);

    map.on("load", function(e) {
		flowerPoints.forEach(function(p) {
			var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
			markerSymbol.setPath(flowerPath);
			markerSymbol.setColor(new dojo.Color("#fc60b1"));
			markerSymbol.setOutline(null);
			var gr = new Graphic(p, markerSymbol);
			flowerLayer.add(gr);
		});
		treePoints.forEach(function(p) {
			var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
			markerSymbol.setPath(treePath);
			markerSymbol.setColor(new dojo.Color("#00a606"));
			markerSymbol.setOutline(null);
			var gr = new Graphic(p, markerSymbol);
			treeLayer.add(gr);
		});
		waterPoints.forEach(function(p) {
			var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
			markerSymbol.setPath(waterPath);
			markerSymbol.setColor(new dojo.Color("#0060fa"));
			markerSymbol.setOutline(null);
			var gr = new Graphic(p, markerSymbol);
			waterLayer.add(gr);
		});
		grassPoints.forEach(function(p) {
			var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
			markerSymbol.setPath(grassPath);
			markerSymbol.setColor(new dojo.Color("#18a300"));
			markerSymbol.setOutline(null);
			var gr = new Graphic(p, markerSymbol);
			grassLayer.add(gr);
		});


		function updateLayers() {
			if (document.getElementById("flowerLayer").checked) {
				flowerLayer.show();
			} else {
				flowerLayer.hide();
			}

			if (document.getElementById("treeLayer").checked) {
				treeLayer.show();
			} else {
				treeLayer.hide();
			}

			if (document.getElementById("waterLayer").checked) {
				waterLayer.show();
			} else {
				waterLayer.hide();
			}

			if (document.getElementById("grassLayer").checked) {
				grassLayer.show();
			} else {
				grassLayer.hide();
			}
		}

		document.getElementById("controls").addEventListener("click", updateLayers);

    });
});