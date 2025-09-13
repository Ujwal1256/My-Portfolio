export default function Footer() {
    return (
        <footer className="bg-[#10131c] text-gray-400 text-center py-8 mt-8">
            <div>
                <span className="font-bold text-xl text-[#6c63ff]">UJWAL</span>{" "}
                <span className="font-bold text-xl text-white">JAKHAMATE</span>
                <div className="mt-2 text-sm text-gray-400">
                    Full Stack Developer | Building Digital Solutions
                </div>
                <div className="flex justify-center gap-6 mt-4 text-2xl">
                    <a href="https://www.linkedin.com/in/ujwal-jakhamate/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:jakhamateujwal1256@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://github.com/ujwaljakhamate" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="mt-6 text-xs text-gray-500">
                © {new Date().getFullYear()} UJWAL JAKHAMATE. All rights reserved.
            </div>
        </footer>
    );
}