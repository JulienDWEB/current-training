fetch('https://api.maptiler.com/maps/01978879-bea3-75fc-835a-7066a4307b7f/?key=JRheCvRpTzAQNg2S5SvL#5.8/47.13460/8.75150') 
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      
    })
    const map = L.map('map').setView([47.13460, 8.75150], 6);

L.tileLayer('https://api.maptiler.com/maps/01978879-bea3-75fc-835a-7066a4307b7f/256/{z}/{x}/{y}.png?key=JRheCvRpTzAQNg2S5SvL', {
    attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>',
    tileSize: 256
}).addTo(map);  