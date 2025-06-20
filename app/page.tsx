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
          Olá, eu sou <span className="text-primary-accent">Matheus Fernandes</span> - Web Designer & Developer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          variants={fadeIn}
        >
          Eu crio websites bonitos e funcionais. Apaixonado por design moderno e tecnologias de ponta.
        </motion.p>
        <motion.a
          href="#projetos"
          className="bg-primary-accent hover:bg-primary-accent/80 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background"
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
              className="block w-2/3 h-1 bg-secondary-accent mx-auto mt-2"
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
              className="block w-2/3 h-1 bg-primary-accent mx-auto mt-2"
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
                  src="/project1.svg"
                  alt="Placeholder para Projeto Alpha"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Projeto Alpha</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  Uma moderna plataforma de e-commerce construída com Next.js e Stripe.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> React, Next.js, Tailwind CSS, Stripe
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
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
                  src="/project2.svg"
                  alt="Placeholder para Site Portfólio V2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Site Portfólio V2</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  A segunda versão do meu site pessoal, focada em performance e design.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> Next.js, Tailwind CSS, Framer Motion
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
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
                  src="/project3.svg"
                  alt="Placeholder para Painel do Cliente"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary-accent">Painel do Cliente</h3>
                <p className="text-text-secondary mb-3 flex-grow">
                  Um painel de controle analítico para clientes acompanharem seus dados.
                </p>
                <p className="text-sm text-text-secondary/80 mb-4">
                  <span className="font-semibold text-text-secondary">Tecnologias:</span> React, TypeScript, GraphQL
                </p>
                <a href="#" className="text-secondary-accent hover:text-secondary-accent/80 font-medium transition-colors self-start focus:outline-none focus:ring-1 focus:ring-secondary-accent rounded-sm">
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
              className="block w-2/3 h-1 bg-secondary-accent mx-auto mt-2"
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
                className="bg-background border border-primary-accent text-primary-accent text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm hover:bg-primary-accent hover:text-background transition-colors duration-300 cursor-default"
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
              className="block w-2/3 h-1 bg-primary-accent mx-auto mt-2"
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
          <motion.a
            href="mailto:matheus.fernandes@example.com"
            className="bg-primary-accent hover:bg-primary-accent/80 text-background font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background"
            variants={fadeIn}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Email
          </motion.a>
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
