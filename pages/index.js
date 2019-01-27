import threeEntryPoint from '../components/threejs/threeEntryPoint';
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(import('../components/threejs/threeEntryPoint'))

export default class Index extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render () {
    return(
      <div>
        <div>
          <p>Hi Next.js</p>
        </div>
        <DynamicComponent ref={element => this.threeRootElement = element} />
      </div>
    )
  }
}

