// app/portfolio/financeiro/page.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// High-quality financial images
const heroImage = "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const services = [
  {
    title: "Consultoria de Investimentos",
    description: "Análise de perfil e objetivos para criar estratégias de investimento personalizadas e maximizar seus retornos.",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Plataformas de Pagamento",
    description: "Soluções de pagamento digital seguras e eficientes para otimizar transações e expandir seu alcance no mercado.",
    icon: "💳",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Análise de Risco e Compliance",
    description: "Ferramentas e consultoria para identificar riscos, garantir conformidade regulatória e proteger seus ativos.",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];
const differentiators = [
  {
    title: "Segurança Avançada",
    description: "Protocolos de segurança de última geração para proteger seus dados e transações financeiras.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Tecnologia com IA",
    description: "Utilizamos inteligência artificial para fornecer insights precisos e otimizar suas decisões financeiras.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Suporte Dedicado",
    description: "Nossa equipe de especialistas está sempre pronta para oferecer suporte e orientação personalizada.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Soluções Personalizadas",
    description: "Adaptamos nossas soluções às necessidades específicas de cada cliente, garantindo o máximo de eficiência.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export default function FinanceiroPage() {
  // Parallax effect for hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <Image
            src={heroImage}
            alt="Soluções Financeiras Modernas"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[#00000085] bg-opacity-50" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            variants={fadeIn}
          >
            Transformando o Futuro Financeiro com <span className="text-green-300">Tecnologia Inovadora</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white mb-10 drop-shadow-md"
            variants={fadeIn}
          >
            Oferecemos consultoria especializada e desenvolvemos plataformas robustas para otimizar seus investimentos e operações financeiras.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Link
              href="#servicos-financeiros"
              className="inline-block bg-green-500 hover:bg-green-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
            >
              Conheça Nossos Serviços
            </Link>
            <Link
              href="#contato"
              className="inline-block bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300 text-center"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

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
          Nossos <span className="text-green-500">Serviços Especializados</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              custom={index}
            >
              <div className="w-full h-56 sm:h-64 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-green-600 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
          Por Que Nos <span className="text-green-500">Escolher?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 border-2 border-gray-200  rounded-xl shadow-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-full sm:w-32 h-32 relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                  quality={85}
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        id="contato"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-r from-green-600 to-green-700 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          variants={fadeIn}
        >
          Pronto para Elevar Sua Estratégia Financeira?
        </motion.h2>
        <motion.p
          className="text-xl text-white max-w-xl mx-auto mb-10"
          variants={fadeIn}
        >
          Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar seu negócio a prosperar.
        </motion.p>
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#"
            className="inline-block bg-white text-green-700 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-green-600 transition-all duration-300"
          >
            Agendar Consulta
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-gray-200 bg-gray-100 mt-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-300 text-sm"
          >
            &larr; Voltar ao Portfólio Principal
          </Link>
        </motion.div>
        <p className="text-xs text-gray-500 mt-4">
          Página de demonstração de serviços financeiros.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} Matheus Fernandes. Design de Exemplo.
        </p>
      </footer>
    </div>
  );
}