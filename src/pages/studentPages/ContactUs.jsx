import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Outer wrapper with animation */}
      <div className="max-w-7xl mx-auto animate-fadeIn">
        <div className="text-center mb-12 opacity-0 animate-slideUp">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Have questions or need help? We're just a message away!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form - Glassmorphism Card */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-2xl border border-white/20 transform translate-y-4 opacity-0 animate-slideUpSlow">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="opacity-0 animate-slideUpSlow delay-200">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div className="opacity-0 animate-slideUpSlow delay-300">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
              <div className="opacity-0 animate-slideUpSlow delay-400">
                <label htmlFor="subject" className="block text-sm font-medium text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="What's it about?"
                />
              </div>
              <div className="opacity-0 animate-slideUpSlow delay-500">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 placeholder-gray-200 text-white focus:ring-2 focus:ring-blue-300 focus:border-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="opacity-0 animate-slideUpSlow delay-600">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-400 hover:to-indigo-500 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info - Gradient Card */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-8 rounded-xl shadow-2xl flex flex-col justify-center transform translate-y-4 opacity-0 animate-slideUpSlow delay-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <p className="text-blue-100 mb-6">
              Reach out via the details below. We'd love to hear from you!
            </p>
            <ul className="space-y-5">
              <li className="flex items-center group">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 mr-3 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white group-hover:text-blue-200 transition-colors">kathimanojreddy@gmail.com</span>
              </li>
              <li className="flex items-center group">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 mr-3 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white group-hover:text-blue-200 transition-colors">+91 6304282469</span>
              </li>
              <li className="flex items-start group">
                <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 mr-3 mt-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white group-hover:text-blue-200 transition-colors">
                  123 Learning St., Education City, EC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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