const ecocanjes=[

      {
        nombre: "Seleccione un punto...",
        direccion: "" ,
        horario: "",
        contacto: "",
        url: "",
      },
      {
        nombre: "Nave Tierra",
        direccion: "Santa fe 1974",
        horario: "Lunes a viernes de 9 a 14hs.",
        contacto: "3815834968",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7706746113354!2d-65.22678278545152!3d-26.815429695611233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c456b99b8bd%3A0x307b79237992700!2sEOP%2C%20Sta.%20Fe%201974%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1637703678864!5m2!1ses-419!2sar"
      },
      {
        nombre: "Girsu (EcoCanje)",
        direccion: "Parque Avellaneda (Asunción y av. Mate de Luna)",
        horario: "Todos los lunes de 14 a 17 hs.",
        contacto: "3815834968",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.436172335878!2d-65.2262969854513!3d-26.826075996056456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c683726bb47%3A0xbd7e56c26c4085bb!2sParque%20Avellaneda!5e0!3m2!1ses-419!2sar!4v1637706509910!5m2!1ses-419!2sar"
      },

      {
        nombre: "Girsu (EcoPunto)",
        direccion: "Esquina de Miguel Lillo y Las Piedras",
        horario: "Todos los Jueves de 12 a 14hs",
        contacto: "3815834968",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.278183379584!2d-65.22394188545103!3d-26.831102996266736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c6ea274f981%3A0x84f775ae6b0add97!2sMiguel%20Lillo%20205%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1637703986566!5m2!1ses-419!2sar"
      },

]

const select= document.querySelector('#seleccion-ecocanje');

for (let index = 0; index < ecocanjes.length; index++) {
    const ecocanje = ecocanjes[index];
    const option=document.createElement("option");
    option.innerText=ecocanje.nombre;
    option.value=index;
    select.appendChild(option);
}

const iframe = document.querySelector('iframe');
const direccion = document.querySelector('direccion');
const horario = document.querySelector('horario');
const contacto = document.querySelector('contacto');
const nombre = document.querySelector('nombre');


function cambiarMapa() {
  let url = ecocanjes[select.value].url
  iframe.src = url;

}

function traer_datos() {
  let direccion = ecocanjes[select.value].direccion
  direccion.src = direccion;

  var direccioneco = direccion;
  var objetivo = document.getElementById('direccion');
  objetivo.innerHTML = direccioneco;

  let horario = ecocanjes[select.value].horario
  horario.src = horario;

  var horarioeco = horario;
  var objetivo = document.getElementById('horario');
  objetivo.innerHTML = horarioeco;

  
  let contacto = ecocanjes[select.value].contacto
  contacto.src = contacto;

  var contactoeco = contacto;
  var objetivo = document.getElementById('contacto');
  objetivo.innerHTML = contactoeco;
}

select.addEventListener("change", cambiarMapa)
select.addEventListener("change", traer_datos)













