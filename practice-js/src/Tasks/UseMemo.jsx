import  { useState, useMemo } from "react";

const UseMemo = () => {
  const [filter, setFilter] = useState("");
//eslint-disable-next-line
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 2000,
    },
    {
      id: 3,
      name: "Tablet",
      price: 3000,
    },
    {
      id: 4,
      name: "Camera",
      price: 4000,
    },
    {
      id: 5,
      name: "Watch",
      price: 5000,
    },
    {
      id: 6,
      name: "Headphones",
      price: 6000,
    },
  ];
  
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
        return product.name.toLowerCase().includes(filter.toLowerCase())
    })
  },[filter, products])
  return (
    <div>
      <input
        name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter products"
      />
      {filteredProducts.map((val, index) => (
        <ul key={index}>
          <li>
            Name: {val.name} - Price: {val.price}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default UseMemo;
