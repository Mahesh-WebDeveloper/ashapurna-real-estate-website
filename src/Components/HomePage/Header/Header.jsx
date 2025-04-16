import React from "react";

function Header() {
  return (
    <div className="shadow-lg  relative">
      {/* Header Section */}
      <header className="flex items-center justify-between max-w-[1200px] mx-auto px-4">
        {/* Logo Section */}
        <div className="relative">
          <img
            src="images/ashapuranalogo.jpg"
            alt="Ashapura Logo"
            className="w-[152px] object-contain "
          />
        </div>

        {/* Navigation Menu */}
        <nav className="pb-4"> 
          <ul className="flex space-x-8 text-gray-800 font-medium">
            <li className="hover:text-red-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Media and Events</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Blogs</li>
            <li className="hover:text-red-500 transition-colors cursor-pointer">Contact Us</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
