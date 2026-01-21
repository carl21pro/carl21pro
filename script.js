function showToast(msg) {
    const area = document.getElementById('notification-area');
    const t = document.createElement('div');
    t.className = 'toast glass';
    t.innerText = "👋 " + msg;
    area.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        setTimeout(() => t.remove(), 500);
    }, 3500);
}

function showWelcomeMsg() { showToast("Welcome back! Have fun exploring."); }

window.onload = () => {
    setTimeout(showWelcomeMsg, 1200);
    updateBatteryStatus();
};

function updateBatteryStatus() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(bat => {
            const update = () => {
                document.getElementById('batteryStatus').innerText = `${bat.charging ? '⚡' : '🔋'} ${Math.floor(bat.level*100)}%`;
            };
            update(); bat.onlevelchange = update; bat.onchargingchange = update;
        });
    }
}

function toggleTheme() {
    const b = document.body;
    const isLight = b.getAttribute('data-theme') === 'light';
    if(isLight) {
        b.removeAttribute('data-theme');
        document.getElementById('themeBtn').innerText = '☀️';
        showToast("Dark Mode Active");
    } else {
        b.setAttribute('data-theme', 'light');
        document.getElementById('themeBtn').innerText = '🌙';
        showToast("Light Mode Active");
    }
}

setInterval(() => {
    document.getElementById('digitalClock').innerText = new Date().toLocaleTimeString('en-US', {hour12:false, timeZone:'Asia/Manila'});
}, 1000);

function showQR() {
    document.getElementById('qrModal').style.display = 'flex';
    document.getElementById('qrcode').innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {text: window.location.href, width:200, height:200});
}

function toggleMenu() { document.getElementById('aiModal').style.display = 'flex'; }
function closeModal() { document.getElementById('aiModal').style.display = 'none'; }

const bgAudio = document.getElementById('bgAudio');
function handleMusic() {
    const btn = document.getElementById('pState');
    if(bgAudio.paused) { 
        bgAudio.play(); 
        btn.innerText = '⏸'; 
        showToast("Music Started");
    } else { 
        bgAudio.pause(); 
        btn.innerText = '▶'; 
    }
}