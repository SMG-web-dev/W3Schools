import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MainContentProps {
  selectedTopic: string;
  explanation: string;
  example: string;
  code: string;
}

export default function MainContent({
  selectedTopic,
  explanation,
  example,
  code,
}: MainContentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [example]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow p-4 md:p-6 bg-white dark:bg-gray-900 overflow-auto"
    >
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white"
        >
          {selectedTopic}
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded-lg p-4 md:p-6 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-red-700 dark:text-red-400">
          Explicación
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {explanation}
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 md:p-6 mb-4 md:mb-6"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800 dark:text-white">
          Ejemplo
        </h3>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-inner min-h-[200px] flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded col-span-2"></div>
                    <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          )}
          {imageError ? (
            <p className="text-red-500 dark:text-red-400">
              Error al cargar la imagen
            </p>
          ) : (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.8,
              }}
              transition={{ duration: 0.5 }}
              src={example}
              alt={`Ejemplo de ${selectedTopic}`}
              className="max-w-full max-h-[400px] object-contain"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 border border-red-300 dark:border-red-700 rounded-lg p-4 md:p-6 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-red-700 dark:text-red-400">
          Código de Ejemplo
        </h3>
        <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-800 dark:text-gray-200">
            {code}
          </code>
        </pre>
      </motion.div>
    </motion.main>
  );
}
