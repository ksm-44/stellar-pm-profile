
import { User, Target, MessageSquare, LightbulbIcon } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
          <div className="lg:col-span-3 animate-fade-in">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Product Manager with expertise in translating complex business requirements into user-centered solutions. With a strong background in both technical and strategic aspects of product development, I excel at working cross-functionally to deliver products that exceed expectations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My approach combines data-driven decision making with empathetic leadership to create products that solve real user problems while achieving business objectives. I thrive in collaborative environments where I can leverage diverse perspectives to drive innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not crafting product strategies, you might find me exploring new technologies, contributing to open source projects, or mentoring aspiring product managers.
            </p>
          </div>
          
          <div className="lg:col-span-2 space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <User className="mr-3 text-pm-purple" /> What I Do
              </h3>
              <ul className="fancy-list text-gray-300">
                <li>Create product strategies and roadmaps</li>
                <li>Analyze market trends and user needs</li>
                <li>Lead cross-functional teams</li>
                <li>Prioritize features with stakeholders</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Target className="mr-3 text-pm-purple" /> My Approach
              </h3>
              <ul className="fancy-list text-gray-300">
                <li>User-centric product design</li>
                <li>Data-driven decision making</li>
                <li>Agile methodology expertise</li>
                <li>Clear communication and collaboration</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="mr-3 text-pm-purple" /> My Philosophy
            </h3>
            <p className="text-gray-300">
              I believe that the best products emerge when we deeply understand user needs and align them with business goals. Great product management is about making strategic choices, empowering teams, and continuously iterating based on feedback and data.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <LightbulbIcon className="mr-3 text-pm-purple" /> My Value Add
            </h3>
            <p className="text-gray-300">
              What sets me apart is my unique combination of technical knowledge, business acumen, and interpersonal skills. I bridge gaps between departments, translate complex ideas into actionable plans, and inspire teams to deliver their best work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
