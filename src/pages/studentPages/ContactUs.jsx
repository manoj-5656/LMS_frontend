import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-slideUp">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 sm:text-6xl drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-yellow-200 max-w-xl mx-auto">
            Have questions or need help? We're just a message away!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Form Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl transform translate-y-6 opacity-0 animate-slideUpSlow">
            <h2 className="text-3xl font-semibold mb-8 text-yellow-300 drop-shadow-md">
              Send us a Message
            </h2>
            <form action="#" method="POST" className="space-y-8">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "What's it about?" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="opacity-0 animate-slideUpSlow delay-200">
                  <label htmlFor={id} className="block text-sm font-medium text-yellow-300 mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    placeholder={placeholder}
                    className="w-full rounded-lg px-5 py-3 bg-white/20 placeholder-yellow-200 text-white border border-white/25 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300 backdrop-blur-sm shadow-inner"
                  />
                </div>
              ))}
              <div className="opacity-0 animate-slideUpSlow delay-200">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-yellow-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full rounded-lg px-5 py-3 bg-white/20 placeholder-yellow-200 text-white border border-white/25 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300 backdrop-blur-sm shadow-inner resize-none"
                ></textarea>
              </div>
              <div className="opacity-0 animate-slideUpSlow delay-400">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-12 rounded-3xl shadow-2xl flex flex-col justify-center transform translate-y-6 opacity-0 animate-slideUpSlow delay-200">
            <h2 className="text-3xl font-semibold text-yellow-300 mb-8 drop-shadow-md">
              Contact Information
            </h2>
            <p className="text-yellow-200 mb-10 max-w-md">
              Reach out via the details below. We'd love to hear from you!
            </p>
            <ul className="space-y-8">
              {[
                {
                  label: "Email",
                  value: "kathimanojreddy@gmail.com",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-300 group-hover:text-yellow-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  value: "+91 6304282469",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-300 group-hover:text-yellow-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Address",
                  value: "123 Learning St., Education City, EC 12345",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-300 group-hover:text-yellow-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
              ].map(({ label, value, icon }) => (
                <li key={label} className="flex items-center group cursor-default">
                  <div className="p-3 rounded-full bg-yellow-400 bg-opacity-20 group-hover:bg-opacity-40 mr-4 shadow-inner transition-all duration-300">
                    {icon}
                  </div>
                  <span className="text-yellow-200 group-hover:text-yellow-400 transition-colors select-text">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slideUpSlow {
          animation: slideUp 1s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
};

export default ContactUs;
  