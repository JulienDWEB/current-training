const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement('span');
    const size = Math.random() * 200 + 100 + "px";

    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    
    
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";
    const plusMinus = Math.random() > 0.5 ? 1 : -1; 
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus +"%" );  
    
    bubble.addEventListener('click', () => {
        bubble.remove();
        counter++;
        counterDisplay.textContent=counter;
    }) 
    
    setTimeout(() => {
        bubble.remove();
    },8000);

};

setInterval(bubbleMaker, 300);