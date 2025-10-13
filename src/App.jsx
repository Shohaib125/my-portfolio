import React from "react";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Links from "./components/Links";

// Tailwind + global styles
import "./app.css";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 flex flex-col gap-20">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Publications Section */}
        <Publications />
	
	{/* Projects Section */}
        <Projects />     

        {/* Contact Section */}
        <Contact />

        {/* Links / Connect Section */}
        <Links />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm border-t mt-10">
        © {new Date().getFullYear()} Shohaib Ibne Monju — All rights reserved.
      </footer>
    </div>
  );
}
