// all my site content is in here so I don't have to dig through components to change text

import python from '../assets/icons/python.svg'
import java from '../assets/icons/java.svg'
import csharp from '../assets/icons/csharp.svg'
import cplusplus from '../assets/icons/cplusplus.svg'
import javascript from '../assets/icons/javascript.svg'
import html5 from '../assets/icons/html5.svg'
import css3 from '../assets/icons/css3.svg'
import mysql from '../assets/icons/mysql.svg'
import git from '../assets/icons/git.svg'
import github from '../assets/icons/github.svg'
import linux from '../assets/icons/linux.svg'
import react from '../assets/icons/react.svg'
import tailwind from '../assets/icons/tailwindcss.svg'
import unity from '../assets/icons/unity.svg'
import pandas from '../assets/icons/pandas.svg'
import sklearn from '../assets/icons/scikitlearn.svg'
import vscode from '../assets/icons/vscode.svg'

export const profile = {
  firstName: 'Allie',
  fullName: 'Alexandria Vincent',
  email: 'avince04@villanova.edu',
  linkedin: 'https://www.linkedin.com/in/alexandria-aa-vincent',
  github: 'https://github.com/allievincent',
  resume: '/Alexandria_Vincent_Resume.pdf',
  // headshot goes in /public. if it's missing the site just shows my initials
  photo: '/headshot.jpeg',
  typing: ['CS student @ Villanova', 'cybersecurity researcher', 'D1 goalkeeper 🧤'],
}

export const experience = [
  {
    title: 'Undergraduate Cybersecurity Research Assistant',
    company: 'Villanova University',
    date: 'June 2026 - Present',
    bullets: [
      'Research on LLM-assisted intrusion detection with a faculty mentor, looking at explainability and combining evidence from different types of security data.',
      'Built a Python pipeline that pairs up TON_IoT Windows host logs and network-flow data into 21,000+ events across 7 attack classes.',
      'Trained decision-tree detectors for each data type and split the data by attack episode so near-duplicate events don\'t leak into the test set.',
      'Noticed the trees were tying on almost a third of fusion decisions, so I came up with a probability calibration method that got rid of every tie without losing accuracy.',
      'Ran 19,000+ GPT-4o API calls comparing LLM fusion to mechanical and learned baselines, including how much prompt wording and input order change the results (bootstrap CIs + McNemar tests).',
      'Co-authoring a conference paper (in preparation). I\'m in charge of the methodology, results, and reproducibility docs.',
    ],
    tech: ['Python', 'scikit-learn', 'pandas', 'GPT-4o'],
  },
  {
    title: 'IT Security Engineering Intern',
    company: 'Entry Point Communications',
    date: 'May 2026 - Sept 2026',
    bullets: [
      'Designed, built, and tested a modular Python pen-testing framework for authorized kiosk assessments (host discovery, TCP port scanning, service enumeration).',
      'Made it configuration-driven with logging and structured reports so other engineers could actually use it.',
      'Did authorized network and wireless testing on physical kiosk hardware using Linux security tools and presented what I found to the engineers.',
      'Wrote the docs for setup, running it, and handoff. Also evaluated security awareness training platforms for SOC 2.',
    ],
    tech: ['Python', 'Nmap', 'Linux', 'SOC 2'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Entry Point Communications',
    date: 'Summer 2025 & Dec 2025 - Jan 2026',
    bullets: [
      'Developed a Python barcode scanning system that plugs into EPC\'s production software using a plugin-based architecture.',
      'Worked with USB scanners, scan processing, structured output, and logging.',
      'Came back over winter break to keep debugging and testing it, using Git and CI/CD.',
    ],
    tech: ['Python', 'Git', 'CI/CD'],
  },
  {
    title: 'NCAA D1 Women\'s Soccer & SAAC Representative',
    company: 'Villanova Athletics',
    date: 'Aug 2023 - Present',
    bullets: [
      'Goalkeeper on the women\'s soccer team. About 20 hours a week of practice, games, lifting and film while keeping a 3.88 GPA.',
      'Represent my team on the Student-Athlete Advisory Committee and bring athletes\' concerns to the athletic administration.',
      'Soccer camp counselor for youth players.',
    ],
    tech: [],
  },
]

export const education = {
  school: 'Villanova University',
  degrees: [
    'B.S. Computer Science, Minor in Cybersecurity (May 2027)',
    'M.S. Computer Science, 5-year BS/MS program (May 2028)',
  ],
  gpa: '3.88 / 4.00',
  honors: 'Dean\'s List every semester, Core English Honor Roll',
  coursework: ['Algorithms & Data Structures', 'Analysis of Algorithms', 'Discrete Structures', 'Theory of Computability (Graduate)', 'Computer Systems I & II', 'Software Engineering', 'Database Systems', 'Programming Languages (Graduate)', 'Cybersecurity', 'Digital Forensics', 'Platform-Based Computing', 'Full Stack Web Development (Graduate)', 'Computing for Social Good', 'Linear Algebra for Computing', 'Computer Ethics'],
}

export const skills = [
  { name: 'Python', icon: python },
  { name: 'Java', icon: java },
  { name: 'C#', icon: csharp },
  { name: 'C++', icon: cplusplus },
  { name: 'JavaScript', icon: javascript },
  { name: 'SQL', icon: mysql },
  { name: 'HTML', icon: html5 },
  { name: 'CSS', icon: css3 },
  { name: 'React', icon: react },
  { name: 'Tailwind', icon: tailwind },
  { name: 'scikit-learn', icon: sklearn },
  { name: 'pandas', icon: pandas },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github, invert: true },
  { name: 'Linux', icon: linux },
  { name: 'Unity', icon: unity, invert: true },
  { name: 'VS Code', icon: vscode },
]

export const securitySkills = [
  'Penetration Testing', 'Nmap', 'Intrusion Detection', 'LLM-Assisted Detection', 'Model Evaluation',
  'Probability Calibration', 'Hypothesis Testing', 'Decision Trees', 'Digital Forensics', 'CI/CD',
]

export const projects = [
  {
    title: 'LLM-Assisted Intrusion Detection',
    icons: [python, sklearn, pandas],
    description: 'My research project. Testing when GPT-4o actually helps combine host and network detectors, and when it makes things worse.',
    tech: ['Python', 'scikit-learn', 'GPT-4o'],
    page: '/research',
  },
  {
    title: 'Kiosk Pen-Testing Framework',
    icons: [python, linux],
    description: 'Python framework I built at my internship for authorized kiosk security assessments. Scans hosts and ports, enumerates services, and writes a report.',
    tech: ['Python', 'Nmap', 'Linux'],
  },
  {
    title: 'XR Sports Prediction & Trivia',
    icons: [unity, csharp],
    invertFirst: true,
    description: 'Capstone project. An extended reality app on Magic Leap 2 where you make predictions and answer trivia during live games, with a leaderboard.',
    tech: ['Unity', 'C#', 'Magic Leap 2'],
  },
  {
    title: 'Barcode Scanning System',
    icons: [python, git],
    description: 'Plugin-based Python system that takes USB scanner input and turns it into structured, logged data for EPC\'s production software.',
    tech: ['Python', 'Git', 'CI/CD'],
  },
  {
    title: 'This Website',
    icons: [react, tailwind, javascript],
    description: 'My portfolio for Full Stack Web Development. React + Vite + Tailwind, React Router, reusable components, and dark mode.',
    tech: ['React', 'Tailwind', 'Vercel'],
    github: 'https://github.com/allievincent',
  },
]

export const funFacts = [
  'Goalkeeper for Villanova Women\'s Soccer',
  'Proud owner of Mac, my English bulldog',
  'Conversational Spanish',
  'Really into XR / AR dev',
  'Volunteered with Special Olympics',
  'Youth soccer camp counselor',
]
