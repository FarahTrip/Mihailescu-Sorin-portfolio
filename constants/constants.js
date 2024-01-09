export const NAME = 'Mihailescu Sorin Daniel';

export const DESIGNATION = `Software developer | AI Enthusiast | Musician`;

export const DETAILS = {
  Residence: 'Romania',
  City: 'Bucuresti',
  Age: calculateAge('1998-05-18'),
};

function calculateAge(birthdate) {
  const birthdateObj = new Date(birthdate);
  const currentDate = new Date();

  const timeDiff = currentDate - birthdateObj;

  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

  return years;
}

export const SKILLS = [
  {
    title: 'NestJs (back-end)',
    level: '75%',
  },
  {
    title: 'NextJs (front-end)',
    level: '70%',
  },
  // {
  //   title: 'Desktop Application Developer',
  //   level: '75%',
  // },
  {
    title: 'Leadership',
    level: '81%',
  },
  {
    title: 'C# & .NET, ASP.NET',
    level: '65%',
  },
  
  {
    title: 'Machine learning',
    level: '32%',
  },
];

export const TECH_STACK = [
  'Typescript',
  'ReactJS',
  'JavaScript',
  'NextJS',
  'NestJs',
  'NodeJS',
  'Docker',
  'CSS',
  'REST API',
  'C#',
  '.NET MVC & CORE',
  'Python',
  'TailwindCSS',
  'Supabase',
  'PostgreSql',
  'Material UI',
  'Next UI',
  'SCSS',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
  'Azure Boards',
  'Jira'
];

export const CONTACTS = {
  EMAIL: 'sorin.mihailescu@outlook.com',
  PHONE: '+40 0720590096',
};
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/FarahTrip',
  LINKEDIN: 'https://www.linkedin.com/in/mihailescu-sorin-daniel-46a370189/',
  TWITTER: '',
  FACEBOOK: '',
};
