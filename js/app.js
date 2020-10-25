//Immediately invoked function expression
(() => {
//variable dom elements stored in variables for user input
const form = document.querySelector('#message-form');
let inputBox = document.querySelector('#message');
const feedBack = document.querySelector('.feedback');
const message = document.querySelector('.message-content');
//An eventListener that displays the message when ran
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inputBox.value === ''){
        feedBack.classList.add('show');
        setTimeout(() => {
            feedBack.classList.remove('show')
        }, 2000)
        
    } else {
        message.textContent = inputBox.value;
        inputBox.value = '';
    }
});
})();




