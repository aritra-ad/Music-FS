import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import footerlogo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <div className='bg-[#2f2f2f] py-12 relative'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <div className='flex justify-center lg:justify-start'>
          <img src={footerlogo} alt="Footer Logo" className='w-40 h-auto' />
        </div>

        {/* Links and Social Icons */}
        <div className='mt-8 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0'>
          {/* Links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white text-center lg:text-left'>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Home</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>About</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Hot-Topic</a></li>
            </ul>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>News</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Celebrity Spotlight</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Join Trident</a></li>
            </ul>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Crowd Funding</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Founding Board</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Board of Directors</a></li>
            </ul>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Mission Statement</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>The Team</a></li>
              <li><a href="#" className='hover:text-[#ef4230] transition-colors'>Contact Us</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className='flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4'>
            <a href="#" className='bg-[#ef4230] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d13828] transition-colors'>
              <FontAwesomeIcon icon={faFacebookF} size="lg" className='text-white' />
            </a>
            <a href="#" className='bg-[#ef4230] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d13828] transition-colors'>
              <FontAwesomeIcon icon={faInstagram} size="lg" className='text-white' />
            </a>
            <a href="#" className='bg-[#ef4230] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d13828] transition-colors'>
              <FontAwesomeIcon icon={faTwitter} size="lg" className='text-white' />
            </a>
            <a href="#" className='bg-[#ef4230] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#d13828] transition-colors'>
              <FontAwesomeIcon icon={faYoutube} size="lg" className='text-white' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
