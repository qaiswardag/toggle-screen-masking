const readingArea = document.getElementById('readingArea');
let mode = 'vertical';

document.querySelectorAll('input[name="mode"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    mode = e.target.value;
    readingArea.className = 'reading-area'; // reset classes
    readingArea.classList.add(mode);
  });
});

window.addEventListener('mousemove', (e) => {
  if (mode === 'vertical') {
    const y = e.clientY - 100;
    readingArea.style.top = `${Math.max(
      0,
      Math.min(window.innerHeight - 200, y)
    )}px`;
    readingArea.style.left = `0px`;
  } else if (mode === 'horizontal') {
    const x = e.clientX - 100;
    readingArea.style.left = `${Math.max(
      0,
      Math.min(window.innerWidth - 200, x)
    )}px`;
    readingArea.style.top = `0px`;
  } else if (mode === 'square') {
    const x = e.clientX - 100;
    const y = e.clientY - 100;
    readingArea.style.left = `${Math.max(
      0,
      Math.min(window.innerWidth - 200, x)
    )}px`;
    readingArea.style.top = `${Math.max(
      0,
      Math.min(window.innerHeight - 200, y)
    )}px`;
  }
});
