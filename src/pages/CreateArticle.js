import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/articles", { title, content })
      .then(() => {
        setTitle("");
        setContent("");
        alert("Article created successfully!");
      })
      .catch((error) => console.error("Error creating article:", error));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Create Your Article
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Share your insights, thoughts, or latest news. Use the form below to
          craft your article and make an impact!
        </p>
        <div className="mt-6">
          <img
            src="https://plus.unsplash.com/premium_vector-1721371038732-544bac832955?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Create Article"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a compelling title"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700">
            Content
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your story here..."
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200"
        >
          Publish Article
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
