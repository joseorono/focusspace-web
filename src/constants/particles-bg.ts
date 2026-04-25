export const heroParticlesBgConfig = {
  autoPlay: true,
  background: {
    color: { value: "transparent" },
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window" as const,
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: { enable: true, force: 95, smooth: 7 },
      },
      resize: { delay: 0.5, enable: true },
    },
    modes: {
      grab: { distance: 400, links: { opacity: 0.5 } },
      push: { quantity: 4 },
    },
  },
  particles: {
    color: { value: "#94a3b8" },
    links: {
      color: { value: "#94a3b8" },
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "out" as const },
      speed: 2,
    },
    number: {
      density: { enable: true, width: 1920, height: 1080 },
      value: 100,
    },
    opacity: {
      value: { min: 0.06, max: 0.22 },
      animation: { enable: true, speed: 3, sync: false, startValue: "random" as const },
    },
    shape: { type: "circle" },
    size: {
      value: { min: 1, max: 10 },
      animation: { enable: true, speed: 20, sync: false, startValue: "random" as const },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  motion: {
    disable: true,
    reduce: { factor: 4, value: true },
  },
};
