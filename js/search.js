/*  
Project Name: Hidden Search Bar
Description: This is the sleek and clean Hidden Search Bar widget. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const searchbox = document.querySelector('.search-box')
const input = document.querySelector('.input')
const searchbtn = document.querySelector('.search-btn')

searchbtn.addEventListener('click', () => {
    searchbox.classList.toggle('active')
    if(input && input.value) {
        uservalue = document.querySelector('.input').value;
        document.querySelector('.return-value').innerHTML = `<span>Your Result: </span>${uservalue}`
    } else {
        input.focus()
    }
})
        
function onLoadCheck() {
       document.querySelector('.input').value = ''
  }
onLoadCheck();