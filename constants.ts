import {
  SkillDomain,
  EducationItem,
  Experience,
  Project,
  ResearchItem,
  Achievement,
} from './types';

export const PROFILE = {
  name: 'Md. Samiul Islam Mobin',
  email: 'mobinpc00@gmail.com',
  phone: '+880-1791439422',
  phoneHref: 'tel:+8801791439422',
  linkedin: 'https://linkedin.com/in/samiulmobin',
  linkedinLabel: 'linkedin.com/in/samiulmobin',
  github: 'https://github.com/mobinpc0',
  githubLabel: 'github.com/mobinpc0',
  location: 'Mirpur-1, Dhaka, Bangladesh',
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'circuit',
    short: 'Circuit & IC',
    title: 'Circuit & IC Design',
    subtitle: 'Analog, digital and layout design',
    code: 'DOM_01 // SILICON',
    skills: [
      'Analog & Digital Circuit Design',
      'VLSI Design',
      'Custom Layout',
      'CMOS Layout',
      'Design Verification',
      'DRC/LVS Check',
      'Verilog HDL',
      'SMPS / Flyback Design',
      'PCB Schematic',
    ],
    tools: [{ name: 'Cadence (Virtuoso)', logo: '/img/logos/cadence.png' }],
  },
  {
    id: 'embedded',
    short: 'Embedded & IoT',
    title: 'Embedded & IoT Systems',
    subtitle: 'Microcontrollers, sensors and wireless telemetry',
    code: 'DOM_02 // FIRMWARE',
    skills: [
      'Microcontroller Programming',
      'Sensor Integration',
      'Wireless Communication',
      'Robotics & Automation',
    ],
    tools: [
      { name: 'ESP32', logo: '/img/logos/espressif.svg' },
      { name: 'Arduino IDE', logo: '/img/logos/arduino.svg' },
      { name: 'LoRa', logo: '/img/logos/lora.png' },
      { name: 'Blynk IoT', logo: '/img/logos/blynk.png' },
    ],
  },
  {
    id: 'power',
    short: 'Power',
    title: 'Power Systems & Automation',
    subtitle: 'Power plant operation, electrical analysis and control',
    code: 'DOM_03 // ENERGY',
    skills: [
      'Power Plant Engineering',
      'SCADA',
      'HMI',
      'PLC Programming',
      'Load Management',
      'Electrical System Analysis',
      'Power Analysis',
      'Switchgear',
      'Renewable Energy Systems',
    ],
    tools: [{ name: 'AutoCAD Electrical', logo: '/img/logos/autocad-electrical.png' }],
  },
  {
    id: 'software',
    short: 'Software & Simulation',
    title: 'Software & Simulation',
    subtitle: 'Programming, modelling and circuit simulation',
    code: 'DOM_04 // COMPUTE',
    skills: ['Data Analysis & Troubleshooting'],
    tools: [
      { name: 'MATLAB / Simulink', logo: '/img/logos/matlab-simulink.png' },
      { name: 'Proteus Design Suite', logo: '/img/logos/proteus.png' },
      { name: 'C', logo: '/img/logos/c.svg' },
      { name: 'C++', logo: '/img/logos/cplusplus.svg' },
      { name: 'Python', logo: '/img/logos/python.svg' },
      { name: 'HTML', logo: '/img/logos/html5.svg' },
    ],
  },
  {
    id: 'professional',
    short: 'Professional',
    title: 'Productivity & Soft Skills',
    subtitle: 'Office tools, design and collaboration',
    code: 'DOM_05 // PEOPLE',
    skills: [
      'Leadership',
      'Technical Communication',
      'Teamwork',
      'Event Coordination',
      'Problem Solving',
      'Video Editing',
    ],
    tools: [
      { name: 'MS Office (Word, Excel, PowerPoint)', logo: '/img/logos/office.png' },
      { name: 'Canva', logo: '/img/logos/canva.svg' },
    ],
    extra: { label: 'Languages', items: ['Bangla (Native)', 'English (Fluent)', 'Hindi (Intermediate)'] },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Electrical & Electronic Engineering',
    institution: 'Daffodil International University, Dhaka',
    detail: 'Faculty of Engineering',
    period: '2022 – 2026',
    score: 'CGPA 3.96 / 4.00',
    highlight: '1st in Department · EEE 37th Batch (221) · 283 students',
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate – Science',
    institution: 'Rajshahi Govt. City College',
    period: '2020',
    score: 'GPA 5.0 / 5.0',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate – Science',
    institution: 'Daxmin Mainam High School & College',
    period: '2018',
    score: 'GPA 5.0 / 5.0',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Industrial Training – VLSI & IC Design',
    company: 'ULKASEMI Pvt. Ltd.',
    location: 'Tejgaon-Gulshan Link Road, Dhaka',
    period: '2025',
    points: [
      'Completed structured training in Analog Design, Digital Design, and Design Verification workflows.',
      'Practical experience in Custom Layout techniques and Digital Circuit Design using industry-standard Cadence EDA tools.',
    ],
  },
  {
    id: 2,
    role: 'Industrial Training – Power Plant Engineering',
    company: 'Ghorashal Training Center, BPDB',
    location: 'Palash, Narsingdi',
    period: '2025',
    points: [
      'Trained in power generation processes, including operation and maintenance of power plant equipment.',
      'Performed electrical system analysis, load management, HMI and SCADA, and followed plant safety procedures.',
    ],
  },
  {
    id: 3,
    role: 'Training – Sales & Marketing',
    company: 'Skill Jobs (Online)',
    period: '2024',
    points: [
      'Acquired knowledge of sales strategies, customer relationship management, digital marketing, and market research techniques.',
    ],
  },
  {
    id: 4,
    role: 'General Member – DIU Robotics Club & DIU EEE Club',
    company: 'Daffodil International University',
    period: '2022 – 2025',
    points: [
      'Contributed to robotics workshops on fundamentals, sensor and actuator integration, microcontroller programming and circuit analysis, with teamwork, event coordination and leadership.',
    ],
  },
];

const WIECON_DOI = 'https://doi.org/10.1109/WIECON-ECE69386.2025.11526116';
const QPAIN_DOI = 'https://doi.org/10.1109/QPAIN69676.2026.11546531';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Digital Twin Robotic Arm',
    category: 'Robotics & Automation',
    image: '/img/projects/arm.jpg',
    points: [
      'Designed and built a 4-DOF robotic arm with a custom gripper, powered by servo motors and controlled through an Arduino-based interface.',
      'Precise pick-and-place research platform for studying inverse kinematics and industrial automation workflows in bio-hazardous environments.',
    ],
    tech: ['Arduino', 'Servo Motors', 'Digital Twin', 'Inverse Kinematics'],
    links: [{ label: 'Paper (QPAIN 2026)', url: QPAIN_DOI }],
  },
  {
    id: 2,
    title: 'LoRa-Based Radiosonde',
    category: 'IoT & Atmospheric Sensing',
    image: '/img/projects/lora.jpg',
    points: [
      'Power-efficient weather balloon payload using ESP32, a BME280 sensor and a LoRa module for real-time atmospheric data acquisition.',
      'Dual data logging (onboard SD card and ground station) for reliable collection during high-altitude flights.',
    ],
    tech: ['ESP32', 'BME280', 'LoRa', 'SD Logging'],
    links: [{ label: 'Paper (WIECON-ECE 2025)', url: WIECON_DOI }],
  },
  {
    id: 3,
    title: '12V, 2A Isolated SMPS',
    category: 'Power Electronics',
    image: '/img/projects/smps.jpg',
    points: [
      'Engineered a flyback-converter switched-mode power supply around the DK124 controller IC, achieving 87% efficiency.',
      'Stable output voltage regulation suitable for embedded and industrial power applications.',
    ],
    tech: ['Flyback Converter', 'DK124', 'SMPS'],
  },
  {
    id: 4,
    title: 'Smart IoT & Solar-Powered Irrigation',
    category: 'Renewable Energy & IoT',
    image: '/img/projects/solar.jpg',
    points: [
      'Automated irrigation system using ESP32, the Blynk IoT platform and solar energy harvesting for off-grid operation.',
      'Remote monitoring and control of irrigation schedules, improving water usage efficiency.',
    ],
    tech: ['ESP32', 'Blynk IoT', 'Solar Energy'],
  },
  {
    id: 5,
    title: 'ULTRAFLOAT – Water Level Monitoring & Pump Control',
    category: 'Final Year Capstone (EEE400)',
    image: '/img/projects/ultrafloat.jpg',
    points: [
      'Distributed two-unit IoT system (Main Control Unit and Remote Sensor Unit) using ESP32-S3, a JSN-SR04M ultrasonic sensor and an AHT20 temperature/humidity sensor for real-time level monitoring with automated pump control.',
      'Custom SMPS power supply, WebSocket-based live dashboard, and a temperature-compensated distance algorithm (V = 331.3 + 0.606 × T m/s) for better accuracy over RJ45/CAT5 wiring.',
    ],
    tech: ['ESP32-S3', 'JSN-SR04M', 'AHT20', 'WebSocket'],
  },
  {
    id: 6,
    title: 'Paper Copilot',
    category: 'Software · AI Research Tool',
    image: '/img/projects/paper-copilot.jpg',
    points: [
      'AI-powered research console that breaks a paper into problem, method, dataset, results and limits, and answers questions about one paper or a whole library.',
      'Compares 2–10 papers in a matrix, drafts literature reviews exportable to Word or Markdown, and generates BibTeX and APA citations.',
    ],
    tech: ['Next.js', 'TypeScript', 'Gemini', 'Groq'],
    links: [
      { label: 'Live Demo', url: 'https://papercopilot-peach.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/mobinpc0/PaperCopilot' },
    ],
  },
];

export const RESEARCH: ResearchItem[] = [
  {
    id: 1,
    type: 'IEEE',
    title:
      'A Low-Cost, Ultra Low-Power, and Scalable LoRa-Based Weather Balloon for Atmospheric Monitoring: A Bangladesh Perspective',
    venue:
      '11th International Women in Engineering Conference on Electrical and Computer Engineering (WIECON-ECE 2025)',
    year: 'December 2025',
    paperId: '316',
    certificateImage: '/img/certs/cert-wiecon-2025.png',
    certificateTitle: 'Certificate of Presentation · WIECON-ECE 2025 (Paper ID: 316)',
    authors: ['Md. Tanvir Hassan', 'Md. Samiul Islam Mobin', 'Sourav Karmokar', 'Dr. Tama Fouzder'],
    doi: WIECON_DOI,
  },
  {
    id: 2,
    type: 'IEEE',
    title:
      'A Software-Defined Digital Twin Framework for Enhanced Tele-Laboratory Manipulation in Bio-Hazardous and High-Risk Environments',
    venue: '2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN 2026)',
    year: 'April 2026',
    paperId: '4310',
    certificateImage: '/img/certs/cert-qpain-2026.jpg',
    certificateTitle: 'Certificate of Presentation · QPAIN 2026 (Paper ID: 4310)',
    authors: [
      'Md. Tanvir Hassan',
      'Sourav Karmokar',
      'Md. Samiul Islam Mobin',
      'Kazi Mubashir Tazwar',
      'Jafry Anam Sirat',
      'Rahul Islam Ove',
    ],
    doi: QPAIN_DOI,
  },
  {
    id: 3,
    type: 'Conference',
    title:
      'A Novel Hexagonal Shaped Suspended-Core Microstructured Fiber for Mid-Infrared Supercontinuum Generation',
    venue:
      '2026 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON 2026)',
    year: 'August 2026',
    certificateImage: '/img/certs/cert-peeiacon-2026.png',
    certificateTitle: 'Certificate of Presentation · PEEIACON 2026',
    authors: ['Shourov Paul', 'Md. Samiul Islam Mobin', 'Abu Sayem', 'Rakayet Rafi', 'M R Karim'],
    status: 'Presented · IEEE Xplore publication forthcoming',
  },
  {
    id: 4,
    type: 'Conference',
    title:
      'ULTRAFLOAT: An ESP32-S3-Based Non-Contact Water Level Sensing and Pump Control Platform with Dynamic Speed-of-Sound Compensation',
    venue:
      '2026 IEEE 5th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON 2026)',
    year: 'September 2026',
    paperId: '524',
    certificateImage: '/img/certs/cert-raaicon-2026.png',
    certificateTitle: 'Certificate of Presentation · IEEE RAAICON 2026 (Paper ID: 524)',
    authors: ['Shourov Paul', 'Md. Samiul Islam Mobin', 'Abu Sayem', 'M R Karim'],
    status: 'Presented · IEEE Xplore publication forthcoming',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    kind: 'Achievement',
    title: '1st in Department',
    issuer: 'Daffodil International University',
    note: 'EEE 37th Batch (Batch 221) · among 283 students · Undergraduate',
    big: '1st',
    bigSub: 'of 283',
  },
  {
    id: 2,
    kind: 'Achievement',
    title: 'DIU Growing-Star Program, Spring 2022',
    issuer: 'DIU Department of General Educational Development',
    date: '31 Mar 2022',
    note: 'Ranked 58th among 800+ students',
    image: '/img/certs/growing-star.jpg',
  },
  {
    id: 3,
    kind: 'Achievement',
    title: 'Patent Idea Competition 2025',
    issuer: 'DIU Faculty of Graduate Studies',
    date: '24 Nov 2025',
    note: 'Outstanding Performance in Research Project Showcasing',
    image: '/img/certs/patent-idea.jpg',
  },
  {
    id: 4,
    kind: 'Achievement',
    title: 'Robolution 2025 – VLSI Competition',
    issuer: 'MIST Robotics Club',
    date: '27–28 Nov 2025',
    note: 'Certificate of Achievement',
    image: '/img/certs/robolution.jpg',
  },
  {
    id: 5,
    kind: 'Achievement',
    title: 'DIU-DoR Poster Presentation 2025',
    issuer: 'DIU Division of Research',
    date: '14 May 2025',
    note: 'Certificate of Achievement · Future Leaders in Research',
    image: '/img/certs/dor-poster.jpg',
  },
  {
    id: 6,
    kind: 'Certification',
    title: 'AI+ Foundation™',
    issuer: 'AI CERTs®',
    date: '26 Oct 2026',
    note: 'Blockchain-verifiable certification',
    image: '/img/certs/ai-foundation.jpg',
  },
  {
    id: 7,
    kind: 'Training',
    title: 'Industrial Training – VLSI & IC Design',
    issuer: 'ULKASEMI Pvt. Ltd.',
    date: '16 Oct 2025',
    note: 'Analog Design, Digital Design, Design Verification, Custom Layout and Digital Circuit Design',
    image: '/img/certs/ulkasemi.jpg',
  },
  {
    id: 8,
    kind: 'Training',
    title: 'Industrial Training – Power Plant Engineering',
    issuer: 'Ghorashal Training Center, BPDB',
    date: '2025',
    note: 'Certificate of Completion',
    image: '/img/certs/ghorashal.jpg',
  },
];
