export interface SocialLinks {
  github?: string;
  linkedin?: string;
  xing?: string;
}

export const profile = {
  de: {
    name: 'Daniel Andres',
    title: 'Softwareentwickler & Systemarchitekt',
    claim: 'Ich baue Systeme, die halten – und Teams, die wachsen.',
    image: '/images/profile-placeholder.jpg',
    socials: {
      github: 'https://github.com/andredni',
    } as SocialLinks,
    intro: [
      'Seit über 15 Jahren entwickle ich Software – von eingebetteten Systemen bis hin zu verteilten Cloud-Architekturen. Mein Fokus liegt auf sauberer Architektur, nachhaltigen Lösungen und pragmatischer Umsetzung.',
      'Ich arbeite gerne dort, wo Technik auf Organisation trifft: Code-Reviews, Architekturentscheidungen, Mentoring und die Frage, wie man gute Software im Team baut.',
      'Neben der Entwicklung interessiere ich mich für systemisches Denken, DevOps-Praktiken und die Frage, warum manche Projekte scheitern – und andere nicht.',
    ],
  },
  en: {
    name: 'Daniel Andres',
    title: 'Software Engineer & System Architect',
    claim: 'I build systems that last – and teams that grow.',
    image: '/images/profile-placeholder.jpg',
    socials: {
      github: 'https://github.com/andredni',
    } as SocialLinks,
    intro: [
      'For over 15 years, I have developed software ranging from embedded systems to distributed cloud architectures. My focus is on clean architecture, sustainable solutions, and pragmatic delivery.',
      'I thrive where technology meets organization: code reviews, architectural decisions, mentoring, and the challenge of building good software as a team.',
      'Beyond development, I am interested in systems thinking, DevOps practices, and understanding why some projects succeed while others fail.',
    ],
  },
};
