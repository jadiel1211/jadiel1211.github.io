document.getElementById('love-button').addEventListener('click', function () {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.style.display = 'block';
    this.style.display = 'none'; // Oculta el botón después de mostrar el mensaje
});
