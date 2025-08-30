import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProduct } from "./Api/product";
import Footer from "./Footer";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();
      setProducts(data.products);
      console.log(data);
      setIsloading(false);
    };
    fetchData();
  }, []);
  if (isloading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold">
          <img
            src="https://i.pinimg.com/originals/fa/6d/c1/fa6dc135745b95f5cb9125669f638349.gif"
            alt="Loading..."
          />
        </h2>
      </div>
    );
  }
  return (
    <div>
      <Navbar
        home="Home"
        about="About"
        services="Services"
        pricing="Pricing"
        contact="Contact"
      />
      <div className="w-full flex md:flex-wrap p-5  md:justify-center max-sm:justify-start overflow-x-scroll gap-12 pt-20">
        {products.map((product) => (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative w-[300px] flex-shrink-0 max-sm:w-[300px]">
            <Card
              key={product.id} // Added key for React's list rendering optimization
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
