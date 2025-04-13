import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import styled from "styled-components";


const Container = styled.div` 
max-width: 600px;
margin: 2rem auto;
padding: 2rem;
background-color: #f5f5f5;
border-radius: 8px;
`

const Input = styled.input`
width: 100%;
padding: 0.5rem;
margin-bottom: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
`

const Button = styled.button` 
padding: 0.5rem 1rem;
margin: 0.5rem 0;
border: none;
border-radius: 4px;
background-color: #007bff;
color: white;
cursor: pointer;

&:active {
background-color: #0056b3;
}
`

const Resulsts = styled.ul` 
list-style-type: none;
padding: 0;
`


const SearchApp = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([])

const useThrottle = (func, limit) => {
const [lastCall, setLastCall] = useState(0);
return useCallback((...args) => {
  const now = Date.now();
  if(now - lastCall > limit) {
    func(...args);
    setLastCall(now);
  }
},[lastCall, limit, func])
}

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let handler = setTimeout(() => {
      setDebounceValue(value)
    })
    return () => clearTimeout(handler)
  },[value,delay])
  return debounceValue
}
  const debounceQuery = useDebounce(query,500);

  useEffect(() => {
    if (debounceQuery) {
      setLoading(true);
      axios
        .get(`https://api.github.com/search/users?q=${debounceQuery}`)
        .then((response) => {
          setResults(response.data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [debounceQuery]);
  const handleSearch = useThrottle((e) => {
    e.preventDefault()
    if(query.trim() !== "") {
      setLoading(true);
      axios.get(`https://api.github.com/search/users?q=${query}`).then((response) => {
        setResults(response.data.items);
        setLoading(false)
      }).catch((error) => {
        console.error(error)
      })
    }
  },1000)
  return(
    <Container>
      <h2>Search Github Users</h2>
      <Input 
      type="text"
      placeholder="Type to search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      {loading ? (<p>Loading...</p>) : (<Resulsts>
        {results?.map((user)  => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
          </li>
        ))}
      </Resulsts>)}
    </Container>
  )
}


export default SearchApp