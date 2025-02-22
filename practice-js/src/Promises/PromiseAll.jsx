import  { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
/* 
1️⃣ Using Promise.all for Parallel API Calls
  Use Cases: 
  when fetchings users detsils and user posts we can run both api calls in paralle using Promise.all,
  which resolves when all promises all fulfilled
  *Base use cases:
  1) Fetching multiple independent API requests simultenously for better performance
  2) Ensures all requests completes successfully before updating the UI
  
  *Downside: Fails if any request fails

*/
const PromiseAll = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const fetchUserAndPosts = async () => {
        try {
            setLoading(true);
            const [userData, postData] = await Promise.all([
              axios.get("https://jsonplaceholder.typicode.com/users/1"),
              axios.get("https://jsonplaceholder.typicode.com/posts?userId=1"),
            ]);
            setPosts(postData.data)
            setUser(userData.data)
        }catch(error) {
            setError(error.message)
        }finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUserAndPosts()
    },[])
    
      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2>Error: {error}</h2>;
  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <h3>User Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromiseAll