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
};
