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
      className="fixed top-0 w-full z-[0] bottom-0  translate-z-0 "
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
              quantity: 5,
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