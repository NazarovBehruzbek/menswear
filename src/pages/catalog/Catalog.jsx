import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Catalog() {
  const [activeButton, setActiveButton] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://testaoron.limsa.uz/api/product?page=1&limit=10&min_sell=2");
        console.log("API Response:", response.data);
        setProducts(response.data.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <section className="container mx-auto py-6">
      <div className="text-center py-6 sm:py-8 md:py-12 bg-secondary">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Collection</h2>
        <p className="mt-2 max-w-prose mx-auto sm:w-full md:w-1/2">
          Browse our collection of premium menswear, designed with quality and style in mind.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 p-4 sm:p-6 md:p-8">
        <aside className="w-full md:w-1/4 p-4 bg-white shadow-md">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">Categories</p>
              <button
                className={`w-full px-4 py-2 rounded-2xl ${
                  activeButton === "viewAll" ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => handleButtonClick("viewAll")}
              >
                View All Products
              </button>
              <button
                className={`w-full p-2 rounded-lg text-left ${
                  activeButton === "suits" ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => handleButtonClick("suits")}
              >
                Suits
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">Sizes</p>
              <button
                className={`w-full p-2 rounded-lg text-left ${
                  activeButton === "sizes" ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => handleButtonClick("sizes")}
              >
                46-54
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">Colors</p>
              <button className="w-full text-red-600 underline text-[20px]">Clear filters</button>
            </div>
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <p>Showing {products.length} products</p>
            <div>
              <p className="inline mr-2">Sort by:</p>
              <select className="border rounded p-2">
                <option value="newest">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{product.title_en}</h3>
                <p className="text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}