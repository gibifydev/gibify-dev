'use client'
import { useEffect, useState} from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
,} from "@/components/ui/menubar"
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function ChoseLanguageButton() {
  const [flag, setFlag] = useState("🇧🇷");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleChoseLang = (lang: string) => {
    const params = new URLSearchParams(searchParams);
    switch (lang) {
      case "es":
        params.set("lang", "es");
        setFlag("🇪🇸");
        break;
      case "en":
        params.set("lang", "en");
        setFlag("🇺🇸");
        break;
      default:
        params.set("lang", "pt");
        setFlag("🇧🇷");
        break;
    }
    replace(`${pathname}?${params.toString()}`);
  }


  useEffect(() => {
    if(!searchParams.has("lang")) {
      const params = new URLSearchParams(searchParams);
      params.set("lang", "pt");
      setFlag("🇧🇷");
      replace(`${pathname}?${params.toString()}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, pathname]);

  return (
    <Menubar className="rounded-full w-[48px] h-[48px] flex items-center justify-center bg-neutral-50">
      <MenubarMenu>
      <MenubarTrigger>
        {flag}
      </MenubarTrigger>
        <MenubarContent className="bg-neutral-50 rounded">
            <MenubarItem onClick={() => handleChoseLang("pt")}>
              🇧🇷 - Português 
            </MenubarItem>
            <MenubarItem onClick={() => handleChoseLang("en")}>
              🇺🇸 - English 
            </MenubarItem>
            <MenubarItem onClick={() => handleChoseLang("es")}>
              🇪🇸 - Spanhõl 
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

  )
}
