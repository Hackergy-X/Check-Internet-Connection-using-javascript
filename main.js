let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");


window.addEventListener('load', function(){
    detectInternet();
});


window.addEventListener('online', function(event){
    detectInternet();
});
window.addEventListener('offline', function(event){
    detectInternet();
});

reload.onclick = function(){
    window.location.reload();
}


function detectInternet(){
    if(navigator.onLine){
            title.innerHTML = 'Online Now';
            title.style.color = 'green';
            ul.classList.add('hide');
            reload.classList.add('hide');
    }else{
            title.innerHTML = 'Offline Now';
            title.style.color = '#666';
            ul.classList.remove('hide');
            reload.classList.remove('hide');
    }
  }