/* Abrir recuadro */
function abrirRecuadro(element) {
  var recuadro =  element.parentNode.nextElementSibling;
  recuadro.classList.toggle("recuadro-oculto");
}


function abrirSeleccionador(){
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
}

function abrirSelect(){
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
}

// Utilizar const en lugar de let cuando el valor no va a cambiar
function inicializarCasillas() {
  let indiceCasillaSeleccionada = 0;

  function seleccionarCasilla() {
    const casillas = document.querySelectorAll('.casilla');

    casillas.forEach((casilla, index) => {
      casilla.addEventListener('click', () => {
        casillas.forEach((casilla, i) => {
          casilla.classList.remove('casilla-seleccionada');
        });

        casilla.classList.add('casilla-seleccionada');
        indiceCasillaSeleccionada = index;
        mostrarDatosCasilla(indiceCasillaSeleccionada + 1); // Llamar a la función mostrarDatosCasilla con el índice actualizado
      });

      mostrarDatosCasilla(index + 1); // Llamar a la función mostrarDatosCasilla inicialmente
    });
  }

  function moverAnterior() {
    const casillas = document.querySelectorAll('.casilla');

    if (indiceCasillaSeleccionada > 0) {
      casillas[indiceCasillaSeleccionada].classList.remove('casilla-seleccionada');
      indiceCasillaSeleccionada--;
      casillas[indiceCasillaSeleccionada].classList.add('casilla-seleccionada');
      mostrarDatosCasilla(indiceCasillaSeleccionada + 1); // Llamar a la función mostrarDatosCasilla con el índice actualizado
    }
  }

  function moverSiguiente() {
    const casillas = document.querySelectorAll('.casilla');

    if (indiceCasillaSeleccionada < casillas.length - 1) {
      casillas[indiceCasillaSeleccionada].classList.remove('casilla-seleccionada');
      indiceCasillaSeleccionada++;
      casillas[indiceCasillaSeleccionada].classList.add('casilla-seleccionada');
      mostrarDatosCasilla(indiceCasillaSeleccionada + 1); // Llamar a la función mostrarDatosCasilla con el índice actualizado
    }
  }

  const botonAnterior = document.getElementById('boton-anterior');
  const botonSiguiente = document.getElementById('boton-siguiente');

  botonAnterior.addEventListener('click', moverAnterior);
  botonSiguiente.addEventListener('click', moverSiguiente);

  seleccionarCasilla();
}

// Utilizar const en lugar de var cuando el valor no va a cambiar
function mostrarDatosCasilla(casillaId) {
  // Obtener la referencia a la casilla seleccionada
  const casillaSeleccionada = document.getElementById("casilla" + casillaId);

  // Definir los datos para cada casilla
  const datosCasilla1 = [
    {
      direccion: "ALAMEDA LIB. B. OHIGGINS 1",
      comuna: "SANTIAGO",
      manzana: "001 - 001000",
      predio: "001 - 001000",
      superficieTerreno: "123.000 Km2",
      superficieConstruido: "123.000 Km2",
      evaluoFiscal: "$ 11.222.333",
    },
    {
      direccion: "ALAMEDA LIB. B. OHIGGINS 1.2",
      comuna: "SANTIAGO",
      manzana: "001 - 001000",
      predio: "001 - 001000",
      superficieTerreno: "123.000 Km2",
      superficieConstruido: "123.000 Km2",
      evaluoFiscal: "$ 11.222.333",
    }
  ];

  const datosCasilla2 = {
    direccion: "ALAMEDA LIB. B. OHIGGINS 2",
    comuna: "SANTIAGO",
    manzana: "001 - 001000",
    predio: "001 - 001000",
    superficieTerreno: "123.000 Km2",
    superficieConstruido: "123.000 Km2",
    evaluoFiscal: "$ 11.222.333",
  };

  const datosCasilla3 = {
    direccion: "ALAMEDA LIB. B. OHIGGINS 3",
    comuna: "SANTIAGO",
    manzana: "001 - 001000",
    predio: "001 - 001000",
    superficieTerreno: "123.000 Km2",
    superficieConstruido: "123.000 Km2",
    evaluoFiscal: "$ 11.222.333",
  };

  const datosCasilla6 = {
      direccion: "ALAMEDA LIB. B. OHIGGINS 6",
      comuna: "SANTIAGO",
      manzana: "001 - 001000",
      predio: "001 - 001000",
      superficieTerreno: "123.000 Km2",
      superficieConstruido: "123.000 Km2",
      evaluoFiscal: "$ 11.222.333",
    };

  // Obtener los datos de la casilla seleccionada
  let datosCasilla;
  switch (casillaId) {
  case 1:
      datosCasilla = datosCasilla1;
  break;
  case 2:
      datosCasilla = [datosCasilla2];
  break;
  case 3:
      datosCasilla = [datosCasilla3];
  break;
  case 6:
      datosCasilla = [datosCasilla6];
  break;
    // Agrega más casos para las demás casillas según sea necesario
    default:
      datosCasilla = []; // Caso por defecto, datos vacíos
  }

  if (datosCasilla.length > 0) {
    casillaSeleccionada.classList.add('casilla-con-datos');
    casillaSeleccionada.classList.remove('casilla-sin-datos');

    // Construir el HTML con los datos de la casilla seleccionada
    let detalleCasillaHTML = '<table class="table table-borderless table-responsive" style="margin-bottom: -15px;">';
    detalleCasillaHTML += '<thead><tr style="background-color: #3E3E3E; color: #FFFFFF;">';
    detalleCasillaHTML += '<th></th><th>Dirección</th><th>Comuna</th><th>Manzana</th><th>Predio</th>';
    detalleCasillaHTML += '<th>Superficie Terreno</th><th>Superficie Construido</th><th>Evaluo Fiscal</th>';
    detalleCasillaHTML += '</tr></thead><tbody>';

    for (let i = 0; i < datosCasilla.length; i++) {
      detalleCasillaHTML += '<tr>';
      detalleCasillaHTML += '<td><input type="checkbox" name="" id=""></td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].direccion + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].comuna + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].manzana + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].predio + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].superficieTerreno + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].superficieConstruido + '</td>';
      detalleCasillaHTML += '<td>' + datosCasilla[i].evaluoFiscal + '</td>';
      detalleCasillaHTML += '</tr>';
    }

    detalleCasillaHTML += '</tbody></table>';

    // Actualizar el contenido del elemento detalle-casilla-seleccionada
    const detalleCasillaSeleccionada = document.getElementById("detalle-tabla");
    detalleCasillaSeleccionada.innerHTML = detalleCasillaHTML;
  } else {
    casillaSeleccionada.classList.add("casilla-sin-datos");
    casillaSeleccionada.classList.remove("casilla-con-datos");

    // Si no hay datos, limpiar el contenido del elemento detalle-casilla-seleccionada
    const detalleCasillaSeleccionada = document.getElementById("detalle-tabla");
    detalleCasillaSeleccionada.innerHTML = "";
  }
}

function accionInformacion() {
  const botonFiltroCatastro = document.querySelector('#recuadro-catastro #aplicar-filtro');
  const botonFiltroCBR = document.querySelector('#recuadro-cbr #aplicar-filtro');
  const botonFiltroMQ = document.querySelector('#recuadro-mq #aplicar-filtro');
  const botonFiltroMulti = document.querySelector('#recuadro-multi #aplicar-filtro');
  const botonFiltroPeap = document.querySelector('#recuadro-peap #aplicar-filtro');
  const botonFiltroSP = document.querySelector('#recuadro-sp #aplicar-filtro');
  const botonFiltroAdministrado = document.querySelector('#recuadro-administrado #aplicar-filtro');
  const puntos = document.querySelectorAll('.puntos img');
  const barras = document.querySelectorAll('.barra');

  // Ocultar los divs "barra" al iniciar la página
  barras.forEach(barra => {
    barra.style.display = 'none';
  });

  puntos.forEach(punto => {
    punto.addEventListener('click', function() {
      const puntoId = this.id;

      // Ocultar todos los divs "barra" y mostrar solo el correspondiente al punto clicado
      barras.forEach(barra => {
        barra.style.display = 'none';
      });
      const barraDiv = document.querySelector(`#${puntoId}-barra`);
      if (barraDiv) {
        barraDiv.style.display = 'block';
      }
    });
  });


  botonFiltroCatastro.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-catastro').style.display = 'block';
  });

  botonFiltroCBR.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-cbr').style.display = 'block';
  });
  botonFiltroMQ.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-mq').style.display = 'block';
  });
  botonFiltroMulti.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-multi').style.display = 'block';
  });
  botonFiltroPeap.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-peap').style.display = 'block';
  });
  botonFiltroSP.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-sp').style.display = 'block';
  });
  botonFiltroAdministrado.addEventListener('click', function() {
    // Ocultar todos los puntos y mostrar solo el punto correspondiente
    puntos.forEach(punto => {
      punto.style.display = 'none';
    });
    document.querySelector('#punto-administrado').style.display = 'block';
  });
}

function accionResultado() {
  // Obtener referencia al botón de aplicar filtro
  const botonFiltro = document.querySelector('.miBtnVermas');

  // Obtener referencia al div de resultado
  const resultadoDiv = document.querySelector('.resultado');

  // Agregar evento de clic al botón de aplicar filtro
  botonFiltro.addEventListener('click', function() {
    resultadoDiv.style.display = 'block';
  });

  // Obtener referencia al botón de cerrar
  const cerrarBtn = document.querySelector('.boton-cerrar');

  // Agregar evento de clic al botón de cerrar
  cerrarBtn.addEventListener('click', function() {
    resultadoDiv.style.display = 'none';
  });
}

function mostrarMapa() {
  var map = L.map('map').setView([51.505, -0.09], 13);

  // Agrega la capa de mosaico del mapa
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles by <a href="https://stamen.com">Stamen Design</a>'
  }).addTo(map);

  // Obtén el contenedor del mapa y el filtro
  var mapContainer = document.getElementById('map-container');
  var filtroDiv = document.getElementsByClassName('filtro')[0];

  // Agrega el filtro al contenedor del mapa
  mapContainer.appendChild(filtroDiv);
}


const casillaId = 1; // Definir el valor de casillaId

abrirSeleccionador();
abrirSelect();
inicializarCasillas();
mostrarDatosCasilla(casillaId);
accionInformacion();
accionResultado();
mostrarMapa();
