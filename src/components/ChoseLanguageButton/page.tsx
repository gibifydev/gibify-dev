'use client'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
,} from "@/components/ui/menubar"
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react"

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
