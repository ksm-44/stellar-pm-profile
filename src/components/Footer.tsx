
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-pm-darker py-10 px-4 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-white font-bold text-xl font-heading">
              PM<span className="text-pm-lightGray">Portfolio</span>
            </p>
            <p className="text-pm-gray mt-2 font-sans">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-pm-gray hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-pm-gray/50">|</span>
            <a href="#" className="text-pm-gray hover:text-white transition-colors">Terms of Service</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-pm-charcoal hover:bg-pm-accent/20 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
