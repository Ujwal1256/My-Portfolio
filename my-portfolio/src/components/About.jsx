export default function About() {
    return (
        <section 
            id="about" 
            className="min-h-screen bg-white text-gray-900 flex flex-col justify-center"
        >
            <h2 className="text-4xl font-bold text-center mb-2">
                About Me
            </h2>
            <div className="flex justify-center">
                <div className="w-16 h-1 bg-purple-600 rounded mb-8"></div>
            </div>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
                {/* Left Side */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">UJWAL JAKHAMATE</h3>
                    <p className="mb-6 text-gray-700">
                        I'm a passionate Full Stack Developer with expertise in building responsive web applications and mobile solutions. With experience in the MERN stack, Firebase, and Android development, I love turning ideas into digital reality. Currently expanding my skills through continuous learning and hands-on projects.
                    </p>
                    <div className="flex flex-col gap-2 text-left text-gray-700">
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <span>jakhamateujwal1256@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span>+91-9021996783</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Nagpur, India</span>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <div className="bg-white border rounded-lg shadow p-6 flex-1 text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                            <div className="text-gray-700">Projects</div>
                        </div>
                        <div className="bg-white border rounded-lg shadow p-6 flex-1 text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">6mo</div>
                            <div className="text-gray-700">Experience</div>
                        </div>
                    </div>
                    <div className="bg-purple-50 border rounded-lg shadow p-6 text-left">
                        <div className="font-semibold text-gray-800 mb-1">Education</div>
                        <div className="font-bold text-gray-900">Computer Science Engineering</div>
                        <div className="text-gray-700 text-sm">
                            Priyadarshini J.L. College of Engineering, Nagpur
                        </div>
                        <div className="text-purple-600 text-xs mt-1">2020 - 2024</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
