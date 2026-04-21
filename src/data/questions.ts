import type { Question } from '../types/quiz'

export const questions = [
  {
    id: 1,
    question:
      'Your company is facing a financial crisis. The leadership proposes cutting employee benefits to reduce costs. As a manager, how do you respond?',
    options: {
      a: {
        text: 'Analyze financial data to suggest alternative cost-cutting strategies.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Discuss the proposal with employees to gauge their concerns.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Support the decision to protect the company despite dissatisfaction.',
        intelligence: 'logical',
        score: 2,
      },
      d: {
        text: 'Reflect on your values and consider resigning if you disagree.',
        intelligence: 'intrapersonal',
        score: 2,
      },
    },
  },
  {
    id: 2,
    question:
      'A key team member is going through a personal crisis, affecting their performance on a critical project. How do you handle the situation?',
    options: {
      a: {
        text: 'Offer flexible deadlines and emotional support to ease their workload.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Reassign tasks to balance the project timeline without burdening them.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Encourage them to take a break, prioritizing their well-being.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Keep them accountable to maintain team productivity.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 3,
    question:
      "You're managing a multicultural team, and cultural misunderstandings are causing tension. How do you address this?",
    options: {
      a: {
        text: 'Organize cultural sensitivity workshops to foster understanding.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Create clear guidelines for professional communication.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Privately reflect on how your leadership might contribute to the issue.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Encourage team members to resolve issues independently.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 4,
    question:
      "Your startup faces a moral dilemma: accepting funding from a controversial investor could secure long-term growth but harm your brand's ethical image. What is your decision?",
    options: {
      a: {
        text: 'Accept the funding and implement policies to maintain ethical practices.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Reject the funding to stay aligned with your brand values.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      c: {
        text: "Negotiate terms to minimize the investor's influence.",
        intelligence: 'logical',
        score: 2,
      },
      d: {
        text: 'Consult stakeholders and employees before making a decision.',
        intelligence: 'emotional',
        score: 3,
      },
    },
  },
  {
    id: 5,
    question:
      'Your team is divided over two equally strong strategies for a product launch. How do you proceed?',
    options: {
      a: {
        text: 'Analyze market data to choose the most promising strategy.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Facilitate a group discussion to combine the best ideas from both.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on past experiences to decide which strategy feels right.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Let the team vote and follow the majority decision.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 6,
    question:
      'Your supervisor rejects your innovative idea without explanation. What do you do?',
    options: {
      a: {
        text: 'Request constructive feedback to improve your idea.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Analyze why the idea might not align with company goals.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on whether the feedback is valid or emotionally driven.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Drop the idea and move on to other tasks.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 7,
    question:
      "You're offered a leadership role, but it requires relocating far from your family. How do you decide?",
    options: {
      a: {
        text: 'Logically weigh pros and cons of career growth vs. family impact.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Discuss the opportunity with your family to understand their feelings.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on your personal values and long-term goals.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      d: {
        text: 'Accept the role immediately for the career advancement.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 8,
    question:
      'Your company is transitioning to automation, risking job losses. As a leader, how do you handle employee concerns?',
    options: {
      a: {
        text: 'Hold open forums to address fears and provide clarity.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Develop reskilling programs for affected employees.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Privately reflect on how this change aligns with your leadership values.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Avoid discussing it until formal decisions are made.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 9,
    question:
      'Your team is behind schedule, and management pressures you to meet the deadline, risking quality. What do you do?',
    options: {
      a: {
        text: 'Reprioritize tasks and focus on critical features to meet the deadline.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Communicate the risks to management and negotiate for more time.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect if lower quality aligns with your standards.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Push the team harder to finish everything on time.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 10,
    question:
      'You need to make a tough decision that could disappoint many people but is necessary for long-term success. How do you approach it?',
    options: {
      a: {
        text: 'Evaluate the long-term benefits and proceed logically.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Hold discussions to help stakeholders understand the reasoning.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Consider how this decision aligns with your personal integrity.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      d: {
        text: 'Avoid making the decision until absolutely necessary.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 11,
    question:
      "You're offered an opportunity to work on a high-profile project, but you're unsure if you have the skills. What do you do?",
    options: {
      a: {
        text: 'Accept and commit to learning what’s necessary.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: "Analyze your current skills to see if you're ready.",
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Discuss your concerns with the project leader.',
        intelligence: 'emotional',
        score: 2,
      },
      d: {
        text: 'Decline to avoid the risk of failure.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 12,
    question:
      'You’re in a debate and realize your argument may be flawed. How do you respond?',
    options: {
      a: {
        text: 'Acknowledge the flaw and adapt your stance.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: 'Defend your argument using logic despite the flaw.',
        intelligence: 'logical',
        score: 2,
      },
      c: {
        text: "Consider the other person's perspective with empathy.",
        intelligence: 'emotional',
        score: 3,
      },
      d: {
        text: 'Change the topic to avoid admitting you’re wrong.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 13,
    question:
      'You make a mistake that negatively impacts a major client. What is your response?',
    options: {
      a: {
        text: 'Admit the mistake and propose a solution.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: 'Apologize to the client and offer compensation.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Analyze how the mistake happened and fix it silently.',
        intelligence: 'logical',
        score: 2,
      },
      d: {
        text: 'Ignore the issue and hope it resolves itself.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 14,
    question:
      'A decision you made led to a significant failure in a project. How do you respond?',
    options: {
      a: {
        text: 'Take full responsibility and work on solutions.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: 'Analyze what went wrong to prevent future mistakes.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Apologize to the team and discuss how to move forward.',
        intelligence: 'emotional',
        score: 3,
      },
      d: {
        text: 'Blame external factors to shift responsibility.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 15,
    question:
      'You receive feedback that your communication style is too direct and off-putting. How do you handle it?',
    options: {
      a: {
        text: 'Reflect on the feedback and adjust how you communicate.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: 'Ask for specific examples to better understand the issue.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Ignore the feedback; directness is necessary for efficiency.',
        intelligence: 'logical',
        score: 1,
      },
      d: {
        text: 'Seek advice from a mentor on improving communication skills.',
        intelligence: 'logical',
        score: 2,
      },
    },
  },
] satisfies Question[]
