import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'

import {Button} from 'react-bootstrap'
const calc = (x, y, size) => [-(y - size.y-(size.height/2)) / 10,(x-size.x-(size.width/2))/10, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function SpringCards() {
  const [size, setSize] = useState({x:0,y:0})
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  let node = {}
  let refCallback = element => {
    if (element) {
      node=element//
    }
  }
  useEffect(() => {
    setSize(node.getBoundingClientRect())
  })
  return (
    <div ref={refCallback} >
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y, size) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) , boxShadow:`0px 5px 30px 5px rgba(0, 0, 0, 0.1)`}}
    >
    <p style={{height:200}}>hai</p>
    </animated.div>
    <style jsx>{`

      root {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #f0f0f0;
      }

      .card {
        width: 15rem;
        height: 450ch;
        background: grey;
        border-radius: 5px;
        background: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);
        box-shadow: 0px 10px 30px 5px rgba(0, 0, 0, 0.3);
        background-size: cover;
        background-position: center center;
        transition: box-shadow 0.5s;
        will-change: transform;
        border: 35px solid white;
      }

      .card:hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
      }
    `}</style>
    </div>
  )
}
