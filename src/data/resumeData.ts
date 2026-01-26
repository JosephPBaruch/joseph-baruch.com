/**
 * Resume data for Joseph Baruch
 * This data is used by the AI agent to answer questions about the resume
 */

export const resumeData = {
  personalInfo: {
    name: "Joseph Baruch",
    phone: "(208) 369-6028",
    email: "josephbaruch48@gmail.com",
    linkedin: "joseph-peter-baruch",
    github: "JosephPBaruch",
    website: "josephbaruch.com"
  },
  
  summary: "Software engineer with hands-on industry experience developing and deploying full-stack microservices. Passionate about building high-quality, reliable applications through engineering principles in design, documentation, development, and validation. Experienced in developing frontend applications with React and TypeScript and backend services in Go. Strong interests in DevOps, containerization, and microservice architecture.",
  
  education: [
    {
      degree: "B.S. Computer Science, Minor in Mathematics",
      gpa: "3.81",
      institution: "University of Idaho",
      graduationDate: "May 2026"
    },
    {
      degree: "AI/ML Undergraduate Academic Certificate",
      institution: "University of Idaho",
      graduationDate: "May 2026"
    }
  ],
  
  technicalSkills: {
    languages: ["TypeScript", "JavaScript", "Go", "Python", "C++", "C"],
    frameworks: ["React", "Django", "FastAPI", "MUI", "Jest", "Cypress"],
    devops: ["Docker", "Kubernetes", "Helm", "AWS", "Jenkins", "Git"]
  },
  
  workExperience: [
    {
      title: "Software Engineer Intern",
      company: "Schweitzer Engineering Laboratories",
      duration: "Oct 2023 – Present",
      responsibilities: [
        "Developed full-stack SNMP Agent Configuration application",
        "Applied software engineering design principles by defining functional requirements in Gherkin, creating sequence diagrams, and establishing interfaces prior to implementation",
        "Integrated and tested a QS-ICMP agent with an SNMP manager",
        "Built frontend and backend services using React (TypeScript) and Go, reinforcing full-stack development skills",
        "Designed and developed an X.509 certificate management microservice independently:",
        "  - Frontend: Built a responsive interface using React, TypeScript, MUI, and Jest for unit testing",
        "  - Backend: Implemented a REST API in Go with unit tests to ensure reliability",
        "  - Pipeline: Containerized and deployed the service using Docker, K3d, and Helm for local Kubernetes orchestration",
        "  - Testing: Automated functional testing with Cypress, integrating Gherkin-defined scenarios into CI workflows",
        "Configured and deployed a Docker registry for Helm chart distribution in a microservice environment",
        "Refactored CI/CD pipelines using Jenkins and Yocto, adding structured stages for linting, testing, and building"
      ]
    },
    {
      title: "SI-PASS Leader: Computer Science",
      company: "University of Idaho",
      duration: "Sep 2023 – Dec 2023",
      responsibilities: [
        "Facilitated collaborative instruction sessions, reinforcing programming concepts and strengthening peer performance"
      ]
    }
  ],
  
  projects: [
    {
      name: "CharAI: Agricultural Biochar Placement Application",
      technologies: ["Github", "Kanban", "Gherkin", "Mermaid"],
      duration: "Aug 2025 – Present",
      description: [
        "Applied prior experience with microservice-based architectures to guide system design and implementation",
        "Assumed project management responsibilities by coordinating team tasks and mentoring less experienced members",
        "Collaborated with faculty and clients to define requirements and clarify expectations for the product"
      ]
    },
    {
      name: "eCommerce Platform",
      technologies: ["TypeScript/React", "Vite", "Python", "MySQL"],
      duration: "Jan 2025 – May 2025",
      description: [
        "Deployed a full-stack app using K3s and Cloudflare Tunnel for secure access",
        "Designed relational schemas and exposed them via a Django REST API documented with Swagger UI",
        "Integrated backend services with a responsive frontend built using TypeScript, React, and MUI"
      ]
    },
    {
      name: "Kvis: Kubernetes Visualizer",
      technologies: ["TypeScript/React", "Vite", "Go", "Docker", "Kubernetes"],
      duration: "Jan 2025 – March 2025",
      description: [
        "Built a Go-based backend to interface with Kubernetes clusters by executing kubectl commands",
        "Developed a modular frontend using TypeScript, Vite, and React to visualize cluster data",
        "Created a fully containerized demo environment using Docker, including a lightweight Kubernetes cluster",
        "Engineered a command-line pipeline to automate build and deployment of the Kvis application"
      ]
    }
  ],
  
  extracurricular: [
    {
      organization: "Idaho Quantitative Trading Club",
      institution: "University of Idaho",
      duration: "Aug 2025 – Present",
      roles: [
        "Initiated the design of the trading platform architecture, creating diagrams and communicating high-level concepts",
        "Served as development lead for the system's execution components, overseeing implementation and design"
      ]
    },
    {
      organization: "Association of Computing Machinery",
      institution: "University of Idaho",
      duration: "Aug 2022 – Aug 2023",
      roles: [
        "Through leadership roles, organized and led meetings to foster development of computer science students and promote professional growth"
      ]
    }
  ]
};

export const getResumeContext = (): string => {
  return `
# Joseph Baruch - Resume Information

## Personal Information
- Name: ${resumeData.personalInfo.name}
- Email: ${resumeData.personalInfo.email}
- Phone: ${resumeData.personalInfo.phone}
- LinkedIn: linkedin.com/in/${resumeData.personalInfo.linkedin}
- GitHub: github.com/${resumeData.personalInfo.github}
- Website: ${resumeData.personalInfo.website}

## Professional Summary
${resumeData.summary}

## Education
${resumeData.education.map(edu => `
- ${edu.degree}${edu.gpa ? ` (GPA: ${edu.gpa})` : ''}
  ${edu.institution}
  Graduation: ${edu.graduationDate}
`).join('\n')}

## Technical Skills
- Languages: ${resumeData.technicalSkills.languages.join(', ')}
- Frameworks & Libraries: ${resumeData.technicalSkills.frameworks.join(', ')}
- DevOps & Tools: ${resumeData.technicalSkills.devops.join(', ')}

## Work Experience
${resumeData.workExperience.map(job => `
### ${job.title} | ${job.company}
${job.duration}
${job.responsibilities.map(r => `- ${r}`).join('\n')}
`).join('\n')}

## Projects
${resumeData.projects.map(project => `
### ${project.name}
Technologies: ${project.technologies.join(', ')}
Duration: ${project.duration}
${project.description.map(d => `- ${d}`).join('\n')}
`).join('\n')}

## Extracurricular Activities
${resumeData.extracurricular.map(activity => `
### ${activity.organization} | ${activity.institution}
${activity.duration}
${activity.roles.map(r => `- ${r}`).join('\n')}
`).join('\n')}
`;
};
