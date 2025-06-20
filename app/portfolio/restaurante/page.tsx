// app/portfolio/restaurante/page.tsx
"use client"; // Required for Framer Motion components

import Image from 'next/image';
import Link from 'next/link';
import { motion, easeInOut, easeOut, backOut } from 'framer-motion'; // Or specific easings needed

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const fadeInUp = { // Added this variant in case it's needed for other sections, not used in Hero
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Default stagger
    },
  },
};

export default function RestaurantePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center pt-12 sm:pt-16 md:pt-20 pb-12 px-6 bg-white shadow-md" // Light background for Hero
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Image for Restaurant Hero */}
        <motion.div
          className="w-full max-w-5xl h-64 sm:h-80 md:h-[500px] rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-10"
          variants={fadeIn}
        >
          <Image
            src="https://source.unsplash.com/1600x900/?restaurant,ambiance,elegant-dining"
            alt="Ambiente elegante de restaurante"
            width={1600}
            height={900}
            className="w-full h-full object-cover" // object-cover to fill the div
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight text-gray-900" // text-gray-900 for main part
          variants={fadeIn}
        >
          Sabor & Tradição: Uma <span className="text-indigo-600">Experiência Inesquecível</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-700 text-center max-w-2xl mb-10"
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
            className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-300 text-center"
          >
            Ver Cardápio
          </Link>
          <Link
            href="#reservas"
            className="inline-block bg-transparent text-indigo-600 border-2 border-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-sm hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-300 text-center"
          >
            Reservar Mesa
          </Link>
        </motion.div>
      </motion.section>

      {/* About Us/Our Story Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-indigo-600">História</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Desde 2005, nosso restaurante tem sido um ponto de encontro para amantes da boa gastronomia. Nascido da paixão pela culinária autêntica e do desejo de criar momentos memoráveis, cada prato é uma obra de arte, preparado com ingredientes frescos e selecionados.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Acreditamos que comer bem é uma celebração da vida. Nossa equipe dedicada trabalha incansavelmente para oferecer não apenas refeições excepcionais, mas também um ambiente acolhedor onde cada visita se torna uma ocasião especial.
            </p>
          </motion.div>

          {/* Optional Image */}
          <motion.div
            className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/800x600/?chef,kitchen,restaurant-story"
              alt="Chef preparando pratos na cozinha do restaurante"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Highlights Section */}
      <motion.section
        id="cardapio" // Anchor for "Ver Cardápio" button
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of section is visible
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Destaques do <span className="text-indigo-600">Cardápio</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Menu Item 1 */}
          <motion.div
            className="bg-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://source.unsplash.com/600x400/?pasta,gourmet-dish"
                alt="Prato de massa gourmet"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Massa Artesanal da Casa</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Deliciosa massa fresca feita diariamente, servida com nosso molho especial de tomates San Marzano e manjericão fresco.
              </p>
              <p className="text-xl font-bold text-gray-900">R$ 75</p>
            </div>
          </motion.div>

          {/* Menu Item 2 */}
          <motion.div
            className="bg-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://source.unsplash.com/600x400/?steak,grilled-meat,fine-dining"
                alt="Filé mignon grelhado"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Filé Mignon ao Vinho Tinto</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Suculento filé mignon grelhado à perfeição, acompanhado de um rico molho de vinho tinto e batatas gratinadas.
              </p>
              <p className="text-xl font-bold text-gray-900">R$ 110</p>
            </div>
          </motion.div>

          {/* Menu Item 3 */}
          <motion.div
            className="bg-gray-50 rounded-xl shadow-xl overflow-hidden flex flex-col"
            variants={fadeInUp}
          >
            <div className="w-full h-56 sm:h-64">
              <Image
                src="https://source.unsplash.com/600x400/?dessert,chocolate-cake,patisserie"
                alt="Sobremesa de chocolate"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Delícia de Chocolate Intenso</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                Uma rica torta de chocolate amargo com calda de frutas vermelhas e um toque de flor de sal. Perfeita para finalizar sua refeição.
              </p>
              <p className="text-xl font-bold text-gray-900">R$ 45</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-6 bg-gray-50" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Lower amount for a section full of images
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Galeria de <span className="text-indigo-600">Momentos</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {[
            "restaurant-interior,elegant",
            "food-presentation,gourmet",
            "happy-customer,dining",
            "chef,action,kitchen",
            "cocktails,bar,drinks",
            "restaurant-exterior,facade",
            "dessert-table,sweets",
            "wine-selection,cellar"
          ].map((keywords, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp} // Use fadeInUp for a slightly delayed pop-in for each image
              custom={index} // Potentially use for custom delay in stagger if needed, but staggerChildren should handle it
            >
              <Image
                src={`https://source.unsplash.com/400x400/?${keywords}`}
                alt={`Galeria de momentos do restaurante - imagem ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact/Reservation & Location Section */}
      <motion.section
        id="reservas" // Anchor for "Reservar Mesa" button
        className="py-16 sm:py-20 lg:py-24 px-6 bg-white" // Alternating background
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-16"
          variants={fadeIn}
        >
          Reservas & <span className="text-indigo-600">Contato</span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info & Hours */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Entre em Contato</h3>
            <p className="text-gray-700 mb-2"><strong className="font-medium">Endereço:</strong> Rua das Palmeiras, 123, Centro, Cidade Exemplo</p>
            <p className="text-gray-700 mb-2"><strong className="font-medium">Telefone:</strong> (XX) XXXX-XXXX</p>
            <p className="text-gray-700 mb-6"><strong className="font-medium">Email:</strong> contato@saboretradicao.com</p>

            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 mt-8">Horário de Funcionamento</h3>
            <p className="text-gray-700 mb-1"><strong className="font-medium">Terça - Sábado:</strong> 12:00 - 23:00</p>
            <p className="text-gray-700 mb-6"><strong className="font-medium">Domingo:</strong> 12:00 - 16:00 (Almoço)</p>
            {/* Reservation Button */}
            <button
              type="button"
              className="mt-4 inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition-colors duration-300"
              // onClick={() => alert("Funcionalidade de reserva indisponível nesta demonstração.")} // Placeholder action
            >
              Reservar Agora
            </button>
          </motion.div>

          {/* Optional Map Placeholder Image */}
          <motion.div
            className="w-full h-80 md:h-full rounded-xl shadow-lg overflow-hidden mt-8 md:mt-0"
            variants={fadeInUp}
          >
            <Image
              src="https://source.unsplash.com/800x600/?map,city-location,restaurant-location"
              alt="Mapa da localização do restaurante"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-10 px-6 text-center border-t border-gray-200 bg-gray-100 mt-auto"> {/* mt-auto to push to bottom if content is short */}
        <Link
          href="/" // Link to the main landing page (home)
          className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-300 text-sm"
        >
          &larr; Voltar ao Portfólio Principal
        </Link>
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
