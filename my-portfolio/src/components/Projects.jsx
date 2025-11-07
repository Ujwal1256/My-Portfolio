import memoryLaneImg from "../assets/memoryLane.png";
import petCareImg from "../assets/petCare.png";
import investmentimg from "../assets/investmentimg.png";

export default function Projects() {
  const projects = [
    {
      title: "Investment Portfolio Tracker",
      desc: "Full-stack web app for tracking and analyzing investments across stocks, crypto, and bonds with real-time insights and analytics.",
      tags: ["React", "Node.js", "Express JS", "MongoDB", "Netlify", "Render"],
      github:
        "https://github.com/Ujwal1256/Investment-Portfolio-Tracker/tree/main/frontend/Investment-Portfolio-Tracker",
      demo: "https://investment-portfolio-tracker-app.netlify.app/",
      image: investmentimg,
      demoLabel: "Live",
    },
    {
      title: "Memory Lane Personal",
      desc: "Personal web app for storing and organizing memories with photos, notes, tags, and sharing features with timeline view.",
      tags: [
        "HTML5",
        "CSS",
        "BootStrap",
        "JavaScript",
        "Firebase",
        "Authentication",
      ],
      github:
        "https://github.com/Ujwal1256/Ujwal1256-MemoryLane_Personal/tree/main/MemoryLane_Personal",
      demo: "https://memory-lane-personal.netlify.app/",
      image: memoryLaneImg,
      demoLabel: "Live",
    },
    {
      title: "Pet Care App",
      desc: "React web application for pet health management with feeding schedules, appointment reminders, and wellness tracking analytics.",
      tags: [
        "React",
        "Firebase",
        "JavaScript",
        "Tailwind CSS",
        "Authentication",
        "Real-time Updates",
      ],
      github:
        "https://github.com/Ujwal1256/Pet-Care-App/tree/main/pet-care-app",
      demo: "https://pet-care-app-for-all.netlify.app/",
      image: petCareImg,
      demoLabel: "Live",
    },
  ];
  return (
    <section id="projects" className="py-16 bg-white text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
      <p className="mb-10 text-gray-600">
        Here are some of my best projects that showcase my full-stack
        development skills
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white border p-6 rounded-xl shadow hover:shadow-blue-400 transition flex flex-col"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-m font-bold mb-2 text-left">{proj.title}</h2>
            <p className="mb-4 text-gray-700 text-left">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-md text-[10px] font-medium border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-auto">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 mr-2 px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
              >
                Code
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {proj.demoLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
