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
  name: "Tina Rahimi",
  logo: "/logo.webp",
  email: "Tina200281@gmail.com",
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
    title: "Phone",
    url: "tel:+989215384489",
    icon: "mdi:phone",
  },
  {
    title: "Email",
    url: "mailto:Tina200281@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "Location",
    url: "https://www.google.com/maps/search/?api=1&query=Tehran+Iran",
    icon: "mdi:map-marker",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tina200281",
    icon: "mdi:linkedin",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Tina Rahimi",
    description:
      "Data Scientist and AI Engineer focused on NLP, LLMs, and intelligent systems.",
    image: identity.logo,
  },
  role: "Data Scientist / AI Engineer",
  description:
    "I am an AI engineer and data scientist passionate about NLP and LLM-driven products, building reliable systems that solve real-world problems.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Work",
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
    title: "About | Tina Rahimi",
    description:
      "Data Scientist and AI Engineer focused on NLP, LLMs, and applied machine learning.",
    image: identity.logo,
  },
  subtitle: "Summary, education, and skills",
  about: {
    description: `
I like to think of myself as an explorer in the world of AI, always curious about how LLMs and NLP can be pushed further. I enjoy experimenting with new tools, learning a bit more every day, and building things that actually matter. What excites me most is working with great teams, sharing ideas, and growing together.
<br/><br/>
**Education**
<br/>
Bachelor of Computer Engineering — University of Isfahan (Nov 2020 to Sep 2024)
<br/>
GPA: 16.93/20 (~3.386/4.0)
<br/>
Core areas: Artificial Intelligence, Software Engineering
<br/>
Bachelor’s thesis: LLM-based Security Vulnerability Detection
<br/><br/>
**Skills**
<br/>
Programming & Scripting: Python, Java (familiar)
<br/>
Machine Learning & AI: Scikit-learn, PyTorch, Transformers, LangChain, FastAPI, Hugging Face Datasets, OpenAI, Cohere, Selenium
<br/>
NLP & Text Processing: Hazm, NLTK
<br/>
Data Manipulation & Visualization: NumPy, Pandas, Matplotlib, Seaborn, Metabase
<br/>
Databases & Search: SQL Server, MongoDB, Elasticsearch
<br/>
Tools & Platforms: Airflow, Git, Docker, Ollama
<br/>
Domain Knowledge: Machine Learning, NLP, Applied Linear Algebra`, // Markdown is supported
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
    description: `Recent roles focused on AI engineering, NLP, and data pipelines.`, // Markdown is supported
    items: [
      {
        title: "Data Scientist (AI Engineer)",
        company: {
          name: "IraniCard",
          image: "/logo.webp",
          url: "https://iranicard.ir",
        },
        date: "Dec 2024 - Present · Isfahan, Iran",
      },
      {
        title: "Data Scientist (NLP Developer)",
        company: {
          name: "Saminray ICT Co.",
          image: "/logo.webp",
          url: "https://saminray.com",
        },
        date: "Jan 2024 - Dec 2024 · Remote",
      },
      {
        title: "Data Engineer Intern",
        company: {
          name: "Digiton.tv",
          image: "/logo.webp",
          url: "https://digiton.tv",
        },
        date: "Jul 2023 - Sep 2023 · Tehran, Iran",
      },
    ],
  },
  connect: {
    description: `Feel free to reach out for collaboration, AI projects, or data science opportunities.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tina Rahimi",
    description: "Selected AI and data engineering projects.",
    image: identity.logo,
  },
  subtitle: "Selected projects and initiatives",
  projects: [
    {
      title: "Intelligent Order Processing Agents",
      description:
        "Designed and implemented AI agents to automate order processing and improve system reliability.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://iranicard.ir",
    },
    {
      title: "Persian LLM Semantic Search",
      description:
        "Fine-tuned LLMs and built embedding pipelines to improve semantic search and text classification.",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://saminray.com",
    },
    {
      title: "User Activity ETL Pipelines",
      description:
        "Built ETL pipelines for large-scale user activity data to support analytics and personalization.",
      image: "/demo-2.jpg",
      year: "2023",
      url: "https://digiton.tv",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tina Rahimi",
    description: "Thoughts on AI, NLP, and data science.",
    image: identity.logo,
  },
  subtitle: "Thoughts on AI, NLP, and data science.",
};
