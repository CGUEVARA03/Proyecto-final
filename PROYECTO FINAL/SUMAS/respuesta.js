
cargarPregunta(0);

function cargarPregunta(index){
 objetoPregunta = basepreguntas[index];

let Opcion = [...objetoPregunta.distractores];


for(let i = 0; i < 4; i++) {
    Opcion.sort(()=>Math.random() - 0.5);
}

Opcion.push(objetoPregunta.respuesta)
document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
document.getElementById("Opcion-1").innerHTML = objetoPregunta = Opcion[0];
document.getElementById("Opcion-2").innerHTML = objetoPregunta = Opcion[1];
document.getElementById("Opcion-3").innerHTML = objetoPregunta = Opcion[2];
document.getElementById("Opcion-4").innerHTML = objetoPregunta = Opcion[3];
document.getElementById("Opcion-5").innerHTML = objetoPregunta = Opcion[4];
}

async function selecionarOpcion(index){
    let validezRespuesta = Opcion[index] == objetoPregunta.respuesta;
    if (validezRespuesta){
        await Swal.fire({

            title: "Respuesta Corecta",
            text: "LA respuesta ha sido correcta",
            icon: "success"
    });
}else{
 await Swal.fire({
    title:"Respuesta incorrecta",
text:`La respuesta correcta es ${objetoPregunta.respuesta}`,
   icon:"error"
});
}

}

function ayuda(){
    
    Swal.fire({
        title: 'ayuda',
        text: objetoPregunta.ayuda,
        imageUrl: objetoPregunta.ayudaImg,
        imageHeight: 200,
      });
     
}


