const activeMenu = document.querySelector('.logo-menu')
const menuDefault = document.querySelector('.ulmenu')



console.log(activeMenu);
activeMenu.addEventListener('click', () => {
menuDefault.classList.toggle('.active')

})
