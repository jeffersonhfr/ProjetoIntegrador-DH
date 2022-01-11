const CarouselScroll = {
    next : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);
        let firstChild = carousel.firstChild;

        carousel.removeChild(firstChild);
        carousel.appendChild(firstChild);


        
    },
    prev : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);

        let firstChild = carousel.firstChild;
        
        carousel.removeChild(firstChild);
        carousel.appendChild(firstChild);

       


        
    }

}

export default CarouselScroll;