import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Maaz Mukadam",
  title: "Hi all, I'm Maaz",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Python, Django, React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "The-deep-99",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:maazmukadam35673@gmail.com",
  linkedin: "https://www.linkedin.com/in/maaz-mukadam/",
  github: "https://github.com/The-deep-99",
  instagram: "https://www.instagram.com/mr_maaz_006",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing responsive web applications using React.js"),
        emoji("⚡ Building modern static and server-rendered websites with Next.js"),
        emoji("⚡ Designing and implementing RESTful APIs using Django & DRF"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "A.P. Shah Institute of Technology",
    subHeader: "Bachelor of Engineering in Information Technology",
    duration: "August 2025 - April 2027",
    desc: "Currently pursuing BE with focus on software development and modern web technologies.",
    grade: "Grade A",
    descBullets: [
       "Relevant Coursework: Data Structures, OOP, DBMS, Operating Systems",
    "Built academic projects using React and Django",
    "Actively participating in coding and technical learning"
    ],
  },
  {
    schoolName: "Muchhala Polytechnic College (Thane)",
    subHeader: "Diploma in Information Technology",
    duration: "August 2022 - July 2025",
    desc: "Major subjects: Programming Fundamentals, Database Systems, Networking, Web Development .",
    grade: "92.56%",
    descBullets: [
      "Participated in coding competitions",
      "Member of IT Society"
    ],
  },
  {
    schoolName: "Symbiosis Convent High School",
    subHeader: "Matriculation",
    duration: "2012 - 2022",
    desc: "",
    grade: "86.20%",
    descBullets: [],
  },
];




export const experience: ExperienceType[] = [
  {
    role: "Flutter Mobile Development Intern",
    company: "Nastech",
    companyLogo: "/img/icons/common/nastech.png", // add logo if you have
    date: "april 2024 - june 2024",
    desc: "Completed internship focused on Flutter mobile app development. Built UI screens, implemented API integration, and gained hands-on experience in cross-platform app development.",
  },
  {
    role: "State Level Diploma IT Competition Participant",
    company: "State Level Technical Competition - Asangaon",
    companyLogo: "/img/icons/common/competition.png",
    date: "2025",
    desc: "Represented diploma institute at state-level IT competition. Demonstrated technical and problem-solving skills in programming and IT concepts.",
  },
  {
    role: "Java Fundamentals Certification",
    company: "Oracle Academy",
    companyLogo: "/img/icons/common/oracle.png",
    date: "2026",
    desc: "Completed Java Fundamentals course covering OOP concepts, basic programming structures, and problem-solving using Java.",
  },
  {
    role: "Linux Essentials Certification",
    company: "Cisco NetAcad",
    companyLogo: "/img/icons/common/netcad.png",
    date: "2026",
    desc: "Completed Linux Essentials course covering command line usage, file system management, system administration basics, and open-source concepts.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/the-deep-99/developer-portfolio",
    link: "https://developer-portfolio-maaz.vercel.app/",
  },
  {
    name: "AdQuench",
    desc: "A Free water platform where revenue is generated through targeted advertisements.",
        github: "https://github.com/the-deep-99/AdQuench",
    link: "https://AdQuench.vercel.app/",

  },
 
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Rehan Vadraiwala",
  role: "Hackathon Teammate & Backend Developer",
  feedback:
    "Working with Maaz during our hackathon project was a great experience. He handled the backend architecture using Django efficiently and ensured smooth integration with the frontend. He remains calm under pressure and focuses on finding practical solutions. He's someone you can rely on in any technical team."
  },
  {
name: "Mini Vishwanath",
  role: "HOD of Diploma IT, Information Technology Department",
  feedback:
    "Maaz is one of the most dedicated students in the class. He has a strong grasp of data structures and web technologies and is always eager to explore beyond the syllabus. His final-year mini project showcased both technical depth and creativity. He works well in teams and demonstrates leadership qualities."
},
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Maaz Mukadam",
  description: greetings.description,
  author: "Maaz Mukadam",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-maaz.vercel.app",
  keywords: [
    "Maaz",
    "Maaz Mukadam",
    "maazmukadam",
    "developer-portfolio",
    "Portfolio",
    "Maaz Portfolio ",
    "Maaz Mukadam Portfolio",
  ],
};
