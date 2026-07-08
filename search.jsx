const { useState, useEffect } = React;

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Lasoye Citrus Shimmer", price: 24.99, season: "summer", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 2, name: "Lasoye Soleil Blanc", price: 24.99, season: "summer", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png" },
  { id: 3, name: "Lasoye Neroli Coast", price: 24.99, season: "summer", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 4, name: "Lasoye Amber Woods", price: 24.99, season: "autumn", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png" },
  { id: 5, name: "Lasoye Spiced Suede", price: 24.99, season: "autumn", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 6, name: "Lasoye Velvet Fig", price: 24.99, season: "autumn", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png" },
  { id: 7, name: "Lasoye Midnight Frost", price: 24.99, season: "winter", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 8, name: "Lasoye Cashmere Musk", price: 24.99, season: "winter", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png" },
  { id: 9, name: "Lasoye Frosted Oud", price: 24.99, season: "winter", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 10, name: "Lasoye Petal Rain", price: 24.99, season: "spring", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png"},
  { id: 11, name: "Lasoye Jasmine Bloom", price: 24.99, season: "spring", image1: "lasoye-gold.png", image2: "Gold-perfume-with-package.png" },
  { id: 12 , name: "Lasoye Gilded Peony", price: 24.99, season: "spring", image1: "Pink-perfume.png", image2: "Pink-perfume-with-package.png" }
];

const PRICE_MAP = {
  '30ml': 24.99,
  '50ml': 39.99,
  '100ml': 74.99
};

function ProductCard({ product, containerClass, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState("30ml");
  
  return (
    <div className={containerClass}>
      <div className="product-image-container">
        <img src={product.image1} alt={product.name} className="product-image" />
        <img src={product.image2} alt={`${product.name} packaging`} className="product-image2" />
      </div>
      <h3 className="product-name" style={{color:"black"}}>{product.name}</h3>
      <p className="product-price" >£{PRICE_MAP[selectedSize].toFixed(2)}</p>
      <select 
        className="product-size"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        style={{ width: "40%", padding: "8px", marginBottom: "15px", border: "1px solid #ccc", background: "white", color: "black" }}
      >
          <option value="30ml">30ml</option>
          <option value="50ml">50ml</option>
          <option value="100ml">100ml</option>
      </select>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

function ProductGrid({ products = SAMPLE_PRODUCTS }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-menu">
              <li>
                  <a href="home.html" className="nav-link">Home</a>
              </li>
          </ul>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              style={{ background: "white", color: "black" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button">
              <i className="fa-solid fa-magnifying-glass" style={{ color: "black" }}></i>
            </button>
          </div>
          <ul className="nav-right">
              <li><a href="account.html">Account</a></li>
              <li><a href="orders.html">Returns and orders</a></li>
              <li>
                   <span className="cart-count" style={{ color: "white", marginRight: "5px" }}>{cartCount}</span>
                  <i className="fa-solid fa-cart-arrow-down cart" style={{ color: "white" }}></i>
              </li>
          </ul>
        </nav>
      </header>

       <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => {
            const containerClass = index % 2 === 0 ? "product-container" : "product-container2";

            return (
              <ProductCard 
                key={product.id}
                product={product}
                containerClass={containerClass}
                onAddToCart={handleAddToCart}
              />
            );
          })
        ) : (
          <p className="no-results" style={{ width: "100%", textAlign: "center", gridColumn: "1 / -1", color: "black" }}>
            No products match your search.
          </p>
        )}
      </div>
    </>
  );
}
