let lib = document.querySelector('#lib');
let lik = document.querySelector('#lik');
var count = 0;
lib.addEventListener('click', function() {
    count++;
    lik.innerText = count + " " + "like(s)";
})