import React from "react";
import myPhoto from "../assets/myphoto.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#f7f9fd] text-black min-h-screen flex flex-col md:flex-row justify-center items-center px-6"
    >
      <div className="flex-1 flex flex-col justify-center items-start text-left w-full md:w-1/2 h-full">
        <span className="text-sm font-semibold text-[#6c63ff] mb-2">
          FULL STACK DEVELOPER
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-[#6c63ff]">UJWAL</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Full Stack Developer skilled in designing and developing scalable web applications using modern technologies. Passionate about creating user-centric solutions with clean, efficient code.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-[#6c63ff] px-6 py-2 rounded-lg text-lg text-white hover:bg-[#5548c8] transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg text-lg border border-[#6c63ff] text-[#6c63ff] hover:bg-[#e6e6fa] transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center w-full md:w-1/2 h-full mt-8 md:mt-0">
        <img
          src={myPhoto}
          alt="Ujwal Jakhamate"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
