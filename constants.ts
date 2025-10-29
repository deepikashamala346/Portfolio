import type { Project, Skill, ExperienceItem, EducationItem } from "./types";

import {
  Angular17Icon,
  AtlassianIcon,
  AWSIcon,
  CSharpIcon,
  Css3Icon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  GitlabIcon,
  Html5Icon,
  JiraIcon,
  JsIcon,
  JsonIcon,
  NetCoreIcon,
  NetIcon,
  Npm2Icon,
  PostgresqlIcon,
  PostmanIcon,
  SlackIcon,
  SwaggerIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VercelIcon,
  SqlServerIcon,
} from "./components/icons/TechIcons";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  // { name: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "SwitchFxTech",
    description:
      "A US-based platform for rehabilitation management. Implemented session timeouts, optimized performance, and integrated Polly Circuit Breaker for fault tolerance.",
    imageUrl: "/images/projects/SwitchFxTech.jpg",
    tags: ["ASP.NET Core", "Angular", "PostgreSQL", "JavaScript", "CSS"],
  },
  {
    title: "PayRevision",
    description:
      "An EdTech platform for student-tutor interactions. Implemented Unit of Work pattern, integrated Serilog for logging, and automated session management.",
    imageUrl: "/images/projects/Payrevision.jpg",
    tags: ["REST API", "Xunit"],
  },
  {
    title: "BUZZ",
    description:
      "A platform for managing employee information and project assignments. Authored a resource request module and built a real-time ReactJS dashboard.",
    imageUrl: "/images/projects/Buzz.jpg",
    tags: ["C#", "WebAPI", "Entity Framework", "CSS", "Dapper"],
  },
  {
    title: "HRMS Portal",
    description:
      "A platform for efficient employee onboarding, leave management, and attendance tracking. Developed various modules and a scalable SQL Server database schema.",
    imageUrl: "/images/projects/HRMS.jpg",
    tags: ["C#", "WebAPI", "Dapper", "Angular", "SQL Server"],
  },
];

export const SKILLS: Skill[] = [
  { name: ".NET", Icon: NetIcon },
  { name: ".NET Core", Icon: NetCoreIcon },
  { name: "C#", Icon: CSharpIcon },
  { name: "Angular", Icon: Angular17Icon },
  { name: "Atlassian", Icon: AtlassianIcon },
  { name: "TypeScript", Icon: TypescriptIcon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "HTML", Icon: Html5Icon },
  { name: "CSS", Icon: Css3Icon },
  { name: "JSON", Icon: JsonIcon },
  { name: "MS SQL Server", Icon: SqlServerIcon },
  { name: "PostgreSQL", Icon: PostgresqlIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "Git", Icon: GitIcon },
  { name: "GitHub", Icon: GithubIcon },
  { name: "Gitlab", Icon: GitlabIcon },
  { name: "TailwindCSS", Icon: TailwindcssIcon },
  { name: "Jira", Icon: JiraIcon },
  { name: "Slack", Icon: SlackIcon },
  { name: "Swagger", Icon: SwaggerIcon },
  { name: "Postman", Icon: PostmanIcon },
  { name: "Vercel", Icon: VercelIcon },
  { name: "NPM", Icon: Npm2Icon },
  { name: "Figma", Icon: FigmaIcon },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "Paltech Consulting Private Limited",
    period: "March  2023 - Present",
    description: [
      "Collaborated with stakeholders on requirements gathering and sprint planning, ensuring 100% alignment with project timelines.",
      "Contributed across all phases of SDLC in an Agile environment to deliver scalable solutions.",
      "Enhanced application performance by refining queries and APIs, reducing average response time by 35%.",
      "Executed unit testing with XUnit/NUnit, achieving 98% code coverage and ensuring robust system reliability.",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Paltech Consulting Private Limited",
    period: "August 2022 - february  2023",
    description: [
      "Gained expertise in .NET Core, RESTful APIs, and design patterns, delivering maintainable and scalable solutions.",
      "Revamped SQL Server schemas, queries, and stored procedures, reducing execution time by 30%",
      " Asset Management System and Task Management System in .NET Core, improving resource efficiency by 40% and reducing errors by 25%.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Jawaharlal Nehru Technical University",
    degree: "BTech - Computer Science Engineering",
    period: "December 2022 - July 2025",
    details: "CGPA: 7/10",
  },
  {
    institution: "Government Institute of Electronics",
    degree: "Diploma",
    period: "June 2018 - April 2022",
    details: "Grade: 86%",
  },
  {
    institution: "Vignan Integrated Hgh School",
    degree: "Secondary Education",
    period: "March 2018",
    details: "GPA: 9.2/10",
  },
];
