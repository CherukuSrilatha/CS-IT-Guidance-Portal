import React from "react";

const AboutProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About the Project
        </h1>
        <p className="text-gray-700 text-lg">
          The Guidance Portal is a web application designed to help CS/IT students navigate their career path effectively. It provides resources on skills, internships, projects, hackathons, resume building, and personalized career suggestions. The platform also includes a student profile section to manage user data securely.
        </p>
        <p className="text-gray-700 text-lg">
          The portal is built using the MERN stack with React, Node.js, Express, and MongoDB. TailwindCSS is used for styling, and the OpenAI API powers AI-driven suggestions for skill development and career guidance.
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
