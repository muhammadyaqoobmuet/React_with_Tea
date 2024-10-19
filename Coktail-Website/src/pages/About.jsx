import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-[calc(100vh-68px)] flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-3xl p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are passionate about providing you with the
          best experience possible. Our team works tirelessly to ensure our
          content is engaging, informative, and fun. Whether you're here to
          learn, explore, or just have a good time, we're glad to have you.
        </p>
        <p className="text-lg">
          Feel free to navigate around and discover everything we have to offer.
          If you have any questions or need help, don't hesitate to reach out.
          Thank you for visiting!
        </p>
        <Link to='/' > <button className="bg-[#111827] text-white w-full mt-4  py-2 text-xl font-semibold tracking-wider">go back to Home</button> </Link>
      </div>
    </div>
  );
}

export default About;
