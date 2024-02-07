import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles"; // Correct import statement

const ParticlesContainer = () => {
  const ParticlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const ParticlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className=" w-full h-full absolute translate-z-0 z-0"
      id="tsparticles"
      init={ParticlesInit}
      loaded={ParticlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
            //   mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
        //   links: {
        //     color: "#f5d393",
        //     distance: 150,
        //     enable: true,
        //     opacity: 0.5,
        //     width: 1,
        //   },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'one',
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },

          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 2
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;