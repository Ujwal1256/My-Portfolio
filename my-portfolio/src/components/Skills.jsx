export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "🌐",
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Tailwind CSS", "Responsive Design"],
        },
        {
            title: "Backend",
            icon: "🖥️",
            skills: ["Node.js", "Express.js", "RESTful APIs", "Firebase", "Authentication", "API Integration"],
        },
        {
            title: "Database",
            icon: "🗄️",
            skills: ["MongoDB", "Firestore", "Database Design", "Data Modeling", "Queries"],
        },
        {
            title: "Mobile",
            icon: "📱",
            skills: ["Android (Java)", "React Native", "Mobile UI/UX", "Firebase Auth", "Location Services"],
        },
        {
            title: "Tools & Others",
            icon: "🔗",
            skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "Notion"],
        },
        {
            title: "Languages",
            icon: "🎨",
            skills: ["JavaScript", "Java", "HTML", "CSS", "JSON", "RESTful Services"],
        },
    ];

    return (
        <section id="skills" className="py-16 bg-[#f6f8ff] text-center">
            <h2 className="text-4xl font-bold mb-2">Skills & Technologies</h2>
            <div className="w-16 h-1 mx-auto mb-8 bg-[#7c3aed] rounded"></div>
            <div className="flex flex-wrap justify-center gap-8">
                {skillCategories.map((cat, idx) => (
                    <div
                        key={cat.title}
                        className="bg-white rounded-xl shadow-md p-8 w-[320px] flex flex-col items-center mb-4"
                    >
                        <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                            style={{
                                background: idx === 0
                                    ? "#e0e7ff"
                                    : idx === 1
                                    ? "#d1fae5"
                                    : idx === 2
                                    ? "#f3e8ff"
                                    : idx === 3
                                    ? "#ffe4e6"
                                    : idx === 4
                                    ? "#d1fae5"
                                    : "#ffe4e6",
                            }}
                        >
                            <span className="text-3xl">{cat.icon}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-4">{cat.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {cat.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="bg-[#eef2ff] text-[#3730a3] px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}