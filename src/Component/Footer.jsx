import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // ✅ Added
import logo from '../assets/logo.png';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#0b1e48] to-[#61b2f9] backdrop-blur-md text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left items-start">

        {/* Logo + Slogan */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:pl-8">
          <img src={logo} alt="Logo" className="h-28 md:pl-16 w-auto" />
          <h2 className="text-2xl font-bold tracking-wide whitespace-nowrap">Modenex Solutions LTD</h2>
          <p className="text-white/60 max-w-xs">Where Innovation Meets Execution</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:pl-8">
          <h3 className="font-semibold text-lg text-[#0b1e48]">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><HashLink smooth to="/#home" className="hover:text-blue-200 transition">Home</HashLink></li>
            <li><HashLink smooth to="/#work" className="hover:text-blue-200 transition">How we Work</HashLink></li>
            <li><Link to="/about-us" className="hover:text-blue-200 transition">About</Link></li>
            <li><Link to="/technologies" className="hover:text-blue-200 transition">Technologies</Link></li>
            <li><Link to="/career" className="hover:text-blue-200 transition">Career</Link></li>
            <li><HashLink smooth to="/#contact" className="hover:text-blue-200 transition">Contact</HashLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:pl-8">
          <h3 className="font-semibold text-lg text-[#0b1e48]">Contact & Email</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-blue-200 transition">02081530497</li>
            <li className="hover:text-blue-200 transition">modenexsolutions@gmail.com</li>
          </ul>
          <h3 className="font-semibold text-lg text-[#0b1e48]">Address</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-blue-200 transition">
              5 Phoenix House, Phoenix Business Centre, Rosslyn Crescent, Harrow, London, United Kingdom, HA1 2SP
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:pl-8">
          <h3 className="font-semibold text-lg text-[#0b1e48]">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.linkedin.com/company/modenex-solutions-ltd/"
              aria-label="LinkedIn"
              className="hover:text-blue-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/50">
        &copy; {currentYear} Modenex Solutions LTD. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
