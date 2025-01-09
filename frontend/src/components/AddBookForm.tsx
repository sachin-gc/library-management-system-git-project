import React, { useState } from "react";

interface AddBookFormProps {
  onAddBook: (title: string, author: string) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      onAddBook(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Add a New Book</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Book Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter book title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter author name"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;