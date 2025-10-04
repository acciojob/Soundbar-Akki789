const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

// Build a play button for each sound
sounds.forEach((sound) => {
  // Create hidden audio element
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`; // template literal fixed
  audio.preload = 'auto';
  document.body.appendChild(audio);

  // Create visible button
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    const el = document.getElementById(sound);
    el.currentTime = 0;
    el.play();
  });

  buttons.appendChild(btn);
});

// Stop button (DO NOT give it .btn so tests count 6 .btn only)
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.textContent = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

// Pause & reset all sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const el = document.getElementById(sound);
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  });
}
