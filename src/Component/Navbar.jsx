import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // ✅ added
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white uppercase shadow-md pt-2 pb-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-24 w-24" />
              </Link>
            </div>

            {/* Hamburger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-black hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden md:flex text-xl space-x-6">
              <Link to="/" className="text-black hover:text-blue-600 font-bold">
                Home
              </Link>
              <HashLink smooth to="/#work" className="text-black hover:text-blue-600 font-bold">
                How We Work
              </HashLink>
              <Link to="/about-us" className="text-black hover:text-blue-600 font-bold">
                About Us
              </Link>
              <Link to="/technologies" className="text-black hover:text-blue-600 font-bold">
                Technologies
              </Link>
              <Link to="/career" className="text-black hover:text-blue-600 font-bold">
                Career
              </Link>
              <HashLink smooth to="/#contact" className="text-black hover:text-blue-600 font-bold">
                Contact Us
              </HashLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 text-center bg-blue-900 text-xl pt-2 pb-4 space-y-2 shadow-md z-40">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            Home
          </Link>
          <HashLink smooth to="/#work" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            How We Work
          </HashLink>
          <Link to="/about-us" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            About Us
          </Link>
          <Link to="/technologies" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            Technologies
          </Link>
          <Link to="/career" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            Career
          </Link>
          <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-300 font-bold block">
            Contact Us
          </HashLink>
        </div>
      )}
    </>
  );
}

export default Navbar;
