

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


function mostrarMapa() {
  var map = L.map('map').setView([-33.4489, -70.6693], 13);;

  // Agrega la capa de mosaico del mapa
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Tiles by <a href="https://stamen.com">Stamen Design</a>'
  }).addTo(map);

  // Obtén el contenedor del mapa y el filtro
  var mapContainer = document.getElementById('map-container');
  var filtroDiv = document.getElementsByClassName('filtro')[0];

  // Agrega la clase "map-container" al contenedor del mapa
  mapContainer.classList.add('map-container');

  // Mueve el filtro al contenedor del mapa
  mapContainer.appendChild(filtroDiv);
}


document.addEventListener('DOMContentLoaded', function() {
  const casillaId = 1; // Definir el valor de casillaId

  abrirSeleccionador();
  abrirSelect();
  inicializarCasillas();
  mostrarDatosCasilla(casillaId);
  mostrarMapa();
  abrirSelect();
});

