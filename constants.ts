import { Project, Skill, Experience, ResearchItem, GalleryItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'VLSI Design (Cadence)', level: 90 },
  { name: 'Circuit Design', level: 95 },
  { name: 'Embedded Systems', level: 90 },
  { name: 'MATLAB / Simulink', level: 85 },
  { name: 'C / C++ / Python', level: 80 },
  { name: 'IoT & Automation', level: 85 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Industrial Training – VLSI & IC Design",
    company: "ULKASEMI Pvt. Ltd.",
    period: "2025",
    description: "Completed structured training in Analog & Digital Design, Design Verification, and Custom Layout using Cadence EDA tools."
  },
  {
    id: 2,
    role: "Industrial Training – Power Plant Engineering",
    company: "Ghorarshal Power Station",
    period: "2025",
    description: "Trained in power generation processes, electrical system analysis, load management, HMI, SCADA, and plant safety procedures."
  },
  {
    id: 3,
    role: "General Member",
    company: "DIU Robotics Club & DIU EEE Club",
    period: "2022 - Present",
    description: "Contributed to robotics workshops, sensor integration, microcontroller programming, and event coordination."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Digital Twin Robotic Arm",
    category: "Robotics & Automation",
    image: "https://picsum.photos/800/600?random=1",
    description: "A 4-DOF robotic arm with a custom gripper, controlled via Arduino, serving as a research platform for tele-laboratory manipulation.",
    tech: ["Arduino", "Robotics", "Digital Twin"]
  },
  {
    id: 2,
    title: "LoRa-Based Weather Balloon",
    category: "IoT & Environmental",
    image: "https://picsum.photos/800/600?random=2",
    description: "Power-efficient radiosonde using ESP32, BME280, and LoRa for real-time atmospheric data acquisition and dual logging.",
    tech: ["ESP32", "LoRa", "IoT"]
  },
  {
    id: 3,
    title: "Smart Solar Irrigation",
    category: "Renewable Energy",
    image: "https://picsum.photos/800/600?random=3",
    description: "Automated irrigation system using ESP32 and Blynk IoT with solar energy harvesting for off-grid operation.",
    tech: ["IoT", "Solar", "ESP32"]
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    id: 1,
    title: "Low-Cost, Ultra Low-Power LoRa-Based Weather Balloon",
    journal: "WIECON-ECE 2025 (IEEE)",
    year: "Dec 2025",
    abstract: "A scalable solution for atmospheric monitoring in Bangladesh, focusing on power efficiency and low-cost implementation."
  },
  {
    id: 2,
    title: "Software-Defined Digital Twin Framework for Tele-Laboratory",
    journal: "QPAIN 2026 (IEEE)",
    year: "Accepted",
    abstract: "Enhanced tele-laboratory manipulation in bio-hazardous and high-risk environments using a digital twin framework."
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, title: "Robotics Workshop", url: "https://picsum.photos/600/800?random=10" },
  { id: 2, title: "Circuit Design", url: "https://picsum.photos/600/800?random=11" },
  { id: 3, title: "Power Station", url: "https://picsum.photos/600/800?random=12" },
  { id: 4, title: "Conference Presentation", url: "https://picsum.photos/600/800?random=13" },
  { id: 5, title: "Lab Testing", url: "https://picsum.photos/600/800?random=14" },
  { id: 6, title: "Award Ceremony", url: "https://picsum.photos/600/800?random=15" },
];
