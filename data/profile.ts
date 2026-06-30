type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  featured?: boolean;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const profile = {
  name: "Seyedmohammad Khataeipour",
  role: "Software Engineer · Full-Stack · AI & Robotics",
  location: "Turin, Italy",
  email: "mohammadkhataei629@gmail.com",
  cvPath: "/cv.pdf",
  hasCv: true,
  hero: {
    headline: "Building robust software for industry, research, and intelligent systems.",
    blurb:
      "I build practical software systems across full-stack development, AI, robotics, and industrial engineering. My work spans manufacturing analytics for railway braking systems, research platforms, augmented reality robot control, and embedded software for industrial automation.",
    highlights: [
      "Industrial analytics platforms",
      "Research-grade full-stack systems",
      "AR, ROS, and collaborative robotics",
    ],
  },
  about:
    "I recently completed my Master's degree in Computer Engineering at Politecnico di Torino, where I worked on real industrial and research software projects. My background blends a practical engineering mindset with full-stack development, AI and data analysis, robotics, augmented reality, and embedded systems. I care about software that solves real problems, scales cleanly, and keeps improving through thoughtful iteration.",
  projects: [
    {
      name: "Smarti",
      type: "Manufacturing analytics platform for Wabtec industrial research project",
      description:
        "A full-stack platform that helps engineers analyze manufacturing test and burn-in data for high-speed railway braking systems with backend services, dashboards, data pipelines, SPC analysis, quality monitoring, root-cause investigation, predictive insights, secure authentication, RBAC, reporting, and advanced visualizations.",
      tags: ["Full-stack", "Python", "React", "SPC", "Machine Learning", "Industrial Software", "Wabtec"],
      featured: true,
    },
    {
      name: "Kiruna Explorer",
      type: "Research platform for urban transformation documentation",
      description:
        "A full-stack platform created with LKAB to document the urban transformation of Kiruna, Sweden, with React, Node.js, Express, MongoDB, REST APIs, authentication, interactive maps, ML integration, coordinated delivery, and exhibition deployment.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Maps", "REST API", "Machine Learning"],
      links: [
        {
          label: "e-flux feature",
          href: "https://www.e-flux.com/announcements/6784152/kiruna-explorer",
        },
      ],
    },
    {
      name: "AR Robot Control",
      type: "Master's thesis project",
      description:
        "A system for controlling a UR3e collaborative robot with HoloLens 2, Unity, ROS, hand gestures, motion, and voice commands through an augmented reality point-and-pick interface.",
      tags: ["HoloLens 2", "Unity", "ROS", "UR3e", "Robotics", "Augmented Reality", "C#"],
    },
    {
      name: "Clementi Impianti",
      type: "Company website and digital presence",
      description:
        "A practical business-facing web presence focused on clear communication, solid frontend execution, and a polished digital presentation.",
      tags: ["Web Development", "Frontend", "Business Website", "UX"],
      links: [
        {
          label: "Live website",
          href: "https://www.clementiimpiantisrl.com/",
        },
      ],
    },
  ] satisfies Project[],
  experience: [
    {
      title: "Software Engineer",
      company: "Politecnico di Torino, DIGEP, Wabtec Industrial Research Project",
      period: "09/2024 - 08/2026",
      location: "Turin, Italy",
      text: "Designed and developed Smarti, a full-stack platform for manufacturing test and burn-in data analysis in high-speed railway braking systems. Built backend services, dashboards, data pipelines, SPC analysis, quality monitoring, root-cause investigation tools, predictive machine learning features, authentication, RBAC, reporting, and visualization modules.",
    },
    {
      title: "Software Engineer / Technical Lead",
      company: "Politecnico di Torino, Kiruna Explorer Research Project",
      period: "10/2024 - 09/2025",
      location: "Turin, Italy",
      text: "Led development of a full-stack web platform created with LKAB to document the urban transformation of Kiruna, Sweden. Built frontend and backend features using React, Node.js, Express, and MongoDB, including REST APIs, authentication, interactive maps, and data management. Coordinated development, integrated ML features, and supported deployment for a public exhibition.",
    },
    {
      title: "Teaching Assistant",
      company: "Software Engineering & Web Applications, Politecnico di Torino",
      period: "09/2024 - 05/2025",
      location: "Turin, Italy",
      text: "Supported undergraduate students in software architecture, object-oriented programming, REST APIs, full-stack development, debugging, project work, Agile development, and good coding practices.",
    },
    {
      title: "Embedded Software Engineer",
      company: "Fateh Energy Kimia",
      period: "09/2017 - 01/2020",
      location: "Iran",
      text: "Developed embedded software for industrial automation systems used in combined-cycle power plants, with a focus on thermal valve control. Worked with C/C++, low-level firmware, embedded controllers, control logic, hardware communication, testing, troubleshooting, and system integration.",
    },
  ],
  skills: [
    {
      group: "Programming Languages",
      items: ["Python", "C#", "C++", "Java", "TypeScript", "Kotlin", "SQL", "ROS"],
    },
    {
      group: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "JavaScript", "REST API Integration"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Authentication & Authorization", "Microservices"],
    },
    {
      group: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
      group: "AI & Data",
      items: ["Machine Learning", "Data Visualization", "Python ML Ecosystem", "Predictive Analytics", "Statistical Process Control"],
    },
    {
      group: "Robotics & Embedded",
      items: ["ROS Noetic", "ROS2 Foxy", "ROS2 Humble", "HoloLens 2", "Unity", "Embedded Systems", "Firmware Development"],
    },
    {
      group: "Cloud, DevOps & Tools",
      items: ["Docker", "Git", "GitLab", "Linux", "Apache Kafka", "Gradle", "Maven", "Postman"],
    },
    {
      group: "Software Engineering",
      items: ["Object-Oriented Programming", "Scrum", "Software Architecture", "Design Patterns", "Full-Stack Development", "Agile"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Engineering",
      school: "Politecnico di Torino",
      period: "09/2023 - 06/2026",
      location: "Turin, Italy",
      thesis:
        "Augmented Reality Mediated Control of a UR3e Collaborative Robot Using HoloLens 2: A Point and Pick Interface with ROS Integration.",
      summary:
        "Controlling a collaborative robot remotely using motion, hand gestures, and voice commands through HoloLens 2.",
    },
    {
      degree: "Master of Science in Biomedical Engineering",
      school: "Sahand University of Tabriz",
      period: "10/2019 - 04/2021",
      location: "Tabriz, Iran",
      thesis: "Specialization in Electromechanics.",
      summary: "",
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      school: "Islamic Azad University",
      period: "09/2015 - 02/2020",
      location: "Iran",
      thesis: "",
      summary: "",
    },
  ],
  languages: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Italian", level: "Professional" },
    { name: "French", level: "Intermediate to advanced" },
    { name: "Spanish", level: "Intermediate" },
  ],
  volunteering: {
    title: "Save the Children Italia",
    period: "02/2025 - Current",
    location: "Turin, Italy",
    text: "Supported awareness campaigns, fundraising initiatives, and community activities focused on children's rights and social inclusion, collaborating with volunteers in multicultural environments.",
  },
  contact:
    "Interested in software engineering, AI, robotics, industrial software, or research engineering collaborations? Let's talk.",
  social: {
    linkedin: "https://www.linkedin.com/in/seyedmohammad-khataei-pour-3241b0209/",
    github: "https://github.com/Mohammad-khataeii",
  },
} as const;

export type Profile = typeof profile;
