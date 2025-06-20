import React, { useEffect, useState } from "react";
import heroimg from "./img/hero.jpg";
import { API } from "../../api/API";
import { NavLink } from "react-router-dom";
import img1 from "./img/img1.jpeg"
export default function Home() {
  const [response, setResponse] = useState([]);
  const getApi = async () => {
    try {
      const res = await API.get("/product");
      setResponse(res.data?.data?.products);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  const style_one = {
    backgroundImage: `url(${heroimg})`,
    backgroundPosition: "center 30%",
  };
  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden mt-3">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={style_one}
        >
          1
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start space-y-8 animate-fade-up">
              <span className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white">
                Spring/Summer 2025
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white">
                Premium Menswear
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Quality fabrics. Perfect fit. Timeless style.
              </p>
              <a
                className="group bg-white text-primary px-6 py-3 rounded-md inline-flex items-center hover:bg-white/90 transition-colors"
                href="/catalog"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-container m-16">
        <div className="mb-10 text-center">
          <h2 className="heading-lg mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected collection of premium menswear,
            crafted with the finest materials and attention to detail.
          </p>
        </div>
        <div className="m-auto product-grid gap-8 grid grid-cols-4 container">
          {response.map((item) => (
            <>
              <div>
                <div className="h-[300px]">
                  <img
                    className="h-[300px] w-full object-cover"
                    src={`https://testaoron.limsa.uz/${item?.images}`}
                    alt="image"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">{item?.title_en}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">${item?.price}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">{item?.description_en}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="mt-12 text-center">

          {<NavLink to={"/catalog"}><div className="border border-gray-300 rounded-md py-3 px-6 btn-secondary group inline-flex items-center">View All Products</div></NavLink>}
        </div>
      </section>
      <section className="section-container my-16">
        <div className="mb-10 container m-auto">
          <div className="flex justify-between items-end my-10">
            <h2 className="text-xl">New Arrivals</h2>
            {<NavLink to={"/catalog"}>View All Products</NavLink>}
          </div>
          <div className="m-auto product-grid gap-8 grid grid-cols-4 container">
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-red-200">
        <div className="container m-auto">
          <div className="flex justify-between items-end my-10">
            <h2 className="text-xl text-red-400">Sale</h2>
            {<NavLink to={"/catalog"}>View All Products</NavLink>}
          </div>
          <div className="m-auto product-grid gap-8 grid grid-cols-4 container">
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
            <div>
              <div className="h-[300px]">
                <img
                  className="h-[300px] w-full object-cover"
                  src={img1}
                  alt="image"
                />
              </div>
              <div className="mt-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">
                    Men’s classic 3-piece suit in solid dark grey – understated, elegant, and versat</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">$43</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-muted-foreground line-clamp-2">A timeless 3-piece men’s suit in solid dark grey — a versatile and essential option for office wear, business meetings, and formal occasions. The neutral tone and structured slim fit make it easy to pair with any shirt or tie, helping you achieve a confident and elegant look</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
