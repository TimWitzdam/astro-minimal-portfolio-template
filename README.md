<div align="center">
    <h1 align="center">Minimal portfolio template for Astro</a></h1>
    <p align="center">Open source minimalistic portfolio template created with <a href="https://astro.build/" target="_blank">Astro</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>. Design inspired by <a href="https://www.b-r.io/" target="_blank">Brian Ruiz</a> </p>
  <a href="https://minimal-portfolio.witzdam.com/" target="_blank" align="center">
    <img src="https://legende.cc/ss/oNWKICeAR1.png" alt="Theme preview" width="975"/>
    <img src="https://legende.cc/ss/ygdmeIzQIp.png" alt="Lighthouse score 100" />
</a>
</div>
<br />

[Preview](https://minimal-portfolio.witzdam.com/)

## 🔥 Features

- Fully responsive
- Perfect Google Lighthouse score
- Fast and SEO optimized blog with Markdown support
- Fully customizable
- Home, About, Projects and Blog pages
- Self host ready

## 🚀 Getting started

1. Clone/download the repo

```
git clone https://github.com/TimWitzdam/astro-minimal-portfolio-template.git
cd astro-minimal-portfolio-template
```

2. Install dependencies

```
npm i
```

3. Run the development server

```
npm run dev
```

4. [Configure](#🔧-configuration) your instance

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🔧 Configuration

This is the default example config file, which allows you to change pretty much anything content related on the site.

```JS
// src/config.ts
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
  name: "Tim Witzdam",
  logo: "/logo.webp",
  email: "tim@witzdam.com",
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

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Tim Witzdam",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.",
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
    title: "About | Tim Witzdam",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
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

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
```

## 👀 Any questions or problems?

Feel free to open an issue or even contribute by fixing a problem.

I'm also available via mail: [contact@witzdam.com](mailto:contact@witzdam.com)
