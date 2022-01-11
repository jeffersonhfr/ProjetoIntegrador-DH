
import React from "react";
import  "./index.css";
import CarouselScroll from "./scripts/carouselScrollButton";


const CarouselButton = ({style,classe}) => {




    return <>
     
        <div className={`carouselButton ${classe}`} style={style} onClick={CarouselScroll.next}>
            <span>
                <svg className={`carouselButton ${classe}`} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" >
                    <path className={`carouselButton ${classe}`} fill="currentColor" d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z">
                    </path>
                </svg>
            </span>
            <span >
            </span>
        </div>

    </>
};

export default CarouselButton;
