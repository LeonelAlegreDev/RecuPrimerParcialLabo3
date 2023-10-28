import Heroe from "./clases/Heroe.js";
import Villano from "./clases/Villano.js";

var data = '[{"id":1, "nombre":"Clark", "apellido":"Kent", "edad":45, "alterego":"Superman", "ciudad":"Metropolis","publicado":2002},{"id":2, "nombre":"Bruce", "apellido":"Wayne", "edad":35, "alterego":"Batman", "ciudad":"Gotica","publicado":20012},{"id":3, "nombre":"Bart", "apellido":"Alen", "edad":30, "alterego":"Flash", "ciudad":"Central","publicado":2017},{"id":4, "nombre":"Lex", "apellido":"Luthor", "edad":18, "enemigo":"Superman", "robos":500,"asesinatos":7},{"id":5, "nombre":"Harvey", "apellido":"Dent", "edad":20, "enemigo":"Batman", "robos":750,"asesinatos":2},{"id":666, "nombre":"Celina", "apellido":"kyle", "edad":23, "enemigo":"Batman", "robos":25,"asesinatos":1}]';
let tabla = document.getElementById("tabla_datos");

// filtros
let tipo = document.getElementById("filtro_tipo");
let id = document.getElementById("filtro_id");
let nombre = document.getElementById("filtro_nombre");
let apellido = document.getElementById("filtro_apellido");
let edad = document.getElementById("filtro_edad");
let ego = document.getElementById("filtro_ego");
let ciudad = document.getElementById("filtro_ciudad");
let publicado = document.getElementById("filtro_publicado");
let enemigo = document.getElementById("filtro_enemigo");
let robos = document.getElementById("filtro_robos");
let asesinatos = document.getElementById("filtro_asesinatos");

let filtros = {
    id: id.checked,
    nombre: nombre.checked,
    apellido: apellido.checked,
    edad: edad.checked,
    alterEgo: ego.checked,
    ciudad: ciudad.checked,
    publicado: publicado.checked,
    enemigo: enemigo.checked,
    robos: robos.checked,
    asesinatos: asesinatos.checked
};


let array_heroes = [];
let array_villanos = [];
let registros = [];

CargarDatos(data, array_heroes, array_villanos);
MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
ManejarEventosCheckbox(filtros);

// maneja el cambio de tipo de Persona
tipo.addEventListener("change", function(){
    MostrarDatos(tabla, array_heroes, array_villanos, tipo.value);
});

// maneja el evento click en el boton promedio
document.getElementById("btn_promedio").addEventListener("click", () =>{
    let cant = 0;
    let suma = 0;
    let promedio = 0;

    console.log(registros);
    registros.forEach(element => {
        if(!isNaN(element.edad)){
            cant++;
            suma = suma + element.edad;
        }
    });

    promedio = suma / cant;

    document.getElementById("txb_promedio").value = promedio;

});

// Muestra el modal al hacer click en el boton agregar
document.getElementById("btn_agregar").addEventListener("click", () =>{
    document.getElementById("modal_abm").style = "display: flex;";
});
document.getElementById("modal_close").addEventListener("click", () =>{
    document.getElementById("modal_abm").style = "display: none;";
});

document.getElementById("accion_agregar").addEventListener("click", () =>{
    const id  = document.getElementById("abm_id").value;
    const nombre  = document.getElementById("abm_nombre").value;
    const apellido  = document.getElementById("abm_apellido").value;
    const edad  = document.getElementById("abm_edad").value;
    const ciudad  = document.getElementById("abm_ciudad").value;
    const tipo  = document.getElementById("abm_tipo").value;
    const alter_ego  = document.getElementById("abm_alter_ego").value;
    const publicado  = document.getElementById("abm_publicado").value;
    const enemigo  = document.getElementById("abm_enemigo").value;
    const robos  = document.getElementById("abm_robos").value;
    const asesinatos  = document.getElementById("abm_asesinatos").value;

    switch(tipo){
        case "heroe":
            if(nombre !== "" && apellido !== "" && edad !== ""  && 
                ciudad !== "" && alter_ego !== "" && publicado !== "")
            {
                let id_generado = 1;
                registros.forEach(registro => {
                    if(registro.id == id_generado){
                        id_generado ++;
                    }
                });

                let heroe = new Heroe(id_generado, nombre, apellido, edad, alter_ego, ciudad, publicado);
                array_heroes.push(heroe);
                MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);

            }      
            else console.log("Error al cargar Persona. Faltan parametros.");
            break;
        case "villano":
            break;
    }
    
});


function ManejarEventosCheckbox(filtros){
    id.addEventListener("change", () =>{
        filtros["id"] = id.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });

    nombre.addEventListener("change", () =>{
        filtros["nombre"] = nombre.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });

    apellido.addEventListener("change", () =>{
        filtros["apellido"] = apellido.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });

    edad.addEventListener("change", () =>{
        filtros["edad"] = edad.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    ego.addEventListener("change", () =>{
        filtros["alterEgo"] = ego.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    ciudad.addEventListener("change", () =>{
        filtros["ciudad"] = ciudad.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    publicado.addEventListener("change", () =>{
        filtros["publicado"] = publicado.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    enemigo.addEventListener("change", () =>{
        filtros["enemigo"] = enemigo.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    robos.addEventListener("change", () =>{
        filtros["robos"] = robos.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
    asesinatos.addEventListener("change", () =>{
        filtros["asesinatos"] = asesinatos.checked;
        MostrarDatos(tabla, array_heroes, array_villanos, tipo.value, filtros);
    });
}

function CargarDatos(data, array_heroes, array_villanos){
    data = JSON.parse(data);
    data.forEach(element => {
        const id = element.id;
        const nombre = element.nombre;
        const apellido = element.apellido;
        const edad = element.edad;

        // es Heroe
        if(element.alterego !== undefined && element.ciudad !== undefined && element.publicado !== undefined){
            const alterego = element.alterego;
            const ciudad = element.ciudad;
            const publicado = element.publicado;

            const heroe = new Heroe(id, nombre, apellido, edad, alterego, ciudad, publicado);
            array_heroes.push(heroe);
        }
        
        else if(element.enemigo !== undefined && element.robos !== undefined && element.asesinatos !== undefined){
            const enemigo = element.enemigo;
            const robos = element.robos;
            const asesinatos = element.asesinatos;

            const villano = new Villano(id, nombre, apellido, edad, enemigo, robos, asesinatos);
            array_villanos.push(villano);
        }
        else{
            console.log("Error al convertir datos.");
        }
    });
}

function MostrarDatos(tabla, array_heroes, array_villanos, tipo, filtros){
    let tbody = tabla.querySelector("tbody");
    let thead = tabla.querySelector("thead");
    registros = [];

    tbody.innerHTML = "";
    thead.innerHTML = "";

    switch (tipo) {
        case "todos":
            array_heroes.forEach(element => {
                let registro = {
                    id: element.id,
                    nombre: element.nombre,
                    apellido: element.apellido,
                    edad: element.edad,
                    alterEgo: element.alterEgo,
                    ciudad: element.ciudad,
                    publicado: element.publicado,
                    enemigo: "N/A",
                    robos: "N/A",
                    asesinatos: "N/A"
                }
                registros.push(registro);
            });
            array_villanos.forEach(element => {
                let registro = {
                    id: element.id,
                    nombre: element.nombre,
                    apellido: element.apellido,
                    edad: element.edad,
                    alterEgo: "N/A",
                    ciudad: "N/A",
                    publicado: "N/A",
                    enemigo: element.enemigo,
                    robos: element.robos,
                    asesinatos: element.asesinatos
                }
                registros.push(registro);
            });
            break;

        case "heroe":
            array_heroes.forEach(element => {
                let registro = {
                    id: element.id,
                    nombre: element.nombre,
                    apellido: element.apellido,
                    edad: element.edad,
                    alterEgo: element.alterEgo,
                    ciudad: element.ciudad,
                    publicado: element.publicado,
                    enemigo: "N/A",
                    robos: "N/A",
                    asesinatos: "N/A"
                }
                registros.push(registro);
            });
            break;

        case "villano":
            array_villanos.forEach(element => {
                let registro = {
                    id: element.id,
                    nombre: element.nombre,
                    apellido: element.apellido,
                    edad: element.edad,
                    alterEgo: "N/A",
                    ciudad: "N/A",
                    publicado: "N/A",
                    enemigo: element.enemigo,
                    robos: element.robos,
                    asesinatos: element.asesinatos
                }
                registros.push(registro);
            });
            break;
        }

    let tr = document.createElement("tr");
    thead.appendChild(tr);

    for (let campo in filtros) {
        if (filtros[campo] === false) {
            registros.forEach(element => {
                delete element[campo];
            });
        }
        else{
            let th = document.createElement("th");
            tr.appendChild(th);
    
            let btn = document.createElement("button");
            th.appendChild(btn);
            btn.appendChild(document.createTextNode(campo));
            btn.classList.add("btn");
            btn.classList.add("btn-outline-info");

        }
    }



    registros.forEach(element => {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (var propiedad in element) {
            if (element.hasOwnProperty(propiedad)) {
                let td = document.createElement("td");
                tr.appendChild(td);
                td.appendChild(document.createTextNode(element[propiedad]));
                td.setAttribute(propiedad, element[propiedad]);
            }
        }
    });
}



