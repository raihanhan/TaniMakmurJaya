import 'regenerator-runtime';
import '../styles/style.css';
 
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('hamburgerButton')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
}