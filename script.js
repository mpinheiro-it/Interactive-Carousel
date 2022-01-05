let currentImageIndex = 0;
let images = document.querySelectorAll(".slider img");
let max = images.length

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

let interval; //sera usada para armazenar o intervalo do slider


function nextImage() {

    //remove a classe selected da imagem atual
    images[currentImageIndex].classList.remove("selected")

    //incrementa o contador
    currentImageIndex++

    //se chegar no fim das imagens zera o contador
    if(currentImageIndex >= max){
        currentImageIndex = 0;

    }

    //adiciona a classe selected na div que sera exibida
    images[currentImageIndex].classList.add("selected")



}

function previousImage(){

    //remove a classe selected da imagem atual
    images[currentImageIndex].classList.remove("selected")
    

    //se for a primeira imagem joga o contador para a ultima da lista
    if (currentImageIndex == 0){

        currentImageIndex = max - 1;

       } else {

        //senao decrementa o contador
        currentImageIndex--

       }

    //adiciona a classe selected na div que sera exibida
    images[currentImageIndex].classList.add("selected")


}

function startSlider(){

    interval = setInterval(() => {

        nextImage()

    }, 3500)

}

function resetSliderTimer(){

    clearInterval(interval); //limpa o intervalo atual
    startSlider(); //inicia o slider novamente
}


//inicia o slider quando a pag carrega
window.addEventListener("load", startSlider)


//botao next
nextButton.addEventListener("click", () => {

    nextImage();   

    resetSliderTimer();

})

previousButton.addEventListener("click", () => {

    previousImage();

    resetSliderTimer();

})



