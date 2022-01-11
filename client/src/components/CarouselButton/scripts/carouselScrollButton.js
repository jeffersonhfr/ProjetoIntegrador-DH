const CarouselScroll = {
    prev : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);
        let firstChild = carousel.firstChild;
        let lastChild = carousel.lastChild;



        carousel.removeChild(lastChild);
        carousel.insertBefore(lastChild,firstChild);
        
    },
    next : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);

        let firstChild = carousel.firstChild;
                
        carousel.removeChild(firstChild);
        carousel.appendChild(firstChild);
        
    }
    

}

export default CarouselScroll;