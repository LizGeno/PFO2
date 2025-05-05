/* Validación de formulario */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-contacto");
  
    form.addEventListener("submit", (e) => {
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
//validacion d campos  
      if (!nombre || !apellido || !email || !telefono) {
        e.preventDefault(); // evita que se envíe el formulario
        alert("Por favor completa correctamente todos los campos antes de enviar");
        return; //detiene la ejec si hay campos vacios
      }
//vavlidacion de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //exp regular
        if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Ingresá un email con un formato válido");
        return;
        }
    });
  });

  //MODO OSCURO

  // checkbox para el modo oscuro
const modoOscuroCheckbox = document.getElementById('modoOscuro');

// Función para cambiar al modo oscuro
modoOscuroCheckbox.addEventListener('change', function() {
    // se verif si el checkbox está activado
    if (modoOscuroCheckbox.checked) {
        // se añade la clase "modo-oscuro" al body y a los elementos relevantes
        document.body.classList.add('modo-oscuro');
        document.querySelector('.header').classList.add('modo-oscuro');
        document.querySelector('nav').classList.add('modo-oscuro');
        document.querySelectorAll('.nav-list a').forEach(a => a.classList.add('modo-oscuro'));
        document.querySelectorAll('.tarjetas').forEach(tarjeta => tarjeta.classList.add('modo-oscuro'));
        document.querySelectorAll('.proyectos').forEach(proyecto => proyecto.classList.add('modo-oscuro'));
        document.querySelectorAll('.peliculas').forEach(pelicula => pelicula.classList.add('modo-oscuro'));
        document.querySelector('.footer').classList.add('modo-oscuro');
        document.querySelectorAll('.form-contacto').forEach(form => form.classList.add('modo-oscuro'));
        document.querySelectorAll('.input').forEach(input => input.classList.add('modo-oscuro'));
        document.querySelectorAll('.btn-enviar').forEach(btn => btn.classList.add('modo-oscuro'));
        document.querySelector('.contacto').classList.add('modo-oscuro');
        document.querySelector('.sobre-mi').classList.add('modo-oscuro');
        document.querySelector('.proyecto-placeholder').classList.add('modo-oscuro');
      } else {
        // Si el checkbox no está activado, se elimina la clase "modo-oscuro"
        document.body.classList.remove('modo-oscuro');
        document.querySelector('.header').classList.remove('modo-oscuro');
        document.querySelector('nav').classList.remove('modo-oscuro');
        document.querySelectorAll('.nav-list a').forEach(a => a.classList.remove('modo-oscuro'));
        document.querySelectorAll('.tarjetas').forEach(tarjeta => tarjeta.classList.remove('modo-oscuro'));
        document.querySelectorAll('.proyectos').forEach(proyecto => proyecto.classList.remove('modo-oscuro'));
        document.querySelectorAll('.peliculas').forEach(pelicula => pelicula.classList.remove('modo-oscuro'));
        document.querySelector('.footer').classList.remove('modo-oscuro');
        document.querySelectorAll('.form-contacto').forEach(form => form.classList.remove('modo-oscuro'));
        document.querySelectorAll('.input').forEach(input => input.classList.remove('modo-oscuro'));
        document.querySelectorAll('.btn-enviar').forEach(btn => btn.classList.remove('modo-oscuro'));
        document.querySelector('.contacto').classList.remove('modo-oscuro');
        document.querySelector('.sobre-mi').classList.remove('modo-oscuro');
        document.querySelector('.proyecto-placeholder').classList.remove('modo-oscuro');
      }
});

//POP-UP
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contacto");
  const popupEnviado = document.getElementById("popup-enviado");
  const cerrarPopupBtn = document.getElementById("cerrar-popup");

  form.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if (!nombre || !apellido || !email || !telefono) {
      e.preventDefault();
      alert("Por favor completa correctamente todos los campos antes de enviar");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Ingresá un email con un formato válido");
      return;
    }

    e.preventDefault(); // Se evita el envío real por ahora para mostrar el popup
    popupEnviado.style.display = "block";

    //resetear el formulario aquí
    form.reset();
  });

  cerrarPopupBtn.addEventListener("click", () => {
    popupEnviado.style.display = "none";
    //resetear el formulario aquí también
    form.reset();
  });
});

// OCULTAR/MOSTRAR - PROYECTOS
const toggleProyectosBtn = document.getElementById("toggle-proyectos");
const proyectoPlaceholder = document.getElementById("proyecto-placeholder");

if (toggleProyectosBtn && proyectoPlaceholder) {
  toggleProyectosBtn.addEventListener("click", () => {
    if (proyectoPlaceholder.style.display === "none") {
      proyectoPlaceholder.style.display = "block";
      toggleProyectosBtn.textContent = "Ocultar Detalles";
    } else {
      proyectoPlaceholder.style.display = "none";
      toggleProyectosBtn.textContent = "Mostrar Detalles";
    }
  });
}

// OCULTAR/MOSTRAR - HABILIDADES
const toggleHabilidadesBtn = document.getElementById("toggle-habilidades");
const habilidadesContenido = document.getElementById("habilidades-contenido");

if (toggleHabilidadesBtn && habilidadesContenido) {
  toggleHabilidadesBtn.addEventListener("click", () => {
    if (habilidadesContenido.classList.contains("visible")) {
      habilidadesContenido.classList.remove("visible");
      toggleHabilidadesBtn.textContent = "Mostrar Detalles";
    } else {
      habilidadesContenido.classList.add("visible");
      toggleHabilidadesBtn.textContent = "Ocultar Detalles";
    }
  });
}

//PELICULAS
const peliculas = [
  {
    titulo: "The Godfather",
    imagen: "IMG/peliculas/elpadrino.webp",
    descripcion: `"El Padrino" (1972), dirigida por Francis Ford Coppola, es considerada una de las mejores películas de la historia por su equilibrio entre 
    profundidad narrativa, dirección precisa y actuaciones sobresalientes. Destaca por su tratamiento del poder, la lealtad y la transformación moral 
    del protagonista. Su influencia en el cine moderno es innegable, marcando un antes y un después en el género de drama criminal.`
  },
  {
    titulo: "Parasite",
    imagen: "IMG/peliculas/parasite.png",
    descripcion: `"Parasite" (2019), dirigida por Bong Joon-ho, se destaca por su guion sólido, su impecable dirección y su crítica social contundente. 
    Combina humor negro, tensión y drama en una historia que expone las desigualdades de clase con una narrativa visual poderosa. 
    Fue la primera película en lengua no inglesa en ganar el Óscar a Mejor Película, marcando un hito en el cine contemporáneo.`
  },
  {
    titulo: "City of God",
    imagen: "IMG/peliculas/cityofgod.webp",
    descripcion: `"City of God" (2002), dirigida por Fernando Meirelles y Kátia Lund, es un referente del cine contemporáneo 
    por su capacidad para mezclar un enfoque documental con una narración visual dinámica. 
    La película ofrece una mirada profunda y sin filtros sobre la violencia y la pobreza en las favelas de Río de Janeiro, 
    utilizando un guion colaborativo y una dirección innovadora que amplifican su impacto social".`
  }
];

const contenedor = document.getElementById("contenedor-peliculas");

peliculas.forEach(peli => {
  const div = document.createElement("div");
  div.classList.add("pelicula-ind");

  div.innerHTML = `
    <img src="${peli.imagen}" alt="Imagen de la pelicula ${peli.titulo}">
    <div class="detalles">
      <h3>${peli.titulo}</h3>
      <p>${peli.descripcion}</p>
    </div>
  `;

  contenedor.appendChild(div);
});
