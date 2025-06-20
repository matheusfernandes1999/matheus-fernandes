import Image from "next/image"; // Keep for potential later use, e.g. icons

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24 py-12 bg-background text-text-primary">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Hi, I'm <span className="text-primary-accent">Alex Doe</span> - Web Designer & Developer
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
          I craft beautiful and functional websites. Passionate about modern design and cutting-edge technologies.
        </p>
        <a
          href="#projects"
          className="bg-primary-accent hover:bg-primary-accent/80 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background"
        >
          View My Work
        </a>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-container-background text-text-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary relative inline-block">
            About Me
            <span className="block w-2/3 h-1 bg-secondary-accent mx-auto mt-2"></span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            With 5 years of experience in the field, I specialize in creating responsive and user-friendly web applications. My toolkit includes React, Next.js, Tailwind CSS, and Figma. I'm dedicated to bringing creative visions to life through code and design. I am a lifelong learner, always eager to explore new technologies and improve my skillset to deliver exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-background text-text-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary text-center relative inline-block left-1/2 -translate-x-1/2">
            My Work
            <span className="block w-2/3 h-1 bg-primary-accent mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1 */}
            <div className="bg-container-background rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col border border-neutral-800 hover:shadow-primary-accent/20">
              <div className="relative w-full h-56"> {/* Increased height slightly */}
                <Image
                  src="/project1.svg"
                  alt="Project Alpha placeholder image"
                  layout="fill"
                  objectFit="cover"
                  // Removed rounded-md from here, will be handled by parent's overflow-hidden and rounded-xl
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Project Alpha</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  A modern e-commerce platform built with Next.js and Stripe, focusing on seamless user experience.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tech:</span> React, Next.js, Tailwind CSS, Stripe
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-container-background rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col border border-neutral-800 hover:shadow-primary-accent/20">
              <div className="relative w-full h-56">
                <Image
                  src="/project2.svg"
                  alt="Portfolio Site V2 placeholder image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Portfolio Site V2</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  My personal portfolio showcasing my latest work and skills, built with a mobile-first approach.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tech:</span> Next.js, Tailwind CSS, TypeScript
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  View Project &rarr;
                </a>
              </div>
            </div>

            {/* Project Card 3 (Optional - can add more) */}
            <div className="bg-container-background rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col border border-neutral-800 hover:shadow-primary-accent/20">
              <div className="relative w-full h-56">
                <Image
                  src="/project3.svg"
                  alt="Client Dashboard placeholder image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Client Dashboard</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  A data visualization dashboard for a SaaS product, enabling clients to track their metrics.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tech:</span> React, Chart.js, Firebase
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-container-background text-text-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary relative inline-block">
            Skills
            <span className="block w-2/3 h-1 bg-secondary-accent mx-auto mt-2"></span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "Node.js", "GraphQL", "Firebase", "Git"].map((skill) => (
              <span key={skill} className="bg-background border border-primary-accent text-primary-accent text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm hover:bg-primary-accent hover:text-background transition-colors duration-300 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-background text-text-primary text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-text-primary relative inline-block">
            Get In Touch
            <span className="block w-2/3 h-1 bg-primary-accent mx-auto mt-2"></span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-text-secondary leading-relaxed">
            Interested in working together or have a question? Reach out! My inbox is always open.
          </p>
          <a
            href="mailto:alex.doe@example.com"
            className="bg-primary-accent hover:bg-primary-accent/80 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-container-background text-text-secondary text-center border-t border-neutral-700">
        <p className="text-sm">&copy; 2024 Alex Doe. All rights reserved.</p>
      </footer>
    </>
  );
}
