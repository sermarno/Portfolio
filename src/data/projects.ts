// src/data/projects.ts
const projects = [
  {
    slug: "aldeas-connect",
    title: "Aldeas Connect",
    subtitle: "Fall 2024 - Spring 2025",
    role: "Full-Stack Development",
    coverImage: "/aldeasConnect.png",
    description: `
      A web application for monitoring and managing smart village initiatives
      in Mexico. Features user-centered data dashboards and interactive analytics tools
      for stakeholders.`,
    extLink: "https://github.com/sermarno/Aldeas-Connect.git",
    logo: "/acLogo.png",
    images: [
      "/aldeasConnect.png",
      "/aldeasConnect2.png",
      "/aldeasConnect3.png",
      "/aldeasConnect4.png",
      "/aldeasConnect5.png",
    ],
    youtubeId: "p7gj1MFj7qk",
    skills: ["React", "SQL", "Python", "UX Research", "Agile"],
  },
  {
    slug: "discover-washington",
    title: "Discover Washington",
    subtitle: "Spring 2025",
    role: "UX Research",
    coverImage: "/discoverWashington.png",
    description: `
      A web application that acts as a digital tourism guide for the Downtown Washington Historic Trail.
      Includes data-driven UX/UI design and context-aware features for mobile users.`,
    wixLink: "https://team53704.wixstudio.com/discoverwashington",
    logo: "/dwLogo.png",
    images: [
      "/discoverWashington.png",
      "/discoverWashington2.png",
      "/discoverWashington3.png",
      "/discoverWashington4.png",
    ],
    youtubeId: "w4r0L-lC4Lg",
    skills: ["Figma", "UX Design", "Data Modeling", "User Testing"],
  },
  {
    slug: "weight-time",
    title: "Weight Time",
    subtitle: "Fall 2023",
    role: "Web Design",
    coverImage: "/weightTime.png",
    description: `
      A web and mobile application prototype that emphasizes the importance of color palette, 
      typography, visual elements, and layout design choices.`,
    figmaLink:
      "https://www.figma.com/design/MGOiPhWY237wlIlZX2cFw6/WEIGHT-TIME-Website-Wirefram?node-id=1-2&t=089jrtd3w8zHkqzB-1",
    logo: "/wtLogo.png",
    images: [
      "/weightTime.png",
      "/weightTime2.png",
      "/weightTime3.png",
      "/weightTime4.png",
    ],
    presentation: "/weightTime.pdf",
    skills: ["Figma", "UX Design", "Adobe Photoshop", "Data Modeling"],
  },
  {
    slug: "rainy-night",
    title: "Rainy Night",
    subtitle: "Spring 2025",
    role: "Adobe Photoshop",
    coverImage: "/rainyNight.png",
    description: `
      A digital artwork created as part of visual design practice.
      Explores layering, color adjustments, and lighting techniques in Photoshop.`,
    images: ["/rainyNight.png", "/rainyNight2.png", "/rainyNight3.png"],
    video: "/rainyNightDemo.mp4",
    skills: ["Adobe Photoshop", "Digital Illustration", "Visual Composition"],
  },
  {
    slug: "foodie-match",
    title: "Foodie Match",
    subtitle: "Fall 2023",
    role: "UX Research",
    coverImage: "/foodieMatch.png",
    description: `
      A mobile app prototype from low to high fidelity that matches users with personalized recipes.
      Focused on intuitive navigation and data-driven UX decisions.`,
    images: [
      "/foodieMatch.png",
      "/foodieMatch2.png",
      "/foodieMatch3.png",
      "/foodieMatch4.png",
    ],
    presentation: "/foodieMatch.pdf",
    skills: ["UX Research", "Figma", "User Testing", "Prototyping"],
  },
  {
    slug: "tide-runner",
    title: "Tide Runner",
    subtitle: "Spring 2025",
    role: "Virtual Reality",
    coverImage: "/tideRunner.png",
    description: `
    A side-scrolling game where players control a rolling beach ball. Showcases Unity skills and emphasizes adding audio, managing game resets, and integrating assets from the Unity Store.
      `,
    logo: "/trLogo.png",
    images: [
      "/tideRunner.png",
      "/tideRunner2.png",
      "/tideRunner3.png",
      "/tideRunner4.png",
    ],
    youtubeId: "9XDO2fCo7sE",
    skills: ["Unity", "Unity Hub", "Unity Store", "C#", "3D Modeling"],
  },
  {
    slug: "wellness-form",
    title: "Wellness Registration Form",
    subtitle: "Spring 2025",
    role: "JavaScript",
    coverImage: "/wellnessForm.png",
    description: `
      Simple form that handles form submission, input validation, and builds a dynamic table by saving and retrieving data from localStorage.
      `,
    images: ["/wellnessForm.png", "/wellnessForm2.png", "/wellnessForm3.png"],
    youtubeId: "-3086in2t1E",
    skills: ["JavaScript", "Form Handing", "Input Validation", "Local Storage"],
  },
  {
    slug: "canvas-sketch",
    title: "Canvas Sketch Web App",
    subtitle: "Spring 2025",
    role: "JavaScript",
    coverImage: "/canvasSketch.png",
    description: `
      A web-based drawing app that allows users to draw with custom pen sizes, multiple color modes, and keyboard or mouse controls. Demonstrates dynamic UI and creative programming with the HTML Canvas API.
      `,
    images: ["/canvasSketch.png", "/canvasSketch2.png", "/canvasSketch3.png"],
    youtubeId: "bbL_Ko3xJCg",
    skills: ["JavaScript", "HTML & CSS", "DOM Manipulation", "Canvas API"],
  },
];

export default projects;
