"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import { staggerContainer, cardVariants, fadeInSlight, underlineVariants } from '@/app/lib/animations';

// Image imports
import Money from '@/public/imagens/money.jpg';
import School from '@/public/imagens/school.jpg';
import Restaurant from '@/public/imagens/food.jpg';

const projectData = [
  {
    title: "Soluções Financeiras",
    description: "Consultoria e desenvolvimento de plataformas para o setor financeiro.",
    technologies: "React, Next.js, Tailwind CSS, Stripe",
    image: Money,
    alt: "Projeto Financeiro Exemplo",
    link: "/portfolio/financeiro",
  },
  {
    title: "Website para Restaurantes",
    description: "Criação de sites modernos e responsivos para restaurantes e delivery.",
    technologies: "Next.js, Tailwind CSS, Framer Motion",
    image: Restaurant,
    alt: "Projeto Restaurante Exemplo",
    link: "/portfolio/restaurante",
  },
  {
    title: "Plataforma EAD Idiomas",
    description: "Desenvolvimento de plataformas completas para ensino a distância de idiomas.",
    technologies: "React, TypeScript, GraphQL",
    image: School,
    alt: "Projeto Idiomas Exemplo",
    link: "/portfolio/escola-idiomas",
  }
];

const Projects = () => (
  <section id="projetos" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-background text-text-primary">
    <div className="container mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary text-center relative inline-block left-1/2 -translate-x-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInSlight}
      >
        Meus Projetos
        <motion.span
          className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
          variants={underlineVariants}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.span>
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-container-background rounded-xl shadow-lg overflow-hidden flex flex-col border border-neutral-800 hover:shadow-primary-accent/20"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-400">{project.title}</h3>
              <p className="text-text-secondary mb-3 flex-grow">{project.description}</p>
              <p className="text-sm text-text-secondary/80 mb-4">
                <span className="font-semibold text-text-secondary">Tecnologias:</span> {project.technologies}
              </p>
              <a href={project.link} className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                Ver Projeto &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;