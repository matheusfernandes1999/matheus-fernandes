// app/portfolio/financeiro/page.tsx
"use client";
import Link from 'next/link';
import { motion, easeInOut, easeOut } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

export default function FinanceiroPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col"> {/* Main container for the whole page */}
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-20 px-6 min-h-[70vh] sm:min-h-[60vh] bg-gradient-to-b from-background to-container-background" // Added gradient
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-accent mb-6 leading-tight"
          variants={fadeIn}
        >
          Transformando o Futuro Financeiro com Tecnologia Inovadora
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-3xl mb-10"
          variants={fadeIn}
        >
          Oferecemos consultoria especializada e desenvolvemos plataformas robustas para otimizar seus investimentos e operações financeiras.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Link
            href="#servicos-financeiros"
            className="inline-block bg-primary-accent text-background font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-primary-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent focus:ring-offset-background transition-colors duration-300"
            // whileHover={{ scale: 1.05 }} // Framer motion whileHover can be added
            // whileTap={{ scale: 0.95 }}   // Framer motion whileTap can be added
          >
            Conheça Nossos Serviços
          </Link>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="servicos-financeiros"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-container-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-text-primary mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Nossos Serviços Especializados
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {/* Service Card 1 */}
          <motion.div
            className="bg-background p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="p-3 mb-4 bg-primary-accent/20 rounded-full">
              <svg className="w-8 h-8 text-primary-accent" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-accent mb-3">Consultoria de Investimentos</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Análise de perfil e objetivos para criar estratégias de investimento personalizadas e maximizar seus retornos.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-background p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="p-3 mb-4 bg-primary-accent/20 rounded-full">
              <svg className="w-8 h-8 text-primary-accent" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-accent mb-3">Plataformas de Pagamento</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Soluções de pagamento digital seguras e eficientes para otimizar transações e expandir seu alcance no mercado.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-background p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="p-3 mb-4 bg-primary-accent/20 rounded-full">
              <svg className="w-8 h-8 text-primary-accent" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-accent mb-3">Análise de Risco e Compliance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Ferramentas e consultoria para identificar riscos, garantir conformidade regulatória e proteger seus ativos.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Differentiators Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-background" // Alternating background color
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-text-primary mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Por Que Nos Escolher?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
        >
          {/* Differentiator Item 1 */}
          <motion.div
            className="flex items-start gap-4 p-6 bg-container-background rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="p-2 text-primary-accent bg-primary-accent/10 rounded-full mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-accent mb-2">Segurança Avançada</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Protocolos de segurança de última geração para proteger seus dados e transações financeiras.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 2 */}
          <motion.div
            className="flex items-start gap-4 p-6 bg-container-background rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="p-2 text-primary-accent bg-primary-accent/10 rounded-full mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.653 16.915l-.005-.003-.019-.01a2.005 2.005 0 01-1.154-1.755c0-1.108.896-2.006 2.006-2.006s2.006.898 2.006 2.006c0 .739-.402 1.384-1.006 1.727l.004.002-.003.001-.01.006-.013.007a1.01 1.01 0 01-.194.089l-.026.013-.032.015-.038.015-.04.014-.048.015-.05.013a2.087 2.087 0 01-.342.056L10 17l-.026-.002a2.086 2.086 0 01-.342-.056l-.05-.013-.048-.015-.04-.014-.038-.015-.032-.015-.026-.013a1.018 1.018 0 01-.194-.089l-.013-.007-.01-.006-.003-.001zM10 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-accent mb-2">Tecnologia com IA</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Utilizamos inteligência artificial para fornecer insights precisos e otimizar suas decisões financeiras.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 3 */}
          <motion.div
            className="flex items-start gap-4 p-6 bg-container-background rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="p-2 text-primary-accent bg-primary-accent/10 rounded-full mt-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-accent mb-2">Suporte Dedicado</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Nossa equipe de especialistas está sempre pronta para oferecer suporte e orientação personalizada.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 4 */}
          <motion.div
            className="flex items-start gap-4 p-6 bg-container-background rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <div className="p-2 text-primary-accent bg-primary-accent/10 rounded-full mt-1">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM15 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-accent mb-2">Soluções Personalizadas</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Adaptamos nossas soluções às necessidades específicas de cada cliente, garantindo o máximo de eficiência.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-t from-background to-container-background text-center" // Gradient and different background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer} // Stagger title, text, button
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary-accent mb-6"
          variants={fadeIn}
        >
          Pronto para Elevar Sua Estratégia Financeira?
        </motion.h2>
        <motion.p
          className="text-lg text-text-secondary max-w-xl mx-auto mb-10"
          variants={fadeIn}
        >
          Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar seu negócio a prosperar.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Link
            href="/#contato" // Links to the contact section on the main portfolio page
            className="inline-block bg-secondary-accent text-background font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-secondary-accent/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-accent focus:ring-offset-background transition-colors duration-300"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer area */}
      <footer className="py-10 px-6 text-center border-t border-neutral-700 bg-container-background">
        <Link
          href="/#projetos"
          className="text-secondary-accent hover:underline hover:text-primary-accent transition-colors duration-300"
        >
          &larr; Voltar aos Projetos
        </Link>
        <p className="text-xs text-text-secondary mt-4">
          Esta é uma página de demonstração. &copy; {new Date().getFullYear()} Matheus Fernandes.
        </p>
      </footer>
    </div>
  );
}
