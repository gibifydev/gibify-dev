'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Avatar() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className=""
  >
      <Image
        src="/08509030-D970-40F8-9F16-FB3312938376.jpg"
        alt="Avatar"
        className="w-32 h-32 rounded-full object-cover border-2 border-gray-950 p-1 shadow-lg"
        width={100}
        height={100}
        />
  </motion.div>
  )
}