"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import NavigationButtons from "./components/NavigationButtons";
import Footer from "./components/Footer";
import { topicContent } from "./content/topicContent";

const topics = [
  "Esquinas Redondeadas",
  "Imágenes de Borde",
  "Fondos",
  "Colores",
  "Palabras Clave de Color",
  "Gradientes",
  "Sombras",
  "Efectos de Texto",
  "Fuentes Web",
  "Transformaciones 2D",
  "Transformaciones 3D",
  "Transiciones",
  "Animaciones",
];

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentIndex = topics.indexOf(selectedTopic);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedTopic(topics[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < topics.length - 1) {
      setSelectedTopic(topics[currentIndex + 1]);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar
          topics={topics}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
        <div className="flex flex-col flex-grow">
          <MainContent
            selectedTopic={selectedTopic}
            explanation={topicContent[selectedTopic].explanation}
            example={topicContent[selectedTopic].example}
            code={topicContent[selectedTopic].code}
          />
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={currentIndex > 0}
            hasNext={currentIndex < topics.length - 1}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
