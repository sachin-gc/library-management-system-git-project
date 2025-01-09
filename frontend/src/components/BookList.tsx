import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  borrowedBy?: string;
}

interface BookListProps {
  books: Book[];
  onBorrow: (id: number, user: string) => void;
  onReturn: (id: number) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onBorrow, onReturn, onDelete }) => {
  const handleBorrow = (id: number) => {
    const user = prompt("Enter the user's name:");
    if (user) {
      onBorrow(id, user);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Library Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-500">No books in the library.</p>
      ) : (
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <strong className="text-lg">{book.title}</strong> by{" "}
                <span className="text-gray-600">{book.author}</span>
                {book.borrowedBy && (
                  <span className="ml-2 text-sm text-red-500">
                    Borrowed by {book.borrowedBy}
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                {!book.borrowedBy && (
                  <button
                    onClick={() => handleBorrow(book.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600"
                  >
                    Borrow
                  </button>
                )}
                {book.borrowedBy && (
                  <button
                    onClick={() => onReturn(book.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600"
                  >
                    Return
                  </button>
                )}
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
