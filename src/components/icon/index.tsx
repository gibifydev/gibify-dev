import { FaGlobe, FaInstagram, FaLinkedin, FaFacebookF, FaGithub, FaWhatsapp, FaLink, FaYoutube, FaUser, FaThreads, FaBlog } from 'react-icons/fa6'

export function Icon({ name }: { name: string }) {
  switch (name)
  {
    case 'linkedin':
      return <FaLinkedin size={22}/>
    case 'instagram':
      return <FaInstagram size={22}/>
    case 'threads':
      return <FaThreads size={22}/>
    case 'facebook':
      return <FaFacebookF size={22}/>
    case 'github':
      return <FaGithub size={22}/>
    case 'youtube':
      return <FaYoutube size={22}/>
    case 'whatsapp':
      return <FaWhatsapp size={22}/>
    case 'website':
      return <FaGlobe size={22}/>
    case 'blog':
      return <FaBlog size={22}/>
    case 'sobre mim':
      return <FaUser size={22}/>
    default:
      return <FaLink size={22}/>
  }
}