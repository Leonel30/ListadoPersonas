const personas =[
    new Persona("Juan", "Perez"),
    new Persona("Karla", "Velazco"),
    new Persona ("Bruno", "Diaz")
];

function mostrarPersonas(){
    console.log("mostrando personas...")
    let texto= "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li> ${persona._nombre} ${persona.apellido} </li>`;
    }
    document.getElementById("personas").innerHTML =texto;
}
function agregarPersonas(){
    const forma = document.forms["form"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if( nombre.value != "" && apellido.value !="" ){ 
    const persona = new Persona(nombre.value , apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    mostrarEnvioCorrecto("Datos Enviados Exitosamente");
    }else{
        mostrarError("todos los campos son obligatorios");
    };
}
const formulario = document.querySelector("#form")

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    console.log(error);

    formulario.appendChild(error);
    setTimeout(()=>{
        error.remove();
    },3000);
}

function mostrarEnvioCorrecto(mensaje){
    const envioCorrecto = document.createElement('P');
    envioCorrecto.textContent = mensaje;
    envioCorrecto.classList.add("envio");
    console.log(envioCorrecto);
    formulario.appendChild(envioCorrecto);
    setTimeout(() => {
        envioCorrecto.remove();
    },5000);
}