"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FlowerMessage() {
  const [showCarousel, setShowCarousel] = useState(false);

  // Через 2.5 сек після появи message — показати карусель
  useEffect(() => {
    const timer = setTimeout(() => setShowCarousel(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const photos = [
    "/photo/1.jpeg",
    "/photo/2.jpeg",
    "/photo/3.jpeg",
    "/photo/4.jpeg",
    "/photo/5.jpeg",
    "/photo/6.jpeg",
    "/photo/7.jpeg",
    "/photo/8.jpeg",
    "/photo/9.jpeg",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Текст зверху */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="mb-6 translate-y-12 translate-x-12"
      >
        <Image src="/text.svg" alt="Text" width={260} height={80} />
      </motion.div>

      {/* Квіти по боках */}
      <div className="relative flex items-center justify-center w-full mb-8">
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

      {/* Message */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative mb-10"
      >
        <Image src="/message.svg" alt="Message" width={440} height={120} />
      </motion.div>

      {/* Нескінченна плавна карусель фото */}
      {showCarousel && (
        <div className="relative w-full max-w-5xl overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }} // плавний рух рівно на половину дубльованого контенту
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 9 * 2, // 9 фото * 4сек = ~36сек для повного кола
              ease: "linear",
            }}
          >
            {[...photos, ...photos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`photo-${i}`}
                width={250}
                height={250}
                className="rounded-2xl shadow-md object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
