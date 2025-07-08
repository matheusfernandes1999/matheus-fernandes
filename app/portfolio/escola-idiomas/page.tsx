// app/portfolio/escola-idiomas/page.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Language icons and images
const languages = [
  {
    name: "Inglês",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Espanhol",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Francês",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Alemão",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1525873020571-08690094e301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const benefits = [
  {
    title: "Aulas Interativas",
    description: "Sessões ao vivo com professores nativos e atividades em grupo",
    icon: "💬"
  },
  {
    title: "Plataforma Inteligente",
    description: "Aprendizado adaptativo que evolui com suas necessidades",
    icon: "🧠"
  },
  {
    title: "Cultura Integrada",
    description: "Aprenda o idioma através da cultura e costumes locais",
    icon: "🌍"
  },
  {
    title: "Certificação",
    description: "Diploma reconhecido internacionalmente",
    icon: "📜"
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

export default function EscolaIdiomasPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Floating Language Selector */}
      <div className="fixed right-4 bottom-4 z-50">
        <motion.div 
          className="bg-white shadow-xl rounded-full p-2"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            🌐
          </div>
        </motion.div>
      </div>

      {/* Hero Section with Language Bubble Background */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Language Bubble Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-100 opacity-20"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            variants={fadeIn}
          >
            Fale o <span className="text-blue-500">Mundo</span> com <span className="text-blue-500">Confiança</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Aprenda idiomas de forma natural com nossa abordagem imersiva e tecnologia adaptativa.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Link
              href="#cursos"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
            >
              Explorar Cursos
            </Link>
            <Link
              href="#metodo"
              className="inline-block bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full shadow-sm transform hover:scale-105 transition-all duration-300 text-center"
            >
              Conheça o Método
            </Link>
          </motion.div>
        </motion.div>

        {/* Language Flags Floating */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              className="text-4xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {lang.flag}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages Showcase Section */}
      <motion.section
        id="cursos"
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
          Nossos <span className="text-blue-500">Idiomas</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="w-full h-48 relative">
                <Image
                  src={lang.image}
                  alt={`Curso de ${lang.name}`}
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">
                  {lang.flag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{lang.name}</h3>
                <p className="text-gray-600 mb-4">
                  Domine {lang.name} com nosso método exclusivo de ensino.
                </p>
                <Link 
                  href="#" 
                  className="mt-auto inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                >
                  Saiba mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Unique Selling Points - Circular Design */}
      <motion.section
        id="metodo"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Circles */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            O <span className="text-blue-500">Método</span> LinguaFlow
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa abordagem revolucionária combina tecnologia e imersão cultural para resultados rápidos.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Image */}
          <motion.div 
            className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-12 rounded-full overflow-hidden shadow-xl border-4 border-white relative z-10"
            variants={scaleUp}
          >
            <Image
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Método de ensino"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Circular Benefits */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const angle = (i * 90) - 45;
              const radius = 160;
              const x = radius * Math.cos(angle * Math.PI / 180);
              const y = radius * Math.sin(angle * Math.PI / 180);
              
              return (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
                  initial={{ opacity: 0, x, y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Carousel Section */}
      <motion.section
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
          Alunos <span className="text-blue-500">Falam</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+30}.jpg`}
                      alt="Aluno"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Silva</h4>
                    <p className="text-sm text-gray-500">Inglês Avançado</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Em 6 meses já consigo manter conversas fluentes em inglês no trabalho. O método realmente funciona!"
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Language Learning Stats */}
      <motion.section
        className="py-16 sm:py-20 lg:py-32 px-6 bg-blue-600 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          variants={fadeIn}
        >
          Junte-se a <span className="text-yellow-300">10.000+</span> Alunos
        </motion.h2>
        <motion.p
          className="text-xl max-w-2xl mx-auto mb-10"
          variants={fadeIn}
        >
          Comece hoje sua jornada para o multilinguismo e abra portas para novas oportunidades.
        </motion.p>
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300"
          >
            Começar Agora
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {[
            { value: "97%", label: "Taxa de Satisfação" },
            { value: "12", label: "Idiomas Disponíveis" },
            { value: "24/7", label: "Acesso à Plataforma" },
            { value: "500+", label: "Professores Nativos" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center border-t border-gray-200 bg-white">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300 text-sm"
          >
            &larr; Voltar ao Portfólio Principal
          </Link>
        </motion.div>
        <p className="text-xs text-gray-500 mt-4">
          Página de demonstração de escola de idiomas.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} Matheus Fernandes. Design de Exemplo.
        </p>
      </footer>
    </div>
  );
}