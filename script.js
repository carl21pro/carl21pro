// Newsletter Form
document.getElementById("newsletter-form").addEventListener("submit", function(e){
  e.preventDefault();
  const email = this.querySelector("input").value;
  document.getElementById("newsletter-message").innerText = `Thank you for subscribing, ${email}!`;
  this.reset();
});

// Philippine Time
function updateTime() {
  const now = new Date();
  const options = { timeZone: 'Asia/Manila', hour12: true, weekday:'short', year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit'};
  document.getElementById("time").innerText = now.toLocaleString('en-PH', options);
}
setInterval(updateTime, 1000);
updateTime();