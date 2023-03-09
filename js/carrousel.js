(function(){
//Fonction IFEE
    console.log("debut du carrousel");

    let bouton__ouvir = document.querySelector(".bouton__ouvrir");
    let elemCarrousel = document.querySelector(".carrousel");
    let elemBouton__x = document.querySelector(".bouton__x");

    bouton__ouvir.addEventListener("mousedown", function(){

        elemCarrousel.classList.add("carrousel--ouvrir");

    })

    elemBouton__x.addEventListener("mousedown", function(){

        elemCarrousel.classList.remove("carrousel--ouvrir");

    })
})()