import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [inactive, setInactive] = useState(true);
  const [hoverCount, setHoverCount] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const [isYesVisible, setIsYesVisible] = useState(true);
  const [isNoVisible, setIsNoVisible] = useState(true);
  const [infoMsg, setInfoMsg] = useState("You can no longer see the website");

  const navigate = useNavigate();

  const moveNoButton = () => {
    setHoverCount((prev) => prev + 1);
    const randomX = Math.random() * 80; // Random position within 80% of the container width
    const randomY = Math.random() * 80; // Random position within 80% of the container height
    setInactive((prev) => !prev);

    setNoButtonStyle({
      position: "absolute",
      left: `${randomX}%`,
      top: `${randomY}%`,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNoButtonStyle({});
      setInactive(true);
    }, 5000);

    switch (hoverCount) {
      case 5:
        setMsg("Bruhhh");
        break;
      case 8:
        setMsg("Kasto ho raaaa 😭😭");
        break;
      case 13:
        setMsg("Na herne ho sachi??? 🙃🙃");
        break;
      case 20:
        setMsg("Herana na manekooo 😭😭😭😭");
        break;
      case 25:
        setMsg("Na hera jau 😤😤");
        setIsYesVisible(false);
        break;
      case 27:
        setMsg("I is angry 😠😠");
        break;
      case 33:
        setMsg("Hera xitoooo 😭😭");
        setIsYesVisible(true);
        break;
      case 34:
        setMsg("Abui 🤨");
        break;
      case 36:
        setMsg("Thikai xa");
        break;
      case 43:
        setMsg("😡😡😡😡😡😡😡");
        setIsYesVisible(false);
        setIsNoVisible(false);
        setInfoMsg(
          "Aba ta sachai mildaina herna. Refresh gara herna man xa vane"
        );
        break;

      default:
        break;
    }
    // Clean up timer when component unmounts or any interaction happens
    return () => clearTimeout(timer);
  }, [inactive]);

  return (
    <div className="animate-letterAnim">
      {/* <h1>Bruh kasto namaneko hau yes thicha khurukka</h1> */}
      <h1 className="text-center text-[28px]">{msg}</h1>
      <div className="px-5 py-4 bg-white border-4 border-black rounded-[12px] text-[24px] text-black/50 relative">
        <p className=" font-[500] mb-4">Dear, Maya </p>
        <p className="mb-6 leading-[1.75]">
          Happy 9 months anniversary!!![👶]
          <br />
          This month was full of adventures(without me😢).
          <br />
          I missed you so much mayaaa 😭😭.
          <br />
          But it was fun hearing your experiences.
          <br />
          Made me want to be there with you.
          <br />
          Ma xitai auxu tmi kaa mayaaa 🥺
        </p>
        <p className="mb-4">
          Also made a website for you 😘😘
          <br />
          Wanna see it?
        </p>
        {isYesVisible && (
          <button
            className="bg-purple-300 px-5 py-2 rounded-[4px] text-[16px] font-bold hover:bg-purple-400 mr-2"
            onClick={() => navigate("/home")}
          >
            Yes
          </button>
        )}
        {!isYesVisible && <p className="text-red-500">{infoMsg}</p>}
        {isNoVisible && (
          <button
            className="bg-red-300 px-5 py-2 rounded-[4px] text-[16px] font-bold hover:bg-red-400"
            onMouseEnter={moveNoButton}
            style={noButtonStyle}
            onClick={() => {
              alert("Abui kasariii");
            }}
          >
            No
          </button>
        )}
      </div>
    </div>
  );
};

export default Letter;
