import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-xl font-bold text-blue-700 hover:text-blue-800 transition"
        >
          Shohaib&nbsp;Ibne&nbsp;Monju
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-5 text-gray-700 font-medium items-center">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-600 transition">
              Education
            </a>
          </li>
          <li>
            <a href="#research" className="hover:text-blue-600 transition">
              Research
            </a>
          </li>
          <li>
            <a href="#publications" className="hover:text-blue-600 transition">
              Publications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

          {/* CV Download Button */}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}Shohaib_Ibne_Monju_CV.pdf`}
              target="_blank"
	      rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-md shadow hover:bg-blue-700 transition"
            >
              View CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
