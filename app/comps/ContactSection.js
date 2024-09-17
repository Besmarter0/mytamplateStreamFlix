import { MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export function ContactSection() {
  return (
    <div className="flex justify-center items-center py-12 bg-base-200">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center">
              <MagnifyingGlassIcon className="h-6 w-6 text-primary mr-4" />
              <p className="text-lg font-medium">contact@yourdomain.com</p>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-primary mr-4" />
              <p className="text-lg font-medium">+123 456 7890</p>
            </div>
            <div>
              <p className="text-lg">
                123 Street Name, <br />
                City, State, ZIP
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="textarea textarea-bordered w-full"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-right">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
