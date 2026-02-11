const notes = [
  "Eres imparable porque tienes una determinación que no se rinde ni con obstáculos gigantes. 💪",
  "Tu mente es un superpoder: piensas soluciones donde otros ven problemas. 🧠",
  "Recuerda esa vez que lograste [tu logro específico]… eso no lo hace cualquiera. Tú sí. 🔥",
  "Eres fuerte no porque nunca llores, sino porque sigues adelante incluso con lágrimas. ❤️",
  "Tu empatía y bondad mueven montañas; el mundo es mejor porque existes. 🌍",
  "Aunque estemos a kilómetros, tu energía me llega y me motiva a ser mejor cada día. 🌟",
  "Tienes un talento increíble para [su hobby]. ¡Sigue explotándolo! 🎨",
  "Eres valiente: te atreves a soñar grande aunque el camino sea incierto. 🚀",
  "Tu sonrisa (aunque sea por cámara) ilumina todo, incluso los días grises. 😊",
  "Nadie maneja el estrés como tú; sales más fuerte de cada tormenta. ⛈️",
  "Eres inteligente, creativa y única. No hay copia de ti en el mundo. ✨",
  "Cada meta que te propones, la alcanzas porque crees en ti misma. 🎯",
  "Tu perseverancia es inspiradora; yo aprendo de ti todos los días. 📈",
  "Eres hermosa por dentro y por fuera, y lo mejor es que lo sabes usar para ayudar a otros. 💖",
  "La distancia no nos ha debilitado; al contrario, ha hecho nuestro amor más fuerte. Tú eres parte de eso. 💕",
  "Tienes un corazón gigante que no cabe en el pecho, y eso te hace invencible. 🫀",
  "Cuando dudes, recuerda: yo creo en ti más de lo que las palabras pueden decir. 🫶",
  "Eres una guerrera silenciosa; luchas batallas que nadie ve y siempre ganas. ⚔️",
  "Tu capacidad de reinventarte es impresionante. Nada te detiene por mucho tiempo. 🔄",
  "Eres mi musa de motivación; verte esforzarte me empuja a dar lo mejor de mí. 🌹"
];

const jar = document.getElementById('jar');
const noteElement = document.getElementById('note');
const message = document.getElementById('message');
const btn = document.getElementById('shakeBtn');

function getRandomNote() {
  return notes[Math.floor(Math.random() * notes.length)];
}

function showNote() {
  // Reset
  noteElement.style.opacity = '0';
  jar.classList.remove('shake');
  
  // Shake animation
  void jar.offsetWidth; // trigger reflow
  jar.classList.add('shake');
  
  setTimeout(() => {
    const randomNote = getRandomNote();
    noteElement.textContent = randomNote;
    noteElement.style.opacity = '1';
    message.textContent = "¡Eres increíble! ❤️ Saca otra cuando quieras";
  }, 800); // después del shake
}

// Click en el tarro o botón
jar.addEventListener('click', showNote);
btn.addEventListener('click', showNote);

// Primera nota al cargar (opcional)
showNote();
