import { useEffect, useState } from "react";
import axios from "axios";

/* 
3️⃣ Using Promise.allSettled for Handling Multiple Requests Safely
🔹 Use Case:
When fetching multiple APIs, but some requests may fail, use Promise.allSettled to handle both successful and failed responses.

🔹 Best Use Case:

Fetching optional data where failures don’t break the app.
Processing both successful and failed API requests gracefully.

*/


const PromiseAllSettled = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchAllData = async () => {
    try {
        setLoading(true);
        const response = await Promise.allSettled([
            axios.get("https://jsonplaceholder.typicode.com/users/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts?userId=1"),
            axios.get("https://jsonplaceholder.typicode.com/comments?postId=1")
        ])
        console.log(response,'response')
        response.forEach((result,index) => {
            if(result.status === "fulfilled") {
                if(index === 0) setUser(result.value.data);
                if(index === 1) setPosts(result.value.data);
                if(index === 2) setComments(result.value.data)
            }
        })
    } finally {
    setLoading(false)
    }
}

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) return <h2>Loading data...</h2>;

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <p>
          <strong>Name:</strong> {user.name}
        </p>
      ) : (
        <p>User data not available</p>
      )}

      <h3>User Posts</h3>
      {posts.length ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}

      <h3>Comments</h3>
      {comments.length ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
};

export default PromiseAllSettled;
