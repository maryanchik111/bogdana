"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Message from "./comp/message";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    // Показуємо Message через невелику затримку,
    // щоб дочекатися завершення анімації кнопки
    setTimeout(() => setShowMessage(true), 600);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden m-0 p-0">
      <AnimatePresence>
        {!buttonClicked && (
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="/push.svg"
              alt="Push Button"
              width={120}
              height={120}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform"
              onClick={handleClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showMessage && <Message />}
    </div>
  );
}
