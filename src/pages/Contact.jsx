import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
        <p className="text-gray-600">
          Have questions or want to collaborate? Feel free to reach out to us —
          we’d love to hear from you!
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Mail className="text-indigo-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@yourcompany.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Phone className="text-indigo-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+880 1783 780066</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <MapPin className="text-indigo-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">Rajshahi, Bangladesh</p>
            </div>
          </div>

          {/* Map (optional placeholder) */}
          <div className="mt-6">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.697902619275!2d88.60279677507397!3d24.366329978237024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef4308e1c5cd%3A0x217acb9f7a707788!2sRajshahi!5e0!3m2!1sen!2sbd!4v1675332053094!5m2!1sen!2sbd"
              className="w-full h-52 rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
