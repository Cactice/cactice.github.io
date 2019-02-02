import React from 'react'

import * as THREE from 'three'
import Renderer from './Renderer'

import { Button, Form, InputGroup, Label } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faForward from '@fortawesome/fontawesome-free-solid/faForward'
import faBackward from '@fortawesome/fontawesome-free-solid/faBackward'
import {vertShader} from './threejs/vertShader.js'
import {fragShader} from './threejs/fragShader.js'

/**
 * Implements a 3D scene
 *
 * Functions of this class are to be passed as callbacks to Renderer.
 *
 * Parameters passed to every function are:
 *
 *   - renderer:  Three.js WebGLRenderer object
 *     (https://threejs.org/docs/#api/renderers/WebGLRenderer)
 *
 *   - gl:  WebGLRenderingContext of the underlying canvas element
 *     (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
 */
class Scene extends React.Component {
  constructor(props, context) {
    super(props, context)

    // Some local state for this component
    this.state = {
      rotationDirection: +1, // shows which direction cube spins
    }
    this.start = Date.now()
  }

  uniforms = {
    texture1: { type: 't', value: THREE.ImageUtils.loadTexture('/static/threejs/UVface2.png') },
    time: { // float initialized to 0
      type: 'f',
      value: 0.0,
    },
  }

  material = new THREE.ShaderMaterial({
    uniforms: this.uniforms,
    vertexShader: vertShader,
    fragmentShader: fragShader,
  })

  onResize = (renderer, gl, { width, height }) => {
    // This function is called after canvas has been resized.

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  initScene = (renderer, gl) => {
    // This function is called once, after canvas component has been mounted.
    // And WebGLRenderer and WebGLRenderingContext have been created.


    this.scene = new THREE.Scene()



    let loader = new THREE.JSONLoader()
    loader.load( '/static/threejs/me4.json', function ( geometry, materials ) {
      let json = new THREE.Mesh( geometry, this.material)
      json.position.set( 0,0,0)
      json.scale.set( 1, 1, 1 )
      this.scene.add( json )
    }.bind(this) )

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
    this.scene.add(ambientLight)

    const pointLight = new THREE.PointLight('#ffffff', 1.0)
    pointLight.position.set(5, 10, 5)
    this.scene.add(pointLight)

    this.camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000)
    this.camera.position.z = 4

    renderer.setClearColor('#0d0d1e')
  }

  renderScene = (renderer, gl) => {
    // This function is called when browser is ready to repaint the canvas.
    // Draw your single frame here.


    this.material.uniforms[ 'time' ].value = .00025 * ( Date.now() - this.start );
    renderer.render(this.scene, this.camera)
  }

  handleDirectionButtonClick = () => {
    // Flip rotation direction sign
    this.setState({
      rotationDirection: this.state.rotationDirection * -1,
    })
  }

  render = () => {
    return (
      <div className='container-fluid'>
        <div className='row'>

          {/* Column with Sidebar */}

          {/* Column with Renderer */}
          <div className='col-12'>
            <div className="row">
              <Renderer
                onResize={this.onResize}
                initScene={this.initScene}
                renderScene={this.renderScene}
              />
            </div>
          </div>
        </div>

        {/*language=CSS*/}
        <style jsx>{`
          .container-fluid {
            width: 100vw;
            height: 100vh;
          }

          .row {
            height: 100vh;
          }

        `}</style>
      </div>
    )
  }
}

export default Scene
