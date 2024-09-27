import { FaYoutube, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";


export default function Links() {
  return (
    <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Segue me</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#oi"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
  )
}