const aparencia = document.getElementById("modoAparencia");
const principal = document.getElementById("principal");
const calc = document.getElementById("calc");

function modo(){
    if (principal.style.backgroundColor == ""){
        principal.style.backgroundColor = "black";
        aparencia.innerText = 'Modo claro';
        calc.style.backgroundColor = 'rgb(51, 51, 58)'
    } else {
        principal.style.backgroundColor = "";
        aparencia.innerText = 'Modo escuro';
        calc.style.backgroundColor = 'rgb(111, 111, 248)'
    };
};



