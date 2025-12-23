import React from "react";

const FAQs = () => {
  const faqs = [
  {
    question: "What is the CS/IT Students Guidance Portal?",
    answer: "It is an all-in-one platform designed to guide CS/IT students through learning paths, projects, internships, placements, and career growth."
  },
  {
    question: "How does the AI Assistant help students?",
    answer: "The built-in AI Assistant provides instant answers to technical questions, helps in debugging, gives project suggestions, and assists in learning resources."
  },
  {
    question: "What can I find in the Skills section?",
    answer: "The Skills section provides detailed learning paths for domains like AI/ML, Data Science, Web Development (MERN/Full Stack Java), Cybersecurity, and Cloud & DevOps."
  },
  {
    question: "Does the portal offer internship opportunities?",
    answer: "Yes, the Internships section lists verified internship opportunities and platforms to apply for real-world experience."
  },
  {
    question: "Can I get mentorship or guidance from experts?",
    answer: "Yes, the Mentorship section connects you with professionals and mentors who provide career and project guidance."
  },
  {
    question: "What does the Projects section include?",
    answer: "The Projects section contains innovative mini and major project ideas with suitable tech stacks, problem statements, and implementation tips."
  },
  {
    question: "How can I create or update my resume?",
    answer: "You can use the Resume Builder feature to generate, download, and update your resume with academic, project, and skill details."
  },
  {
    question: "What kind of problems are available in the Problems section?",
    answer: "The Problems section includes coding practice problems and challenges inspired by the Striver Sheet for interview preparation."
  },
  {
    question: "How do hackathons help students?",
    answer: "The Hackathons section highlights ongoing and upcoming hackathons, allowing students to participate, build projects, and showcase their talent."
  },
  {
    question: "What is shown in the Profiles section?",
    answer: "The Profiles section provides links to top profiles from platforms like GitHub, LeetCode, CodeChef, and LinkedIn for inspiration and networking."
  },
  {
    question: "Can I receive personalized career suggestions?",
    answer: "Yes, the Suggestions section offers AI-based personalized career recommendations based on your skills and interests."
  },
  {
    question: "Is my data safe in the portal?",
    answer: "Yes, all user data is securely stored in MongoDB, and passwords are encrypted for protection."
  },
  {
    question: "Can I reset my password if I forget it?",
    answer: "Yes, you can use the 'Forgot Password' option to receive an OTP via email and securely reset your password."
  },
  {
    question: "How can I contact the developers or support team?",
    answer: "You can reach out through the Contact Developer page available under the Help section in the navigation menu."
  },
  {
    question: "Is the portal updated regularly?",
    answer: "Yes, the portal is continuously improved with new resources, updated roadmaps, and added functionalities to support students better."
  }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-3">
              <p className="font-semibold text-gray-800">{faq.question}</p>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
