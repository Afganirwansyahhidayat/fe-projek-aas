import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/products');
        const res = [
          {
            id: 1,
            title: '1st dummy',
            brand: 'dummy',
            image: null,
          },
          {
            id: 2,
            title: '2nd dummy',
            brand: 'dummy',
            image: null,
          },
          {
            id: 3,
            title: '3rd dummy',
            brand: 'dummy',
            image: null,
          }
        ];

        // setProducts(res.data);
        setProducts(res);

        // 
        let url = "http://www.example.com/detail-product?id=4";

        url = new URL(url);

        let id = url.searchParams.get("id");

        console.log(id)
        // 

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
      <div style={{ display: `grid`, gridTemplateColumns: `auto auto`, padding: `4rem`, gap: `4rem` }}>
        {/* Card */}
        {
          products.map((product) => {
            return(
              <div style={{ border: `1px solid grey`, borderRadius: `1rem`, padding: `1rem` }}>
                <img src="https://static.wikia.nocookie.net/multicrewtankcombat2/images/b/b7/Fish_State.png" alt="" srcset="" style={{ width: `32rem` }} />
                <br />
                <a href={ `http://detail-produk?id=${product.id}` }>
                  <h1>{ product.title }</h1>
                </a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam iusto vero in accusamus harum, ea facilis. Fugiat, iste enim. Rerum numquam hic soluta ab quis? Repellendus velit voluptatem magni.
              </div>
            );
          })
        }
        {/*  */}
      </div>
    </>
  );
}

export default App;