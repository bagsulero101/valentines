onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = `-5em`; // Start from just below the bottom of the screen
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartsContainer.appendChild(heart);
  }
};