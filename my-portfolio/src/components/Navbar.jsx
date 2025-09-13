import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Smooth scroll to section
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Track active section using Intersection Observer
  useEffect(() => {
    const sections = items.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <nav className="bg-white sticky  top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">UJWAL</span>{" "}
          <span className="text-gray-900">JAKHAMATE</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg transition ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 py-4 space-y-4 text-center font-medium shadow">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`block px-4 py-2 rounded-lg transition w-full ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-5 py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
