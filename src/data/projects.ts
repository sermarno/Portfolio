// src/data/projects.ts
const projects = [
  {
    slug: "aldeas-connect",
    title: "Aldeas Connect",
    subtitle: "Informatics Capstone, Fall 2024 - Spring 2025",
    role: "Full-Stack Development",
    coverImage: "/aldeasConnect.png",
    description: `
      Aldeas Connect is a platform for monitoring and managing smart village initiatives
      in Mexico. It features user-centered data dashboards and interactive analytics tools
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
    subtitle: "IU HCC, Spring 2025",
    role: "UX Research",
    coverImage: "/discoverWashington.png",
    description: `
      A digital tourism guide for the Downtown Washington Historic Trail.
      Includes data-driven UX/UI design and context-aware features for mobile users.`,
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
    subtitle: "IU Visual Design, Fall 2023",
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
    subtitle: "IU Visual Design, Spring 2025",
    role: "Adobe Photoshop",
    coverImage: "/rainyNight.png",
    description: `
      A digital artwork created as part of visual design practice.
      Explores mood and lighting techniques in Photoshop.`,
    images: ["/rainyNight.png", "/rainyNight2.png", "/rainyNight3.png"],
    video: "/rainyNightDemo.mp4",
    skills: ["Adobe Photoshop", "Digital Illustration", "Visual Composition"],
  },
  {
    slug: "foodie-match",
    title: "Foodie Match",
    subtitle: "IU HCI, Fall 2023",
    role: "UX Research",
    coverImage: "/foodieMatch.png",
    description: `
      A mobile app prototype matching users with personalized recipes.
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
];

export default projects;
