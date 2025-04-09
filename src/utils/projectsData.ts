
// Project type definition
export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  category: string;
  image: string;
  gallery?: string[];
  tags: string[];
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
};

// Projects data
export const projects: Project[] = [
  {
    id: "enterprise-saas",
    title: "Enterprise SaaS Platform",
    summary: "Led the development of a B2B SaaS platform that streamlined workflow management for 200+ enterprise clients.",
    description: "Directed the end-to-end development of a comprehensive B2B SaaS platform designed to optimize workflow management across various enterprise operations. This solution addresses the critical need for streamlined task orchestration, resource allocation, and cross-departmental collaboration.",
    challenge: "Enterprise clients were struggling with siloed workflows, resulting in inefficiencies, communication gaps, and missed deadlines. Existing solutions lacked integration capabilities and real-time collaboration features, forcing teams to use multiple disconnected tools.",
    solution: "Developed a centralized platform that unified task management, resource allocation, approval workflows, and analytics into a single ecosystem. Implemented robust API integrations with existing enterprise tools and created custom workflow templates for various industries.",
    results: [
      "Onboarded 200+ enterprise clients within the first year",
      "Reduced client workflow completion time by 35%",
      "Improved cross-department collaboration efficiency by 45%",
      "Achieved 92% user satisfaction rating in post-implementation surveys"
    ],
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudGVycHJpc2UlMjBzYWFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVudGVycHJpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVudGVycHJpc2UlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["B2B", "SaaS", "Enterprise", "Workflow"],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io", "Redis"],
    demoUrl: "https://example.com/enterprise-saas",
    githubUrl: "https://github.com/example/enterprise-saas"
  },
  {
    id: "mobile-app",
    title: "Mobile App Redesign",
    summary: "Spearheaded the redesign of a consumer mobile app, increasing user engagement by 42% and reducing churn by 18%.",
    description: "Led a comprehensive redesign of a consumer-facing mobile application to enhance user experience, streamline core functionality, and modernize the visual interface. The project involved extensive user research, iterative prototyping, and collaboration with cross-functional teams.",
    challenge: "The existing app suffered from poor user retention, confusing navigation, and outdated design elements. User feedback indicated frustration with the app's complexity and performance issues on newer devices.",
    solution: "Conducted extensive user research to identify pain points and opportunities. Collaborated with UX/UI designers to create an intuitive, visually appealing interface. Prioritized core features based on user value and streamlined user flows to reduce friction.",
    results: [
      "Increased active user engagement by 42%",
      "Reduced user churn by 18%",
      "Improved App Store rating from 3.2 to 4.7 stars",
      "Decreased user reported issues by 64%"
    ],
    category: "UX & Design",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["Mobile", "UX/UI", "Redesign", "Consumer"],
    technologies: ["React Native", "Figma", "Firebase", "Redux", "Amplitude"],
    demoUrl: "https://example.com/mobile-app"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    summary: "Developed a comprehensive analytics dashboard that provided real-time insights, improving decision-making efficiency by 35%.",
    description: "Created a robust analytics dashboard that consolidated data from multiple sources to provide actionable insights for business stakeholders. The solution transformed raw data into visual representations that enabled faster, more informed decision-making.",
    challenge: "The company was struggling with scattered data across various platforms, making it difficult to gain holistic insights. Manual reporting was time-consuming and often resulted in delayed decision-making based on outdated information.",
    solution: "Built a centralized analytics dashboard that integrated with multiple data sources and provided customizable visualizations. Implemented automated reporting features and real-time alerts for key performance indicators.",
    results: [
      "Improved decision-making efficiency by 35%",
      "Reduced reporting time from days to minutes",
      "Enabled data-driven strategies that increased conversion rates by 18%",
      "Democratized access to insights across all departments"
    ],
    category: "Data & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRhdGElMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["Analytics", "Dashboard", "Data Visualization", "Decision Support"],
    technologies: ["Tableau", "Python", "SQL", "AWS", "Power BI"],
    demoUrl: "https://example.com/analytics-dashboard"
  },
  {
    id: "marketplace-platform",
    title: "Marketplace Platform",
    summary: "Conceptualized and launched a two-sided marketplace that connected service providers with customers, generating $1.2M in first-year revenue.",
    description: "Developed a comprehensive two-sided marketplace platform that successfully connected service providers with customers seeking their specific expertise. This platform addressed the market gap for efficiently matching specialized service offerings with qualified demand.",
    challenge: "Service providers struggled to find new customers, while customers found it difficult to locate reliable, vetted service providers. Existing solutions were fragmented, lacking trust mechanisms and efficient matching algorithms.",
    solution: "Built a platform with sophisticated matching algorithms, reputation systems, secure payment processing, and a seamless onboarding experience for both sides of the marketplace. Implemented verification processes to ensure quality service providers.",
    results: [
      "Generated $1.2M in first-year revenue",
      "Onboarded 500+ service providers and 5,000+ customers",
      "Achieved marketplace liquidity within 6 months",
      "Maintained a 4.8/5 average rating for completed transactions"
    ],
    category: "Market Expansion",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1556742393-f24b28ff1d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1549915148-8c7a4e193834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["Marketplace", "Platform", "Two-sided Market", "Revenue Growth"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Algolia", "AWS"],
    demoUrl: "https://example.com/marketplace-platform",
    githubUrl: "https://github.com/example/marketplace-platform"
  },
  {
    id: "ai-integration",
    title: "AI Feature Integration",
    summary: "Led the integration of AI-powered features into an existing product, resulting in a 28% improvement in user satisfaction scores.",
    description: "Directed the strategic integration of artificial intelligence capabilities into an established product, enhancing its functionality, personalization, and predictive capabilities. This initiative transformed the user experience through intelligent automation and insightful recommendations.",
    challenge: "The existing product offered a static, one-size-fits-all experience that didn't adapt to individual user needs or behaviors. Competitors were beginning to leverage AI to provide more personalized experiences.",
    solution: "Integrated machine learning algorithms to analyze user behavior and provide personalized recommendations. Implemented natural language processing for enhanced search capabilities and developed predictive features to anticipate user needs.",
    results: [
      "Increased user satisfaction scores by 28%",
      "Boosted feature adoption by 40%",
      "Reduced customer support inquiries by 32%",
      "Increased average session duration by 24%"
    ],
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1677442135968-6054f5378464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1675271591211-929928758fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["AI", "Machine Learning", "Feature Development", "User Satisfaction"],
    technologies: ["TensorFlow", "Python", "AWS SageMaker", "NLP", "Recommendation Systems"],
    demoUrl: "https://example.com/ai-integration"
  },
  {
    id: "product-launch",
    title: "New Product Launch",
    summary: "Managed the end-to-end launch of a new product, from concept to market, achieving 150% of first-quarter sales targets.",
    description: "Led the comprehensive process of bringing a new product from initial concept to successful market launch. This involved coordinating cross-functional teams, developing marketing strategies, and executing a phased rollout plan that exceeded revenue expectations.",
    challenge: "The company needed to enter a competitive market segment with a differentiated product offering. The launch timeline was aggressive, with limited resources and high expectations from stakeholders.",
    solution: "Developed a robust go-to-market strategy with clear positioning against competitors. Created a phased launch plan with beta testing to gather early feedback. Coordinated marketing, sales, and customer support teams to ensure alignment throughout the process.",
    results: [
      "Achieved 150% of first-quarter sales targets",
      "Secured coverage in 12 industry publications at launch",
      "Established a 22% market share within the first year",
      "Won 'Product Innovation of the Year' at industry awards"
    ],
    category: "Go-to-Market",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdCUyMGxhdW5jaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3QlMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1536675572774-8cced4b674c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    tags: ["Product Launch", "GTM Strategy", "Sales", "Marketing"],
    technologies: ["Market Research", "Competitor Analysis", "Salesforce", "HubSpot", "Google Analytics"],
    demoUrl: "https://example.com/product-launch",
    githubUrl: "https://github.com/example/product-launch"
  }
];

// Function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
