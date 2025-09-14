export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-900 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
        About Me
      </h2>
      <div className="flex justify-center">
        <div className="w-12 sm:w-16 h-1 bg-purple-600 rounded mb-8"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            UJWAL JAKHAMATE
          </h3>
          <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building responsive web applications and mobile solutions. With experience in the MERN stack, Firebase, and Android development, I love turning ideas into digital reality. Currently expanding my skills through continuous learning and hands-on projects.
          </p>

          <div className="flex flex-col gap-3 text-left text-gray-700">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span className="text-sm sm:text-base">
                jakhamateujwal1256@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span className="text-sm sm:text-base">+91-9021996783</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-sm sm:text-base">Nagpur, India</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white border rounded-lg shadow p-6 flex-1 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                3+
              </div>
              <div className="text-gray-700 text-sm sm:text-base">Projects</div>
            </div>
            <div className="bg-white border rounded-lg shadow p-6 flex-1 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                6mo
              </div>
              <div className="text-gray-700 text-sm sm:text-base">Experience</div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-purple-50 border rounded-lg shadow p-6 text-left">
            <div className="font-semibold text-gray-800 mb-1">Education</div>
            <div className="font-bold text-gray-900">
              Computer Science Engineering
            </div>
            <div className="text-gray-700 text-sm sm:text-base">
              Priyadarshini J.L. College of Engineering, Nagpur
            </div>
            <div className="text-purple-600 text-xs sm:text-sm mt-1">
              2020 - 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
