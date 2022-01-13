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

var sliderImg = document.querySelector('.highlight_place-slider-img');
var imgSelected = document.querySelectorAll('.highlight_place-slider-img-selected-item');
let i = 0;
setInterval(function(){
    if(i > 2) i = 0;
    var imgs = [
        "http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/package-3.jpg",
        "http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4.jpg",
        "http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-4-1.jpg"
    ];
    sliderImg.src = imgs[i];
    if(i > 0) imgSelected[i-1].classList.remove('selected');
    else imgSelected[2].classList.remove("selected");
    imgSelected[i].classList.add('selected');
    i++;
},4000);




