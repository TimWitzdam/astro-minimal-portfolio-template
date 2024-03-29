import type {
  NavBarLink,
  SocialLink,
  HomePageLink,
  Identity,
  AboutPageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Tim Witzdam",
  role: "Student & Software Developer",
  description:
    "I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.",
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
    url: "https://github.com/TimWitzdam",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:tim@witzdam.com",
    icon: "mdi:email",
  },
];

export const homePageLinks: HomePageLink[] = [
  {
    title: "My Projects",
    url: "/projects",
  },
  {
    title: "About Me",
    url: "/about",
  },
];

// About (/about)
export const aboutPageContent: AboutPageContent = {
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-sheep-on-a-hillside-at-sunset.jpeg",
      alt: "Left Picture",
    },
    image_r: {
      url: "https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-sheep-on-a-hillside-at-sunset.jpeg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};
