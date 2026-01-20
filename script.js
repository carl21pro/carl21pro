// Welcome Notification Logic
function showToast(message) {
    const area = document.getElementById('notification-area');
    const toast = document.createElement('div');
    toast.className = 'toast glass';
    toast.innerHTML = `<span>👋</span> ${message}`;
    area.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function showWelcomeMsg() {
    showToast("Welcome to Jerobie's Portfolio! Have fun!");
}

// Show notification automatically on load
window.addEventListener('load', () => {
    setTimeout(() => {
        showWelcomeMsg();
    }, 1500);

    // Reveal elements
    document.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 150);
    });
});

// Battery & Stats
function updateBattery() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(bat => {
            const update = () => {
                const level = Math.floor(bat.level * 100);
                document.getElementById('batteryStatus').innerText = `${bat.charging ? '⚡' : '🔋'} ${level}%`;
            };
            update();
            bat.onlevelchange = update;
            bat.onchargingchange = update;
        });
    }
}
updateBattery();

// Theme Toggle with Animation
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');
    body.style.opacity = '0';
    
    setTimeout(() => {
        if (body.getAttribute('data-theme') === 'light') {
            body.removeAttribute('data-theme');
            btn.innerText = '☀️';
            showToast("Dark Mode Active");
        } else {
            body.setAttribute('data-theme', 'light');
            btn.innerText = '🌙';
            showToast("Light Mode Active");
        }
        body.style.opacity = '1';
    }, 300);
}

// Clock
setInterval(() => {
    const el = document.getElementById('clock');
    if (el) el.innerText = new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Manila' });
}, 1000);

// QR Modal
function showQR() {
    document.getElementById('qrModal').style.display = 'flex';
    document.getElementById('qrcode').innerHTML = "";
    new QRCode(document.getElementById("qrcode"), { text: window.location.href, width: 200, height: 200 });
}

// Menu / Redirect
function toggleMenu() { document.getElementById('redirectModal').style.display = 'flex'; }
function closeModal() { document.getElementById('redirectModal').style.display = 'none'; }
function confirmRedirect() { window.open('https://blesa123-bot.onrender.com/', '_blank'); closeModal(); }

// Music
const track = document.getElementById('audio');
function handleMusic() {
    const p = document.getElementById('pState');
    if (track.paused) { track.play(); p.innerText = '⏸'; showToast("Now Playing System Audio"); }
    else { track.pause(); p.innerText = '▶'; }
}

// Particles
const container = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(p);
}