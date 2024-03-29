import type {
  NavBarLink,
  SocialLink,
  HomePageLink,
  Identity,
} from "./types/config";

export const identity: Identity = {
  name: "Tim Witzdam",
  role: "Student & Software Developer",
  description:
    " I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.",
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
