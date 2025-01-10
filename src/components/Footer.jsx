import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">PlaySchool</h3>
            <p className="text-gray-400 mb-6">
              Nurturing young minds with love, care, and education. Join our community where learning meets fun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-emerald-400" />
                <a href="tel:+1234567890" className="hover:text-emerald-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-emerald-400" />
                <a href="mailto:info@playschool.com" className="hover:text-emerald-400 transition-colors">
                  info@playschool.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                <span>123 Education Street, Learning City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hours & Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Clock size={16} className="mr-3 text-emerald-400" />
                <span>Mon - Fri: 7:30 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MessageCircle size={16} className="mr-3 text-emerald-400" />
                <a href="https://wa.me/1234567890" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <Link
              to="/enroll"
              className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PlaySchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
