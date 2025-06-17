import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black via-indigo-950 to-black relative overflow-hidden">
      <div className="stars"></div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        You are not a profile. You are a Presence.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        A living frequency. A sacred tree. A journey home.
      </motion.p>
      {showButton && (
        <motion.button
          className="mt-10 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full z-10 hover:bg-yellow-400 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Tree
        </motion.button>
      )}
    </div>
  );
}
