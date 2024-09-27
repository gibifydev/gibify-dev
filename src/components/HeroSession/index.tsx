'use client'
import { Children } from "react";
import { motion } from "framer-motion"

export default function HeroSession() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-center h-screen text-center">
        <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/8S6A6284.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10, 
          ease: "easeInOut",
          repeat: Infinity, 
          repeatType: "mirror",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-bold text-white mb-4"
      >
        Seja bem Vindo ao thegibi.dev
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="px-4 relative text-lg md:text-2xl text-white"
      >
        Especialista em Desenvolvimento de Software
      </motion.p>

      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-8 px-6 py-3 bg-white text-sm rounded-full font-bold md:text-lg shadow-lg hover:shadow-xl transition"
      >
        Saiba mais
      </motion.a>

      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
           O que faço
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Children.toArray(features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            )))}
          </div>
        </div>
      </section> 
</>
  )
}





const features = [
  {
    title: "Frontend",
    description:
      "Criação de interfaces de usuário com tecnologias modernas e responsivas.",
  },
  {
    title: "Mobile",
    description:
      "Criação de aplicativos móveis para Android e iOS.",
  },
  {
    title: "Desktop",
    description:
    "Criação de sitemas executável para Windows e MacOS",
  },
  {
    title: "IA",
    description:
      "Criação de modelos de aprendizado de máquina para automatizar tarefas.",
  },
  {
    title: "UI/UX",
    description:
      "Criação de layouts, interfaces e jornada do usuário.",
  },
  {
    title: "Backend",
    description:
      "Criação de serviços para integrar sistemas e automatizar processos.",
  },
];