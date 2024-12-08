import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Products Exam. All rights reserved.</p>
        <p className="text-sm">
          Built with <a href="https://nextjs.org/" className="text-blue-300 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" className="text-blue-300 hover:underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
