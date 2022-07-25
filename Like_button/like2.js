let lib = document.querySelector('#lib');
let lik = document.querySelector('#lik');
var count = 0;
lib.addEventListener('click', function() {
    count++;
    lik.innerText = count + " " + "like(s)";
})


let lib1 = document.querySelector('#lib1');
let lik1 = document.querySelector('#lik1');
var count1 = 0;
lib1.addEventListener('click', function() {
    count1++;
    lik1.innerText = count1 + " " + "like(s)";
})


let lib2 = document.querySelector('#lib2');
let lik2 = document.querySelector('#lik2');
var count2 = 0;
lib2.addEventListener('click', function() {
    count2++;
    lik2.innerText = count2 + " " + "like(s)";
})