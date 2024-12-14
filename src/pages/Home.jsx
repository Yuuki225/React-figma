import React from "react";
import ProductCard from "../Components/ProductCard";
import hp from "../assets/Headphone.webp";
import mic from "../assets/Michrophone.jpg";
import iem from "../assets/Iem.jpeg"
import tws from "../assets/Tws.png"

const products = [
  { id: 1, name: "Headphone", price: 50, image: hp, category: "Headphone" },
  { id: 2, name: "Headphone", price: 120, image: hp, category: "Headphone" },
  { id: 3, name: "Headphone", price: 200, image: hp, category: "Headphone" },
  { id: 4, name: "Headphone", price: 90, image: hp, category: "Headphone" },
  { id: 5, name: "Headphone", price: 180, image: hp, category: "Headphone" },
  { id: 6, name: "Headphone", price: 60, image: hp, category: "Headphone" },
  { id: 7, name: "Michrophone", price: 150, image: mic, category: "Microphone" },
  { id: 8, name: "Michrophone", price: 130, image: mic, category: "Microphone" },
  { id: 9, name: "Michrophone", price: 100, image: mic, category: "Microphone" },
  { id: 10, name: "Michrophone", price: 120, image: mic, category: "Microphone" },
  { id: 11, name: "IEM", price: 120, image: iem, category: "IEM" },
  { id: 12, name: "IEM", price: 120, image: iem, category: "IEM" },
  { id: 13, name: "IEM", price: 120, image: iem, category: "IEM" },
  { id: 14, name: "TWS", price: 120, image: tws, category: "TWS" },
  { id: 15, name: "TWS", price: 120, image: tws, category: "TWS" },
  { id: 16, name: "TWS", price: 120, image: tws, category: "TWS" },


];

const Home = () => {
  const headphones = products.filter((product) => product.category === "Headphone");
  const microphones = products.filter((product) => product.category === "Microphone");
  const iems = products.filter((product) => product.category === "IEM");
  const tws = products.filter((product) => product.category === "TWS");

  return (
    <div id="product" className="w-full bg-[#543A14] mx-auto py-8">
      {/* Kategori Headphone */}
      <h1 className="text-3xl font-bold font-playfair text-center text-white mb-8">Headphone</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {headphones.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Kategori Microphone */}
      <h1 className="text-3xl font-bold font-playfair text-center text-white mt-16 mb-8">Microphone</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {microphones.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Kategori IEM */}
      <h1 className="text-3xl font-bold font-playfair text-center text-white mt-16 mb-8">IEM (In Ear Monitor)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {iems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Kategori TWS */}
      <h1 className="text-3xl font-bold font-playfair text-center text-white mt-16 mb-8">TWS (True Wireless Stereo)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tws.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
