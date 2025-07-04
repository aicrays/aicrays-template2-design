
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact');
      return;
    }
    
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: contactElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-purple-100/20" 
          : "bg-gradient-to-r from-white/80 via-purple-50/60 to-blue-50/40 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2"
          aria-label="Aicrays"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent hover:from-gray-800 hover:via-purple-700 hover:to-purple-900 transition-all duration-300">
            Aicrays
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={scrollToTop}
            className="nav-link"
          >
            Home
          </button>
          <a href="/products" className="nav-link">Products</a>
          <a href="/partners" className="nav-link">Partners</a>
          <button onClick={handleContactClick} className="nav-link">Contact</button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={handleContactClick}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 hover:scale-105"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none hover:text-purple-600 transition-colors" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 backdrop-blur-sm flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <button 
            onClick={() => {
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-purple-50 transition-colors"
          >
            Home
          </button>
          <a 
            href="/products" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-purple-50 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Products
          </a>
          <a 
            href="/partners" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-purple-50 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Partners
          </a>
          <button 
            onClick={() => {
              handleContactClick();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-purple-50 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => {
              handleContactClick();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full w-full text-center mt-4 hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          >
            Book Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
