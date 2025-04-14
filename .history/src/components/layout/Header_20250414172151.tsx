
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header id="nav" className="text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img id="logo" src={Logo} alt="Logo" />
            {/* <span className="text-white">Tell Your Story</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a onClick={() => scrollToSection('hero')} id="link" className="hover:text-yellow-400 transition-colors cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} id="link" className="hover:text-yellow-400 transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection('prizes-section')} id="link" className="hover:text-yellow-400 transition-colors cursor-pointer">Prizes</a>
            <a onClick={() => scrollToSection('terms')} id="link" className="hover:text-yellow-400 transition-colors cursor-pointer">Terms (T&C)</a>
            <a onClick={() => scrollToSection('contact')} id="link" className="hover:text-yellow-400 transition-colors cursor-pointer">Contact us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
          id=""
            onClick={toggleMenu}
            className="md:hidden  hover:text-yellow-400 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a onClick={() => scrollToSection('hero')} className="hover:text-yellow-400 transition-colors py-2 cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition-colors py-2 cursor-pointer">About</a>
              <a onClick={() => scrollToSection('prizes-section')} className="hover:text-yellow-400 transition-colors py-2 cursor-pointer">Prizes</a>
              <a onClick={() => scrollToSection('terms')} className="hover:text-yellow-400 transition-colors py-2 cursor-pointer">Terms (T&C)</a>
              <a onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-colors py-2 cursor-pointer">Contact us</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;



