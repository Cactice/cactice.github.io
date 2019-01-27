import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols'
export default canvas => {
  const screenDimensions = {width: 1920, height:1080 }
  const scene = buildScene(); 
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions); 
  const sceneSubjects = createSceneSubjects(scene);
  function buildScene() { 
    const scene = new THREE.Scene();
    return scene
  }
  function buildRender({ width, height }) {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( 1920, 1080 );
    renderer.setClearColor(new THREE.Color('white'));//背景色の設定
    document.body.appendChild( renderer.domElement );
    return renderer
  }
  function buildCamera({ width, height }) {
    camera = new THREE.PerspectiveCamera( 75, 1920/1080, 1, 10000 );
    camera.position.z = 1000;
    trackball = new TrackballControls( camera );
    trackball.rotateSpeed = 5.0;
    trackball.zoomSpeed = 0.5;
    trackball.panSpeed = 2.0;
  }
  function createSceneSubjects(scene) { 
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
    directionalLight.position.set(0,0,3);
    scene.add( directionalLight );
    var texture = THREE.ImageUtils.loadTexture('UVface2.png');
    loader = new THREE.JSONLoader();
    loader.load( './me4.json', function ( geometry, materials ) {
        json = new THREE.Mesh( geometry, material);
        json.position.set( 0,100,0);
        json.scale.set( 100, 100, 100 );
        scene.add( json );
    } );
  }
    
  function update() {
    material.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    trackball.update();
  }
  function onWindowResize() {
  }
  return {
    update,
    onWindowResize
  }
}
