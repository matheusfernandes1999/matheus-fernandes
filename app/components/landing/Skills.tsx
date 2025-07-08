"use client";
import { motion } from 'framer-motion';
import { staggerContainer, skillBadgeVariants, fadeInSlight, underlineVariants } from '@/app/lib/animations';

const skillsList = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "Node.js", "Firebase", "Git"];

const Skills = () => (
  <section id="habilidades" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-container-background text-text-primary">
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary relative inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInSlight}
      >
        Habilidades
        <motion.span
          className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
          variants={underlineVariants}
          viewport={{ once: true, amount: 0.5 }}
        ></motion.span>
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsList.map((skill) => (
          <motion.span
            key={skill}
            className="bg-background border border-indigo-400 text-indigo-400 text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm hover:bg-indigo-400 hover:text-background transition-colors duration-300 cursor-default"
            variants={skillBadgeVariants}
            whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;