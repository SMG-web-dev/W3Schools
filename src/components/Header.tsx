import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function Header({ toggleDarkMode, isDarkMode }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-red-700 to-red-900 dark:from-gray-800 dark:to-gray-900 text-white p-4 md:p-6 shadow-lg flex justify-between items-center"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold tracking-tight"
      >
        CSS Avanzado
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-red-800 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label={
          isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        }
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </motion.header>
  );
}
