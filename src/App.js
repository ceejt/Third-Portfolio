import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Afterhours from "./components/Afterhours";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Chatbot from "./components/Chatbot/Chatbot";
import ImageModal from "./components/Modal/ImageModal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */} 
      <ThemeToggle />

      {/* Main Content */}
      <div className="section-container">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <TechStack />
            <Certifications />
            <Projects />
            <Goals />
            <Afterhours />
            <Social />
            <Contact />
            <Gallery onImageClick={setSelectedImage} />
          </div>

          {/* Right Column - Leadership */}
          <div className="lg:col-span-1">
            <Leadership />
          </div>
        </div>
      </div>

      <Footer />

      {/* Chatbot */}
      <Chatbot />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;
