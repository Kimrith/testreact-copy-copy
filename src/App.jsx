import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProduct } from "./Api/product";
import Footer from "./Footer";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();
      setProducts(data.products);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar
        home="Home"
        about="About"
        services="Services"
        pricing="Pricing"
        contact="Contact"
      />
      <div className="grid grid-cols-4 gap-4 p-5 ml-15.5 pt-20 flex-wrap">
        {products.map((product) => (
          <Card
            thumbnail={product.thumbnail}
            price={product.price}
            title={product.title}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
