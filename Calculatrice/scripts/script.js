let a=0;
let b=0;
let o="";

function add(a,b){
    return a+b;
}

function soustraction(a,b){
    return a-b;
}

function multiplier(a,b){
    return a*b;
}

function diviser(a,b){
    return a/b;
}

function operate(n1,n2,o){
    if (o=="+"){
        return add(n1,n2);
    }
    else if (o=="-"){
        return soustraction(n1,n2);
    }
    if (o=="*"){
        return multiplier(n1,n2);
    }
    if (o=="/"){
        return diviser(n1,n2);
    }

}


const btn1 = document.querySelector("#un");
const btn2 = document.querySelector("#de");
const btn3 = document.querySelector("#tr");
const btn4 = document.querySelector("#qu");
const btn5 = document.querySelector("#ci");
const btn6 = document.querySelector("#si");
const btn7 = document.querySelector("#se");
const btn8 = document.querySelector("#hu");
const btn9 = document.querySelector("#ne");
const btn0 = document.querySelector("#ze");
const btnp = document.querySelector("#plus");
const btnm = document.querySelector("#moins");
const btnf = document.querySelector("#fois");
const btnd = document.querySelector("#diviser");
const btne = document.querySelector("#egal");
const btnv = document.querySelector("#virgule");
const btnc = document.querySelector("#clear");

const entree = document.querySelector("#entree");


function btn1f(event){
    entree.value = entree.value + "1"; 
}
function btn2f(event){
    entree.value = entree.value + "2"; 
}
function btn3f(event){
    entree.value = entree.value + "3"; 
}
function btn4f(event){
    entree.value = entree.value + "4"; 
}
function btn5f(event){
    entree.value = entree.value + "5"; 
}
function btn6f(event){
    entree.value = entree.value + "6"; 
}
function btn7f(event){
    entree.value = entree.value + "7"; 
}
function btn8f(event){
    entree.value = entree.value + "8"; 
}
function btn9f(event){
    entree.value = entree.value + "9"; 
}
function btn0f(event){
    entree.value = entree.value + "0"; 
}
function btnpf(event){
    entree.value = entree.value + "+"; 
}
function btnmf(event){
    entree.value = entree.value + "-"; 
}
function btndf(event){
    entree.value = entree.value + "/"; 
}
function btnff(event){
    entree.value = entree.value + "X"; 
}
function btnfv(event){
    entree.value = entree.value + ","; 
}


btn1.addEventListener("click",btn1f);
btn2.addEventListener("click",btn2f);
btn3.addEventListener("click",btn3f);
btn4.addEventListener("click",btn4f);
btn5.addEventListener("click",btn5f);
btn6.addEventListener("click",btn6f);
btn7.addEventListener("click",btn7f);
btn8.addEventListener("click",btn8f);
btn9.addEventListener("click",btn9f);
btn0.addEventListener("click",btn0f);
btnp.addEventListener("click",btnpf);
btnm.addEventListener("click",btnmf);
btnf.addEventListener("click",btnff);
btnd.addEventListener("click",btndf);
btnv.addEventListener("click",btnfv);

btne.addEventListener("click",operate);