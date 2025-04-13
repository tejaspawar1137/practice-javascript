import { useEffect, useState } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((val) => val.json())
      .then((data) => {
        if (mounted) {
          setUsers(data);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);
  return loading ? (
    <p>Loading users...</p>
  ) : (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UseEffect;
