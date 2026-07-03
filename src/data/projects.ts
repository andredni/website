export interface ProjectEntry {
  name: string;
  description: string;
  status?: string;
  technologies: string[];
  role: string;
  link?: string;
}

export const projects: { de: ProjectEntry[]; en: ProjectEntry[] } = {
  de: [
    {
      name: 'EventMesh Platform',
      description:
        'Eine Event-Driven-Plattform für die Echtzeit-Kommunikation zwischen Microservices. Ermöglicht asynchrone Datenverarbeitung und lose Kopplung der Dienste.',
      status: 'In Betrieb',
      technologies: ['Kafka', 'TypeScript', 'Kubernetes', 'PostgreSQL'],
      role: 'Architekt & Lead Developer',
    },
    {
      name: 'HealthPortal',
      description:
        'Webportal für Patienten und Ärzte mit Terminbuchung, Befundabruf und sicherer Nachrichtenübermittlung. DSGVO-konform und barrierefrei.',
      status: 'In Betrieb',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      role: 'Frontend-Entwickler & Tech Lead',
    },
    {
      name: 'Firmware-Toolkit',
      description:
        'Ein Build- und Test-Framework für eingebettete Systeme. Automatisiertes Flashen, Testen und Validieren von Firmware auf verschiedenen Zielplattformen.',
      status: 'Open Source',
      technologies: ['C', 'Python', 'CMake', 'Docker'],
      role: 'Entwickler & Maintainer',
    },
    {
      name: 'CLI-Tool für DevOps',
      description:
        'Ein Kommandozeilen-Tool zur Automatisierung von Deployment-Workflows. Integration mit CI/CD-Pipelines und Cloud-APIs.',
      status: 'In Entwicklung',
      technologies: ['Go', 'Docker', 'GitHub Actions'],
      role: 'Alleinentwickler',
    },
  ],
  en: [
    {
      name: 'EventMesh Platform',
      description:
        'An event-driven platform for real-time communication between microservices. Enables asynchronous data processing and loose coupling of services.',
      status: 'In Production',
      technologies: ['Kafka', 'TypeScript', 'Kubernetes', 'PostgreSQL'],
      role: 'Architect & Lead Developer',
    },
    {
      name: 'HealthPortal',
      description:
        'Web portal for patients and doctors with appointment booking, results retrieval, and secure messaging. GDPR-compliant and accessible.',
      status: 'In Production',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      role: 'Frontend Developer & Tech Lead',
    },
    {
      name: 'Firmware Toolkit',
      description:
        'A build and test framework for embedded systems. Automated flashing, testing, and validation of firmware across multiple target platforms.',
      status: 'Open Source',
      technologies: ['C', 'Python', 'CMake', 'Docker'],
      role: 'Developer & Maintainer',
    },
    {
      name: 'CLI Tool for DevOps',
      description:
        'A command-line tool for automating deployment workflows. Integrates with CI/CD pipelines and cloud APIs.',
      status: 'In Development',
      technologies: ['Go', 'Docker', 'GitHub Actions'],
      role: 'Solo Developer',
    },
  ],
};
