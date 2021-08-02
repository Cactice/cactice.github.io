import React from 'react';
import NoSSR from 'react-no-ssr';

import Scene from '../components/Scene';
import Loading from '../components/Loading';

import Head from 'next/head';
import 'bootstrap/scss/bootstrap.scss';
import Projects from '../components/Projects';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import CacticeWorks from './cacticeWorks.json';
import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';
import About from '../components/about.mdx';

/**
 * Implements main page
 */
const Index = () => {
  const [progress, setProgress] = useState(0);
  const [isAbove, setIsAbove] = useState(true);
  let lottieRef = React.createRef();
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animType: 'svg',
    animationData: CacticeWorks,
    rendererSettings: {},
  };

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let duration = window.innerHeight;
      let frame = scrollPosition / duration;
      if (frame > 0.9) {
        setIsAbove(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
    <div>
      <Head>
        <title>Cactice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Description"
          content="Cactice is one of the biggest fans of coding. Coding is his love."
        />
        <html lang="en" />
      </Head>
      <body style={{ overflowX: 'hidden', position: 'relative' }}>
        <ParallaxProvider>
          <NoSSR onSSR={<Loading />}>
            <Scene />
          </NoSSR>
          <div className="overlaps">
            <Parallax
              className="custom-class"
              offsetYMax={30}
              offsetYMin={-30}
              tag="figure"
              styleInner={{
                paddingTep: '10vh',
                paddingLeft: '15vw',
              }}
            >
              <div className="motto_div">
                <p className="motto_en">
                  CODE IS&nbsp;
                  <span style={{ color: 'red' }}>LOVE　</span>
                </p>
                <p className="motto">
                  コードに
                  <span style={{ color: 'red' }}>恋</span>
                </p>
              </div>
            </Parallax>
          </div>
          <div>
            <div className="Title">About</div>
            <div className="about">
              <About />
            </div>
          </div>
          <div className="Title">Works</div>
          <div className="project_view">
            <Projects />
          </div>

          <style jsx>{`
            .project_view {
              width: 100vw;
              height: 100vh;
            }

            .Title {
              font-family: 'Roboto Slab', serif;
              font-weight: 700;
              font-size: 64px;
              text-align: center;
              margin: 30px auto;
            }

            .about {
              max-width: 750px;
              margin: 0 auto;
            }

            .motto_div {
              writing-mode: vertical-rl;
              -ms-writing-mode: tb-rl;
              height: auto;
              margin-top: 5vh;
              white-space: nowrap;
            }

            .motto_en {
              margin: 0px;
              font-size: 11vh;
              font-family: 'Kokoro';
              padding-top: 3.5vh;
            }

            .motto {
              writing-mode: vertical-rl;
              margin: 0px;
              font-size: 15.8vh;
              font-family: 'Kokoro';
              line-height: 80px;
            }

            .overlaps {
              position: absolute;
              right: 0px;
              top: 0px;
              z-index: 1;
              width: 100vw;
            }
          `}</style>
        </ParallaxProvider>
      </body>
    </div>
  );
};

export default Index;
