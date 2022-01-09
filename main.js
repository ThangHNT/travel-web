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


