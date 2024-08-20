import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
    <div className="max-w-[1750px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="font-bold text-xl mb-2">About</h2>
        <p className="text-gray-700 mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> info@site.net
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> 880 123 456 789
        </p>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="font-bold text-xl mb-2">Quick Link</h2>
        <ul className="text-gray-700 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Archived</li>
          <li>Author</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="font-bold text-xl mb-2">Category</h2>
        <ul className="text-gray-700 space-y-2">
          <li>Lifestyle</li>
          <li>Technology</li>
          <li>Travel</li>
          <li>Business</li>
          <li>Economy</li>
          <li>Sports</li>
        </ul>
      </div>
      <div className="w-full ml-4 md:w-auto">
        <h2 className="font-bold text-xl mb-2">Weekly Newsletter</h2>
        <p className="text-gray-700 mb-4">
          Get blog articles and offers via email.
        </p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
