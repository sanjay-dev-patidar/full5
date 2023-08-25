import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Header, Home, Blogs, Footer } from "./components";
import SectionWrapper from "./hoc/SectionWrapper";

const HomeWithSectionWrapper = SectionWrapper(Home, "home");

const App = () => {
  const [activeButton, setActiveButton] = useState("ageofai");
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedCollectionAndTitle, setSelectedCollectionAndTitle] = useState(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Header
                    activeButton={activeButton}
                    onSetActiveButton={setActiveButton}
                    setSelectedDocument={setSelectedDocument}
                    setSelectedCollectionAndTitle={setSelectedCollectionAndTitle}
                  />
                  <HomeWithSectionWrapper
                    selectedDocument={selectedDocument}
                    selectedCollectionAndTitle={selectedCollectionAndTitle}
                  />
                </>
              )}
            />
            <Route path="/blogs/*" element={<BlogsHeader />} />
          </Routes>
        </div>

        <div className="relative z-0">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

const BlogsHeader = () => {
  const match = useMatch("/blogs/*"); // Match any route under /blogs
  if (!match) return null; // Don't render the header on other routes

  return (
    <Header
      activeButton={activeButton}
      onSetActiveButton={setActiveButton}
      setSelectedDocument={setSelectedDocument}
      setSelectedCollectionAndTitle={setSelectedCollectionAndTitle}
    />
  );
};

export default App;
