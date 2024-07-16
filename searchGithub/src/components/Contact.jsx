// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-[#202746] w-full h-screen to-[#406470] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            Have questions or want to get in touch? Drop us a message and we'll get back to you as soon as possible.
          </p>
          <p className="mt-4">
            Email: <a href="mailto:info@example.com" className="underline">info@example.com</a><br />
            Phone: +1-123-456-7890
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
