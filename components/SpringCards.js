import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

import {Button} from 'react-bootstrap'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

class ReportSize extends React.Component {
  refCallback = element => {
    if (element) {
      this.setState({getSize:element.getBoundingClientRect()})
      console.log(this.getSize,'ah')
    }
  };
 
  render() {
    return (
      <div>
      <div ref={this.refCallback} style={{ border: "1px solid red" }}>
        {this.state?this.state.getSize.x:<div/>}<br/>
        {window.innerHeight}
      </div>
      <div>
      <Button onClick={()=>{
        console.log(this.state.getSize.x,'ah')
      }}>afjkl</Button>
      </div>
      </div>
    );
  }
}
export default function SpringCards() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  let node = {}
  return (
    <div ref={ref => node = ref}>
    <animated.div
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
    <ReportSize/>
    <p>hai</p>
    </animated.div>
    <style jsx>{`
      root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu,
          roboto, noto, segoe ui, arial, sans-serif;
        background: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
      }

      root {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #f0f0f0;
      }

      .card {
        width: 45ch;
        height: 45ch;
        background: grey;
        border-radius: 5px;
        background: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);
        background-size: cover;
        background-position: center center;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.5s;
        will-change: transform;
        border: 15px solid white;
      }

      .card:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
      }
    `}</style>
    </div>
  )
}
