
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Award, GraduationCap, Briefcase, BookOpen, Medal, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const [downloadTooltip, setDownloadTooltip] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 md:px-6 bg-pm-darker">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">My Resume</h2>
          <div className="relative">
            <a 
              href="/resume.pdf" 
              download 
              className="btn-primary inline-flex items-center"
              onMouseEnter={() => setDownloadTooltip(true)}
              onMouseLeave={() => setDownloadTooltip(false)}
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
            {downloadTooltip && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-pm-dark text-white text-xs py-1 px-2 rounded">
                PDF format
              </div>
            )}
          </div>
        </div>
        
        <Tabs defaultValue="experience" className="animate-fade-in">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="experience" className="flex items-center justify-center gap-2">
              <Briefcase size={16} />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center justify-center gap-2">
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center justify-center gap-2">
              <BookOpen size={16} />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center justify-center gap-2">
              <Award size={16} />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="leadership" className="flex items-center justify-center gap-2">
              <Medal size={16} />
              <span className="hidden sm:inline">Leadership</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="glass-card rounded-xl p-6 md:p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <div className="mb-2">
                  <span className="text-sm text-pm-blue bg-pm-blue/10 px-3 py-1 rounded-full">2022 - Present</span>
                </div>
                <h4 className="text-xl font-bold">Senior Product Manager</h4>
                <p className="text-pm-gray">Tech Innovations Inc.</p>
                <p className="mt-4 text-gray-300">
                  Led the development and launch of the company's flagship SaaS product, resulting in a 35% increase in revenue. Collaborated with engineering, design, and marketing teams to define product requirements and ensure successful delivery.
                </p>
                <ul className="mt-4 fancy-list text-gray-300">
                  <li>Created and executed product strategy and roadmap</li>
                  <li>Led a cross-functional team of 12 members</li>
                  <li>Implemented agile methodologies to improve delivery time by 40%</li>
                  <li>Conducted user research and translated insights into features</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <div className="mb-2">
                  <span className="text-sm text-pm-blue bg-pm-blue/10 px-3 py-1 rounded-full">2019 - 2022</span>
                </div>
                <h4 className="text-xl font-bold">Product Manager</h4>
                <p className="text-pm-gray">Digital Solutions Co.</p>
                <p className="mt-4 text-gray-300">
                  Managed the product lifecycle for a B2B platform serving 200+ enterprise clients. Defined product vision, gathered requirements, and prioritized features based on market research and customer feedback.
                </p>
                <ul className="mt-4 fancy-list text-gray-300">
                  <li>Increased user retention by 25% through feature optimization</li>
                  <li>Collaborated with UX team to improve user journeys</li>
                  <li>Developed pricing strategies that increased average deal size by 15%</li>
                  <li>Created analytics dashboards to track KPIs and inform decisions</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="glass-card rounded-xl p-6 md:p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Educational Background</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <div className="mb-2">
                  <span className="text-sm text-pm-blue bg-pm-blue/10 px-3 py-1 rounded-full">2017 - 2019</span>
                </div>
                <h4 className="text-xl font-bold">Master of Business Administration</h4>
                <p className="text-pm-gray">Stanford University</p>
                <p className="mt-2 text-gray-300">
                  Specialized in Product Management and Digital Transformation
                </p>
              </div>
              
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <div className="mb-2">
                  <span className="text-sm text-pm-blue bg-pm-blue/10 px-3 py-1 rounded-full">2013 - 2017</span>
                </div>
                <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                <p className="text-pm-gray">Massachusetts Institute of Technology</p>
                <p className="mt-2 text-gray-300">
                  Minor in Business Administration. Dean's List 2015-2017.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="glass-card rounded-xl p-6 md:p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4">Product Management</h4>
                <div className="space-y-4">
                  {['Product Strategy', 'Roadmapping', 'User Research', 'Market Analysis', 'Feature Prioritization'].map((skill) => (
                    <div key={skill} className="relative pt-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-base text-white">{skill}</span>
                        <span className="text-sm text-pm-gray">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pm-blue to-pm-teal h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4">Technical & Business</h4>
                <div className="space-y-4">
                  {[
                    {name: 'Agile Methodologies', level: 'Advanced', percent: '95%'},
                    {name: 'Data Analysis', level: 'Advanced', percent: '85%'},
                    {name: 'UX/UI Design', level: 'Intermediate', percent: '75%'},
                    {name: 'Programming', level: 'Intermediate', percent: '70%'},
                    {name: 'Business Strategy', level: 'Advanced', percent: '90%'},
                  ].map((skill) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-base text-white">{skill.name}</span>
                        <span className="text-sm text-pm-gray">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pm-blue to-pm-teal h-2 rounded-full" style={{ width: skill.percent }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Tools & Software</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Jira', 'Confluence', 'Asana', 'Figma', 'Amplitude', 'Google Analytics', 
                  'Mixpanel', 'SQL', 'Tableau', 'Excel', 'PowerPoint', 'Miro',
                  'Trello', 'ProductBoard', 'Notion', 'GitHub'
                ].map((tool) => (
                  <span key={tool} className="bg-pm-charcoal py-1.5 px-3 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="glass-card rounded-xl p-6 md:p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Certified Scrum Product Owner (CSPO)",
                  issuer: "Scrum Alliance",
                  date: "2021",
                  icon: "🏆",
                  url: "https://www.scrumalliance.org/certifications/practitioners/certified-scrum-product-owner"
                },
                {
                  name: "Professional Product Manager (PPM)",
                  issuer: "Product School",
                  date: "2020",
                  icon: "🎓",
                  url: "https://productschool.com/product-management-certification/"
                },
                {
                  name: "Product Analytics Certification",
                  issuer: "Mixpanel University",
                  date: "2020",
                  icon: "📊",
                  url: "https://mixpanel.com/education/"
                },
                {
                  name: "Advanced Product Strategy",
                  issuer: "Product Management Institute",
                  date: "2019",
                  icon: "📈",
                  url: "https://productmanagementinstitute.org/"
                },
                {
                  name: "UX Design for Product Managers",
                  issuer: "Nielsen Norman Group",
                  date: "2018",
                  icon: "🎨",
                  url: "https://www.nngroup.com/ux-certification/"
                },
                {
                  name: "Agile Project Management",
                  issuer: "PMI",
                  date: "2017",
                  icon: "⚡",
                  url: "https://www.pmi.org/certifications/agile-certifications"
                }
              ].map((cert) => (
                <div key={cert.name} className="glass-card p-5 rounded-lg flex items-start group hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mr-4">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <p className="text-pm-gray text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pm-blue hover:text-pm-teal transition-colors p-2 opacity-0 group-hover:opacity-100" 
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="leadership" className="glass-card rounded-xl p-6 md:p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Leadership & Extracurricular</h3>
            
            <div className="space-y-8">
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <h4 className="text-xl font-bold">Product Management Mentor</h4>
                <p className="text-pm-gray">Product School</p>
                <p className="mt-2 text-gray-300">
                  Mentor aspiring product managers, providing guidance on career development and skill acquisition. Conduct monthly workshops on product strategy and roadmapping.
                </p>
              </div>
              
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <h4 className="text-xl font-bold">Conference Speaker</h4>
                <p className="text-pm-gray">Various Tech & Product Conferences</p>
                <p className="mt-2 text-gray-300">
                  Regular speaker at industry conferences on topics including product-led growth, user-centered design, and cross-functional collaboration.
                </p>
              </div>
              
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <h4 className="text-xl font-bold">Volunteer Product Consultant</h4>
                <p className="text-pm-gray">Tech for Good Initiative</p>
                <p className="mt-2 text-gray-300">
                  Provide pro bono product management consulting to non-profit organizations, helping them leverage technology to maximize their social impact.
                </p>
              </div>
              
              <div className="border-l-2 border-pm-blue pl-6 relative">
                <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-pm-blue"></div>
                <h4 className="text-xl font-bold">Hackathon Judge</h4>
                <p className="text-pm-gray">Regional Technology Competitions</p>
                <p className="mt-2 text-gray-300">
                  Serve as a judge for hackathons and innovation competitions, evaluating projects based on technical implementation, business viability, and user experience.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeSection;
