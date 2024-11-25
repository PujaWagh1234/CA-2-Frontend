import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails"; // This will show the detailed view of an article
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateArticle from "./pages/CreateArticle";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-3xl font-extrabold">
              <Link to="/">CK reporting hub</Link>
            </h1>
            <nav className="space-x-6 text-lg">
              <Link
                to="/"
                className="hover:text-gray-200 transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-200 transition duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-200 transition duration-200"
              >
                Contact
              </Link>
              <Link
                to="/create-article"
                className="hover:text-gray-200 transition duration-200"
              >
                New Article
              </Link>
            </nav>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1">
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles/:id" element={<ArticleDetails />} /> {/* Dynamic route for viewing article details */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/create-article" element={<CreateArticle />} />
            </Routes>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} India News. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;//comment
