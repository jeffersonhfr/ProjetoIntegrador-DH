



const remove = (e)=>{

    const imgList= document.getElementsByClassName("Pacote-ImgContainer__Img-list")[0]


    e.target.parentElement.remove()
    document.getElementById('imagemPrincipal').src =  imgList.firstChild.src
   
}

export default remove