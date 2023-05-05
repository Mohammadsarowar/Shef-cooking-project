import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
import usedTitle from '../../Auth-Provider/usedTitle';

const ContactPage = () => {
  usedTitle("Contact")
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We'd love to hear from you! Fill out the form below to send us a message.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                <p className="mt-1 text-md text-gray-600">
                  Reach out to us via phone, email or visit us at our location.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex">
                    <FaPhoneAlt className="w-6 h-6 text-gray-400 mr-4" />
                    <span className="text-gray-800">555-1234-5678</span>
                  </li>
                  <li className="flex">
                    <FaMapMarkerAlt className="w-6 h-6 text-gray-400 mr-4" />
                    <span className="text-gray-800">123 Main St, Anytown USA</span>
                  </li>
                  <li className="flex">
                    <FaEnvelope className="w-6 h-6 text-gray-400 mr-4" />
                    <span className="text-gray-800">contact@restaurant.com</span>
                  </li>
                  <li className="flex">
                    <IoMdTime className="w-6 h-6 text-gray-400 mr-4" />
                    <span className="text-gray-800">Mon - Fri: 9:00am - 8:00pm</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt
                          block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Facebook</span>
          <AiFillFacebook className="w-8 h-8" />
        </a>

        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Twitter</span>
          <AiFillTwitterSquare className="w-8 h-8" />
        </a>

        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Instagram</span>
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</div>
);
};

export default ContactPage;