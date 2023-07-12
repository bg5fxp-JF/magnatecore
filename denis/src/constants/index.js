import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Copywriter",
    icon: web,
  },
  {
    title: "Sales & Marketing Lion",
    icon: mobile,
  },
  {
    title: "Web developer",
    icon: backend,
  },
  {
    title: "Fitness Guru",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Operations Administrator",
    company_name: "Simply Smart Home",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2020 - August 2022",
    points: [
      "Built alliances and partnerships with other organisations, improving company networks.",
      "Collaborating with cross-functional teams including Analysed policies, planning, and strategy, resulting in more efficient operations.",
      "Oversaw budgeting, reporting, planning, and auditing, ensuring financial responsibility.",
      "Testing and troubleshooting the companies products, finding ways to constantly improve customer satisfaciton.",
    ],
  },
  {
    title: "Software Engineer - Application Developer",
    company_name: "Accenture",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on software development using Agile and Waterfall methodologies.",
      "Developing Automated bots for clients to create a more efficient business",
    ],
  },
  {
    title: "Copywriter",
    company_name: "Crew LT",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Conducted intensive research and utilised persuasive skills to drive sales.",
      "Leveraged copywriting skills to generate leads for the client.",
      "Collaborated with team members, ensuring consistent communication and productivity.",
      "Utilised bilingual skills for contract translation. (English, Lithuanian, Russian)",
    ],
  },
  {
    title: "Personal Fitness Guru",
    company_name: "with Jacob",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed personalized workout plans tailored to the individual's current fitness level, ensuring optimal progress and safety.",
      "Provided comprehensive guidance on nutritional information, aligning diet with fitness goals to promote overall health and wellbeing.",
      "Conducted one-on-one training sessions, teaching correct techniques for a variety of exercises including calisthenics, weight lifting, and yoga.",
      "Regularly evaluated client's progress, adjusting fitness plans as needed and providing motivational support throughout their fitness journey.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Splunk Automation | Accenture",
    description:
      "Splunk automation streamlines processes, collects data, and automates tasks for increased efficiency. Accenture clients gain improved efficiency, security, and data-driven insights.",
    tags: [
      {
        name: "backend",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.splunk.com/",
  },
  {
    name: "Amazon FBA Report Comparison",
    description:
      "An Excel macro-based work calculates and generates financial data for a smart home tech company on Amazon FBA, comparing current daily sales to previous years.",
    tags: [
      {
        name: "excel(macro-functions)",
        color: "blue-text-gradient",
      },
      {
        name: "Amazon FBA backend",
        color: "green-text-gradient",
      },
      {
        name: "data",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.mysimplysmarthome.com/",
  },
  {
    name: "Personal Fitness",
    description:
      "Providing bespoke fitness planning, nutritional advice, and personal training in calisthenics, weight lifting, and yoga to help clients achieve their health and fitness goals.",
    tags: [
      {
        name: "nutrition",
        color: "blue-text-gradient",
      },
      {
        name: "transformative",
        color: "green-text-gradient",
      },
      {
        name: "lifechanging ",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
