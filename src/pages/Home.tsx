
import { useState } from "react"
import Bhindi from "../assets/bhindi.png"
import Camera from "../assets/camera.png"
import Eyes from "../assets/eyes.png"
import Hearts from "../assets/hearts.png"
import FeatureImage from "../assets/images/img9.jpg"
import Menu from "../assets/menu.png"
import Plane from "../assets/plane.png"
import ShinyHeart from "../assets/shiny_heart.png"
import Sunshine from "../assets/sunshine.png"
import MyButton from "../components/MyButton"
import PhotoCarousel from "../components/PhotoCarousel"

const Home = () => {

  const [showCarousel, setShowCarousel] = useState(false)
  const handleFavoriteButtonClicked = () => {
    setShowCarousel(true);
    setTimeout(() => {
      window.scrollTo({
        top: 500,
        behavior: 'smooth'
      })
    }, 100)
  };
  return (
    <div className="flex flex-col justify-center items-center pt-4 pb-20 ">
      <div className="bg-white px-5 py-2 rounded-[4px] shadow-sm text-[20px] mb-[80px]">
        <p>To: Mero Angel </p>
        <p>From: Kumbey</p>
      </div>
      <div className="w-full  flex justify-around mb-[40px] relative">
        <div className="absolute size-full flex justify-around  gap-[150px]" >

          <div className="flex flex-col justify-around">
            <img className="size-[130px]" src={Plane} />
            <div className="w-max">
              <img className="size-[130px]" src={Sunshine} />
              <p className="text-[20px] text-center mt-2 bg-purple-200 rounded-[4px] ">My sunshinee ~~</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col items-center" >
              <img className="size-[100px] object-cover" src={Bhindi} />
              <p className="text-[20px] text-center mt-2 bg-purple-200 rounded-[4px] px-2 ">Deema ko <br />favorite veggie</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="absolute top-[-4rem] left-[-3rem]" src={ShinyHeart} />
          <img className="absolute bottom-0 right-[-5rem]" src={Hearts} />
          <img className="h-[450px] w-[359px] object-cover rounded-[8px]" src={FeatureImage} />
        </div>

      </div>
      <div className="flex w-full justify-center">
        <iframe className="rounded-12px  w-[300px] "
          src="https://open.spotify.com/embed/playlist/5fISntYiIDQfqRvkqFCM5p?utm_source=generator&theme=0" width="100%" height={"80"} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <MyButton leadingIcon={Camera}
        trailingIcon={Eyes}
        text="Favorite Photos"
        onClick={handleFavoriteButtonClicked} />
      {showCarousel &&
        <>
          <PhotoCarousel />
          <MyButton leadingIcon={Camera}
            trailingIcon={Menu}
            text="View All"
            onClick={() => {
              window.open("https://drive.google.com/drive/folders/1d4KyfKOYPfuqhfAOSkFFqZ43bm1bIH-4?usp=sharing");

            }} />
        </>

      }



    </div >
  )
}

export default Home