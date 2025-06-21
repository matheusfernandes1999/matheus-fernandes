// app/portfolio/financeiro/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported
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
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col"> {/* Main container for the whole page */}
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 px-6 bg-white shadow-lg"
      >
        <motion.div // This div will now be the stagger container for hero content
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full max-w-5xl" // Added max-width
        >
          {/* Image Placeholder Replaced with next/image */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-2xl mb-8 sm:mb-10" // Container for the image
          >
            <Image
              src="https://source.unsplash.com/1200x500/?finance,business,modern,technology"
              alt="Soluções Financeiras Modernas"
              width={1200}
              height={500}
              className="rounded-xl shadow-md w-full h-auto" // w-full h-auto for responsiveness
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600 mb-6 leading-tight"
            variants={fadeIn}
          >
            Transformando o Futuro Financeiro com Tecnologia Inovadora
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mb-10"
            variants={fadeIn}
          >
            Oferecemos consultoria especializada e desenvolvemos plataformas robustas para otimizar seus investimentos e operações financeiras.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="#servicos-financeiros"
              className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-300"
            >
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="servicos-financeiros"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Nossos Serviços Especializados
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {/* Service Card 1 */}
          <motion.div
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/600x400/?investment,consulting,chart"
              alt="Consultoria de Investimentos Detalhada"
              width={600}
              height={400}
              className="rounded-md mb-6 w-full h-auto"
            />
            <div className="p-2 mb-3 bg-green-100 rounded-full"> {/* Adjusted padding and margin */}
              <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Consultoria de Investimentos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Análise de perfil e objetivos para criar estratégias de investimento personalizadas e maximizar seus retornos.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/600x400/?payment,digital,transaction"
              alt="Plataformas de Pagamento Eficientes"
              width={600}
              height={400}
              className="rounded-md mb-6 w-full h-auto"
            />
            <div className="p-2 mb-3 bg-green-100 rounded-full"> {/* Adjusted padding and margin */}
              <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Plataformas de Pagamento</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Soluções de pagamento digital seguras e eficientes para otimizar transações e expandir seu alcance no mercado.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/600x400/?security,compliance,data"
              alt="Análise de Risco e Segurança Garantida"
              width={600}
              height={400}
              className="rounded-md mb-6 w-full h-auto"
            />
            <div className="p-2 mb-3 bg-green-100 rounded-full"> {/* Adjusted padding and margin */}
              <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Análise de Risco e Compliance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ferramentas e consultoria para identificar riscos, garantir conformidade regulatória e proteger seus ativos.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Differentiators Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Por Que Nos Escolher?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
        >
          {/* Differentiator Item 1 */}
          <motion.div
            className="bg-gray-50 shadow-xl rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/400x300/?security,lock,data,protection"
              alt="Segurança Avançada"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Segurança Avançada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protocolos de segurança de última geração para proteger seus dados e transações financeiras.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 2 */}
          <motion.div
            className="bg-gray-50 shadow-xl rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/400x300/?artificial-intelligence,data,analytics"
              alt="Tecnologia com IA"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Tecnologia com IA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Utilizamos inteligência artificial para fornecer insights precisos e otimizar suas decisões financeiras.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 3 */}
          <motion.div
            className="bg-gray-50 shadow-xl rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/400x300/?support,customer-service,team"
              alt="Suporte Dedicado"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Suporte Dedicado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nossa equipe de especialistas está sempre pronta para oferecer suporte e orientação personalizada.
              </p>
            </div>
          </motion.div>

          {/* Differentiator Item 4 */}
          <motion.div
            className="bg-gray-50 shadow-xl rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/400x300/?customization,solution,tailored"
              alt="Soluções Personalizadas"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Soluções Personalizadas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adaptamos nossas soluções às necessidades específicas de cada cliente, garantindo o máximo de eficiência.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-green-600 mb-6"
          variants={fadeIn}
        >
          Pronto para Elevar Sua Estratégia Financeira?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto mb-10"
          variants={fadeIn}
        >
          Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar seu negócio a prosperar.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Link
            href="/#contato"
            className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 focus:ring-offset-gray-50 transition-colors duration-300"
          >
            Fale Conosco
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer area */}
      <footer className="py-10 px-6 text-center border-t border-gray-300 bg-white">
        <Link
          href="/#projetos"
          className="text-green-600 hover:text-green-700 hover:underline transition-colors duration-300"
        >
          &larr; Voltar aos Projetos
        </Link>
        <p className="text-xs text-gray-600 mt-4">
          Esta é uma página de demonstração. &copy; {new Date().getFullYear()} Matheus Fernandes.
        </p>
      </footer>
    </div>
  );
}
