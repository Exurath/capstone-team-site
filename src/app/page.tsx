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
  demoVideo: "/demo/project-demo.mkv", // Path to your demo video
  demoThumbnail: "/demo/thumbnail.png", // Thumbnail for the video
  // githubRepo: "https://github.com/yourteam/project-repo",
  liveDemo: "https://your-project-demo.vercel.app/",
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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="w-full bg-gray-950 py-20 px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Meet Our Capstone Team
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl text-center mb-10">
          We're a group of passionate developers and designers working together
          to create innovative solutions for real-world problems.
        </p>
      </div>

      {/* Project Demo Section */}
      <div className="bg-gray-950 pb-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Project Demo
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Video Column */}
            <div className="lg:col-span-3 bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <video
                  controls
                  poster={projectInfo.demoThumbnail}
                  className="w-full h-full object-cover"
                >
                  <source src={projectInfo.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Project Info Column */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">{projectInfo.title}</h3>
              <p className="text-gray-300 mb-6">{projectInfo.description}</p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-400">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectInfo.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="flex gap-4">
                <a
                  href={projectInfo.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                >
                  View on GitHub
                </a>
                <a
                  href={projectInfo.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  Live Demo
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || placeholderImage}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-6">{member.bio}</p>

                <div className="flex justify-center gap-4 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={member.email}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={24} />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sait Capstone Project. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
