import { CvItem } from '../models/cv-item.model';
import { Recommendation } from '../models/recommendation.model';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Toby Harding',
  position: 'Agile Project Manager and Technical Consultant',
  description: 'Toby Harding graduated from York University with a masters degree in Electronic Systems Engineering and has ' +
  'over 26 years experience of software development, technical presales and waterfall/Agile project management. ' +
  'He is an enthusiastic and self-motivated technical project manager, team leader and technical consultant, ' +
  'with a software development background from Pascal, through C++ into Java. He has an excellent knowledge of ' +
  'Agile and waterfall project management methodologies (PRINCE2 Practitioner certified), and has a proven track ' +
  'record of delivering projects on time, to specification and within budget. A confident communicator at all ' +
  'levels of business. ',
  overview: [
    'Toby has worked with BT, Concert, Empower Interactive, Incomit, BEA, SmartTrust, Aepona, AirSense Wireless, ' +
    'London Translations, Anatwine, Oracle and Dyson. ',
    'At Oracle, Toby was Programme Manager for Oracle Retail Commerce Consulting, working with global retailers deploying services ' +
    'into the Oracle Cloud suite alongside a team of project managers who each led multiple onshore and offshore Agile delivery teams. ',
    'At Dyson, Toby was a Senior Project Manager working in Global IT on a global transformation project with outsourced ' +
    'offshore QA teams. ',
    'With a strong hands-on approach to Agile software development, quality assurance and associated tools (including TeamGantt, ' +
    'Smartsheet, Bitbucket, IntelliJ, Bamboo, Jenkins, AWS, Zephyr, JIRA and Confluence), Toby is often seen with his hands ' +
    'in the code helping his colleagues understand how business requirements should be fulfilled, and how to make ' +
    'improvements to project and business processes. ',
    'In his spare time, his inner-geek appears, and Toby is improving his functional programming with Java 8 and ' +
    'learning Spring MVC and Spring JPA. He also created the initial version of this webpage in Angular just because he had some spare time, ' +
    'and then extended it using the AngularCV project (see About section). His CSS skills could be improved, and that\'s where Udemy comes in. ',
    'Due to his love of great food, wine, and the occasional G&T, Toby is a keen cyclist, spending time pedalling ' +
    'around the hills of the Cotswolds. He\'s also a keen breadmaker, improving on his sourdough every time it\'s made, ' +
    'and as a proficient pianist he is helping his daughter learn the violin, although the accompaniments are getting ' +
    'harder and harder!'
  ],
  image: 'header-footer-background.jpg'
};
// tslint:enable:max-line-length

// export class CvItem {
//   title: string;
//   subtitle: string;
//   begin?: string;
//   end?: string;
//   description?: string;
//   achievements?: string[];
//   tags?: string[];
//   link?: string;
//   thumbnail?: string;
//   attachment?: string;
//   image?: string;
// }

export const CVITEMS: CvItem[] = [
  {
    title: 'Harding Leadership Consulting',
    subtitle: 'Technical Consultant',
    begin: '2020-03',
    end: '',
    description: 'Harding Leadership Consulting specialises in executive coaching and bespoke learning for organisations, leaders and teams, underpinned by psychology. ' +
    'It also has a less well-known technical consulting arm (Toby)',
    achievements: [
      'Lifestyle Retail Group / Secret Sales - integration consultant',
      'Zoom training and onboarding for teams during Coronavirus pandemic 2020, including New Zealand schools, Henley Business School and British Swimming',
      'Bespoke website development in Angular (mates\' rates can apply).'
    ],
    link: 'https://hardingconsulting.com',
    thumbnail: 'companies/hlc.png',
  },
  {
    title: 'Dyson',
    subtitle: 'Senior Project Manager, Global/IT, reporting to the Senior Programme Manager, Aurora upgrade programme',
    begin: '2019-11',
    end: '2020-02',
    description: 'Dyson is a British technology company established in the United Kingdom by Sir James Dyson in 1991',
    achievements: [
      'Managed onshore and offshore third-party integration partners, tasked with gaining rapid control of a failing project in a ' +
      'large business change programme, and created the baseline for success.',
      'Member of Dyson IT Architecture Design Authority, with governance of all IT architectural designs.'
    ],
    link: '',
    thumbnail: 'companies/dyson.png',
  },
  {
    title: 'Oracle Corporation',
    subtitle: 'EMEA Delivery Lead for Oracle Commerce Consulting (OCC), reporting to the Consulting Practice Director',
    begin: '2018-07',
    end: '2019-09',
    description: 'Oracle is the third-largest software maker by revenue. Oracle develops tools for database development and software for ' +
    'enterprise resource planning, customer relationship management, and supply chain management',
    achievements: [
      'Directly responsible for the delivery of a cloud-based website for a large retailer in Turkey, working with onshore and offshore development ' +
      'teams, and ensuring exceptional project quality and change management through agile development. Delivered all agreed requirements on-time and on-budget',
      'Management of third-party offshore development team and third-party offshore QA team.',
      'Evangelising the enhancement in technical capability of projects through the introduction of automated QA and pipelined build and deployment workflows, ' +
      'reducing delivery time by over 15%.',
      'Responsible for the total financial control of fixed-price and time &amp; materials projects, including the financial management of offshore subcontractors, ' +
      'reporting associated revenues and margin.',
      'Rebuilt reporting and management dashboards for Oracle Commerce Consulting leadership team to provide visibility of financial performance and targets.'
    ],
    link: 'https://oracle.com',
    thumbnail: 'companies/oracle.png',
  },
  {
    title: 'Anatwine',
    subtitle: 'Senior Technical Project Manager / Programme Manager / Head of Projects, reporting to the COO',
    begin: '2015-06',
    end: '2018-06',
    description: 'Anatwine connects the world’s most successful​ fashion brands to the world’s leading fashion retailers. Anatwine’s infrastructure sits on the ' +
    'Amazon Web Services cloud and integrates with eCommerce platforms such as SAP Hybris, Demandware, Microsoft AX Dynamics and Magento',
    achievements: [
      'Programme manager for Anatwine\'s technical relationship with our largest brand partner, and responsible for all technical delivery.',
      'Responsible for the successful delivery of projects totalling £275M in annualised GMV, working with a team of 6 other project managers supported by ' +
      '60+ technical staff.',
      'Enhanced collaboration between Development, Testing and DevOps functions throughout the project lifecycle, leading to almost total automation ' +
      'from commit to deployment.',
      'Delivered flagship 16-week integration project in 7 weeks after being asked to take back delivery responsibility from a failing third party systems integrator.',
      'Delivered projects on time for brands such as adidas, Reebok, ASICS, G-Star RAW, Oysho, Pepe Jeans.',
      'Managed the development of an internal SDK project resulting in development times being reduced by over 60%.',
      'Streamlined the process for opportunities moving from the sales teams into the delivery teams, resulting in increased visibility of progress towards ' +
      'company financial targets.',
      'Member of the Governance Team, authorising projects through GMV/ROI/NPV business case analysis.',
      'Worked in partnership with Legal Counsel and sales leadership teams on project contract negotiations.',
      'Created full-stack sales reporter tool with web front-end and Java8 / SQL backend to give visibility of high-level sales figures to all ' +
      'staff on in-office monitors. Although not my core job, it demonstrated additional skills that I brought to the company from my time as a developer.'
    ],
    tags: ['Java', 'SpringBoot', 'Git', 'KanBan', 'IntelliJ', 'Docker', 'Jira', 'Bamboo', 'Confluence', 'Jenkins', 'chef', 'BitBucket', 'bash'],
    link: 'https://anatwine.com',
    thumbnail: 'companies/anatwine.png',
  },
  {
    title: 'London Translations',
    subtitle: 'General Manager',
    begin: '2013-10',
    end: '2014-11',
    link: 'https://londontranslations.co.uk',
    thumbnail: 'companies/londontranslations.jpg',
  },
  {
    title: 'AirSense Wireless',
    subtitle: 'Head of QA, Delivery and Support, reporting to the CTO',
    begin: '2012-03',
    end: '2013-10',
    thumbnail: 'companies/airsense.png',
  },
  {
    title: 'Fintricity',
    subtitle: 'Associate Consultant, reporting to the CEO',
    begin: '2011-03',
    end: '2012-02',
    link: 'https://fintricity.com',
    thumbnail: 'companies/fintricity.jpeg',
  },
];

// export class Recommendation {
//   citation: string;
//   giver: string
// }

export const RECOMMENDATIONS: Recommendation[] = [
  {
    citation: 'Toby is one of the most competent and intelligent technical managers I have had the pleasure to work with. ' +
    'He combines these traits with a commercial acumen and general customer-friendliness uncommon in senior technical profiles. ' +
    'Very professional and fun to work with.',
    giver: 'Mats Andersson, Global Project Manager, Managing Director & Partner'
  },
  {
    citation: 'By far the best and most pragmatic technical project manager I have worked with in a long time.',
    giver: 'Steve Howe, Lead Business Analyst, DVLA'
  },
  {
    citation: 'Toby is a rare breed that can work effectively and in collaboration with development teams and project deployment teams alike. ' +
    'He brings a well-balanced and educated approach to development tasks and how the end result is deployed effectively to meet customers’ business needs.',
    giver: 'Nicholas Goddard, Director, Cloud Solution Architecture, Oracle'
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'PRINCE2 Practitioner',
    subtitle: 'Certificate reference P2R/724691',
    begin: '',
    end: '2010-03',
    description: '',
    link: 'https://apmg-international.com/',
    thumbnail: 'certs/prince2.png',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'York University, United Kingdom',
    subtitle: 'Master of Engineering | Electronic Systems Engineering',
    begin: '1988',
    end: '1992',
    description: '',
    link: 'https://www.york.ac.uk/',
    thumbnail: 'schools/york-uni-logo.png',
  },
  {
    title: 'Pate\'s Grammar School, Cheltenham, United Kingdom',
    subtitle: '10 O-Levels, 3 A-Levels (Maths, Physics, Chemistry)',
    begin: '1981',
    end: '1988',
    description: '',
    link: 'https://www.patesgs.org/',
    thumbnail: 'schools/pates-logo.png',
  },
];

export const LANGUAGES = [];
// export const LANGUAGES = [
//   // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
//   { title: 'English', level: '100' },
//   { title: 'French | Français', level: '35' },
//   { title: 'Italian | Italiano', level: '25' },
//   { title: 'German | Deutsch', level: '25' },
//   { title: 'Swedish | Svenska', level: '10' },
// ];

export const PROJECTS: CvItem[] = [
  {
    title: 'Pig Latin Converter',
    subtitle: 'A fun project with my daughter (almost 11)',
    begin: '2020',
    end: '',
    description: 'A mini-project during the 2020 Coronavirus lockdown. You can find it on this site with the link below.',
    tags: ['Angular', 'CSS', 'TypeScript'],
    link: 'https://planet-harding.com/#/converter',
  },
  {
    title: 'AngularCV -- extensions',
    subtitle: 'A simple self-hosted online-CV',
    begin: '2020',
    end: '',
    description: 'This project was initially created by Sebastian Schreck for the purpose of having a basic online-CV. ' +
      'After quite a few changes to some of the layouts, and modification to the overview page, this is the result.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'AWS', 'npm', 'Bitbucket'],
    link: 'https://github.com/StegSchreck/AngularCV',
    thumbnail: '../AngularCV.svg',
  },
  {
    title: 'Harding Consulting website',
    subtitle: 'Designing, building and maintaining the new website for my wife\'s company, Harding Leadership Consulting',
    begin: '2019',
    end: '',
    description: 'Built in Angular with integrations in Firebase for messaging and recommendation self-service, with additional ' +
    'integrations into the HLC Slack deployment for IM',
    tags: ['Angular', 'Bitbucket', 'CSS', 'AWS', 'firebase', 'slack'],
    link: 'https://hardingconsulting.com',
    thumbnail: 'companies/hlc.png',
    image: 'hlc-personalisation.jpeg',
  },
  {
    title: 'Sales Reporter',
    subtitle: 'Data-mining and visualisation tool for Anatwine people',
    begin: '2016',
    end: '2018',
    description: '',
    tags: ['Java', 'SQL', 'Bitbucket', 'CSS', 'AWS', 'maven', 'Spring'],
    thumbnail: 'companies/anatwine.png',
  }
];

export const VOLUNTEERING: CvItem[] = [];

export const CONTACT = {
  city: 'Cheltenham, United Kingdom',
  phone: '',
  mail: 'toby@planet-harding.com',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/tobyharding/', // full url
  // xing: 'https://www.xing.com/profile/Sebastian_Schreck2', // full url
  github: 'https://github.com/tobyharding', // full url
  stackoverflow: 'https://stackoverflow.com/users/story/13265608', // full url
  // twitter: 'https://twitter.com/StegSchreck', // full url
  facebook: '', // full url
  instagram: '', // full url
  // other: [
  //   { title: 'Medium', icon: 'icon-medium', link: 'https://medium.com/@stegschreck' },
  //   { title: 'GitHub Page', icon: 'icon-github', link: 'https://stegschreck.github.io' },
  //   { title: 'GitLab Page', icon: 'icon-gitlab', link: 'https://stegschreck.gitlab.io' },
  // ],
};

export const PUBLICATIONS: CvItem[] = [];

export const TALKS: CvItem[] = [];

export const SKILLS = [
  'MS Project',
  'MS Office',
  'Google suite',
  'TeamGantt',
  'Smartsheet',
  'JIRA',
  'Agile',
  'Scrum',
  'Kanban',
  'Confluence',
  'AWS',
  'Bitbucket',
  'Bamboo',
  'Jenkins',
  'Java 8',
  'Spring',
  'Angular',
  'CSS',
  'Mule',
  'IntelliJ',
  'VS Code',
  'Cucumber',
  'Ajax',
  'Firebase'
]

export const INTERESTS = [
  'Classical music',
  'Cooking',
  'Wine',
  'Baking bread',
  'Cloud computing',
  'Software engineering practices',
  'Java coding',
  'Angular and CSS',
  'Cycling',
  'Playing the piano',
  'Learning the guitar'
];
