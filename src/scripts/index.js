import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
 
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
const app = new App({
  button : document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});