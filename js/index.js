// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
const navBarBrand = document.querySelector('.navbar-brand');
// const navBarBrand = document.querySelectorAll('.navbar-brand');
navBarBrand.innerText += '!'; 
// navBarBrand.style.color = 'red';
// navBarBrand.classList.add('selected');
// navBarBrand.classList.remove('selected');
// navBarBrand.classList.toggle('selected');

setInterval(updateTime, 1000);

function updateTime() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}