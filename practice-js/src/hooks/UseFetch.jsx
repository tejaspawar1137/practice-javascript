import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message)
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {data, loading, error}
}


export default useFetch