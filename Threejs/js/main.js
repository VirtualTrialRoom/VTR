init();
animate();
var scene;var camera;var control;var renderer;var loader;
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer({antialias:true});
	control = new THREE.OrbitControls(camera, renderer.domElement);
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		
	//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	//var cube = new THREE.Mesh( geometry, material );
		//scene.add( cube );
		camera.position.z = 3;
	 var loader = new THREE.JSONLoader();
    loader.load( "sample.js", function(geometry){
      var material = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });
	var render = function () {
		requestAnimationFrame( render );
		//cube.rotation.x += 0.1;
		//cube.rotation.y += 0.1;
		renderer.render(scene, camera);
	};
	window.addEventListener('resize', onWindowResize, false );
	render();
}
		
		function animate() {
			requestAnimationFrame( animate );
			renderer.render(scene, camera);
			controls.update();
		}
		
		function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;

				renderer.setSize( window.innerWidth, window.innerHeight );

				controls.handleResize();
				camera.updateProjectionMatrix();
				render();

		}



	
	
	