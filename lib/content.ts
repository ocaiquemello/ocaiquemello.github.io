export const content = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Caique Mello",
      role: "Senior Product Engineer",
      badge: "Senior Product Engineer",
      description: "Engenheiro de software focado em produto. Construo sistemas escaláveis e experiências de alto nível para a web.",
      cta: "Ver Projetos",
    },
    about: {
      title: "Mindset de Fundador",
      p1: "Não escrevo apenas código; construo produtos. Minha abordagem combina engenharia pragmática com visão de negócio.",
      p2: "Especialista em transformar requisitos complexos em sistemas simples, escaláveis e manuteníveis. Foco em arquitetura limpa (Clean/Hexagonal), performance e experiência do desenvolvedor.",
      p3: "Crio soluções SaaS independentes como hobby, o que me dá uma perspectiva única sobre o ciclo completo de desenvolvimento de software.",
      skills: {
        backend: "Backend & Systems",
        frontend: "Frontend & UI/UX",
        devops: "DevOps & Infra",
        data: "Data & Architecture",
      },
    },
    systemDesign: {
      title: "Arquitetura & Sistemas",
      description: "Expertise em desenhar soluções robustas para problemas complexos.",
      items: [
        {
          title: "Sistemas Distribuídos",
          description: "Desenho de APIs RESTful e GraphQL escaláveis, otimização de banco de dados e microserviços."
        },
        {
          title: "Clean Architecture",
          description: "Implementação de padrões como DDD e Hexagonal Architecture para garantir manutenibilidade."
        },
        {
          title: "DevOps & Cloud",
          description: "CI/CD pipelines, Docker, AWS (EC2, S3, RDS) e Vercel para deploys automatizados e seguros."
        }
      ]
    },
    indieSaas: {
      title: "Indie SaaS & Experimentos",
      description: "Projetos pessoais onde atuo como Engenheiro, Designer e Fundador.",
      shipping: "Lançando mensalmente",
      comingSoonTitle: "Projetos em Órbita",
      comingSoonDescription: "Estou reformulando esta seção para apresentar novos produtos e ferramentas. Fique ligado.",
    },
    projects: {
      title: "Aplicações",
      subtitle: "Aplicações de alto impacto construídas com arquitetura moderna.",
      viewGithub: "Ver no Github",
      items: [
        {
          title: "Overlord ERP",
          description: "Sistema de gestão complexo com controle financeiro, estoque e emissão de NFe. Arquitetura modular focada em performance.",
          tech: ["Laravel", "Vue.js", "MySQL", "Docker"]
        },
        {
          title: "Mais Bela Ecosystem",
          description: "Ecossistema completo de ERP + PWA e e-commerce B2B. Integração bancária direta (CNAB) e sincronização em tempo real.",
          tech: ["React", "Node.js", "AWS", "PWA"]
        },
        {
          title: "Hentz Real Estate",
          description: "CRM imobiliário com geração automática de contratos e gestão financeira de loteamentos. Otimizou em 80% o fluxo de vendas.",
          tech: ["PHP", "Boostrap", "Mariadb"]
        },
      ],
    },
    contact: {
      title: "Vamos construir algo juntos?",
      description: "Estou disponível para projetos desafiadores que exijam alta senioridade técnica e visão de produto.",
      ctaEmail: "ocaiquemello@gmail.com",
    },
    footer: {
      rights: "Design & Code by Caique Mello. Built with Next.js, Tailwind & Vercel Style.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Caique Mello",
      role: "Senior Product Engineer",
      badge: "Senior Product Engineer",
      description: "Product-minded engineer building high-quality web applications. I turn complex problems into simple, scalable, and beautiful software.",
      cta: "View Experience",
    },
    about: {
      title: "The Founder Mindset",
      p1: "I don't just write code; I ship products. My approach blends pragmatic engineering with a strong product vision.",
      p2: "Specialized in transforming undefined requirements into scalable systems. I prioritize clean architecture (Hexagonal/DDD), developer experience, and long-term maintainability.",
      p3: "I build indie SaaS projects in my spare time, giving me deep empathy for the full software lifecycle—from first commit to first customer.",
      skills: {
        backend: "Backend & Systems",
        frontend: "Frontend & UI/UX",
        devops: "DevOps & Infra",
        data: "Data & Architecture",
      },
    },
    systemDesign: {
      title: "System Design & Architecture",
      description: "Designing robust solutions for complex engineering challenges.",
      items: [
        {
          title: "Distributed Systems",
          description: "Designing scalable RESTful/GraphQL APIs, database optimization, and resilient microservices patterns."
        },
        {
          title: "Clean Architecture",
          description: "Applying Domain-Driven Design (DDD) and Hexagonal Architecture to ensure code longevity."
        },
        {
          title: "DevOps & Cloud",
          description: "Tech lead standard CI/CD pipelines, Docker containerization, and AWS infrastructure management."
        }
      ]
    },
    indieSaas: {
      title: "Indie SaaS & Ventures",
      description: "Side projects where I wear every hat: Engineer, Designer, and Founder.",
      shipping: "Shipping monthly",
      comingSoonTitle: "Projects in Orbit",
      comingSoonDescription: "I am currently reformulating this section to showcase new tools and products. Stay tuned.",
    },
    projects: {
      title: "Selected Experience",
      subtitle: "High-impact applications built with modern architecture.",
      viewGithub: "View Github",
      items: [
        {
          title: "Overlord ERP",
          description: "High-throughput POS and management system handling financial data, inventory, and tax compliance (NFe). Built for reliability.",
          tech: ["Laravel", "Vue.js", "MySQL", "Docker"]
        },
        {
          title: "Mais Bela Ecosystem",
          description: "End-to-end B2B ecosystem featuring an ERP, mobile PWA, and e-commerce. Handled real-time stock sync and direct bank integrations (CNAB).",
          tech: ["React", "Node.js", "AWS", "PWA"]
        },
        {
          title: "Hentz Real Estate",
          description: "Real estate CRM automating contract generation and financial tracking for large allotments. Reduced sales processing time by 80%.",
          tech: ["PHP", "Legacy Migration", "Mariadb"]
        },
      ],
    },
    contact: {
      title: "Available for new challenges",
      description: "I am looking for roles where I can leverage my product engineering expertise to have significant business impact.",
      ctaEmail: "caiquemello.dev@gmail.com",
    },
    footer: {
      rights: "Design & Code by Caique Mello. Built with Next.js, Tailwind & Vercel Style.",
    },
  },
};

export type Content = typeof content.pt;

