'use client'

import { usePathname } from "next/navigation"

export function Infos() {
  const pathname = usePathname()

  return (
    <div className="mt-8 md:mt-0 text-center md:text-left">
      <h3 className="text-lg font-bold mb-4">Informações</h3>
      <ul className="space-y-2">
        {pathname !== "/" && (
          <li>
          <a
            href="/"
            className="text-gray-400 hover:text-white transition"
          >
            Home
          </a>
        </li>
        )}
        <li>
          <a
            href="/about"
            className="text-gray-400 hover:text-white transition"
          >
            Sobre mim
          </a>
        </li>
        {/* <li>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white transition"
          >
            Privacy Policy
          </a>
        </li> */}
        {/* <li>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white transition"
          >
            Terms of Service
          </a>
        </li> */}
      </ul>
    </div>
  )
}