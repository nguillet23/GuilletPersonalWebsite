import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "C++",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flask",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    invert: true,
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "PyTorch",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Unity",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
    invert: true,
  },
  {
    name: "Google Cloud",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

/** Named in a line under the icon grid rather than given an icon each. */
export const alsoWorkWith: string[] = [
  "SQL",
  "pandas",
  "NumPy",
  "scikit-learn",
  "NLP",
  "LLM APIs (Anthropic, OpenAI)",
  "RAG",
  "pgvector",
  "Vertex AI",
  "Airflow",
  "Tableau",
];
