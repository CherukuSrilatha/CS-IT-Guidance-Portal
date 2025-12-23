import React from "react";

const ContactDeveloper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Contact Developer
        </h1>
        <p className="text-gray-700 text-lg">
          Developers: <b>Srilatha & Akhila</b>
        </p>
        <p className="text-gray-700 text-lg">
          Email: <a href="mailto:cherukusrilatha1@gmail.com" className="text-blue-500 underline">cherukusrilatha1@gmail.com</a>
        </p>
        <p className="text-gray-700 text-lg">
            Linkedin:<a href="https://www.linkedin.com/in/cheruku-srilatha-4386922ab/" className="text-blue-500 underline">https://www.linkedin.com/in/cheruku-srilatha-4386922ab/</a>
        </p>
      </div>
    </div>
  );
};

export default ContactDeveloper;
