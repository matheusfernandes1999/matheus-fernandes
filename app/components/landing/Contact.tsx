"use client";
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, fadeInSlight, underlineVariants } from '@/app/lib/animations';

const Contact = () => (
  <section id="contato" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-24 bg-background text-text-primary text-center">
    <motion.div
      className="container mx-auto max-w-xl"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6 text-text-primary relative inline-block"
        variants={fadeInSlight}
      >
        Entre em Contato
        <motion.span
          className="block w-2/3 h-1 bg-indigo-500 mx-auto mt-2"
          variants={underlineVariants}
        ></motion.span>
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl mb-8 text-text-secondary leading-relaxed"
        variants={fadeIn}
      >
        Interessado em trabalhar juntos ou tem alguma pergunta? Entre em contato!
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center mt-2"
        variants={fadeIn}
      >
        <motion.a
          href="mailto:matheusmb78@gmail.com"
          className="bg-indigo-600 hover:bg-indigo-700 text-background font-semibold px-8 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Email
        </motion.a>
        <motion.a
          href="https://wa.me/5549936182324"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-background font-semibold px-8 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-background transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="ml-2">WhatsApp</span>
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

// Optional: Create a separate file for the Icon if you prefer
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="inline-block -mt-1">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.31 3.4 16.78L2.05 22L7.31 20.65C8.75 21.38 10.35 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM17.01 14.44C16.79 14.32 15.57 13.72 15.36 13.63C15.15 13.54 14.99 13.5 14.84 13.72C14.68 13.93 14.12 14.61 13.94 14.82C13.77 15.04 13.6 15.06 13.33 14.94C11.85 14.25 10.5 13.39 9.11 11.32C8.94 11.04 9.06 10.9 9.19 10.77C9.31 10.66 9.6 10.3 9.74 10.13C9.91 9.8 10.02 9.56 9.96 9.33C9.71 8.96 9.62 8.75 9.53 8.54C9.27 8.58 8.96 8.58 8.34 8.86C7.59 9.56 7.59 10.73 8.36 13.03C8.65 13.37 10.02 15.47 12.07 16.3C13.29 16.78 14.27 17.06 15.18 16.95C16.64 16.23 16.85 15.63 17.07 15.02C17.07 14.53 17.01 14.44 17.01 14.44Z"></path>
    </svg>
);


export default Contact;