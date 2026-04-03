export const agentDevGuide = {
  type: 'agent_development',
  title: 'Your Agent Development Project',
  sections: [
    {
      heading: 'What Is an AI Agent?',
      content:
        'An AI agent is software that can perform tasks autonomously on your behalf — ' +
        'answering customer questions, processing data, automating workflows, or making decisions based on rules you define. ' +
        'Think of it as a digital team member that handles repetitive work 24/7.',
    },
    {
      heading: 'What We Need From You',
      content:
        'To build your agent, we need to understand: what tasks should it handle? What tools/systems does it need to connect to? ' +
        'What data does it need access to? What are the rules and guardrails? ' +
        'The onboarding questionnaire covers all of this, but the more detail you provide, the better the result.',
    },
    {
      heading: 'Integrations & Data Sources',
      content:
        'Agents work best when connected to your existing tools — CRMs, email, databases, APIs, spreadsheets. ' +
        'List all the systems you currently use in the questionnaire. We\'ll evaluate which integrations are feasible ' +
        'and prioritize them by impact.',
    },
    {
      heading: 'Testing & Iteration',
      content:
        'Agent development is iterative. We\'ll build a first version, test it with real scenarios, ' +
        'and refine based on results. Expect 2-3 iteration cycles before the agent is production-ready. ' +
        'Your feedback during testing is critical — you know your domain best.',
    },
    {
      heading: 'After Launch',
      content:
        'Once deployed, agents need monitoring. We\'ll set up logging and alerting so you can see what your agent is doing ' +
        'and catch any issues early. Most agents improve over time as they encounter more scenarios.',
    },
  ],
};
