import { getResumeContext } from '../data/resumeData';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatResponse {
  message: string;
  error?: string;
}

/**
 * AI Agent Service using GitHub Copilot SDK
 * Answers questions about Joseph Baruch's resume
 */
class ResumeAIAgent {
  private conversationHistory: Message[] = [];
  private systemPrompt: string;

  constructor() {
    this.systemPrompt = `You are a helpful AI assistant that answers questions about Joseph Baruch's resume and professional background. 
Be friendly, professional, and accurate in your responses. Use the resume information provided to answer questions.
If someone asks a question that's not related to Joseph's resume or professional background, politely redirect them to ask about his experience, skills, education, or projects.

Here is Joseph Baruch's resume information:

${getResumeContext()}

When answering questions:
- Be concise but informative
- Highlight relevant skills and experience
- Use specific examples from the resume when appropriate
- If asked about something not in the resume, be honest and say you don't have that information
- Be enthusiastic about Joseph's accomplishments and skills
`;
    
    this.conversationHistory.push({
      role: 'system',
      content: this.systemPrompt
    });
  }

  /**
   * Send a message to the AI agent and get a response
   */
  async sendMessage(userMessage: string): Promise<ChatResponse> {
    try {
      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // For now, we'll use a simple pattern matching approach
      // In a production environment, this would call the GitHub Copilot API
      const response = this.generateResponse(userMessage);

      // Add assistant response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: response
      });

      return {
        message: response
      };
    } catch (error) {
      console.error('Error in AI agent:', error);
      return {
        message: "I'm sorry, I encountered an error. Please try asking your question again.",
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Generate a response based on the user's question
   * This is a simplified implementation. In production, this would use the actual Copilot SDK
   */
  private generateResponse(userMessage: string): string {
    const messageLower = userMessage.toLowerCase();

    // Greeting responses
    if (messageLower.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'm here to help you learn about Joseph Baruch's professional background. Feel free to ask me about his experience, skills, education, or projects!";
    }

    // Skills questions
    if (messageLower.includes('skill') || messageLower.includes('technology') || messageLower.includes('tech stack')) {
      return "Joseph has a strong technical skill set including:\n\n" +
        "**Languages**: TypeScript, JavaScript, Go, Python, C++, C\n" +
        "**Frameworks**: React, Django, FastAPI, MUI, Jest, Cypress\n" +
        "**DevOps & Tools**: Docker, Kubernetes, Helm, AWS, Jenkins, Git\n\n" +
        "He's particularly experienced in full-stack development with React/TypeScript on the frontend and Go on the backend, along with strong DevOps capabilities.";
    }

    // Education questions
    if (messageLower.includes('education') || messageLower.includes('degree') || messageLower.includes('school') || messageLower.includes('university') || messageLower.includes('gpa')) {
      return "Joseph is currently pursuing his education at the University of Idaho:\n\n" +
        "- **B.S. Computer Science, Minor in Mathematics** (GPA: 3.81) - Expected May 2026\n" +
        "- **AI/ML Undergraduate Academic Certificate** - Expected May 2026\n\n" +
        "His strong academic performance (3.81 GPA) demonstrates his dedication to learning and excellence.";
    }

    // Work experience questions
    if (messageLower.includes('experience') || messageLower.includes('work') || messageLower.includes('job') || messageLower.includes('schweitzer')) {
      return "Joseph is currently a **Software Engineer Intern at Schweitzer Engineering Laboratories** (Oct 2023 – Present), where he:\n\n" +
        "- Develops full-stack SNMP Agent Configuration applications\n" +
        "- Built an X.509 certificate management microservice with React/TypeScript frontend and Go backend\n" +
        "- Implements CI/CD pipelines using Jenkins and Docker\n" +
        "- Works with Kubernetes, Helm, and containerization\n\n" +
        "He also served as an SI-PASS Leader for Computer Science at University of Idaho (Sep 2023 – Dec 2023).";
    }

    // Projects questions
    if (messageLower.includes('project')) {
      return "Joseph has worked on several impressive projects:\n\n" +
        "**CharAI** (Aug 2025 – Present): Agricultural Biochar Placement Application using microservice architecture\n\n" +
        "**eCommerce Platform** (Jan 2025 – May 2025): Full-stack app with K3s, Django REST API, and React frontend\n\n" +
        "**Kvis: Kubernetes Visualizer** (Jan 2025 – March 2025): Go backend with React frontend for visualizing Kubernetes clusters\n\n" +
        "These projects demonstrate his expertise in full-stack development, DevOps, and microservices.";
    }

    // Contact questions
    if (messageLower.includes('contact') || messageLower.includes('email') || messageLower.includes('reach')) {
      return "You can contact Joseph through:\n\n" +
        "- **Email**: josephbaruch48@gmail.com\n" +
        "- **Phone**: (208) 369-6028\n" +
        "- **LinkedIn**: linkedin.com/in/joseph-peter-baruch\n" +
        "- **GitHub**: github.com/JosephPBaruch\n" +
        "- **Website**: josephbaruch.com";
    }

    // React/Frontend questions
    if (messageLower.includes('react') || messageLower.includes('frontend') || messageLower.includes('typescript')) {
      return "Joseph is highly experienced with React and TypeScript! He has:\n\n" +
        "- Built multiple production frontends using React, TypeScript, and MUI\n" +
        "- Developed responsive interfaces with unit testing using Jest\n" +
        "- Created full-stack applications integrating React frontends with Go and Python backends\n" +
        "- Experience with modern tooling like Vite for build optimization\n\n" +
        "This website itself is built with React and TypeScript, showcasing his frontend skills!";
    }

    // DevOps/Kubernetes questions
    if (messageLower.includes('devops') || messageLower.includes('docker') || messageLower.includes('kubernetes') || messageLower.includes('k8s')) {
      return "Joseph has strong DevOps expertise:\n\n" +
        "- **Docker**: Containerizes applications and manages registries\n" +
        "- **Kubernetes**: Deploys microservices using K3s and Helm charts\n" +
        "- **CI/CD**: Refactored pipelines using Jenkins, integrated testing with Cypress\n" +
        "- **Cloud**: Experience with AWS\n\n" +
        "He's built complete containerized environments and automated deployment pipelines in multiple projects.";
    }

    // Go/Backend questions
    if (messageLower.includes('go') || messageLower.includes('golang') || messageLower.includes('backend')) {
      return "Joseph is proficient in Go for backend development:\n\n" +
        "- Implemented REST APIs in Go with unit testing\n" +
        "- Built backend services for microservice architectures\n" +
        "- Developed a Go-based backend for Kubernetes cluster interaction\n" +
        "- Experience with both Go and Python backend frameworks (FastAPI, Django)\n\n" +
        "His work demonstrates strong backend engineering principles and API design skills.";
    }

    // Extracurricular/Leadership
    if (messageLower.includes('leadership') || messageLower.includes('club') || messageLower.includes('extracurricular')) {
      return "Joseph has shown strong leadership through extracurricular activities:\n\n" +
        "**Idaho Quantitative Trading Club** (Aug 2025 – Present):\n" +
        "- Initiated trading platform architecture design\n" +
        "- Serves as development lead for execution components\n\n" +
        "**Association of Computing Machinery** (Aug 2022 – Aug 2023):\n" +
        "- Organized meetings to foster CS student development\n" +
        "- Promoted professional growth in the community";
    }

    // General/Summary question
    if (messageLower.includes('who') || messageLower.includes('summary') || messageLower.includes('about')) {
      return "Joseph Baruch is a talented software engineer studying Computer Science at the University of Idaho (GPA 3.81). He's currently a Software Engineer Intern at Schweitzer Engineering Laboratories, where he develops full-stack microservices using React, TypeScript, and Go.\n\n" +
        "His expertise includes:\n" +
        "- Full-stack development (React/TypeScript frontend, Go/Python backend)\n" +
        "- DevOps and containerization (Docker, Kubernetes, Helm)\n" +
        "- Microservice architecture and CI/CD pipelines\n\n" +
        "Joseph is passionate about building high-quality, reliable applications and has completed several impressive projects demonstrating his skills.";
    }

    // Default response
    return "I can help you learn about Joseph Baruch's professional background! You can ask me about:\n\n" +
      "- His technical skills and technologies\n" +
      "- Work experience and internships\n" +
      "- Education and academic achievements\n" +
      "- Projects he's worked on\n" +
      "- How to contact him\n" +
      "- His leadership and extracurricular activities\n\n" +
      "What would you like to know?";
  }

  /**
   * Clear conversation history
   */
  clearHistory(): void {
    this.conversationHistory = [{
      role: 'system',
      content: this.systemPrompt
    }];
  }

  /**
   * Get conversation history
   */
  getHistory(): Message[] {
    return this.conversationHistory;
  }
}

// Export a singleton instance
export const resumeAIAgent = new ResumeAIAgent();
export type { Message, ChatResponse };
