"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../footer";

export default function AboutComponent() {
  return (
    <section className="h-screen bg-gray-100 py-10">
    <div className="container mx-auto px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Sobre Mim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-600 mb-8"
        >
          Sou um desenvolvedor apaixonado por tecnologia, focado em criar experiências incríveis com código.
        </motion.p>

      {/* Foto e Biografia */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 mb-10 md:mb-0 md:mr-5"
        >
          <Image
            src="/8S6A6322.jpg"
            alt="Evandro Gibicoski"
            width={900}
            height={900}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Biografia */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 text-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-4">
            Tenho mais de 5 anos de experiência de desenvolvimento na indústria de software com especialização em tecnologias como Javascript, CSS, HTML, Typescript, Node.js, Next.js e Electron.js.<br /> Apaixonado por tecnologia, adoro criar aplicações que tenham impacto e ofereçam valor real para os usuários.
          </p>
          <p className="mb-4">
            Sou formado em Gestão da Tecnologia da Informação pela Unicesumar - PR e Pós-Graduado em Engenharia de Software pela Universidade Metropolitana - SP. <br /><br /> Atualmente trabalho como Desenvolvedor de Software Especialista no <a href="https://www.grupoboticario.com.br/" target="_blank" className="text-gray-950 font-semibold">Grupo Boticário</a>.
          </p>
          <p className="mb-4">
            Nos meus momentos de lazer, também me aventuro fazendo trilhas, bike e musculação, buscando sempre novas inspirações e formas de se conectar as pessoas através de esportes, além de gostar de música e leituras.
          </p>
        </motion.div>
      </div>

      {/* Habilidades */}
      <div className="mt-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Habilidade 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
            <p className="text-gray-600 mt-4">JavaScript, Typescript, CSS, HTML, Next.js, React.js, Node.js</p>
          </motion.div>

          {/* Habilidade 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Testes</h3>
            <p className="text-gray-600 mt-4">Jest, Vitest, Cypress, e2e</p>
          </motion.div>

          {/* Habilidade 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">UI/UX</h3>
            <p className="text-gray-600 mt-4">TailwindCSS, RadixUI, ShadcnUI, Framer Motion</p>
          </motion.div>

          {/* Habilidade 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Design</h3>
            <p className="text-gray-600 mt-4">Figma</p>
          </motion.div>

             {/* Habilidade 5 */}
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Desktop</h3>
            <p className="text-gray-600 mt-4">Electron.js, Node.js, WindowsOS, MacOS</p>
          </motion.div>

             <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">IA</h3>
            <p className="text-gray-600 mt-4">OpenAI, Gemini, LLamma</p>
          </motion.div>
        </div>
      </div>

      <div className="my-10 text-center">
        <div className="flex justify-center space-x-6">
        <motion.a
      href="https://wa.me/message/QZCLNRIOESI4N1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mt-8 px-6 py-3 bg-white text- rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition"
    >
      <FaWhatsapp className="inline-block mr-2" size={24}/>
      Enviar mensagem
    </motion.a>
        </div>
      </div>
    </div>
    <Footer />
  </section>
  )
} 