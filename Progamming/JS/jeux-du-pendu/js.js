const motValue = document.querySelector('.motentre')
const pageJeu = document.querySelector('.btnpage2')
const showMdp = document.querySelector('span')

motValue.addEventListener('input', () => {
  motValue.value = motValue.value.toUpperCase();
});

showMdp.addEventListener('click', () => {
   if (motValue.type === 'password')  {
       motValue.type = "text"
   }else {
    motValue.type = "password"
   }
})


pageJeu.addEventListener('click', () => {
    const motPlayer1 = motValue.value
    if (motPlayer1.length = 0 || motPlayer1.length < 8) {
    alert('Vous avez pas rentrer de mot !')
    } else {
    localStorage.setItem('mot', motPlayer1);
    window.location.href = "./page2/index2.html"
    }
 console.log(`Mot saisi : ${motPlayer1}`);
    console.log(`Nombre de lettres : ${motPlayer1.length}`);
})



