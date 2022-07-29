const toggleLight = () => {
  const lightImg = document.getElementById('lightImg');
  const toggleBtnLabel = document.getElementById('toggleBtnLabel');

  if (lightImg.src.includes('off')) {
    lightImg.src = lightImg.src.replace('off', 'on');
    toggleBtnLabel.textContent = 'Turn off';
  } else {
    lightImg.src = lightImg.src.replace('on', 'off');
    toggleBtnLabel.textContent = 'Turn on';
  }
}

const init = () => {
  const toggleBtn = document.getElementById('toggleBtn');
  toggleBtn.addEventListener('click', toggleLight);
}

window.onload = init;
