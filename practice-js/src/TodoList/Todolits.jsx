import { useState } from "react";
import useFetch from "../hooks/UseFetch";

const TodoList = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedData = data.slice(firstIndex, lastIndex);
  const totalItemsPage = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {paginatedData?.map((val, index) => (
              <li key={index}>{val.title}</li>
            ))}
          </ul>
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.min(prev - 1, 1))}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalItemsPage}
            </span>
            <button
              disabled={currentPage >= totalItemsPage}
              onClick={() => setCurrentPage((prev) => Math.max(prev + 1, 1))}
            >
              Next
            </button>
          </div>
          <h2>
            {currentPage} currentPage {totalItemsPage} TotalItemsPage
          </h2>
        </div>
      )}
    </div>
  );
};

export default TodoList;
