import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { images } from "../constants";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useRef } from 'react';



const PhotoCarousel = () => {

    let sliderRef = useRef<Slider | null>(null);
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        } else {
            console.log('error');
        }
    };
    const previous = () => {

        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
        else {
            console.log('error');

        }
    };

    function SampleNextArrow() {
        return (
            <div
                className='flex items-center'

            >
                <button className='bg-[#b57edc] size-9 rounded-full flex justify-center items-center' onClick={next}>

                    <NavigateNextIcon fontSize='large' sx={{ cursor: 'pointer', color: 'white' }} />
                </button>
            </div>
        );
    }
    function SamplePrevArrow() {
        return (
            <div
                className='flex items-center'
                onClick={previous}
            >
                <button className='bg-[#b57edc] size-9 rounded-full flex justify-center items-center' onClick={next}>
                    <NavigateBeforeIcon fontSize='large' sx={{ cursor: 'pointer', color: 'white' }} />
                </button>

            </div>
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false

    };
    return (
        <div className="w-full flex gap-4">
            <SamplePrevArrow />
            <Slider ref={sliderRef} {...settings} className='w-full' >

                {images.map((image) => (

                    <img key={image} src={image} className="rounded-[4px] h-[400px] object-cover" />
                ))}
            </Slider>
            <SampleNextArrow />
        </div>
    )
}

export default PhotoCarousel