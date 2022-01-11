import { queryByDisplayValue } from "@testing-library/react";
import React from "react";
import  "./index.css"


const CarouselButton = ({style,id}) => {




    return <>
     
        <div className="carouselButton" style={style} id={id}>
            <span>
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" >
                    <path fill="currentColor" d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z">
                    </path>
                </svg>
            </span>
            <span >
            </span>
        </div>

    </>

}

export default CarouselButton;