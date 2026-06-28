// =======================
// BASE DE DATOS SAFE IA
// =======================

const infoDistritos = {

    "Trujillo Centro": {
        riesgo: "Alto",
        incidentes: 150,
        tendencia: "+12%",
        recomendacion: "Implementar patrullaje intensivo en zona comercial."
    },

    "El Porvenir": {
        riesgo: "Alto",
        incidentes: 98,
        tendencia: "+8%",
        recomendacion: "Reforzar iluminación en vías principales."
    },

    "Alto Trujillo": {
        riesgo: "Medio",
        incidentes: 45,
        tendencia: "Estable",
        recomendacion: "Fomentar programas de vigilancia vecinal."
    },

    "Florencia de Mora": {
        riesgo: "Medio",
        incidentes: 62,
        tendencia: "+5%",
        recomendacion: "Monitoreo preventivo en horarios nocturnos."
    },

    "Víctor Larco Herrera": {
        riesgo: "Bajo",
        incidentes: 22,
        tendencia: "-3%",
        recomendacion: "Mantener los protocolos actuales de seguridad."
    },

    "Laredo": {
        riesgo: "Bajo",
        incidentes: 18,
        tendencia: "-2%",
        recomendacion: "Continuar con las jornadas de prevención comunitaria."
    }

};
function actualizarPanelIA(nombreDistrito) {

    const distrito = infoDistritos[nombreDistrito];

    const panel = document.getElementById("resultadoIA");

    panel.innerHTML = `
    
        <h3>${nombreDistrito}</h3>

        <p><strong>Riesgo:</strong> ${distrito.riesgo}</p>

        <p><strong>Incidentes:</strong> ${distrito.incidentes}</p>

        <p><strong>Tendencia:</strong> ${distrito.tendencia}</p>

        <p><strong>Recomendación:</strong></p>

        <p>${distrito.recomendacion}</p>

    `;
}
// =======================
// MAPA
// =======================

const map = L.map('map').setView([-8.105, -79.03], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// =======================
// TRUJILLO CENTRO
// =======================

L.circle([-8.111, -79.028], {
    color: 'red',
    fillColor: '#ff4d4d',
    fillOpacity: 0.4,
    radius: 900
}).addTo(map)
.bindPopup("Trujillo Centro - Riesgo Alto");

L.marker([-8.111, -79.028])
.addTo(map)
.bindPopup("Trujillo Centro")
.on('click', () => {
    actualizarPanelIA("Trujillo Centro");
});

// =======================
// EL PORVENIR
// =======================

L.circle([-8.083, -79.020], {
    color: 'red',
    fillColor: '#ff4d4d',
    fillOpacity: 0.4,
    radius: 850
}).addTo(map)
.bindPopup("El Porvenir - Riesgo Alto");

L.marker([-8.083, -79.020])
.addTo(map)
.bindPopup("El Porvenir")
.on('click', () => {
    actualizarPanelIA("El Porvenir");
});

// =======================
// ALTO TRUJILLO
// =======================

L.circle([-8.045, -79.005], {
    color: 'orange',
    fillColor: '#ffa500',
    fillOpacity: 0.4,
    radius: 800
}).addTo(map)
.bindPopup("Alto Trujillo - Riesgo Medio");

L.marker([-8.045, -79.005])
.addTo(map)
.bindPopup("Alto Trujillo")
.on('click', () => {
    actualizarPanelIA("Alto Trujillo");
});

// =======================
// FLORENCIA DE MORA
// =======================

L.circle([-8.078, -79.032], {
    color: 'orange',
    fillColor: '#ffa500',
    fillOpacity: 0.4,
    radius: 800
}).addTo(map)
.bindPopup("Florencia de Mora - Riesgo Medio");

L.marker([-8.078, -79.032])
.addTo(map)
.bindPopup("Florencia de Mora")
.on('click', () => {
    actualizarPanelIA("Florencia de Mora");
});

// =======================
// VÍCTOR LARCO HERRERA
// =======================

L.circle([-8.136, -79.043], {
    color: 'green',
    fillColor: '#32cd32',
    fillOpacity: 0.4,
    radius: 850
}).addTo(map)
.bindPopup("Víctor Larco Herrera - Riesgo Bajo");

L.marker([-8.136, -79.043])
.addTo(map)
.bindPopup("Víctor Larco Herrera")
.on('click', () => {
    actualizarPanelIA("Víctor Larco Herrera");
});

// =======================
// LAREDO
// =======================

L.circle([-8.089, -78.965], {
    color: 'green',
    fillColor: '#32cd32',
    fillOpacity: 0.4,
    radius: 900
}).addTo(map)
.bindPopup("Laredo - Riesgo Bajo");

L.marker([-8.089, -78.965])
.addTo(map)
.bindPopup("Laredo")
.on('click', () => {
    actualizarPanelIA("Laredo");
});

// =======================
// LEYENDA
// =======================

const legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {

    const div = L.DomUtil.create('div');

    div.innerHTML = `
<div style="
background:white;
padding:12px;
border-radius:10px;
box-shadow:0 2px 10px rgba(0,0,0,.2);
font-family:Arial;
line-height:1.8;
">

<strong>Niveles de Riesgo</strong><br>

<span style="
display:inline-block;
width:15px;
height:15px;
background:red;
border-radius:50%;
margin-right:8px;
"></span>
Alto<br>

<span style="
display:inline-block;
width:15px;
height:15px;
background:orange;
border-radius:50%;
margin-right:8px;
"></span>
Medio<br>

<span style="
display:inline-block;
width:15px;
height:15px;
background:green;
border-radius:50%;
margin-right:8px;
"></span>
Bajo

</div>
`;

    return div;
};

legend.addTo(map);

// =======================
// CONTADORES
// =======================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');

    let count = 0;

    const updateCounter = () => {

        if (count < target) {

            count++;

            counter.innerText = count;

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target + '+';

        }

    };

    updateCounter();

});

// =======================
// ANIMACIÓN SCROLL
// =======================

function reveal() {

    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', reveal);

reveal();

// =======================
// SAFE IA
// =======================

const analizarBtn = document.getElementById('analizarBtn');

if (analizarBtn) {

    analizarBtn.addEventListener('click', () => {

        const mensajes = [

            "SafeIA detecta mayor concentración de incidentes en Trujillo Centro y El Porvenir.",

            "Laredo y Víctor Larco mantienen los niveles más bajos de riesgo.",

            "Florencia de Mora requiere monitoreo preventivo durante horarios nocturnos.",

            "Alto Trujillo presenta una tendencia estable durante el último período analizado."

        ];

        const aleatorio = Math.floor(Math.random() * mensajes.length);

        document.getElementById('resultadoIA').innerText =
            mensajes[aleatorio];

    });

}
setTimeout(() => {
    map.invalidateSize();
}, 500);