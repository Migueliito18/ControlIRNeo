const buttons = document.querySelectorAll('.btn');
const soundToggle = document.getElementById('sound-toggle');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const irCommand = button.getAttribute('data-ir');
    console.log(`Enviando comando IR: ${irCommand}`);

    // Simulación del sonido
    if (soundToggle.checked) {
      const audio = new Audio('click.mp3');
      audio.play();
    }

    // Aquí iría el código real para enviar el IR
  });
});
