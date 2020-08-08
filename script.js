let hamburgerBtn = document.getElementById('hamburger-btn');
let navbar = document.getElementById('navbar');
let main = document.getElementById('main');
let trigger = document.getElementById('trigger');

let colorOne = document.getElementById('color-one');
let colorTwo = document.getElementById('color-two');
let colorThree = document.getElementById('color-three');

const facebook = ['#3b5998', '#8b9dc3','#dfe3ee','#f7f7f7'];
const google = ['#008744', '#0057e7', '#d62d20', 'ffa700'];
const youtube = ['#cc181e', '#2793e8', '#559900', '#666666'];

let previousScroll = 0;
let scrollTriggerPosition = trigger.getBoundingClientRect().top;

function populateUI () {
  const colorThemeArr = JSON.parse(window.localStorage.getItem('color'));
  if (colorThemeArr !== null && colorThemeArr.length > 0) {
    colorTheme(colorThemeArr);
  }
}


function colorTheme(arr) {
  document.documentElement.style.setProperty('--primary-color', arr[0]);
  document.documentElement.style.setProperty('--secondary-color', arr[1]);
  document.documentElement.style.setProperty('--third-color', arr[2]);
  document.documentElement.style.setProperty('--fourth-color', arr[3]);
  window.localStorage.setItem('color', JSON.stringify(arr));
}

function toggleOverlay() {
  hamburgerBtn.classList.toggle('hamburger-active');
  overlay.classList.toggle('overlay-active');
}

function toggleNavbar() {
  let currentScroll = window.scrollY;

  if (currentScroll > scrollTriggerPosition) {
    if (currentScroll > previousScroll) {
      navbar.classList.add('navbar-active');
    } else {
      navbar.classList.remove('navbar-active');
    }
    previousScroll = currentScroll;
  }
}

function toggleNavbarOnMouse(e) {
  if(e.clientY < 50) {
    navbar.classList.remove('navbar-active');
  }
}


hamburgerBtn.addEventListener('click', toggleOverlay);

colorOne.addEventListener('click',() => colorTheme(facebook));
colorTwo.addEventListener('click',() => colorTheme(youtube));
colorThree.addEventListener('click',() => colorTheme(google));

window.addEventListener('scroll', toggleNavbar);

window.addEventListener('resize', ()=> scrollTriggerPosition = trigger.getBoundingClientRect().top);

window.addEventListener('mousemove', (e) => toggleNavbarOnMouse(e))


populateUI();
