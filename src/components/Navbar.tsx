
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-pm-darker shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-gradient">PM</span>Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="text-white hover:text-pm-purple transition-colors">About</a>
            <a href="#resume" className="text-white hover:text-pm-purple transition-colors">Resume</a>
            <a href="#projects" className="text-white hover:text-pm-purple transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-pm-purple transition-colors">Contact</a>
          </div>
          <a href="/resume.pdf" download className="btn-primary inline-flex items-center">
            <Download size={16} className="mr-2" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-pm-darker bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8 space-y-8">
          <a href="#about" onClick={closeMenu} className="text-xl text-white hover:text-pm-purple transition-colors py-2 border-b border-gray-800">About</a>
          <a href="#resume" onClick={closeMenu} className="text-xl text-white hover:text-pm-purple transition-colors py-2 border-b border-gray-800">Resume</a>
          <a href="#projects" onClick={closeMenu} className="text-xl text-white hover:text-pm-purple transition-colors py-2 border-b border-gray-800">Projects</a>
          <a href="#contact" onClick={closeMenu} className="text-xl text-white hover:text-pm-purple transition-colors py-2 border-b border-gray-800">Contact</a>
          <a href="/resume.pdf" download className="btn-primary flex items-center justify-center mt-4">
            <Download size={16} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
