// BASE DE DATOS (puedes editarla)
const publicadores = [
"Juan Pérez",
"Carlos López",
"Miguel Ángel",
"Pedro Ramírez",
"Luis Torres",
"Andrés Gómez"
];

// CARGAR SELECTORES
function cargarSelects(){
    document.querySelectorAll("select").forEach(select=>{
        select.innerHTML = "<option value=''>Seleccionar</option>";
        publicadores.forEach(p=>{
            select.innerHTML += `<option value="${p}">${p}</option>`;
        });
    });
}

// GUARDAR
function guardar(){
    let week = document.getElementById("week").value;

    let data = {
        t1:t1.value,t2:t2.value,t3:t3.value,
        m1:m1.value,m2:m2.value,m3:m3.value,
        v1:v1.value,v2:v2.value,v3:v3.value
    };

    localStorage.setItem("vmc_"+week, JSON.stringify(data));
    cargarHistorial();
}

// CARGAR POR SEMANA
week.addEventListener("change",()=>{
    let data = JSON.parse(localStorage.getItem("vmc_"+week.value));

    if(data){
        Object.keys(data).forEach(k=>{
            document.getElementById(k).value = data[k];
        });
    }
});

// HISTORIAL
function cargarHistorial(){
    let cont = document.getElementById("historial");
    cont.innerHTML="";

    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        if(key.startsWith("vmc_")){
            cont.innerHTML += `<div>${key}</div>`;
        }
    }
}

// EXPORTAR
function exportar(){
    window.print();
}

// INIT
cargarSelects();
cargarHistorial();
