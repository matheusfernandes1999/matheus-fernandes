'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggle = () => {
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <motion.button
      onClick={toggle}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          animate={{ 
            opacity: isDark ? 0 : 1,
            y: isDark ? 20 : 0,
            rotate: isDark ? 90 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <SunIcon className="w-full h-full text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : -20,
            rotate: isDark ? 0 : -90
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <MoonIcon className="w-full h-full text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  )
}

export default ThemeToggle;