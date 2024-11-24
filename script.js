const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('.submit-button');
const firstDiv = document.querySelector('.first-div');
const secoundDiv = document.querySelector('.secound-div');
const number = document.querySelector('.number');

let value;
buttons.forEach((B) =>{
    B.addEventListener('click', function(e){
        value = B.textContent;
    })
})
console.log(value);
submitButton.addEventListener('click',function(e){
    if(value){
        firstDiv.classList.add('hidden');
        secoundDiv.classList.remove('hidden')
    }
    
    number.textContent = value;
    // console.log(value);
})