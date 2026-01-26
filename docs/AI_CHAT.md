# AI Chat Agent

This directory contains the AI chat agent implementation for the personal website.

## Overview

The AI chat agent provides an interactive way for website visitors to learn about Joseph Baruch's professional background, skills, and experience by asking questions in natural language.

## Components

### 1. Resume Data (`src/data/resumeData.ts`)
- Contains structured resume information
- Exports helper function `getResumeContext()` for generating AI context
- Easy to update when resume changes

### 2. AI Agent Service (`src/services/aiAgent.ts`)
- Handles question processing and response generation
- Uses pattern matching for intelligent responses
- Maintains conversation history during session
- Designed for future GitHub Copilot SDK integration

### 3. Chat UI Component (`src/components/AIChat.tsx`)
- Floating chat button (bottom-right corner)
- Responsive chat window
- Clean Material-UI design
- Message history display

## Features

The AI agent can answer questions about:
- **Technical Skills**: Programming languages, frameworks, tools
- **Work Experience**: Current internship, responsibilities, achievements
- **Education**: Degree, GPA, certificates
- **Projects**: CharAI, eCommerce Platform, Kvis Kubernetes Visualizer
- **Contact Information**: Email, phone, LinkedIn, GitHub
- **Leadership**: Extracurricular activities and roles

## Usage

Visitors can:
1. Click the floating chat button (robot icon) in the bottom-right corner
2. Type questions about Joseph's background
3. Receive instant, contextual responses
4. Continue the conversation with follow-up questions
5. Close the chat by clicking the X button

## Example Questions

Try asking:
- "What programming languages does Joseph know?"
- "Tell me about his work experience"
- "What is his GPA?"
- "What projects has he worked on?"
- "How can I contact him?"
- "What are his DevOps skills?"

## Updating Resume Information

To update the resume information:
1. Edit `src/data/resumeData.ts`
2. Update the relevant sections (personalInfo, workExperience, projects, etc.)
3. The AI agent will automatically use the new information

## Future Enhancements

Potential improvements:
- Integration with GitHub Copilot SDK for more advanced AI capabilities
- Support for more complex questions and multi-turn conversations
- Analytics to track common questions
- Multi-language support
- Voice input/output capabilities
