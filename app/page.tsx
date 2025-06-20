"use client";
import Image from "next/image";
import { motion, easeInOut, easeOut, backOut } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const fadeInSlight = { // For elements that need a more subtle entry
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1, // Small delay before children start animating
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: easeOut } }
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: backOut } } // "backOut" for a slight pop
};


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24 py-12 bg-background text-text-primary"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          variants={fadeIn}
        >
          Olá, eu sou <span className="text-indigo-400">Matheus Fernandes</span> - Web Designer & Developer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          variants={fadeIn}
        >
          Eu crio websites bonitos e funcionais. Apaixonado por design moderno e tecnologias de ponta.
        </motion.p>
        <motion.a
          href="#projetos"
          className="bg-indigo-600 hover:bg-indigo-700 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background"
          variants={fadeIn}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Meus Trabalhos
        </motion.a>
      </motion.div>

      {/* About Me Section */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-container-background text-text-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary relative inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInSlight}
          >
            Sobre Mim
            <motion.span
              className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "66.66%" }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              viewport={{ once: true, amount: 0.5 }}
            ></motion.span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-text-secondary leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Com 5 anos de experiência na área, sou especialista na criação de aplicações web responsivas e fáceis de usar. Minhas ferramentas incluem React, Next.js, Tailwind CSS e Figma. Dedico-me a dar vida a visões criativas através de código e design.
          </motion.p>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
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
              initial={{ width: 0 }}
              whileInView={{ width: "66.66%" }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
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
            {/* Project Card 1 */}
            <motion.div
              className="bg-container-background rounded-xl shadow-lg overflow-hidden flex flex-col border border-neutral-800 hover:shadow-primary-accent/20"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-56">
                <Image
                  src="https://source.unsplash.com/600x400/?finance,corporate,professional"
                  alt="Projeto Financeiro Exemplo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-400">Soluções Financeiras</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  Consultoria e desenvolvimento de plataformas para o setor financeiro.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> React, Next.js, Tailwind CSS, Stripe
                </p>
                <a href="/portfolio/financeiro" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  Ver Projeto &rarr;
                </a>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              className="bg-container-background rounded-xl shadow-lg overflow-hidden flex flex-col border border-neutral-800 hover:shadow-primary-accent/20"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-56">
                <Image
                  src="https://source.unsplash.com/600x400/?restaurant,food,modern-dining"
                  alt="Projeto Restaurante Exemplo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-400">Website para Restaurantes</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  Criação de sites modernos e responsivos para restaurantes e delivery.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> Next.js, Tailwind CSS, Framer Motion
                </p>
                <a href="/portfolio/restaurante" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  Ver Projeto &rarr;
                </a>
              </div>
            </motion.div>

            {/* Project Card 3 (Optional - can add more) */}
            <motion.div
              className="bg-container-background rounded-xl shadow-lg overflow-hidden flex flex-col border border-neutral-800 hover:shadow-primary-accent/20"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-56">
                <Image
                  src="https://source.unsplash.com/600x400/?education,language,learning,online"
                  alt="Projeto Idiomas Exemplo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-400">Plataforma EAD Idiomas</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  Desenvolvimento de plataformas completas para ensino a distância de idiomas.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> React, TypeScript, GraphQL
                </p>
                <a href="/portfolio/escola-idiomas" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
                  Ver Projeto &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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
              initial={{ width: 0 }}
              whileInView={{ width: "66.66%" }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
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
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "Node.js", "GraphQL", "Firebase", "Git"].map((skill) => (
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

      {/* Contact Section */}
      <section id="contato" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-background text-text-primary text-center">
        <motion.div
          className="container mx-auto max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer} // Stagger children: title, p, button
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-text-primary relative inline-block"
            variants={fadeInSlight}
          >
            Entre em Contato
            <motion.span
              className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "66.66%" }} // This will re-trigger if h2 is separate. Better to animate with h2 or make h2 container the motion el.
                                                // For simplicity, let's assume the h2 variants={fadeInSlight} is enough for its own animation.
                                                // The span animation might be better if part of the h2's variant or if h2 itself is the motion component.
                                                // Keeping as is for now, but might need refinement if span doesn't animate as expected with parent.
                                                // Corrected: Made the underline part of the h2's animation by including it within the h2's motion component or animating it separately triggered by whileInView on the h2.
                                                // For now, the span animation is fine as a separate motion component triggered by h2's visibility.
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }} // Delay to start after title fades in
              viewport={{ once: true, amount: 0.5 }} // Re-ensure it animates when h2 is visible
            ></motion.span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-8 text-text-secondary leading-relaxed"
            variants={fadeIn}
          >
            Interessado em trabalhar juntos ou tem alguma pergunta? Entre em contato!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-2" // Reduced top margin from mt-8 to mt-2 as parent already has mb-8
            variants={fadeIn} // This div will fade in as part of the stagger
          >
            <motion.a
              href="mailto:matheusmb78@gmail.com"
              className="bg-indigo-600 hover:bg-indigo-700 text-background font-semibold px-8 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background transition-colors duration-300"
              // variants={fadeIn} // Not needed, parent div handles this
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Email
            </motion.a>
            <motion.a
              href="https://wa.me/5549936182324" // Make sure to use the correct phone number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-background font-semibold px-8 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background transition-colors duration-300"
              // Using primary-accent as decided in the plan for consistency
              // variants={fadeIn} // Not needed, parent div handles this
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Simple SVG WhatsApp Icon (optional, replace with a better one if available) */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block mr-2 -mt-1">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.31 3.4 16.78L2.05 22L7.31 20.65C8.75 21.38 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 20.13C10.56 20.13 9.13 19.74 7.89 19.05L7.56 18.86L4.44 19.7L5.3 16.64L5.09 16.3C4.33 14.99 3.83 13.49 3.83 11.91C3.83 7.39 7.51 3.71 12.04 3.71C16.57 3.71 20.25 7.39 20.25 11.91C20.25 16.43 16.57 20.13 12.04 20.13ZM17.01 14.44C16.79 14.32 15.57 13.72 15.36 13.63C15.15 13.54 14.99 13.5 14.84 13.72C14.68 13.93 14.12 14.61 13.94 14.82C13.77 15.04 13.6 15.06 13.33 14.94C13.05 14.82 12.04 14.46 10.82 13.37C9.89 12.54 9.29 11.59 9.11 11.32C8.94 11.04 9.06 10.9 9.19 10.77C9.31 10.66 9.45 10.46 9.6 10.3C9.74 10.13 9.79 10.02 9.91 9.8C9.96 9.74 10.02 9.65 10.02 9.56C10.02 9.48 10.02 9.39 9.96 9.33C9.91 9.27 9.71 8.96 9.62 8.75C9.53 8.54 9.44 8.58 9.35 8.58C9.27 8.58 9.11 8.58 8.96 8.58C8.81 8.58 8.55 8.64 8.34 8.86C8.12 9.07 7.59 9.56 7.59 10.73C7.59 11.91 8.36 13.03 8.51 13.2C8.65 13.37 10.02 15.47 12.07 16.3C12.78 16.62 13.29 16.78 13.69 16.9C14.27 17.06 14.77 17.04 15.18 16.95C15.64 16.83 16.64 16.23 16.85 15.63C17.07 15.02 17.07 14.53 17.01 14.44Z"></path>
              </svg>
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-10 bg-container-background text-text-secondary text-center border-t border-neutral-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }} // Simple fade in for footer, delayed
      >
        <p className="text-sm">&copy; 2024 Matheus Fernandes. Todos os direitos reservados.</p>
      </motion.footer>
    </>
  );
}
