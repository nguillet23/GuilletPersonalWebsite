import type { Profile } from "../types/profile";

export const profile: Profile = {
  name: "Nicholas Guillet",
  role: "Computer Engineer",
  heroPitch:
    "Computer Engineering senior at Villanova University building software, data pipelines, and AI workflows. Open to relocation.",
  bio: [
    [
      "I'm a ",
      { strong: "Computer Engineering" },
      " student who builds ",
      { strong: "software, machine-learning models, data pipelines, and AI workflows" },
      " that connect engineers, business teams, and customers. My goal is to become a technical leader on Agile teams that own systems end to end.",
    ],
    [
      "I'm on track to receive my Bachelor of Science in Computer Engineering from ",
      { strong: "Villanova University" },
      " in May 2027, with minors in Mathematics, Computer Science, and Business.",
    ],
    [
      "During the summer of 2026, I was a ",
      { strong: "Software Engineer Intern at ConstructConnect" },
      ", where I improved an NLP model's precision and recall by over 20%.",
    ],
    [
      "When I'm not engineering, I'm likely outside playing ",
      { strong: "Ultimate Frisbee" },
      " at Villanova, where I am a ",
      { strong: "Captain" },
      " for Villanova Club Ultimate Frisbee.",
    ],
  ],
};
