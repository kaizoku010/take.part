
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tell Your Story UG</h3>
            <p className="text-gray-300 text-gray-hound">
              Showcasing the beauty, adventure, and culture of Uganda through the eyes of its travelers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-hound text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/stories" className="text-gray-hound text-gray-300 hover:text-yellow-400 transition-colors">Stories</Link></li>
              <li><Link to="/submit-story" className="text-gray-hound text-gray-300 hover:text-yellow-400 transition-colors">Submit Story</Link></li>
              <li><Link to="/about" className="text-gray-hound text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-gray-300">
              Email: <a href="mailto:info@tellyourstoryug.com" className="hover:text-yellow-400 transition-colors">info@tellyourstoryug.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-green-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Tell Your Story UG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
