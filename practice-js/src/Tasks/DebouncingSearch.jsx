import { useEffect, useState } from "react";
import axios from "axios";

const DebouncingSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (searchInput) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchInput}`
      );
      setResults(response.data.items);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        fetchResults(query);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);
  return (
    <>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Search Github users</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
        <ul>
          {loading ? (
            <h1>loading...</h1>
          ) : (
            <>
              {" "}
              {results?.map((val) => (
                <li key={val?.id}>
                  <a
                    href={val?.html_url}
                    target="_blank"
                    rel="noopener norefererr"
                  >
                    {val?.login}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default DebouncingSearch;
