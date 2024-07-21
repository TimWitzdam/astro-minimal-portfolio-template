import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Alexander Alegria",
  logo: "/logo.webp",
  email: "alexander_alegria@outlook.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/MrJoy05",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "alexander_alegria@outlook.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Alexander Alegria ",
    description:
      "Full time student from Mexico who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Alexander Alegria, a full time student from Mexico who also loves building cool things using code and develop projects for companies",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Alexander Alegria",
    description:
      "I'm Alexander Alegria, a full time student from Mexico who also loves building cool things using code and develop projects for companies",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Alexander Alegria, a full time student from Mexico who also loves building cool things using code and develop projects for companies.<br/><br/>
I am passionate about the world of software development, with a particular interest in fullstack development and UX/UI design.<br/><br/>
I enjoy creating complete solutions that span both frontend and backend, ensuring an intuitive and engaging user experience. My goal is to combine functionality and aesthetics to develop applications that not only work well, but also offer an exceptional experience to users.`, 
    image_l: {
      url: "/Talent.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/UniMap.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, 
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Trainne Programer in Fletes Mexico",
          image: "/logo.webp",
          url: "",
        },
        date: "2024 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, 
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Alexander Alegria",
    description: "Check out what I've been working on.",    
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "TrainerHub",
      description: " Trainer Hub is an innovative platform designed to connect clients with qualified personal trainers from all over Mexico. Facilitate access to personalized training services, adapted to the individual needs and objectives of each client, no matter where they are located.",
      image: "/trainer.jpg",
      year: "2024",
      url: "",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Alexander Alegria",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
