'use client'
import { useEffect} from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
,} from "@/components/ui/menubar"
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function ChoseLanguageButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleChoseLang = (lang: string) => {
    const params = new URLSearchParams(searchParams);
    if(params.get("lang") === "pt") {
      params.set("lang", "en");
    } else {
      params.set("lang", "pt");
    }
    replace(`${pathname}?${params.toString()}`);
  }


  useEffect(() => {
    if(!searchParams.has("lang")) {
      const params = new URLSearchParams(searchParams);
      params.set("lang", "pt");
      replace(`${pathname}?${params.toString()}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, pathname]);

  return (
    <Menubar>
      <MenubarMenu>
      <MenubarTrigger>
        {searchParams.get("lang") === "pt" ? "🇧🇷" : "🇺🇸"}
      </MenubarTrigger>
        <MenubarContent>
            <MenubarItem onClick={() => handleChoseLang("pt")}>
              Português 🇧🇷
            </MenubarItem>
            <MenubarItem onClick={() => handleChoseLang("en")}>
              English 🇺🇸
            </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

  )
}
