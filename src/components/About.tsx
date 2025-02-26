import React from "react";

const About = () => {
  return (
    <section className="py-20 px-16 bg-[#f8f3f6]">
      <div className="flex items-center gap-16">
        <div className="w-1/2">
          <img
            src="https://i.postimg.cc/J0pxrtRd/Whats-App-Image-2024-11-28-at-21-35-29-c3d5d60a.jpg"
            alt="About Glow"
            className="rounded-full w-[500px] h-[500px] object-cover"
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-6xl font-serif mb-8">What makes you glow</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-xl">
            Together we're building a safe, welcoming space in beauty and
            beyond. This is makeup made to feel good in, without hiding what
            makes you unique. And it's all vegan and cruelty free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
