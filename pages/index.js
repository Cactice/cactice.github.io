import React from 'react'
import NoSSR from 'react-no-ssr'

import Scene from '../components/Scene'
import Loading from '../components/Loading'

import '../styles/main.scss'
import Projects from '../components/Projects'
import { ParallaxProvider, Parallax} from 'react-scroll-parallax';
/**
 * Implements main page
 */
const Index = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
    <div>
      <body style={{overflowX: 'hidden'}}>
      <ParallaxProvider>
        <NoSSR onSSR={<Loading/>}>
          <Scene/>
        </NoSSR>
        <div className='overlaps'>
          <Parallax
            className="custom-class"
            offsetYMax={30}
            offsetYMin={-30}
            tag="figure"
            styleInner={{
              paddingTop:'10vh',
              paddingLeft:'15vw'
            }}
          >
            <div className='motto_div'>
              <p className='motto_en'>
                CODE IS&nbsp;
                <span style={{color:'red'}}>
                  LOVE　
                </span>
              </p>
              <p className='motto'>
                コードに
                <span style={{color:'red'}}>
                  恋
                </span>
              </p>
            </div>
          </Parallax>
        </div>
          <Parallax
            className="custom-class"
            offsetYMax={30}
            offsetYMin={-30}
            tag="figure"
          >
          </Parallax>
        <div className='project_view'>
          <Projects/>
        </div>

        <style jsx>{`
          .project_view {
            width:100vw;
            height:100vh;
          }

          .motto_div {
            writing-mode: vertical-rl;
            -ms-writing-mode: tb-rl;
            height:auto;
            white-space: nowrap;
          }

          .motto_en {
            margin: 0px;
            font-size: 11vh;
            font-family: "Kokoro";
            padding-top:3.5vh;
          }

          .motto {
            writing-mode: vertical-rl;
            margin: 0px;
            font-size: 15.8vh;
            font-family: "Kokoro";
            line-height: 80px;
          }

          .overlaps {
            position:absolute;
            right: 0px;
            top: 0px;
            z-index: 1;
            width: 100vw;
          }
        `}</style>

      </ParallaxProvider>
    </body>
    </div>
  )
}

export default Index
