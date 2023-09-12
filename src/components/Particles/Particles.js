import { useCallback } from "react";
import Particles  from "react-particles";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";
import { loadCardsShape } from "https://cdn.jsdelivr.net/npm/tsparticles-shape-cards/+esm";
import "./Particles.css";

const Rain = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
    await loadCardsShape(engine);
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        backgroundMask: {
          enable: true,
          cover: {
            value: {
              r: 0,
              g: 0,
              b: 0,
            },
          },
        },
        background: {
          image: "url('https://i.imgur.com/AtqQVLJ.jpeg')",
          size: "100% 100%",
          repeat: "no-repeat",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
            animation: {
              enable: true,
              speed: 0.1,
            },
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            size: true,
            speed: {
              min: 1,
              max: 3,
            },
          },
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 1,
            animation: {
              enable: false,
              startValue: "max",
              destroy: "min",
              speed: 0.3,
              sync: true,
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
          },
          shape: {
            type: ["circle", "square", "polygon"],
            options: {
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
              ],
            },
          },
          size: {
            value: {
              min: 3,
              max: 5,
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 30,
            },
            enlighten: {
              enable: true,
              value: 30,
            },
            enable: true,
            speed: {
              min: 15,
              max: 25,
            },
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
      }}
    />
  );
};
export default Rain;
