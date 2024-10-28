import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  topics: string[];
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
}

export default function Sidebar({
  topics,
  selectedTopic,
  setSelectedTopic,
}: SidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 w-full md:w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="md:hidden w-full bg-red-600 dark:bg-gray-700 text-white p-3 font-semibold transition duration-300 ease-in-out hover:bg-red-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-gray-500 focus:ring-opacity-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 space-y-2"
          >
            {topics.map((topic) => (
              <motion.li
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full text-left p-3 rounded-lg transition duration-300 ease-in-out ${
                    selectedTopic === topic
                      ? "bg-red-200 dark:bg-gray-600 text-red-800 dark:text-white font-semibold"
                      : "hover:bg-red-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300"
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  {topic}
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
