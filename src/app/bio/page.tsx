import { Metadata } from "next";
import links from "@/data/social-links.json"
import Item from "@/components/Item/page";

export const metadata: Metadata = {
  title: 'Bio'
}

export default function BioPage() {
return (
  <div className="mt-[200px] h-full mb-10">
   <ul className='flex flex-col items-center justify-between gap-4 mt-5 w-full'>
        {links.social_links.map((link) => {
          return (
            <Item key={link.name}  {...link}/>
          )
        })}
      </ul>
</div>
)

}