

function Homepage() {
  return (
    <div>
      {/* Hero Image (must load first) */}
      <img 
        src="/hero-image.jpg"
        alt="Hero Section"
        loading="eager"
        fetchPriority="high"
        width="100%"
        height="auto"
      />

      {/* Logo (can load after Hero) */}
      <img 
        src="/logo.png"
        alt="Website Logo"
        loading="eager"
        fetchPriority="low"
        width="150"
        height="50"
      />

      {/* Product Images (lazy load later) */}
      <img 
        src="/product-image.jpg"
        alt="Product"
        loading="lazy"
        fetchPriority="low"
        width="100%"
        height="auto"
      />
    </div>
  );
}

export default Homepage;
