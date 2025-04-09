
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Target, Lightbulb, BarChart, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

// Project type definition
type ProjectDetail = {
  id: string;
  title: string;
  category: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  team: string;
  tools: string[];
  keyFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
};

// Sample project data
const projectsData: ProjectDetail[] = [
  {
    id: "enterprise-saas",
    title: "Enterprise SaaS Platform",
    category: "Product Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudGVycHJpc2UlMjBzYWFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    overview: "Led the development of a B2B SaaS platform that streamlined workflow management for enterprise clients. The platform integrated with existing enterprise systems and provided comprehensive analytics for business intelligence.",
    challenge: "Enterprise clients were struggling with fragmented workflows across multiple systems, leading to inefficiencies and data silos. The existing solutions were expensive, difficult to implement, and lacked modern features and analytics capabilities.",
    solution: "We developed a scalable SaaS platform with modular architecture that allowed for easy customization and integration with existing enterprise systems. The solution included a user-friendly interface, comprehensive analytics dashboard, and automated workflow capabilities.",
    results: [
      "Onboarded 200+ enterprise clients within the first year",
      "Increased workflow efficiency by 35% for clients",
      "Reduced implementation time from months to weeks",
      "Achieved 93% customer satisfaction rating"
    ],
    timeline: "12 months from concept to launch, with quarterly feature releases thereafter",
    team: "Cross-functional team of 15, including developers, designers, QA, and product marketing",
    tools: ["JIRA", "Figma", "AWS", "Amplitude", "Mixpanel", "Salesforce"],
    keyFeatures: [
      "Customizable workflow templates",
      "Real-time collaboration",
      "Advanced analytics dashboard",
      "Enterprise-grade security",
      "API integrations with 20+ systems"
    ],
    testimonial: {
      quote: "This platform transformed how our company manages workflows across departments. The analytics alone saved us hundreds of hours in reporting time.",
      author: "Sarah Johnson",
      position: "CTO, Enterprise Solutions Inc."
    }
  },
  {
    id: "mobile-app",
    title: "Mobile App Redesign",
    category: "UX & Design",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    overview: "Spearheaded the redesign of a consumer mobile app, focusing on improving user experience, modernizing the interface, and adding key features requested by users.",
    challenge: "The original app had an outdated UI, complex user flows, and was suffering from declining engagement and increasing churn. User feedback indicated frustration with navigation and feature discovery.",
    solution: "Conducted extensive user research to identify pain points and opportunities. Redesigned the app with a clean, modern interface, simplified navigation, and improved onboarding. Added personalization features and enhanced the core functionality based on user feedback.",
    results: [
      "Increased user engagement by 42%",
      "Reduced churn by 18% in the first quarter after launch",
      "Improved app store rating from 3.2 to 4.7 stars",
      "50% increase in daily active users"
    ],
    timeline: "6 months from research to launch",
    team: "Product manager, 3 designers, 5 developers, and QA team",
    tools: ["Figma", "Maze", "UserTesting", "Firebase", "Amplitude"],
    keyFeatures: [
      "Personalized user dashboard",
      "Streamlined onboarding process",
      "Dark mode support",
      "Offline functionality",
      "Enhanced search capabilities"
    ],
    testimonial: {
      quote: "The redesigned app is a game-changer. It's intuitive, fast, and actually enjoyable to use now.",
      author: "Michael Chen",
      position: "Regular User"
    }
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Data & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    overview: "Developed a comprehensive analytics dashboard that provided real-time insights for executives and department heads, improving decision-making efficiency across the organization.",
    challenge: "Leadership was struggling with fragmented data sources and delayed reporting, making it difficult to make timely strategic decisions. Reports were manual, error-prone, and lacked visualization capabilities.",
    solution: "Created a centralized analytics platform that integrated data from multiple sources, provided real-time visualizations, and included customizable dashboards for different departments and roles.",
    results: [
      "35% improvement in decision-making speed",
      "Eliminated 20+ hours of manual reporting per week",
      "Enabled data-driven decisions across 5 departments",
      "Increased accuracy of forecasting by 28%"
    ],
    timeline: "4 months from requirements gathering to deployment",
    team: "Product manager, data scientist, 2 front-end developers, back-end developer, and QA",
    tools: ["Tableau", "SQL", "Python", "AWS", "React"],
    keyFeatures: [
      "Real-time data visualization",
      "Role-based dashboards",
      "Automated reporting",
      "Predictive analytics",
      "Export and sharing capabilities"
    ]
  },
  {
    id: "marketplace-platform",
    title: "Marketplace Platform",
    category: "Market Expansion",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    overview: "Conceptualized and launched a two-sided marketplace that connected service providers with customers, creating a new revenue stream for the company.",
    challenge: "The company needed to expand its business model and leverage its existing user base to create new revenue opportunities. Traditional expansion methods were costly and slow.",
    solution: "Designed and built a marketplace platform that matched service providers with customers, handling discovery, booking, payments, and reviews in a seamless experience.",
    results: [
      "Generated $1.2M in first-year revenue",
      "Onboarded 500+ service providers in the first six months",
      "Achieved 30% monthly growth in transactions",
      "95% customer satisfaction rating"
    ],
    timeline: "9 months from concept to launch",
    team: "Product manager, designer, 6 developers, QA team, marketing specialist",
    tools: ["Stripe", "React", "Node.js", "MongoDB", "Intercom"],
    keyFeatures: [
      "Advanced matching algorithm",
      "Secure payment processing",
      "Review and rating system",
      "Provider verification",
      "In-app messaging system"
    ],
    testimonial: {
      quote: "This marketplace revolutionized how we connect with clients. The platform handles all the administrative aspects so we can focus on providing quality service.",
      author: "Alex Rodriguez",
      position: "Service Provider"
    }
  },
  {
    id: "ai-integration",
    title: "AI Feature Integration",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1677442135968-6054f5378464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    overview: "Led the integration of AI-powered features into an existing product, enhancing functionality and providing personalized experiences for users.",
    challenge: "Users were demanding more personalized experiences and intelligent features. The existing product was falling behind competitors who were already leveraging AI technologies.",
    solution: "Integrated machine learning algorithms and AI capabilities to provide personalized recommendations, automate routine tasks, and enhance search functionality with natural language processing.",
    results: [
      "28% improvement in user satisfaction scores",
      "15% increase in feature usage",
      "Reduced time spent on routine tasks by 40%",
      "Competitive advantage in product comparisons"
    ],
    timeline: "8 months from research to implementation",
    team: "Product manager, data scientist, ML engineer, 4 developers, UX designer",
    tools: ["TensorFlow", "Python", "AWS SageMaker", "Google Cloud AI", "React"],
    keyFeatures: [
      "Personalized content recommendations",
      "Intelligent search with NLP",
      "Automated data categorization",
      "Predictive analytics",
      "AI-powered workflow suggestions"
    ]
  },
  {
    id: "product-launch",
    title: "New Product Launch",
    category: "Go-to-Market",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    overview: "Managed the end-to-end launch of a new product, from concept development and market research to go-to-market strategy and execution.",
    challenge: "The company needed to diversify its product offerings and enter a new market segment with significant competition and established players.",
    solution: "Developed a comprehensive launch strategy that included market research, competitive analysis, positioning, messaging, and a coordinated marketing and sales plan across multiple channels.",
    results: [
      "Achieved 150% of first-quarter sales targets",
      "Secured coverage in 15+ industry publications",
      "Generated 5,000+ leads in the first month",
      "Established the product as a top 3 solution in its category"
    ],
    timeline: "14 months from concept to market launch",
    team: "Cross-functional team including product, marketing, sales, customer success, and engineering",
    tools: ["Salesforce", "HubSpot", "Google Analytics", "SurveyMonkey", "Asana"],
    keyFeatures: [
      "Unique value proposition",
      "Tiered pricing model",
      "Early adopter program",
      "Partner ecosystem",
      "Comprehensive onboarding process"
    ],
    testimonial: {
      quote: "The launch exceeded our expectations in every metric. The product's positioning was spot-on, and the market reception has been phenomenal.",
      author: "Emily Washington",
      position: "VP of Marketing"
    }
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        toast.error("Project not found!");
      }
      setLoading(false);
    }, 500);
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-page flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pm-purple"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-page flex flex-col items-center justify-center pt-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-gray-300 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-page pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/#projects" className="inline-flex items-center text-pm-purple hover:text-pm-blue transition-colors mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
            <span className="inline-block bg-pm-purple/20 text-pm-purple px-3 py-1 rounded-full text-sm mb-6">
              {project.category}
            </span>
            
            <div className="glass-card rounded-xl overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-300">{project.overview}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Target className="mr-3 text-pm-purple" /> The Challenge
                  </h2>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Lightbulb className="mr-3 text-pm-purple" /> The Solution
                  </h2>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <BarChart className="mr-3 text-pm-purple" /> Results & Impact
                </h2>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-pm-purple mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.testimonial && (
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-4">Testimonial</h2>
                  <blockquote className="border-l-4 border-pm-purple pl-4 italic text-gray-300">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-medium text-white">{project.testimonial.author}</p>
                    <p className="text-sm text-pm-gray">{project.testimonial.position}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <Calendar size={18} className="text-pm-purple mr-2" />
                    <h4 className="font-medium text-white">Timeline</h4>
                  </div>
                  <p className="text-gray-300 ml-6">{project.timeline}</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Users size={18} className="text-pm-purple mr-2" />
                    <h4 className="font-medium text-white">Team</h4>
                  </div>
                  <p className="text-gray-300 ml-6">{project.team}</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-pm-charcoal py-1.5 px-3 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-pm-purple mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Interested in similar work?</h3>
              <p className="text-gray-300 mb-4">
                If you're looking for a product manager with experience in this area, let's connect and discuss how I can help your team achieve similar results.
              </p>
              <Link to="/#contact" className="btn-primary w-full justify-center inline-flex">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
