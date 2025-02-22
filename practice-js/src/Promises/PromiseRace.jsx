import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
/* 
Using Promise.race(). for fastest response
*use case: if multiple API provides the same data promise.race returns the first successful response and 
ignores slower resopnse
  * choosing the faster api response 
  * handling multiple backup api for reliability
Promise.race([]) runs both API requests.
The first resolved API response wins.
The slower request is ignored.
If all requests fail, the catch block runs.
✔ Best for fetching data from multiple API sources quickly.
❌ If the first response is incorrect, you may get inaccurate data.
*/
const PromiseRace = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchFastestUser = async () => {
    try {
      setLoading(true);
       const fastestResponse = await Promise.race([
         axios.get("https://jsonplaceholder.typicode.com/users/1"),
         axios.get("https://dummyjson.com/users/1"), // Backup API
       ]);

      setUser(fastestResponse.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFastestUser();
  }, []);
  if (loading) return <h2>Loading fastest user...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  return (
    <div>
      <h2>Fastest User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default PromiseRace;
