import { LinkedinIcon } from "./linkedin-icon";
import { XIcon } from "./x-icon";
import { InstagramIcon } from './instagram-icon'
import { FacebookIcon } from './facebook-icon'
import { GithubIcon } from "./github-icon";
import { YoutubeIcon } from "./youtube-icon";
import { WhatsappIcon } from "./whatsapp-icon";

export function Icon({ name }: { name: string }) {
  switch (name)
  {
    case 'x':
      return <XIcon />
    case 'linkedin':
      return <LinkedinIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'github':
      return <GithubIcon />
    case 'youtube':
      return <YoutubeIcon />
    case 'whatsapp':
      return <WhatsappIcon />
    default:
      <></>
  }
}