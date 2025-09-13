export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white text-black">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Get In Touch
                </h2>
                <div className="flex justify-center">
                    <div className="border-b-2 border-purple-500 w-24 mb-6"></div>
                </div>
                <p className="text-center mb-10 text-gray-600">
                    I'm always open to discussing new opportunities and interesting projects
                </p>
                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    {/* Left Side */}
                    <div className="flex flex-col items-start md:w-1/2 space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="bg-purple-600 text-white rounded-full p-3">
                                <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z" fill="none"/><path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2" /></svg>
                            </span>
                            <div>
                                <div className="font-semibold">Email</div>
                                <div className="text-gray-700 text-sm">jakhamateujwal1256@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="bg-purple-600 text-white rounded-full p-3">
                                <svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/></svg>
                            </span>
                            <div>
                                <div className="font-semibold">Phone</div>
                                <div className="text-gray-700 text-sm">+91-9021996783</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="bg-purple-600 text-white rounded-full p-3">
                                <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
                            </span>
                            <div>
                                <div className="font-semibold">Location</div>
                                <div className="text-gray-700 text-sm">Nagpur, India</div>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded text-blue-600 hover:bg-blue-50 flex items-center">
                                <svg className="mr-2" width="20" height="20" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V19h-4V7zm7.5 0h3.6v1.7h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.45 4.45 5.65V19h-4v-5.6c0-1.35-.03-3.1-2-3.1-2 0-2.3 1.5-2.3 3v5.7h-4V7z"/></svg>
                                LinkedIn
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer" className="border px-4 py-2 rounded text-purple-600 hover:bg-purple-50 flex items-center">
                                <svg className="mr-2" width="20" height="20" fill="currentColor"><path d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 5.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48C17.13 18.17 20 14.42 20 10c0-5.52-4.48-10-10-10z"/></svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 w-full max-w-md text-left">
                            <h3 className="font-bold text-lg mb-2">Let's Work Together</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                I'm currently looking for new opportunities and would love to hear about exciting projects or job openings that match my skills.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded flex items-center w-full justify-center">
                                <svg className="mr-2" width="20" height="20" fill="currentColor"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L10 9l6-4.99V4H4zm0 2.236V18h12V6.236l-6 4.99-6-4.99z"/></svg>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}