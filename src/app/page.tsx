// app/page.tsx
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sunhee Ku",
    role: "Software Developer",
    bio: "Passionate about creating intuitive user interfaces with React and Next.js. Loves solving complex problems with clean code.",
    image: "/team/member1.jpg",
    linkedin: "https://www.linkedin.com/in/sunheeku0222",
    github: "https://github.com/Elysia-K",
    email: "mailto:sunhee.ku92@gmail.com",
    instagram: "https://www.instagram.com/ely.seuni_/",
  },
  {
    name: "Luka Haasdyk",
    role: "Software Developer",
    bio: "With a strong focus on front-end development, I specialize in designing functional and user-friendly components that enhance the digital experience. My passion lies in creating intuitive interfaces that balance aesthetics with seamless usability",
    image: "/team/member2.jpg",
    linkedin: "https://www.linkedin.com/in/luka-haasdyk-451325294/",
    github: "https://github.com/Luka-Haasdyk",
    email: "mailto:Luka.Haasdyk@edu.sait.ca",
    instagram: "https://www.instagram.com/luka_haasdyk/",
  },
  {
    name: "James Tuling",
    role: "Software Developer",
    bio: "Specialized in data analysis with a focus on web scraping and machine learning, and experienced in building immersive 3D web experiences using Three.js. Proficient in full-stack development, API integration, and modern JavaScript frameworks.",
    image: "/team/member3.jpg",
    linkedin: "https://www.linkedin.com/in/james-tuling-261a861b6/",
    github: "https://github.com/Exurath",
    email: "mailto:tulingjames9@gmail.com",
    instagram: "https://www.instagram.com/jamestuling_/",
  },
  {
    name: "Evan Spencer",
    role: "Software Developer",
    bio: "Versatile developer comfortable working across the entire tech stack. Experienced in React, Node.js, and cloud infrastructure.",
    image: "/team/member4.jpg",
    linkedin: "https://www.linkedin.com/in/evan-spencer-82182b1b8/",
    github: "https://github.com/LilSpen",
    email: "mailto:evanjs1998@gmail.com",
    instagram: "https://www.instagram.com/evanspencer15/",
  },
];

// Use a default placeholder image
const placeholderImage = "https://via.placeholder.com/400x400?text=Team+Member";

// Project information
const projectInfo = {
  title: "DocVerify",
  description:
    "Our capstone project is a web-based tool that helps mortgage brokers pre-screen financial documents more efficiently. It uses OCR, LLM, and rule-based validation to flag issues like missing signatures or inconsistent income on forms like T4s and pay stubs. Built with Next.js, Node.js, and Azure services, the app improves document accuracy, speeds up processing, and reduces errors making mortgage approvals smoother and faster.",
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "Azure Form Recognizer",
    "Tailwind CSS",
    "Ollama (LLM)",
    "Azure Blob Storage",
    "Nodemailer",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-850 to-gray-800 text-white">
      {/* Hero Section - Fixed for mobile */}
      <section id="hero" className="w-full bg-gradient-to-r from-gray-950 to-gray-900 py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center overflow-hidden relative">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Meet Our Capstone Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-8 sm:mb-10 px-2">
            We are a group of passionate developers and designers working together
            to create innovative solutions for real-world problems.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
        </div>
        {/* Added background elements for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-500 filter blur-3xl"></div>
        </div>
      </section>

      {/* Project Demo Section */}
      <section id="project" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Project Showcase
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Video Column */}
            <div className="lg:col-span-3 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform transition-all hover:scale-102 hover:shadow-blue-900/20 hover:shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/a59QF-VkZMc"
                  title="Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Project Info Column */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="p-4 sm:p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-lg">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-blue-300">
                  {projectInfo.title}
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {projectInfo.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400 flex items-center">
                    <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projectInfo.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm font-medium transition-all hover:bg-gray-700 hover:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section id="team" className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">The Team</h2>
        <p className="text-center text-gray-400 mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Meet the talented developers behind DocVerify, bringing together
          diverse skills and expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-850 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 border border-gray-700/50"
            >
              <div className="relative h-60 sm:h-72 w-full">
                <Image
                  src={member.image || placeholderImage}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2}
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-1">{member.name}</h2>
                <p className="text-blue-400 font-medium mb-3 sm:mb-4">{member.role}</p>
                <p className="text-gray-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4 sm:gap-5 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.email}
                    className="text-gray-300 hover:text-red-400 transition-colors transform hover:scale-110"
                    aria-label="Email"
                  >
                    <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SAIT Capstone Project. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 sm:mt-3">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}