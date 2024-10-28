import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-4 px-6 text-center"
    >
      <p>
        Contenido inspirado por{" "}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.w3schools.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors duration-300"
        >
          W3Schools
        </motion.a>
        . Visita su sitio web para tutoriales y referencias más completas.
      </p>
    </motion.footer>
  );
}
