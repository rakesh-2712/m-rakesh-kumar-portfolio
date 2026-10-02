/**
 * Centralized Portfolio Data Source of Truth for M Rakesh Kumar.
 * NOTE: Strict adherence to verified factual information.
 * No fabricated metrics, awards, certifications, or statistics.
 */

export const portfolioData = {
  personal: {
    name: "M Rakesh Kumar",
    tagline: "B.Tech Computer Science Engineering Student",
    degree: "B.Tech in Computer Science Engineering",
    institution: "REVA University",
    location: "Bengaluru, Karnataka, India",
    expectedGraduation: "2029",
    email: "rakeshmeti.2005@gmai.com",
    shortBio:
      "Computer Science Engineering undergraduate at REVA University with an active focus on core programming, data structures, algorithms, and practical software development.",
    about: {
      introduction:
        "I am a Computer Science Engineering student at REVA University, Bengaluru (graduating in 2029). My academic journey centers on developing a solid foundation in computer science fundamentals, writing clean code, and understanding the engineering principles behind reliable software systems.",
      interests: [
        "Core Software Engineering & System Architecture",
        "Algorithmic Problem Solving & Data Structures",
        "Modern Web Application Development",
        "Data Analysis & Foundations of Machine Learning"
      ],
      careerDirection:
        "I am working toward becoming a well-rounded software developer capable of building performant, user-focused applications and scalable backend systems. I am continuously learning new technologies and applying them through hands-on projects and problem solving.",
      problemSolving:
        "I actively practice algorithmic problems on platforms like LeetCode and HackerRank, documenting my approaches in C++ and Python with a strong emphasis on time and space complexity analysis."
    }
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rakesh-2712",
      icon: "FaGithub",
      handle: "rakesh-2712"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rakesh-meti-71457a377",
      icon: "FaLinkedin",
      handle: "rakesh-meti-71457a377"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Rakesh_2712/",
      icon: "SiLeetcode",
      handle: "Rakesh_2712"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/rakeshmeti_2005",
      icon: "SiHackerrank",
      handle: "rakeshmeti_2005"
    }
  ],

  navLinks: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "coding-profiles", label: "Coding Profiles" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" }
  ],

  education: [
    {
      institution: "REVA University",
      location: "Bengaluru, Karnataka, India",
      degree: "Bachelor of Technology in Computer Science Engineering",
      expectedGraduation: "2029",
      timeline: "2025 - 2029",
      status: "Undergraduate Student",
      coursework: [
        "Data Structures",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "Computer Organization & Architecture",
        "Operating Systems Fundamentals",
        "Discrete Mathematics & Logic"
      ],
      description:
        "Pursuing a comprehensive curriculum encompassing algorithmic problem solving, software design principles, database management, and computer systems architecture."
    }
  ],

  skills: {
    categories: [
      {
        id: "programming",
        title: "Programming Languages",
        description: "Core languages used for problem solving and software logic",
        items: ["C", "C++", "Java", "Python", "JavaScript"]
      },
      {
        id: "web",
        title: "Web Technologies",
        description: "Technologies for developing interactive and responsive web applications",
        items: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        id: "data-ai",
        title: "Data & Machine Learning",
        description: "Libraries and concepts for numerical computation and data analysis",
        items: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"]
      },
      {
        id: "tools",
        title: "Tools & Development Environment",
        description: "Platforms and developer tooling for version control and coding",
        items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
      }
    ]
  },

  projects: [
    {
      id: "campus-lost-and-found",
      title: "Campus Lost & Found",
      description:
        "A web-based platform designed for university students and campus personnel to report, catalog, and reclaim lost items across campus buildings.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/rakesh-2712/campus-lost-found",
      liveUrl: null,
      status: "Repository Published"
    },
    {
      id: "leetcode-solutions",
      title: "LeetCode Solutions Repository",
      description:
        "A structured collection of solved LeetCode algorithmic problems with clean implementations and time/space complexity considerations.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      githubUrl: "https://github.com/rakesh-2712/leetcode-solutions",
      liveUrl: null,
      status: "Active Repository",
      documentedProblems: [
        { name: "Two Sum", category: "Arrays & Hash Table" },
        { name: "Valid Anagram", category: "Strings & Hash Table" },
        { name: "Fizz Buzz", category: "Math & Simulation" },
        { name: "Binary Search", category: "Binary Search" },
        { name: "Valid Parentheses", category: "Stack" },
        { name: "Baseball Game", category: "Stack & Simulation" },
        { name: "Reverse Linked List", category: "Linked List" },
        { name: "Merge Two Sorted Lists", category: "Linked List" }
      ]
    }
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "Rakesh_2712",
      url: "https://leetcode.com/u/Rakesh_2712/",
      focus: "Data Structures & Algorithmic Problem Solving"
    },
    {
      platform: "HackerRank",
      handle: "rakeshmeti_2005",
      url: "https://www.hackerrank.com/profile/rakeshmeti_2005",
      focus: "Foundational Programming & Language Practice"
    },
    {
      platform: "GitHub",
      handle: "rakesh-2712",
      url: "https://github.com/rakesh-2712",
      focus: "Code Repositories, Version Control & Web Projects"
    }
  ],

  certifications: {
    hasCertifications: false,
    items: [],
    inProgressNotice:
      "Currently working on foundational technical certifications and coursework. Credentials will be updated here as they are completed."
  },

  achievements: {
    hasAchievements: false,
    items: [],
    inProgressNotice:
      "Actively developing algorithmic problem-solving milestones and academic coursework. Milestones and recognitions will appear here."
  },

  resume: {
    isAvailable: false,
    statusNotice:
      "Resume is currently being prepared and updated for upcoming academic and internship cycles.",
    contactEmail: "rakeshmeti.2005@gmai.com"
  }
};
