// app/portfolio/escola-idiomas/page.tsx
"use client"; // Required for Framer Motion components

import Image from 'next/image';
import Link from 'next/link';
import { motion, easeInOut, easeOut } from 'framer-motion'; // Added specific easings

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const fadeInUp = { // This variant is defined but not used in this Hero section, might be used later
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
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

export default function EscolaIdiomasPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center pt-12 sm:pt-16 md:pt-20 pb-12 px-6 bg-gray-50 shadow-sm" // Light gray bg for Hero
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Image for EAD Hero */}
        <motion.div
          className="w-full max-w-5xl h-64 sm:h-80 md:h-[500px] rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-10"
          variants={fadeIn}
        >
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=85"
            alt="Estudantes aprendendo idiomas online"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 leading-tight"
          variants={fadeIn}
        >
          Desbloqueie Seu Potencial com Nossos <span className="text-blue-600">Cursos de Idiomas Online</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mb-10"
          variants={fadeIn}
        >
          Aprenda novos idiomas de forma flexível e interativa, com instrutores qualificados e uma plataforma moderna projetada para o seu sucesso.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeIn}
        >
          <Link
            href="#cursos"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-colors duration-300 text-center"
          >
            Nossos Cursos
          </Link>
          <Link
            href="#inscrevase" // Placeholder anchor, or could be a direct link later
            className="inline-block bg-transparent text-blue-600 border-2 border-blue-600 font-semibold px-8 py-3 rounded-lg shadow-sm hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-colors duration-300 text-center"
          >
            Inscreva-se Agora
          </Link>
        </motion.div>
      </motion.section>

      {/* Why Learn With Us Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white" // White background for contrast
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Por Que Aprender <span className="text-blue-600">Conosco?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Benefit Card 1 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="w-full h-40 bg-gray-200 rounded-md mb-6 flex items-center justify-center overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" alt="Ícone de Inovação" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Metodologia Inovadora</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Abordagens de ensino modernas e interativas que tornam o aprendizado de idiomas divertido e eficaz.
            </p>
          </motion.div>

          {/* Benefit Card 2 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="w-full h-40 bg-gray-200 rounded-md mb-6 flex items-center justify-center overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" alt="Ícone de Professor Qualificado" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Professores Qualificados</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Nossa equipe é formada por educadores experientes e apaixonados por compartilhar conhecimento.
            </p>
          </motion.div>

          {/* Benefit Card 3 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="w-full h-40 bg-gray-200 rounded-md mb-6 flex items-center justify-center overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1495465798138-718f86d1a4f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" alt="Ícone de Flexibilidade" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Flexibilidade Total</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aprenda no seu próprio ritmo, de qualquer lugar e a qualquer hora, com acesso 24/7 à nossa plataforma.
            </p>
          </motion.div>

          {/* Benefit Card 4 */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <div className="w-full h-40 bg-gray-200 rounded-md mb-6 flex items-center justify-center overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80" alt="Ícone de Comunidade" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Comunidade Ativa</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Participe de fóruns, grupos de estudo e eventos online para praticar e interagir com outros alunos.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Courses Section */}
      <motion.section
        id="cursos" // Anchor for "Nossos Cursos" button
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Nossos <span className="text-blue-600">Cursos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Course Card 1 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Curso de Inglês Completo"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Inglês Completo</h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Iniciante ao Avançado</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Domine o inglês com nosso curso abrangente, cobrindo gramática, conversação, escrita e audição.
              </p>
              <Link href="#" className="mt-auto inline-block text-center bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm">
                Saiba Mais
              </Link>
            </div>
          </motion.div>

          {/* Course Card 2 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Curso de Espanhol para Negócios"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Espanhol para Negócios</h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Intermediário</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Foco em vocabulário e situações do mundo corporativo para expandir suas oportunidades globais.
              </p>
              <Link href="#" className="mt-auto inline-block text-center bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm">
                Saiba Mais
              </Link>
            </div>
          </motion.div>

          {/* Course Card 3 */}
          <motion.div
            className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Curso de Francês Conversação"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Francês Conversação</h3>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Todos os Níveis</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Desenvolva fluência e confiança na fala através de aulas práticas e dinâmicas de conversação.
              </p>
              <Link href="#" className="mt-auto inline-block text-center bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm">
                Saiba Mais
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Como <span className="text-blue-600">Funciona?</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-12"> {/* Centered content, items stack with space */}
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:gap-8"
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">1</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Escolha Seu Curso</h3>
              <p className="text-gray-700 leading-relaxed">
                Navegue pela nossa variedade de idiomas e níveis. Encontre o curso perfeito que se adapta aos seus objetivos e interesses.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:gap-8"
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">2</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Aprenda no Seu Ritmo</h3>
              <p className="text-gray-700 leading-relaxed">
                Acesse aulas em vídeo, materiais interativos e exercícios práticos quando e onde quiser, adaptando o aprendizado à sua rotina.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:gap-8"
            variants={fadeInUp}
          >
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-0">
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">3</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Pratique e Certifique-se</h3>
              <p className="text-gray-700 leading-relaxed">
                Participe de atividades de conversação, tire dúvidas com instrutores e receba seu certificado de conclusão ao final do curso.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action / Sign Up Section */}
      <motion.section
        id="inscrevase" // Anchor for "Inscreva-se Agora" button from Hero
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50 text-center" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer} // Stagger title, text, button
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          variants={fadeIn}
        >
          Comece Sua Jornada de Aprendizagem <span className="text-blue-600">Hoje!</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto mb-10"
          variants={fadeIn}
        >
          Não espere mais para alcançar seus objetivos. Junte-se à nossa comunidade de alunos e transforme seu futuro com um novo idioma.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Link
            href="#" // Placeholder link, would ideally go to a registration page or form
            className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-colors duration-300 text-lg"
          >
            Inscreva-se Agora
          </Link>
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-10 px-6 text-center border-t border-gray-200 bg-gray-100 mt-auto"> {/* mt-auto to push to bottom if content is short */}
        <Link
          href="/" // Link to the main landing page (home)
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300 text-sm"
        >
          &larr; Voltar ao Portfólio Principal
        </Link>
        <p className="text-xs text-gray-500 mt-4">
          Página de demonstração da Escola de Idiomas Online XYZ.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} Matheus Fernandes. Design de Exemplo.
        </p>
      </footer>
    </div>
  );
}
