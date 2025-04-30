import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    // Afgan's
    // <div>
    //   <h1>Products</h1>
    //   {products.map((product) => (
    //     <div key={product._id}>
    //       <h2>{product.title}</h2>
    //       <p>{product.brand}</p>
    //       <img src={product.image} alt={product.title} width="200" />
    //       <p>{product.description}</p>
    //     </div>
    //   ))}
    // </div>

    // dummy

    <>
      <div >

      </div>
    </>
  );
}

export default App;