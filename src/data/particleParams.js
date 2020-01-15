export const params = [
  {
    particles: {
      number: {
        value: 8,
        density: {
          enable: true,
          value_area: 800
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        speed: 1,
        out_mode: "out"
      },
      shape: {
        type: ["images", "circle"],
        images: [
          {
            src: "/heart.svg",
            height: 20,
            width: 23
          },
          {
            src: "/logo.svg",
            height: 20,
            width: 20
          }
        ]
      },
      color: {
        value: "#CCC"
      },
      size: {
        value: 30,
        random: false,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false
        }
      }
    },
    retina_detect: false
  },
  {
    particles: {
      number: {
        value: 50
      },
      size: {
        value: 3
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  },
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      size: {
        value: 10,
        random: true
      },
      move: {
        direction: "bottom",
        out_mode: "out"
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "remove"
        }
      },
      modes: {
        remove: {
          particles_nb: 10
        }
      }
    }
  }
];
