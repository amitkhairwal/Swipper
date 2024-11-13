import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './next/Logo.png';

import { FaTelegramPlane, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Home() {
  const [textStroke, setTextStroke] = useState("4px black");

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTextStroke("1px black");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b to-[#2c95bf] from-[#240046] flex flex-col items-center justify-center text-black p-4 md:p-8">
      {/* Logo */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4">
        <Image src={Logo} alt="Logo" width={40} height={40} className="md:w-50 md:h-50" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mt-10 md:items-start md:text-left space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center lg:gap-72">
          {/* Title Section */}
          <div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wider text-transparent"
              style={{
                WebkitTextStroke: textStroke,
                color: "#ec4899",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              $SWIPR COIN <br /> ON SOLANA
            </h1>
            <p className="mt-2 md:mt-4 text-xl md:text-2xl font-extrabold" style={{ textShadow: "2px 2px 4px rgba(236, 72, 153, 1)" }}>
              SWIPR KEEP SWIPING!
            </p>
          </div>

          {/* Fox Image */}
          <div className="mt-4 flex justify-center md:justify-end md:mt-0 md:ml-4">
            <Image src={Logo} alt="Fox Character" width={200} height={150} className="md:w-200 md:h-200 shadow-sm" />
          </div>
        </div>

        {/* Additional Content */}
        <p className="mt-4 text-lg md:text-xl font-semibold px-4 md:px-0">
          Connecting users to the best crypto creators and products through intuitive swiping and smart algorithms on Solana.
        </p>
        <p className="mt-4 text-md md:text-lg font-medium px-4 md:px-0">
          <strong>OnlySwiper:</strong> Revolutionizing Adult Content Discovery with AI & Crypto.
          OnlySwiper uses an interactive, AI-driven interface to solve the biggest challenges in the paid adult content industry.
        </p>
        <p className="text-md md:text-lg font-medium px-4 md:px-0">
          <strong>Problem #1:</strong> OnlyFans lacks a “For You” page or newsfeed, making it hard for creators to get discovered. 
          OnlySwiper’s swiping model changes that, enabling creators to boost their profiles.
        </p>
        <p className="text-md md:text-lg font-medium px-4 md:px-0">
          <strong>Problem #2:</strong> OnlyFans takes a 20% cut from creators’ earnings. OnlySwiper only takes 2%, 
          allowing creators to keep more of what they earn.
        </p>
        <p className="text-md md:text-lg font-medium px-4 md:px-0">
          <strong>Problem #3:</strong> OnlySwiper’s AI Assistant Portal allows creators to build custom AI assistants, saving time 
          and improving fan interactions.
        </p>
      </div>

      {/* Buy Button, Chart Button, and Contract Address */}
      <div className="mt-6 flex flex-col items-center md:flex-row md:space-x-4 text-center">
        <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-b to-[#6495ED] from-[#240046] text-lg md:text-xl font-semibold rounded-full flex items-center space-x-2 border-2 border-black shadow-lg">
          <span>🤑</span>
          <span>BUY $SWIPR</span>
          <span>🤑</span>
        </button>

        <a
          href="https://dexscreener.com/solana/g1kms61uzfjxw1vyvgdqetpfrijvbg74sx58sncgvrze"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-b to-[#FFA500] from-[#240046] text-lg md:text-xl font-semibold rounded-full flex items-center space-x-2 border-2 border-black shadow-lg mt-4 md:mt-0"
        >
          <span>📈</span>
          <span>Chart</span>
          <span>📈</span>
        </a>

        <p className="mt-4 md:mt-0 text-lg md:text-xl font-bold">
          Contract Address: 1029294348430230
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 flex space-x-2 md:space-x-4">
        <a
          href="https://www.instagram.com/onlyswipr/profilecard/?igsh=MWdzOHkzM2ZncXQ4bw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaSquareInstagram />
        </a>
        <a
          href="https://t.me/OnlySwipr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://x.com/onlyswipr?s=11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
}
