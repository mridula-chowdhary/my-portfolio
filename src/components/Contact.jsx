import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8  relative z-10 bg-[#875F9A] w-2/3  lg: mx-auto lg:w-1/2 rounded-lg ">
      <h2 className="text-3xl mb-4 text-white text-center ">Contact</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="name">Name :</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="email">Email :</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="message">Message :</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded w-full" type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
