import { motion } from "framer-motion";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: NavigationButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between p-4 md:p-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`bg-red-600 dark:bg-gray-700 text-white px-4 md:px-6 py-2 rounded-lg font-semibold transition duration-300 ease-in-out ${
          hasPrevious
            ? "hover:bg-red-700 dark:hover:bg-gray-600"
            : "opacity-50 cursor-not-allowed"
        } focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-gray-500 focus:ring-opacity-50`}
      >
        Anterior
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={!hasNext}
        className={`bg-red-600 dark:bg-gray-700 text-white px-4 md:px-6 py-2 rounded-lg font-semibold transition duration-300 ease-in-out ${
          hasNext
            ? "hover:bg-red-700 dark:hover:bg-gray-600"
            : "opacity-50 cursor-not-allowed"
        } focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-gray-500 focus:ring-opacity-50`}
      >
        Siguiente
      </motion.button>
    </motion.div>
  );
}
