
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../media/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white shadow-md">
      <div className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img id="logo" src={Logo} alt="Logo" />
            {/* <span className="text-white">Tell Your Story</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" id="link" className="hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/stories" id="link" className="hover:text-yellow-400 transition-colors">Stories</Link>
            <Link to="/submit-story" id="link" className="hover:text-yellow-400 transition-colors">Submit Story</Link>
            <Link to="/about" id="link" className="hover:text-yellow-400 transition-colors">About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                id="link"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/stories" 
                id="link"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </Link>
              <Link 
                to="/submit-story" 
                id="link"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Story
              </Link>
              <Link 
                to="/about" 
                id="link"
                className="hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
