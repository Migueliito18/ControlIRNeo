/* main.js */
const buttons = document.querySelectorAll('.btn');
const soundToggle = document.getElementById('sound-toggle');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const irCommand = button.getAttribute('data-ir');
    console.log(`Sending IR command: ${irCommand}`);

    // Enviar IR (simulado en consola)
    if (soundToggle.checked) {
      const audio = new Audio('click.mp3');
      audio.play();
    }
  });
});
