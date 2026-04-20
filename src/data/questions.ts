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
      'You discover confidential information that a colleague is leaking sensitive data to a competitor. Reporting it may ruin their career but ignoring it risks the company. What do you do?',
    options: {
      a: {
        text: 'Gather evidence and report the issue to upper management.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Confront the colleague privately to understand their motives.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on the ethical implications before acting.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore it to avoid damaging workplace relationships.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    question:
      'A close colleague is underperforming due to personal struggles, affecting the entire project. How do you handle it?',
    options: {
      a: {
        text: 'Offer emotional support and adjust their workload temporarily.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Reassign critical tasks to ensure the project stays on track.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on how you can help without crossing personal boundaries.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore the issue to avoid getting involved in their personal life.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
    question:
      'A trusted employee is caught violating company policies. How do you handle it?',
    options: {
      a: {
        text: 'Apply the same disciplinary action as for others.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Talk to them privately to understand their reasoning.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on whether the rule they broke is fair.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore the issue to avoid damaging the relationship.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
    question:
      'Your company is launching a product that could harm a small competitor. What do you do?',
    options: {
      a: {
        text: "Analyze the market to ensure it's a fair competition.",
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Discuss the ethical implications with your team.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on whether the product aligns with your values.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      d: {
        text: 'Ignore the impact and focus on maximizing profits.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 17,
    question:
      'A coworker is spreading false rumors about you. How do you handle it?',
    options: {
      a: {
        text: 'Confront them calmly to resolve the issue.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Report the behavior to management.',
        intelligence: 'logical',
        score: 2,
      },
      c: {
        text: 'Reflect on whether addressing it is worth the conflict.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore it and focus on your work.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 18,
    question:
      'You’re offered a lucrative job at a company known for unethical practices. What do you do?',
    options: {
      a: {
        text: 'Decline the offer due to ethical concerns.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      b: {
        text: 'Accept and try to promote ethical practices from within.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Analyze if the role directly involves unethical behavior.',
        intelligence: 'logical',
        score: 2,
      },
      d: {
        text: 'Accept the offer without considering ethics.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 19,
    question:
      'You are leading a project, but your team is resistant to change. How do you encourage innovation?',
    options: {
      a: {
        text: 'Present data showing how innovation leads to success.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Create a safe space for brainstorming and idea-sharing.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on your leadership style to inspire change.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Implement changes without team input to speed up progress.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 20,
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
    id: 21,
    question:
      'You are tasked with leading a project in an unfamiliar field. How do you ensure its success?',
    options: {
      a: {
        text: 'Conduct in-depth research and analyze past case studies.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Collaborate with experts in the field for guidance.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on how to adapt your skills to the new challenge.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Delegate most tasks to experienced team members.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 22,
    question:
      'Two of your closest friends are in a serious conflict and want you to choose sides. How do you handle it?',
    options: {
      a: {
        text: 'Mediate a conversation to help them resolve the conflict.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Stay neutral and avoid getting involved.',
        intelligence: 'logical',
        score: 2,
      },
      c: {
        text: "Reflect on which friend's perspective aligns more with your values.",
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Distance yourself from both to avoid tension.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 23,
    question:
      "You're offered a chance to work abroad, but your family is hesitant. What do you do?",
    options: {
      a: {
        text: 'Discuss the pros and cons with your family to reach a joint decision.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Analyze the career benefits and decide independently.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on how this move aligns with your life goals.',
        intelligence: 'intrapersonal',
        score: 3,
      },
      d: {
        text: 'Decline the offer to avoid causing family discomfort.',
        intelligence: 'emotional',
        score: 2,
      },
    },
  },
  {
    id: 24,
    question:
      'Your colleague is taking credit for your ideas in meetings. How do you respond?',
    options: {
      a: {
        text: 'Address it calmly with the colleague in private.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Gather evidence and report it to your supervisor.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on whether it’s worth addressing or letting go.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Start taking credit for their work in return.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 25,
    question:
      'You’re leading a project, but unexpected obstacles are causing delays. How do you handle the situation?',
    options: {
      a: {
        text: 'Reassess the plan and develop a new strategy.',
        intelligence: 'logical',
        score: 3,
      },
      b: {
        text: 'Motivate the team and address concerns to boost morale.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on personal leadership improvements to adapt.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore the problems and push the team to work harder.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 26,
    question:
      'You’re managing a project, and a team member consistently misses deadlines. How do you address this issue?',
    options: {
      a: {
        text: 'Privately discuss the problem and offer support to improve.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Reassign their tasks to more reliable team members.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on whether your management style contributes to the issue.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Publicly call out their behavior to pressure improvement.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 27,
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
    id: 28,
    question:
      'You notice a colleague is excluded from team activities. How do you handle it?',
    options: {
      a: {
        text: 'Talk to the team about being more inclusive.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Invite the colleague to join group activities yourself.',
        intelligence: 'emotional',
        score: 3,
      },
      c: {
        text: 'Reflect on why they might be excluded.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Ignore it; it’s their responsibility to fit in.',
        intelligence: 'logical',
        score: 1,
      },
    },
  },
  {
    id: 29,
    question:
      'Your team disagrees on the best approach to solve a complex problem. What is your strategy?',
    options: {
      a: {
        text: 'Facilitate a structured discussion to find common ground.',
        intelligence: 'emotional',
        score: 3,
      },
      b: {
        text: 'Conduct a data-driven analysis to determine the best solution.',
        intelligence: 'logical',
        score: 3,
      },
      c: {
        text: 'Reflect on which solution aligns best with your leadership style.',
        intelligence: 'intrapersonal',
        score: 2,
      },
      d: {
        text: 'Choose the option with the most support and move forward.',
        intelligence: 'logical',
        score: 2,
      },
    },
  },
  {
    id: 30,
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
