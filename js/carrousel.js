(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__form = document.querySelector(".carrousel__form")

    bouton__ouvrir.addEventListener('mousedown', function(){
        
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_carrousel(0)
    })

    elmBouton__x.addEventListener('mousedown', function(){
        
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

    elmGalerie__img.forEach((img) => {
        img.addEventListener("click", function () {
            elmCarrousel.classList.add("carrousel--ouvrir");
            ajouter_carrousel(img.dataset.idImg);
            activer__image(img.dataset.idImg);
            
            // Check the radio button corresponding to the clicked image
            const radioBtn = elmCarrousel__form.querySelector(`input[data-index-radio="${img.dataset.idImg}"]`);
            if (radioBtn) {
                radioBtn.checked = true;
            }
        });
    });
    
    function ajouter_carrousel(index)
    {
        if(elmCarrousel__form.children.length < elmGalerie__img.length){
            idImg = 0;
            for (const elmImg of elmGalerie__img){
                elmImg.dataset.idImg = idImg;
                idImg++;
                ajouter_img(elmImg) // ajoute l'image dans le carrousel
                ajouter_radio()
            }
        }
    }

    
    let indexImg = 0;
    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add("carrousel__img")
        elmCarrousel__img.dataset.indexImg = indexImg
        console.log(indexImg);
        indexImg++;
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }

    
    let indexRadio = 0;
    
    function ajouter_radio(indexImg) {
        if (elmCarrousel__form.children.length < elmGalerie__img.length) {
            let elmCarrousel__radio = document.createElement("input");
            elmCarrousel__radio.setAttribute("type", "radio");
            elmCarrousel__radio.setAttribute("name", "radCarrousel");
            elmCarrousel__radio.dataset.indexRadio = indexRadio;
            indexRadio++;
            elmCarrousel__form.appendChild(elmCarrousel__radio);
        
            if (indexImg === parseInt(elmCarrousel__radio.dataset.indexRadio)) {
                elmCarrousel__radio.checked = true;
            }
        
            elmCarrousel__radio.addEventListener("mousedown", function () {
                activer__image(this.dataset.indexRadio);
            });
        }
      }

    let index__precedent = -1;

    function activer__image(indexI){
        let index = parseInt(indexI);
        
        if (index__precedent != -1) {
            elmCarrousel__figure.children[index__precedent].classList.remove("carrousel__img--activer");
        }

        elmCarrousel__figure.children[index].classList.add("carrousel__img--activer");

        index__precedent = index;
    }
    
    })()