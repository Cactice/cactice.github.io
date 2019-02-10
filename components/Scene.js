import React from 'react'

import {Scene, ImageUtils, Mesh, PerspectiveCamera, Color, JSONLoader, ShaderMaterial, PointLight} from 'three'
import Renderer from './Renderer'


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
export default class Scene2 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      rotationDirection: +1, // shows which direction cube spins
    }
    this.start = Date.now()
  }

  uniforms = {
    texture1: { type: 't', value: ImageUtils.loadTexture('/static/threejs/UVface2.webp') },
    time: { // float initialized to 0
      type: 'f',
      value: 0.0,
    },
  }

  material = new ShaderMaterial({
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
    this.scene = new Scene()

    let loader = new JSONLoader()
    loader.load( '/static/threejs/me4.json', function ( geometry, materials ) {
      let json = new Mesh( geometry, this.material)
      json.position.set( 0,1,-1)
      json.scale.set( 1, 1, 1 )
      this.scene.add( json )
    }.bind(this) )

    const pointLight = new PointLight('#ffffff', 1.0)
    pointLight.position.set(5, 10, 5)
    this.scene.add(pointLight)
    this.scene.background =  new Color( 0xf0f0f0 )

    this.camera = new PerspectiveCamera(75, 16 / 9, 0.1, 1000)
    this.camera.position.z = 4

    renderer.setClearColor('#0d0d1e')
  }

  renderScene = (renderer, gl) => {

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
          <div className='col-12'>
            <div className="row" >
              <Renderer
                onResize={this.onResize}
                initScene={this.initScene}
                renderScene={this.renderScene}
              />
            </div>
          </div>
        </div>
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

