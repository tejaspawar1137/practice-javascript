import "./ProductList.css"
const products = Array.from({length: 1000}, (_, i) =>  ({
  id: i, 
  name: `Product ${i}`,
  image: `https://via.placeholder.com/150`
}))

function ProductList() {
return(
  <div>
       {products.map((product) => (
        <div 
          key={product.id} 
          className="product-card"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            width="150" 
            height="150"
          />
          <h3>{product.name}</h3>
        </div>
      ))}
  </div>
)
}

export default ProductList