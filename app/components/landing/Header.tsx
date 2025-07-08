'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

// --- Header Component ---
const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contato", href: "#contato" },
    { name: "Ferramentas", href: "/ferramentas" },
];

const sideMenuVariants = {
  hidden: {
    x: "100%",
    transition: { type: "tween" as const, duration: 0.3, ease: "easeIn" as const }
  },
  visible: {
    x: "0%",
    transition: { type: "tween" as const, duration: 0.3, ease: "easeOut" as const }
  },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                className="w-full top-0 left-0 z-30 py-4 px-6 sm:px-12 lg:px-24 border-b border-gray-200 dark:border-gray-800/50"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <motion.a
                        href="#"
                        className="text-2xl font-bold text-indigo-500 dark:text-indigo-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-800 dark:text-gray-200 focus:outline-none z-50 relative"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Panel & Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={toggleMobileMenu}
                        />

                        {/* Side Menu */}
                        <motion.nav
                            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-lg z-50 p-8"
                            variants={sideMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                             <div className="flex justify-end mb-8">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-gray-800 dark:text-gray-200 focus:outline-none"
                                    aria-label="Close Menu"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col items-start space-y-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 text-2xl font-semibold"
                                        onClick={toggleMobileMenu}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;