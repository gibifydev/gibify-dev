import { FaGlobe, FaInstagram, FaLinkedin, FaFacebookF, FaGithub, FaWhatsapp, FaLink, FaYoutube} from 'react-icons/fa6'

export function Icon({ name }: { name: string }) {
  switch (name)
  {
    case 'linkedin':
      return <FaLinkedin size={20}/>
    case 'instagram':
      return <FaInstagram size={20}/>
    case 'facebook':
      return <FaFacebookF size={20}/>
    case 'github':
      return <FaGithub size={20}/>
    case 'youtube':
      return <FaYoutube size={20}/>
    case 'whatsapp':
      return <FaWhatsapp size={20}/>
    case 'website':
      return <FaGlobe size={20}/>
    default:
      return <FaLink size={20}/>
  }
}