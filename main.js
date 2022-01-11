var somePackages = document.querySelectorAll('.destination-prominent-packages');
var destinationView = document.querySelectorAll('.destination-prominent-item-view');
for(let i = 0; i < destinationView.length; i++){
    let element =  destinationView[i];
    let item = somePackages[i];
    element.onmouseover = function(e){
        item.style.display = 'flex';
    }
}
for(let i = 0; i < somePackages.length; i++){
    let element =  destinationView[i];
    let item = somePackages[i];
    item.onmouseleave = function(e){
        item.style.display = 'none';
        element.style.display = 'flex';
    }
}

var sliderImg = document.querySelectorAll('.highlight_place-slider-img');
var imgSelected = document.querySelectorAll('.highlight_place-slider-img-selected-item');
let i = 0;
setInterval(() => {
    if(i > 2) i = 0;
    let a = sliderImg[i];
    let b = imgSelected[i];
    a.classList.add('display');
    b.classList.add('selected');
    setTimeout(() => {
        a.classList.remove('display');
        b.classList.remove('selected');
    },5000);
    i++;
},5000)





