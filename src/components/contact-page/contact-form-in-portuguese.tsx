import Link from "next/link"

export function ConatctFormInPortuguese() {
  return (
    <form className="flex  flex-col gap-6 max-w-[500px] mt-12 w-full p-4" >
      <h1 className="text-2xl">Entre em Contato</h1>
      <p className="text-md">
        Envia-me uma mensagem.
      </p>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">E-mail</label>
        <input type="text" placeholder="Seu melhor e-mail" className="w-full px-4 py-2 rounded-md bg-neutral-100" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">Mensagem</label>
        <textarea placeholder="Escreva aqui sua mensagem..." className="w-full px-4 py-2 rounded-md min-h-[100px] bg-neutral-100" />
      </div>
      <button className="mt-8 w-full bg-neutral-950 p-4 rounded-full text-sm uppercase font-semibold text-white">
        Enviar mensagem
      </button>
      <Link href="https://wa.me/+5548998463847"  target="_blank" className="mt-8 w-full bg-[#78866B] p-4 rounded-full text-sm text-center uppercase font-semibold text-white">
        Whatsapp
      </Link>
    </form >
  )
}