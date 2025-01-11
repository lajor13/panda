import { useRef, useState } from "react";
import Heart from "../assets/heart.png"; // Make sure the heart image is correctly imported
import Letter from "./Letter";

const Envelope = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const envRef = useRef<HTMLDivElement | null>(null);
  const handleClick = async () => {
    setIsClicked(true); // Trigger the heart animation when the envelope is clicked
    setTimeout(() => {
      envRef.current!.style.transition = "opacity 0.5s ease-in-out";
      envRef.current!.style.opacity = "0";
      setTimeout(() => {
        envRef.current!.style.display = "none";
        setShowLetter(true);

      }, 500);
    }, 2000); // Hide the envelope after 3 seconds
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <div
        ref={envRef}
        className={`relative w-64 h-40 bg-purple-300 cursor-pointer flex items-end justify-end ${!isClicked ? "animate-swivel" : "" // Apply swivel animation to envelope before click
          }`}
        onClick={handleClick}
      >
        <p className="text-white m-4">To Maya</p>
        {/* Envelope flap (Updated to match new size) */}
        <div className="absolute w-0 h-0 border-l-[128px] border-r-[128px] border-b-[100px] border-transparent border-b-purple-200 -top-[100px]"></div>

        {/* Heart Animation (Initially Hidden) */}
        <div
          className={`absolute top-4 left-4 w-48 h-28 flex items-center justify-center ${isClicked ? "animate-heartAnimation" : "opacity-0 scale-50" // Trigger heart animation after click
            }`}
        >
          <img
            src={Heart}
            alt="Heart"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {showLetter && (
        <Letter />
      )}
    </div>
  );
};

export default Envelope;
