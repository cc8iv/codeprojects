let hourEl = document.querySelector('.hour h3');
let minEl = document.querySelector('.min h3');
let secEl = document.querySelector('.sec h3');
let milliEl = document.querySelector('.milli h3');


function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    
    hourEl.textContent = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
    milliEl.textContent = milliseconds;
  }
  
  updateTime(); // Call the function once to update immediately
  setInterval(updateTime, 10); // Update every 10 milliseconds for milliseconds display
  