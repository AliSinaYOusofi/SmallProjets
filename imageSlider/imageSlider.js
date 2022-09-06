let arrayImages = new Array('../boy.png', './1527713.jpg', './binaryMap.jpg', './img-campaign-hero.jpg', './network-g35e5de3aa_1920.jpg'
        , './profile.jpg');

let imageTag = document.getElementById('boy');
let next = document.querySelector('#next');
let backward = document.getElementById('back');


let i = 0;
next.addEventListener('click', () => {
   
    if ( i < 0 || i == arrayImages.length - 1) {
        alert('IMMMMMMMMMMMMMMMMMMMMMMMMMMMmmm',i);
        i = 0;
        imageTag.setAttribute('src', arrayImages[i]);
    }
    else {
        imageTag.setAttribute('src', arrayImages[++i]);
        alert(i);
    }
});

backward.addEventListener('click', () => {
    

    if ( i <= 0 || i == arrayImages.length - 1)
        i = 0;
    else {
        imageTag.setAttribute('src', arrayImages[--i]);            
        alert(x, 'backkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    }
})