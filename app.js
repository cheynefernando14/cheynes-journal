document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll('.top-nav-btn');
  const tabs = document.querySelectorAll('.tab-content');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      navBtns.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));
      
      btn.classList.add('active');
      const target = document.getElementById(`tab-${tabId}`);
      if (target) target.classList.add('active');
    });
  });

  const audio = document.getElementById('ambient-audio');
  const audioBtn = document.getElementById('audio-toggle');
  audioBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      audioBtn.innerText = '🎵 playing';
    } else {
      audio.pause();
      audioBtn.innerText = '🎵 music';
    }
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});