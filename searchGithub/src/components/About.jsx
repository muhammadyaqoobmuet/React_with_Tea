// About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-r w-full h-screen from-[#202746] to-[#406470] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque eros non nunc facilisis, id maximus elit ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <p className="mt-4">
            Morbi mattis, nulla quis rutrum ullamcorper, odio lectus mattis velit, sit amet consectetur nunc risus ac lacus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
