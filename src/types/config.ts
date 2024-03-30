export type NavBarLink = {
  title: string;
  url: string;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type HomePageLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type AboutPageContent = {
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
  work: {
    description: string;
    items: ResumeItem[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  projects: Project[];
};

export type BlogPageContent = {
  subtitle: string;
};
