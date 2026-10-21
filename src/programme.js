export const events = [
  {
    topic: "AI",
    format: "Workshop",
    title: "Build a tiny AI search engine",
    summary: "From a handful of documents to answers you can inspect.",
    outcome: "A working retrieval demo + an evaluation checklist",
    audience: "Curious beginners with basic Python",
    preparation:
      "Bring a laptop. A small public dataset and a local-first starter would be provided.",
    steps: [
      "Turn a question into a search query",
      "Retrieve evidence from a small document collection",
      "Check whether an answer is supported by its sources",
    ],
    description:
      "A proposed hands-on introduction to retrieval and grounded answers. Explore what makes a useful AI prototype, where it can fail, and how to test it. No paid API account is required for this sample format.",
    visual: "search",
  },
  {
    topic: "Open source",
    format: "Buildathon",
    title: "Make a useful first contribution",
    summary: "Find a small problem. Leave a project a little better.",
    outcome:
      "A reproducible issue, a small patch, or a documentation pull request",
    audience: "First-time contributors and experienced collaborators",
    preparation:
      "Basic Git familiarity helps. Documentation and accessibility contributions are welcome too.",
    steps: [
      "Read the project and reproduce a small issue",
      "Pair up to make a focused change",
      "Explain the change and share a reviewable contribution",
    ],
    description:
      "A proposed collaborative session around public open-source projects. The emphasis is on understanding a real user problem, respecting project guidelines, and producing a thoughtful contribution rather than a rushed feature.",
    visual: "source",
  },
  {
    topic: "Science",
    format: "Research circle",
    title: "One paper. Better questions.",
    summary: "Read the method, question the evidence, reproduce a result.",
    outcome: "An annotated paper map + a small reproducibility notebook",
    audience: "Anyone ready to ask questions; no research background needed",
    preparation:
      "A public-access paper would be shared in advance. Reading every equation is not a prerequisite.",
    steps: [
      "Frame the question the paper is trying to answer",
      "Separate the claim, method, and evidence",
      "Try a small experiment and document what remains uncertain",
    ],
    description:
      "A proposed research discussion for people who want to understand how an idea works. We would work through one accessible paper together, compare interpretations, and practice asking useful questions.",
    visual: "science",
  },
  {
    topic: "Community",
    format: "Show & tell",
    title: "Bring your unfinished thing",
    summary: "A notebook, a prototype, a question. Start from there.",
    outcome: "Specific feedback + a clear next experiment",
    audience: "Learners, makers, and people between ideas",
    preparation:
      "Bring a small work in progress or a question. A polished presentation is not expected.",
    steps: [
      "Share the problem and what you have tried",
      "Ask for one kind of feedback",
      "Leave with a manageable next step",
    ],
    description:
      "A proposed low-pressure community session for work in progress. The goal is to make it easier to share early, learn from different perspectives, and turn feedback into the next small step.",
    visual: "community",
  },
];
export const paths = {
  learner: {
    title: "Start with curiosity.",
    description:
      "You do not need a finished project or a perfect introduction. Pick a topic, bring a question, and learn by trying something small.",
    steps: [
      "Explore a sample workshop or research circle",
      "Note one thing you would like to understand",
      "Follow chapter updates for confirmed opportunities",
    ],
    action: "Explore sample programmes",
    target: "#programme",
  },
  builder: {
    title: "Give an idea its first version.",
    description:
      "Bring a rough prototype, a public issue, or a problem worth solving. Build alongside others and make the process understandable.",
    steps: [
      "Choose a small, useful problem",
      "Make your work easy to run and review",
      "Share what worked, what failed, and what comes next",
    ],
    action: "Try the build experiment",
    target: "#lab",
  },
  mentor: {
    title: "Make the next step easier.",
    description:
      "Help someone frame a question, review a contribution, or understand a method. Clear feedback can be more valuable than a complete answer.",
    steps: [
      "Identify a topic you can help explain",
      "Think of a practical, beginner-friendly session",
      "Contact the chapter through its public LinkedIn page",
    ],
    action: "Visit chapter LinkedIn",
    target: "https://www.linkedin.com/company/gsx-delhi-chapter",
  },
  partner: {
    title: "Create space for good work.",
    description:
      "Have an idea for a learning space, a problem statement, or an accessible community activity? Start a conversation with the chapter.",
    steps: [
      "Describe the audience and the useful outcome",
      "Consider accessibility and participation needs",
      "Discuss a proposal with the chapter before making commitments",
    ],
    action: "Start a chapter conversation",
    target: "https://www.linkedin.com/company/gsx-delhi-chapter",
  },
};
