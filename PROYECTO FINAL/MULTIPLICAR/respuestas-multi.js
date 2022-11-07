
cargarPregunta(0)

function cargarPregunta(index){
let objetoPregunta = basepreguntas[index]
let OP1 = [...objetoPregunta.distractores]


for(let i = 0; i < 4; i++ ){
    OP1.sort(()=>Math.random()- 0.5);
}

OP1.push(objetoPregunta.respuesta)
document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
document.getElementById("OP1").innerHTML = objetoPregunta = OP1[0]
document.getElementById("OP2").innerHTML = objetoPregunta = OP1[1]
document.getElementById("OP3").innerHTML = objetoPregunta = OP1[2]
document.getElementById("OP4").innerHTML = objetoPregunta = OP1[3]
document.getElementById("OP5").innerHTML = objetoPregunta = OP1[4]


async function selecionarOP1(index){
    let validez = OP1[index] == objetoPregunta.respuesta
    if (validezRespuesta){
        await Swal.fire({

            title: "Respuesta Corecta",
            text: "La respuesta ha sido correcta",
            icon: "success"
    });
}else{
 await Swal.fire({
    title:"Respuesta incorrecta",
text:'La respuesta correcta es ${objetoPregunta.respuesta}',
   icon:"success"
})

}  
}
}
