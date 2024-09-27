import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";


export default function Links() {
  return (
    <div className="flex flex-col items-center md:items-start">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/thegibi.dev/"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/thegibiofficial/"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/thegibiofficial/"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
  )
}