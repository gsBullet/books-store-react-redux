import React, { useState } from "react";
import BookCard from "../components/BookCard";
import { useGetAllBooksQuery } from "../features/api/apiSlice";
import Loader from "../components/loader/Loader";
import Error from "../components/loader/Error";

const Home = () => {
  const [feature, setFeature] = useState("");

  const { data: books, isError, isLoading } = useGetAllBooksQuery({feature});

  

  let content = null;
  if (isLoading) {
    return <Loader />;
  }
  if (!isLoading && isError) {
    return <Error message="Error loading books" />;
  }
  if (!isLoading && !isError && books?.length === 0) {
    return Error({ message: "No Books Found" });
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books.map((book) => <BookCard key={book.id} book={book} />);
  }

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFeature(false)}
            className={`lws-filter-btn ${!feature ? "active-filter" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setFeature(true)}
            className={`lws-filter-btn ${feature ? "active-filter" : ""}`}
          >
            Featured
          </button>
        </div>
      </div>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <!-- Card 1 --> */}
        {content}
      </div>
    </div>
  );
};

export default Home;
