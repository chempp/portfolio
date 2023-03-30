// slide começo
import{useState} from 'react'


let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count ++;
    if (count > 4) {
        count = 1;
        
    }
    document.getElementById('radio' + count).checked = true;
}



//slide fim

//button curriculo

const a = document.querySelector('#desativado')

a.href = 'http://127.0.0.1:5500/Portifólio/começo/sobre.html'

console.log(a)
var janela = null
function abriJanela(){
    janela = window.open('http://127.0.0.1:5500/Portifólio/começo/Pdf/Profile.pdf', 'nova janela')
}



//Fim button curriculo