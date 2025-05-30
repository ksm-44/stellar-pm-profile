
import { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Project type definition
type Project = {
  id: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  tags: string[];
  demoUrl?: string;
};

const ProjectsSection = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: "enterprise-saas",
      title: "Enterprise SaaS Platform",
      summary: "Led the development of a B2B SaaS platform that streamlined workflow management for 200+ enterprise clients.",
      category: "Product Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVudGVycHJpc2UlMjBzYWFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["B2B", "SaaS", "Enterprise", "Workflow"],
      demoUrl: "https://example.com/enterprise-saas"
    },
    {
      id: "mobile-app",
      title: "Mobile App Redesign",
      summary: "Spearheaded the redesign of a consumer mobile app, increasing user engagement by 42% and reducing churn by 18%.",
      category: "UX & Design",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tags: ["Mobile", "UX/UI", "Redesign", "Consumer"],
      demoUrl: "https://example.com/mobile-app"
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      summary: "Developed a comprehensive analytics dashboard that provided real-time insights, improving decision-making efficiency by 35%.",
      category: "Data & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["Analytics", "Dashboard", "Data Visualization", "Decision Support"],
      demoUrl: "https://example.com/analytics-dashboard"
    },
    {
      id: "marketplace-platform",
      title: "Marketplace Platform",
      summary: "Conceptualized and launched a two-sided marketplace that connected service providers with customers, generating $1.2M in first-year revenue.",
      category: "Market Expansion",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmtldHBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["Marketplace", "Platform", "Two-sided Market", "Revenue Growth"],
      demoUrl: "https://example.com/marketplace-platform"
    },
    {
      id: "ai-integration",
      title: "AI Feature Integration",
      summary: "Led the integration of AI-powered features into an existing product, resulting in a 28% improvement in user satisfaction scores.",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1677442135968-6054f5378464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["AI", "Machine Learning", "Feature Development", "User Satisfaction"],
      demoUrl: "https://example.com/ai-integration"
    },
    {
      id: "product-launch",
      title: "New Product Launch",
      summary: "Managed the end-to-end launch of a new product, from concept to market, achieving 150% of first-quarter sales targets.",
      category: "Go-to-Market",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBsYXVuY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tags: ["Product Launch", "GTM Strategy", "Sales", "Marketing"],
      demoUrl: "https://example.com/product-launch"
    }
  ];

  // State for category filtering
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Product Strategy", "UX & Design", "Data & Analytics", "Innovation", "Go-to-Market", "Market Expansion"];

  // Filtered projects based on selected category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-pm-blue/10 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pm-teal/10 rounded-full filter blur-3xl z-0" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pm-blue text-white shadow-md shadow-pm-blue/20'
                  : 'bg-pm-charcoal text-gray-300 hover:bg-pm-blue/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in gradient-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-pm-blue/20 text-pm-blue px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-pm-charcoal py-1 px-2 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/project/${project.id}`} 
                    className="inline-flex items-center text-pm-blue hover:text-pm-teal transition-colors"
                  >
                    View Details <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pm-teal hover:text-white transition-colors inline-flex items-center"
                    >
                      Demo <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
