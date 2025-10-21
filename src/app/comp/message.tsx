"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FlowerMessage() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Текст зверху */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="mb-6 translate-y-12 translate-x-12"
      >
        <Image
          src="/text.svg"
          alt="Text"
          width={260}
          height={80}
        />
      </motion.div>

      {/* Квіти по боках */}
      <div className="relative flex items-center justify-center w-full mb-8">
        {/* Ліва квітка */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-0 z-50 translate-y-[-20px]"
        >
          <Image
            src="/flowers-left.svg"
            alt="Flowers Left"
            width={140}
            height={140}
          />
        </motion.div>

        {/* Права квітка */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-0 z-50 translate-y-35"
        >
          <Image
            src="/flowers-right.svg"
            alt="Flowers Right"
            width={140}
            height={140}
          />
        </motion.div>
      </div>

      {/* Message, що виїжджає справа */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative"
      >
        <Image
          src="/message.svg"
          alt="Message"
          width={440}
          height={120}
        />
      </motion.div>
    </div>
  );
}
