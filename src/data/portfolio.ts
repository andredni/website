export interface PortfolioEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const portfolio: { de: PortfolioEntry[]; en: PortfolioEntry[] } = {
  de: [
    {
      period: '2020 – heute',
      role: 'Senior Software Architect',
      company: 'TechCorp GmbH',
      description:
        'Architektur und Entwicklung einer skalierbaren Microservice-Plattform. Verantwortlich für Technologieentscheidungen, API-Design und die Einführung von Event-Driven-Architekturen.',
      technologies: ['TypeScript', 'Node.js', 'Kafka', 'Docker', 'Kubernetes'],
    },
    {
      period: '2016 – 2020',
      role: 'Softwareentwickler',
      company: 'Digital Solutions AG',
      description:
        'Entwicklung von Webanwendungen im Gesundheitswesen. Aufbau eines Frontend-Teams, Einführung von Code-Reviews und agilen Prozessen.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    },
    {
      period: '2012 – 2016',
      role: 'Embedded Software Engineer',
      company: 'IndustrieControl KG',
      description:
        'Entwicklung von Firmware für industrielle Steuerungssysteme. Implementation von Echtzeit-Kommunikationsprotokollen und Hardwarenaher Software.',
      technologies: ['C', 'C++', 'RTOS', 'CAN Bus', 'ARM Cortex'],
    },
    {
      period: '2009 – 2012',
      role: 'Junior Softwareentwickler',
      company: 'Startup Labs',
      description:
        'Erste berufliche Station: Full-Stack-Entwicklung in einem kleinen Team. Von der Datenbank bis zum Frontend – alles, was anfiel.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'Linux'],
    },
  ],
  en: [
    {
      period: '2020 – present',
      role: 'Senior Software Architect',
      company: 'TechCorp GmbH',
      description:
        'Architecture and development of a scalable microservice platform. Responsible for technology decisions, API design, and introducing event-driven architectures.',
      technologies: ['TypeScript', 'Node.js', 'Kafka', 'Docker', 'Kubernetes'],
    },
    {
      period: '2016 – 2020',
      role: 'Software Developer',
      company: 'Digital Solutions AG',
      description:
        'Developed web applications in the healthcare sector. Built up a frontend team, introduced code reviews and agile processes.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    },
    {
      period: '2012 – 2016',
      role: 'Embedded Software Engineer',
      company: 'IndustrieControl KG',
      description:
        'Developed firmware for industrial control systems. Implemented real-time communication protocols and low-level software.',
      technologies: ['C', 'C++', 'RTOS', 'CAN Bus', 'ARM Cortex'],
    },
    {
      period: '2009 – 2012',
      role: 'Junior Software Developer',
      company: 'Startup Labs',
      description:
        'First professional role: full-stack development in a small team. From database to frontend – whatever needed to be done.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'Linux'],
    },
  ],
};
