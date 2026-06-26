import { Icons } from "@/components/icons";
import { House, Library, Workflow, Layers, Cloud, BrainCircuit, Bot } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Docker } from "@/components/ui/svgs/docker";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Aws } from "@/components/ui/svgs/aws";

export const DATA = {
  name: "Yannick Abiguime",
  initials: "YA",
  url: "https://abiguimeyannick.dev",
  location: "Dakar, Senegal",
  locationLink: "https://www.google.com/maps/place/dakar+senegal",
  description:
    "Data Engineer specializing in scalable pipelines, cloud analytics, and AI integration. Passionate about building robust data solutions and continuously learning.",
  summary:
    "Highly analytical and quick to learn new technologies, with strong autonomy in handling complex data tasks. Currently working as a Data Engineer / Data Scientist at [Prime Numbers / Rubyx](/#work), building ELT pipelines and credit risk frameworks on GCP with Airflow & dbt. I hold a [Master's in Applied Mathematics](/#education) from UCAD (Dakar) in partnership with Université Bretagne Sud (France). Passionate about scalable data solutions, AI/LLM engineering, and continuously learning.",
  avatarUrl: "/me.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: false,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "A selection of personal and academic projects.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to discuss a data project or opportunity? Feel free to reach out by email and I'll get back to you as soon as I can.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "MySQL / PostgreSQL", icon: Postgresql },
    { name: "JavaScript", icon: Nodejs },
    { name: "Docker", icon: Docker },
    { name: "FastAPI", icon: FastAPI },
    { name: "Apache Airflow", icon: Workflow },
    { name: "dbt", icon: Layers },
    { name: "GCP", icon: Cloud },
    { name: "AWS", icon: Aws },
    { name: "GitHub", icon: Icons.github },
    { name: "RAG Pipelines", icon: BrainCircuit },
    { name: "LLM APIs", icon: Bot },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "abiguimeyannick@gmail.com",
    tel: "+221 78 189 97 21",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/merebeyannick",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/m%C3%A8r%C3%A8b%C3%A8-yannick-a-b2740219a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MerYann_471",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:abiguimeyannick@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Prime Numbers / Rubyx",
      href: "https://heronrubyx.com",
      badges: ["Contract", "Remote"],
      location: "Dakar, Senegal",
      title: "Data Engineer / Data Scientist",
      logoUrl: "https://avatar.vercel.sh/rubyx?size=40",
      start: "December 2024",
      end: undefined,
      description:
        "Orchestrated analytics-ready ELT pipelines with Airflow & Python for large-scale data ingestion and transformation. Optimized BigQuery queries via partitioning & clustering. Implemented data validation and quality checks (SQL, dbt). Built pre-prod monitoring for credit strategy impact, enabled parallel credit strategy execution (dbt/SQL/Firestore), and designed a credit risk evaluation framework using behavioral & volatility scoring. Applied supervised and unsupervised learning for borrower segmentation and risk detection. Delivered dashboards & analytical insights using Looker, Python, and SQL.",
    },
    {
      company: "Prime Numbers / Rubyx",
      href: "https://heronrubyx.com",
      badges: ["Internship", "Hybrid"],
      location: "Dakar, Senegal",
      title: "Data Engineering Intern",
      logoUrl: "https://avatar.vercel.sh/rubyx?size=40",
      start: "September 2024",
      end: "December 2024",
      description:
        "Built incremental models to consolidate daily records into unified reporting views, improving data accessibility. Implemented data validation and schema enforcement with dbt, ensuring reliable and consistent data models. Designed and maintained ETL pipelines with Python and SQL for ingesting and transforming large-scale datasets.",
    },
    {
      company: "Gomycode",
      href: "https://gomycode.com",
      badges: ["Contract", "On-site"],
      location: "Dakar, Senegal",
      title: "Python Instructor",
      logoUrl: "https://www.google.com/s2/favicons?domain=gomycode.com&sz=128",
      start: "March 2025",
      end: "May 2025",
      description:
        "Taught foundational Python concepts — data structures, control flow, OOP, and algorithms — to beginner and intermediate students. Introduced practical data analysis with pandas, matplotlib, and NumPy. Mentored learners through hands-on coding exercises, debugging sessions, and project presentations.",
    },
  ],
  education: [
    {
      school: "Université Bretagne Sud (UBS)",
      href: "https://www.univ-ubs.fr/fr/index.html",
      degree: "Double diploma - Master's in Applied Mathematics – Numerical and Mathematical Engineering",
      logoUrl: "/univesity_bs_logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Cheikh Anta Diop University (UCAD) & Université Bretagne Sud (UBS)",
      href: "https://www.ucad.sn/",
      degree: "Double diploma - Master's in Applied Mathematics – Numerical and Mathematical Engineering",
      logoUrl: "/university_cad_logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Cheikh Anta Diop University (UCAD)",
      href: "https://www.ucad.sn/",
      degree: "Bachelor's in Mathematics, Physics, and Computer Science",
      logoUrl: "/university_cad_logo.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
