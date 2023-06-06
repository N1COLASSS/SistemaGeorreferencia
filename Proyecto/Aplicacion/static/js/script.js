/* Abrir recuadro */
function abrirRecuadro(element) {
  var recuadro =  element.parentNode.nextElementSibling;
  recuadro.classList.toggle("recuadro-oculto");
}



/* Cambio de icono al abrir un seleccionador */
const seleccionadores = document.querySelectorAll('.seleccionador');

// Iterar sobre cada elemento
seleccionadores.forEach(seleccionador => {
  // Agregar un evento de clic a cada elemento
  seleccionador.addEventListener('click', function() {
    // Alternar la clase 'active' para cambiar el icono
    this.classList.toggle('active');
  });

  // Agregar un evento de cambio a cada elemento (para ocultar el icono si se selecciona una opción)
  seleccionador.addEventListener('change', function() {
    this.classList.remove('active');
  });
});



/* Cambio de icono al abrir un select */

const recuadros = [
  'recuadro-catastro',
  'recuadro-cbr',
  'recuadro-peap',
  'recuadro-sp',
  'recuadro-multi',
  'recuadro-administrado',
  'recuadro-mq'
];

const selectores = ['.años', '.region', '.comuna'];

recuadros.forEach(recuadro => {
  selectores.forEach(selector => {
    selectDiseño(recuadro, selector);
  });
});

function selectDiseño(recuadroID, selector) {
  const recuadro = document.getElementById(recuadroID);
  const container = recuadro.querySelector(selector);
  const select = recuadro.querySelector(selector + ' select');

  container.addEventListener('click', function () {
    this.classList.toggle('active');
  });

  select.addEventListener('change', function () {
    container.classList.remove('active');
  });
}