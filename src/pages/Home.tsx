
import { useState } from "react"
import Angel from "../assets/angel.png"
import Bhindi from "../assets/bhindi.png"
import Camera from "../assets/camera.png"
import Eyes from "../assets/eyes.png"
import Hearts from "../assets/hearts.png"
import FeatureImage from "../assets/images/img9.jpg"
import SnowAngel from "../assets/images/snow_angel.jpg"
import Menu from "../assets/menu.png"
import Plane from "../assets/plane.png"
import ShinyHeart from "../assets/shiny_heart.png"
import SnowBall from "../assets/snowball.png"
import SnowFlake from "../assets/snowflake.png"
import Snowman from "../assets/snowman.png"
import Snowy from "../assets/snowy.png"
import Sunshine from "../assets/sunshine.png"
import MyButton from "../components/MyButton"
import PhotoCarousel from "../components/PhotoCarousel"
import { images, snowImages } from "../constants"


const Home = () => {

  const [showFavCarousel, setShowFavCarousel] = useState(false)
  const [showSnowCarousel, setShowSnowCarousel] = useState(false)
  const handleFavoriteButtonClicked = () => {
    setShowFavCarousel(true);
    setTimeout(() => {
      window.scrollTo({
        top: 700,
        behavior: 'smooth'
      })
    }, 100)
  };

  const handleSnowButtonClicked = () => {
    setShowSnowCarousel(true);
    setTimeout(() => {
      window.scrollTo({
        top: 1500,
        behavior: 'smooth'
      })
    }, 100)
  }
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
        <iframe className="rounded-12px w-[300px] "
          src="https://open.spotify.com/embed/playlist/5fISntYiIDQfqRvkqFCM5p?utm_source=generator&theme=0" width="100%" height={"80"} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <MyButton leadingIcon={Camera}
        trailingIcon={Eyes}
        text="Favorite Photos"
        onClick={handleFavoriteButtonClicked} />
      {showFavCarousel &&
        <>
          <PhotoCarousel images={images} />
          <MyButton
            leadingIcon={Camera}
            trailingIcon={Menu}
            text="View All"
            onClick={() => {
              window.open("https://drive.google.com/drive/folders/1d4KyfKOYPfuqhfAOSkFFqZ43bm1bIH-4?usp=sharing");

            }} />
          <MyButton
            leadingIcon={Camera}
            trailingIcon={SnowFlake}
            text="My Snow Angel"
            onClick={handleSnowButtonClicked} />
          {showSnowCarousel && (
            <>
              <div className="w-full  flex justify-around mb-[40px] relative">
                <div className="absolute size-full flex justify-around  gap-[150px]" >

                  <div className="flex flex-col justify-start mt-12">
                    <img className="size-[130px]" src={SnowBall} />
                  </div>
                  <div className="flex items-center ">
                    <div className="flex flex-col items-center" >
                      <img className="size-[124px] object-cover" src={Angel} />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img className="absolute size-[124px] top-[-3rem] right-[-2rem]" src={Snowy} />
                  <img className="absolute size-[124px] bottom-0 left-[-3rem]" src={Snowman} />
                  <img className="h-[450px] w-[359px] object-cover rounded-[8px]" src={SnowAngel} />
                </div>
              </div>
              <PhotoCarousel images={snowImages} />
            </>
          )}

        </>

      }
    </div >
  )
}

export default Home