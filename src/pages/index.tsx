import Image from 'next/image';
import Logo from './next/Logo.png';
import Fox from './next/ff.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b to-[#2c95bf] from-[#240046] flex flex-col items-center justify-center text-black p-4 md:p-8">
      {/* Logo */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4">
        <Image src={Logo} alt="Logo" width={40} height={40} className="md:w-50 md:h-50" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center lg:gap-72">
          {/* Title Section with Fox Image on the Right */}
          <div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wider text-transparent"
              style={{
                WebkitTextStroke: "4px black",
                color: "#9a9a9a",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              $SWIPR COIN <br /> ON SOLANA
            </h1>
            <p className="mt-2 md:mt-4 text-xl md:text-2xl font-extrabold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              SWIPR KEEP SWIPING!
            </p>
          </div>

          {/* Fox Image aligned to the right of the title text */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <Image src={Fox} alt="Fox Character" width={200} height={150} className="md:w-200 md:h-200 shadow-sm" />
          </div>
        </div>

        {/* Full Width Content */}
        <p className="mt-4 text-lg md:text-xl font-semibold px-4 md:px-0">
          Connecting users to the best crypto creators and products through intuitive swiping and smart algorithms on Solana.
        </p>
      </div>

      {/* Buy Button and Contract Address */}
      <div className="mt-6 flex flex-col items-center md:flex-row md:space-x-4 text-center">
        <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-b to-[#6495ED] from-[#240046] text-lg md:text-xl font-semibold rounded-full flex items-center space-x-2 border-2 border-black shadow-lg">
          <span>🤑</span>
          <span>BUY $SWIPR</span>
          <span>🤑</span>
        </button>
        <p className="mt-4 md:mt-0 text-lg md:text-xl font-bold">
          Contract Address: 1029294348430230
        </p>
      </div>

      {/* Social Media Icons */}
      {/* Social Media Icons as Buttons */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 flex space-x-2 md:space-x-4">
        <button
          className="text-gray-300 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <FaSquareInstagram />
        </button>
        <button
          className="text-gray-300 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </button>
        <button
          className="text-gray-300 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <FaTwitterSquare />
        </button>
        <button
          className="text-gray-300 md:text-3xl text-2xl hover:text-white transition-colors"
          aria-label="YouTube"
        >
          <FaYoutube />
        </button>
      </div>
    </div>
  );
}
