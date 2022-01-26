const CarouselScroll = {
    prev : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);
        let firstChild = carousel.firstChild;
        let lastChild = carousel.lastChild;

        carousel.removeChild(lastChild);
        carousel.insertBefore(lastChild,firstChild);
        
        
        lastChild.animate([{transform:"scale(.75)"},{transform:"scale(1)"}],{duration:1000})
        firstChild.animate([{transform:"scale(.95)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[1].animate([{transform:"scale(.925)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[2].animate([{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[3].animate([{transform:"scale(.925)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[4].animate([{transform:"scale(.75)"},{transform:"scale(1)"}],{duration:1000})
        
        

        
        
    },
    next : (e)=>{

        let carousel = document.querySelector(`ul.${e.target.classList[1]}`);

        let firstChild = carousel.firstChild;




        carousel.removeChild(firstChild);
        carousel.appendChild(firstChild);
        
        carousel.children[0].animate([{transform:"scale(.75)"},{transform:"scale(1)"}],{duration:1000})  
        carousel.children[1].animate([{transform:"scale(.925)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[2].animate([{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[3].animate([{transform:"scale(.925)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[4].animate([{transform:"scale(.75)"},{transform:"scale(1)"}],{duration:1000})
        carousel.children[5].animate([{transform:"scale(.65)"},{transform:"scale(1)"}],{duration:1000})
       
           
        
    }
    

}

export default CarouselScroll;