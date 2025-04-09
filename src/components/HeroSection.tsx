
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
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-white/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-white/5 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div 
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-pm-lightGray font-medium font-sans text-sm tracking-wider uppercase">Hello, I'm a</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight">
              Product Manager <br/> 
              <span className="text-gradient">Turning Vision into Reality</span>
            </h1>
            <p className="text-lg text-pm-lightGray max-w-xl font-sans">
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
              {/* Clean image presentation */}
              <div className="relative w-80 h-96 overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="Product Manager" 
                  className="w-full h-full object-cover"
                />
                {/* Minimal overlay with key skills */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-xs">Product Strategy</span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-xs">User-Focused</span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-xs">Data-Driven</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/10 rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white hover:text-pm-lightGray transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
