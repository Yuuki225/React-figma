import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#131010] text-white py-2">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Horegshopu. All rights reserved.</p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com/razwa.arqya"
            className="text-2xl hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
           href="https://youtube.com/@RKR_CHANNEL"
           className="text-2xl hover:text-red-600 transition-colors"
           target="_blank"
           rel="noopener noreferrer"
           >
            <FaYoutube />
           </a>
          <a
            href="https://instagram.com/rzwa223"
            className="text-2xl hover:text-pink-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
