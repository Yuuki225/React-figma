import React from "react";

const Hero = () => {
  return (
    <div id="Main" className="bg-[#F0BB78] text-white py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-lora">selamat datang di Horegshopu</h1>
        <p className="mt-4 text-lg font-serif md:text-xl">
          temukan berbagai perlengkapan audio untuk memenuhi kebutuhan anda.
        </p>
        <div className="mt-8">
          <a
            href="#product"
            className="bg-white text-blue-500 px-6 py-3 font-lora rounded-lg text-lg font-medium hover:bg-black transition"
          >
            mulai belanja
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

