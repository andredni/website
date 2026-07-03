export interface ProjectEntry {
  slug: string;
  name: string;
  description: string;
  detailDescription: string[];
  status?: string;
  technologies: string[];
  role: string;
  link?: string;
  github?: string;
  highlights?: string[];
}

export const projects: { de: ProjectEntry[]; en: ProjectEntry[] } = {
  de: [
    {
      slug: 'eventmesh-platform',
      name: 'EventMesh Platform',
      description:
        'Eine Event-Driven-Plattform für die Echtzeit-Kommunikation zwischen Microservices.',
      detailDescription: [
        'Die EventMesh Platform wurde entwickelt, um die asynchrone Kommunikation zwischen über 20 Microservices zu vereinheitlichen. Statt punktueller HTTP-Aufrufe können Dienste nun Ereignisse publizieren und konsumieren – entkoppelt, skalierbar und fehlertolerant.',
        'Die Plattform basiert auf Apache Kafka als Message-Backbone, ergänzt um eine eigene Schema-Registry und ein Monitoring-Dashboard. Besonderer Wert wurde auf exactly-once-Semantik und niedrige Latenzen gelegt.',
      ],
      status: 'In Betrieb',
      technologies: ['Kafka', 'TypeScript', 'Kubernetes', 'PostgreSQL'],
      role: 'Architekt & Lead Developer',
      highlights: [
        'Reduzierung der durchschnittlichen Antwortzeit um 40 %',
        'Schema-Registry mit automatischer Versionierung',
        'Self-Service-Integration für neue Teams',
      ],
    },
    {
      slug: 'healthportal',
      name: 'HealthPortal',
      description:
        'Webportal für Patienten und Ärzte mit Terminbuchung, Befundabruf und sicherer Nachrichtenübermittlung.',
      detailDescription: [
        'HealthPortal ist eine DSGVO-konforme Webanwendung für den deutschen Gesundheitsmarkt. Patienten können Termine buchen, Befunde einsehen und sicher mit ihren Ärzten kommunizieren. Auf der Arztseite gibt es Verwaltungsfunktionen für Terminkalender, Patientendaten und Dokumente.',
        'Die Architektur folgt strikt dem Clean-Architecture-Prinzip. Das Frontend wurde mit React und TypeScript umgesetzt, das Backend mit Node.js und GraphQL. Die gesamte Kommunikation ist Ende-zu-Ende verschlüsselt.',
      ],
      status: 'In Betrieb',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      role: 'Frontend-Entwickler & Tech Lead',
      highlights: [
        'Barrierefrei nach WCAG 2.1 AA',
        'DSGVO-Konformität von Anfang an mitbedacht',
        'Aufbau und Mentoring eines 4-köpfigen Frontend-Teams',
      ],
    },
    {
      slug: 'firmware-toolkit',
      name: 'Firmware-Toolkit',
      description:
        'Ein Build- und Test-Framework für eingebettete Systeme mit automatisierter Firmware-Validierung.',
      detailDescription: [
        'Das Firmware-Toolkit entstand aus der Frustration über manuelle Flashing- und Testprozesse in der Embedded-Entwicklung. Es automatisiert das Kompilieren, Flashen und Testen von Firmware auf verschiedenen ARM-Zielplattformen – alles über eine einheitliche CLI.',
        'Das Framework unterstützt mehrere Toolchains, führt automatisierte Integrationstests auf echter Hardware durch und erzeugt detaillierte Testberichte. Es wird als Open-Source-Projekt auf GitHub entwickelt.',
      ],
      status: 'Open Source',
      technologies: ['C', 'Python', 'CMake', 'Docker'],
      role: 'Entwickler & Maintainer',
      github: 'https://github.com/andredni/firmware-toolkit',
      highlights: [
        'Unterstützt 3 verschiedene ARM-Architekturen',
        'Integration in CI/CD-Pipelines (GitHub Actions)',
        'Open Source mit wachsender Community',
      ],
    },
    {
      slug: 'cli-devops-tool',
      name: 'CLI-Tool für DevOps',
      description:
        'Ein Kommandozeilen-Tool zur Automatisierung von Deployment-Workflows mit CI/CD-Integration.',
      detailDescription: [
        'Dieses CLI-Tool wurde entwickelt, um wiederkehrende Deployment-Aufgaben zu automatisieren und Entwicklerteams eine einheitliche Schnittstelle zu ihrer Infrastruktur zu geben. Es orchestriert Docker-Container, managed Cloud-Ressourcen und lässt sich nahtlos in GitHub Actions einbinden.',
        'In Go geschrieben, ist es als einzelnes Binary auslieferbar – keine Runtime-Abhängigkeiten. Die Konfiguration erfolgt deklarativ über YAML-Dateien.',
      ],
      status: 'In Entwicklung',
      technologies: ['Go', 'Docker', 'GitHub Actions'],
      role: 'Alleinentwickler',
      github: 'https://github.com/andredni/deploy-cli',
      highlights: [
        'Single-Binary-Deployment (< 15 MB)',
        'Unterstützt Docker, Kubernetes und Cloud-APIs',
        'Deklarative YAML-Konfiguration',
      ],
    },
  ],
  en: [
    {
      slug: 'eventmesh-platform',
      name: 'EventMesh Platform',
      description:
        'An event-driven platform for real-time communication between microservices.',
      detailDescription: [
        'The EventMesh Platform was built to unify asynchronous communication across over 20 microservices. Instead of point-to-point HTTP calls, services can publish and consume events – decoupled, scalable, and fault-tolerant.',
        'The platform is based on Apache Kafka as the message backbone, complemented by a custom schema registry and a monitoring dashboard. Special attention was given to exactly-once semantics and low latency.',
      ],
      status: 'In Production',
      technologies: ['Kafka', 'TypeScript', 'Kubernetes', 'PostgreSQL'],
      role: 'Architect & Lead Developer',
      highlights: [
        'Reduced average response time by 40%',
        'Schema registry with automatic versioning',
        'Self-service integration for new teams',
      ],
    },
    {
      slug: 'healthportal',
      name: 'HealthPortal',
      description:
        'Web portal for patients and doctors with appointment booking, results retrieval, and secure messaging.',
      detailDescription: [
        'HealthPortal is a GDPR-compliant web application for the German healthcare market. Patients can book appointments, view results, and communicate securely with their doctors. The doctor side includes management features for schedules, patient data, and documents.',
        'The architecture strictly follows clean architecture principles. The frontend is built with React and TypeScript, the backend with Node.js and GraphQL. All communication is end-to-end encrypted.',
      ],
      status: 'In Production',
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
      role: 'Frontend Developer & Tech Lead',
      highlights: [
        'Accessible per WCAG 2.1 AA',
        'GDPR compliance built in from day one',
        'Built and mentored a 4-person frontend team',
      ],
    },
    {
      slug: 'firmware-toolkit',
      name: 'Firmware Toolkit',
      description:
        'A build and test framework for embedded systems with automated firmware validation.',
      detailDescription: [
        'The Firmware Toolkit emerged from frustration with manual flashing and testing processes in embedded development. It automates compiling, flashing, and testing firmware across multiple ARM target platforms – all through a unified CLI.',
        'The framework supports multiple toolchains, runs automated integration tests on real hardware, and generates detailed test reports. It is developed as an open-source project on GitHub.',
      ],
      status: 'Open Source',
      technologies: ['C', 'Python', 'CMake', 'Docker'],
      role: 'Developer & Maintainer',
      github: 'https://github.com/andredni/firmware-toolkit',
      highlights: [
        'Supports 3 different ARM architectures',
        'CI/CD pipeline integration (GitHub Actions)',
        'Open source with growing community',
      ],
    },
    {
      slug: 'cli-devops-tool',
      name: 'CLI Tool for DevOps',
      description:
        'A command-line tool for automating deployment workflows with CI/CD integration.',
      detailDescription: [
        'This CLI tool was built to automate recurring deployment tasks and provide developer teams with a unified interface to their infrastructure. It orchestrates Docker containers, manages cloud resources, and integrates seamlessly with GitHub Actions.',
        'Written in Go, it ships as a single binary with no runtime dependencies. Configuration is declarative using YAML files.',
      ],
      status: 'In Development',
      technologies: ['Go', 'Docker', 'GitHub Actions'],
      role: 'Solo Developer',
      github: 'https://github.com/andredni/deploy-cli',
      highlights: [
        'Single binary deployment (< 15 MB)',
        'Supports Docker, Kubernetes, and cloud APIs',
        'Declarative YAML configuration',
      ],
    },
  ],
};
