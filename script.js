let input = document.getElementById('switch')
let body = document.getElementById('body')

input.addEventListener('input' , function(){
    body.classList.toggle('dark')
} , false)
