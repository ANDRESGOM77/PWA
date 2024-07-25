const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';

  butInstall.addEventListener('click', () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });
});

butInstall.addEventListener('click', async () => {
  // No need to add any code here as the click event is handled in the beforeinstallprompt event
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log("installed :)");
});