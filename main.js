alert = 'this is twitter'

let next = document.getElementById('next');
let nextmore = document.getElementById('next-more');

// Write your code here:
function showInfo(){
    nextmore.style.display = 'block';
}

next.addEventListener('click', showInfo);