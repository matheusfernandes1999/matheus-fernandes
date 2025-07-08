// app/portfolio/restaurante/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageHero from '@/public/imagens/food.jpg'

// High-quality restaurant images
const heroImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
const aboutImage = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const menuItems = [
  {
    title: "Massa Artesanal da Casa",
    description: "Deliciosa massa fresca feita diariamente, servida com nosso molho especial de tomates San Marzano e manjericão fresco.",
    price: "R$ 75",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Filé Mignon ao Vinho Tinto",
    description: "Suculento filé mignon grelhado à perfeição, acompanhado de um rico molho de vinho tinto e batatas gratinadas.",
    price: "R$ 110",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Delícia de Chocolate Intenso",
    description: "Uma rica torta de chocolate amargo com calda de frutas vermelhas e um toque de flor de sal. Perfeita para finalizar sua refeição.",
    price: "R$ 45",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
  }
];
const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
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

export default function RestaurantePage() {
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
            alt="Ambiente elegante de restaurante"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[#00000085] bg-opacity-1" />
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
            Sabor & Tradição: Uma <span className="text-yellow-300">Experiência Inesquecível</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white mb-10 drop-shadow-md"
            variants={fadeIn}
          >
            Descubra pratos autênticos preparados com os melhores ingredientes, em um ambiente acolhedor e sofisticado.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
          >
            <Link
              href="#cardapio"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
            >
              Ver Cardápio
            </Link>
            <Link
              href="#reservas"
              className="inline-block bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300 text-center"
            >
              Reservar Mesa
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

      {/* About Us/Our Story Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              whileInView={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Nossa <span className="text-yellow-500">História</span>
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-4 leading-relaxed"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              Desde 2005, nosso restaurante tem sido um ponto de encontro para amantes da boa gastronomia. Nascido da paixão pela culinária autêntica e do desejo de criar momentos memoráveis, cada prato é uma obra de arte, preparado com ingredientes frescos e selecionados.
            </motion.p>
            <motion.p 
              className="text-gray-700 leading-relaxed"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Acreditamos que comer bem é uma celebração da vida. Nossa equipe dedicada trabalha incansavelmente para oferecer não apenas refeições excepcionais, mas também um ambiente acolhedor onde cada visita se torna uma ocasião especial.
            </motion.p>
          </motion.div>

          {/* Image with hover effect */}
          <motion.div
            className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-2xl overflow-hidden relative"
            variants={scaleUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={aboutImage}
              alt="Chef preparando pratos na cozinha do restaurante"
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Highlights Section */}
      <motion.section
        id="cardapio"
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Destaques do <span className="text-yellow-500">Cardápio</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              custom={index}
            >
              <div className="w-full h-56 sm:h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-yellow-600 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                <p className="text-xl font-bold text-gray-900">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Galeria de <span className="text-yellow-500">Momentos</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg shadow-lg overflow-hidden relative"
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={imageUrl}
                alt={`Galeria de momentos do restaurante - imagem ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                quality={85}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact/Reservation & Location Section */}
      <motion.section
        id="reservas"
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
          Reservas & <span className="text-yellow-500">Contato</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info & Hours */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Entre em Contato</h3>
            <p className="text-gray-700 mb-2"><strong className="font-medium">Endereço:</strong> Rua das Palmeiras, 123, Centro, Cidade Exemplo</p>
            <p className="text-gray-700 mb-2"><strong className="font-medium">Telefone:</strong> (XX) XXXX-XXXX</p>
            <p className="text-gray-700 mb-6"><strong className="font-medium">Email:</strong> contato@saboretradicao.com</p>

            <h3 className="text-2xl font-semibold text-yellow-600 mb-4 mt-8">Horário de Funcionamento</h3>
            <p className="text-gray-700 mb-1"><strong className="font-medium">Terça - Sábado:</strong> 12:00 - 23:00</p>
            <p className="text-gray-700 mb-6"><strong className="font-medium">Domingo:</strong> 12:00 - 16:00 (Almoço)</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-300"
            >
              Reservar Agora
            </motion.button>
          </motion.div>

          {/* Map Placeholder with animation */}
          <motion.div
            className="w-full h-80 md:h-full rounded-xl shadow-xl overflow-hidden mt-8 md:mt-0"
            variants={scaleUp}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Mapa da localização do restaurante"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-10 px-6 text-center border-t border-gray-200 bg-gray-100 mt-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/"
            className="text-yellow-600 hover:text-yellow-800 hover:underline transition-colors duration-300 text-sm"
          >
            &larr; Voltar ao Portfólio Principal
          </Link>
        </motion.div>
        <p className="text-xs text-gray-500 mt-4">
          Página de demonstração do Restaurante Sabor & Tradição.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} Matheus Fernandes. Design de Exemplo.
        </p>
      </footer>
    </div>
  );
}