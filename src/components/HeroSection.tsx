
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-page pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-pm-blue/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-pm-teal/20 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
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
            <div className="relative flex justify-center items-center">
              {/* 3D Floating Image Effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pm-blue to-pm-teal opacity-20 blur-lg animate-pulse"></div>
              <div className="relative w-72 h-72 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="Product Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 -right-8 p-3 glass-card rounded-lg rotate-6 animate-[pulse_4s_ease-in-out_infinite]">
                <div className="text-sm font-medium">Product Strategy</div>
              </div>
              <div className="absolute bottom-0 -left-8 p-3 glass-card rounded-lg -rotate-6 animate-[pulse_4s_ease-in-out_infinite_1s]">
                <div className="text-sm font-medium">Data-Driven</div>
              </div>
              <div className="absolute top-1/2 -right-12 p-3 glass-card rounded-lg rotate-12 animate-[pulse_4s_ease-in-out_infinite_0.5s]">
                <div className="text-sm font-medium">User-Focused</div>
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
