
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-page pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-pm-blue font-medium">Hello, I'm a</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Product Manager <br/> 
              <span className="text-gradient">Turning Vision into Reality</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              I specialize in creating product strategies that align business goals with user needs, 
              driving innovation and growth through data-driven decisions and effective team leadership.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#resume" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Let's Connect</a>
            </div>
          </div>
          <div 
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative w-full h-[440px] flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-pm-blue/20 to-pm-teal/20 rounded-2xl" />
              <div className="absolute inset-4 glass-card rounded-2xl overflow-hidden flex flex-col items-center justify-center">
                <div className="h-72 w-72 rounded-full overflow-hidden border-4 border-pm-blue/30 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                    alt="Product Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Product Management Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
                  {['User Research', 'Strategy', 'Roadmapping', 'Data Analysis', 'Team Leadership', 'Agile'].map((skill) => (
                    <div key={skill} className="bg-white/5 rounded-lg p-3">
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-pm-blue transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
