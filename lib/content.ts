export const content = {
  pt: {
    nav: {
      about: "Sobre",
      partnerships: "Parcerias", // Should check if this link was removed or kept. Based on last steps, Partnerships section was removed. But I should double check navbar.tsx. It seems I removed it from navItems in step 207. So I will exclude it.
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Full-Stack Web Developer",
      description: "Transformando ideias em experiências digitais excepcionais. Especializado em criar soluções modernas, performáticas e escaláveis para a web.",
      cta: "Entre em contato",
    },
    about: {
      title: "Sobre Mim",
      p1: "Sou um desenvolvedor Full-Stack apaixonado por tecnologia e resolução de problemas. Com experiência em diversas linguagens e frameworks, meu objetivo é criar soluções que não apenas funcionem, mas que proporcionem uma excelente experiência ao usuário.",
      p2: "Minha jornada no desenvolvimento web começou com a curiosidade de entender como as coisas funcionam na internet. Desde então, tenho me dedicado a aprimorar minhas habilidades, sempre buscando as melhores práticas e tecnologias modernas para entregar projetos de alta qualidade.",
      p3: "Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.",
      skills: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & Cloud",
        data: "Data & Quality",
      },
    },
    projects: {
      title: "Meus Projetos",
      items: [
        {
          title: "Overlord",
          description: "Um sistema PDV (ponto de venda) completo e responsivo. Controla finanças, estoque e emite NF-e. Desenvolvido para facilitar a gestão comercial.",
        },
        {
          title: "M&M Cigar Co.",
          description: "Site estático estilo portfólio para divulgação de marca e serviços. Design elegante focando na identidade visual da empresa.",
        },
        {
          title: "Pitanshop",
          description: "Marketplace local onde clientes podem visualizar promoções e lojas da cidade, com integração de pagamento via API PagSeguro.",
        },
        {
          title: "Mais Bela ERP",
          description: "Sistema de gerenciamento para distribuidora de maquiagens. Controle completo de estoque, NFe, e boletos bancários (CNAB240/400). Inclui App PWA para vendas externas.",
        },
        {
          title: "Hentz",
          description: "Sistema para auxiliar na venda e controle de lotes imobiliários. Integração de PDV para criação de contratos e emissão de boletos bancários.",
        },
      ],
    },
    contact: {
      title: "Vamos trabalhar juntos?",
      description: "Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto em mente ou quer apenas bater um papo, entre em contato!",
      ctaEmail: "Enviar E-mail",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      partnerships: "Partnerships", // Keeping it out if removed, but good to have structure if restored.
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      role: "Full-Stack Web Developer",
      description: "Transforming ideas into exceptional digital experiences. Specialized in creating modern, performant, and scalable web solutions.",
      cta: "Get in touch",
    },
    about: {
      title: "About Me",
      p1: "I am a Full-Stack developer passionate about technology and problem-solving. With experience in various languages and frameworks, my goal is to create solutions that not only work but also provide an excellent user experience.",
      p2: "My journey in web development began with a curiosity to understand how things work on the internet. Since then, I have dedicated myself to honing my skills, always seeking best practices and modern technologies to deliver high-quality projects.",
      p3: "I am always looking for new challenges and opportunities to learn and grow professionally.",
      skills: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & Cloud",
        data: "Data & Quality",
      },
    },
    projects: {
      title: "My Projects",
      items: [
        {
          title: "Overlord",
          description: "A complete and responsive POS (Point of Sale) system. Controls finances, inventory, and issues electronic invoices. Developed to facilitate business management.",
        },
        {
          title: "M&M Cigar Co.",
          description: "Static portfolio-style website for brand and service promotion. Elegant design focusing on the company's visual identity.",
        },
        {
          title: "Pitanshop",
          description: "Local marketplace where customers can view promotions and city stores, with payment integration via PagSeguro API.",
        },
        {
          title: "Mais Bela ERP",
          description: "Management system for a makeup distributor. Complete control of inventory, invoices, and bank slips (CNAB240/400). Includes PWA App for external sales.",
        },
        {
          title: "Hentz",
          description: "System to assist in the sale and control of real estate lots. POS integration for contract creation and bank slip issuance.",
        },
      ],
    },
    contact: {
      title: "Let's work together?",
      description: "I am always open to new opportunities and challenges. If you have a project in mind or just want to chat, get in touch!",
      ctaEmail: "Send E-mail",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export type Content = typeof content.pt;
