document.getElementById("tarjeta_").addEventListener("click", function() {
    var textToCopy = "5512 3823 4654 7146";
  
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        console.log('Numero de cuenta copiado: ' + textToCopy);
        alert('Numero de cuenta copiado: ' + textToCopy);
      })
      .catch(function(error) {
        console.error('Error al copiar el texto: ', error);
        alert('Error al copiar el texto. Por favor, copia manualmente.');
      });
  });
  