

let usuarioElije = prompt ("Elije PIEDRA PAPEL O TIJERA").toLowerCase();

if (usuarioElije === "piedra" || usuarioElije === "papel" || usuarioElije === "tijera"){
    juego(usuarioElije);
}else{
    console.log ("Opción incorrecta, vuelve a intentarlo")
}
//juego(usuarioElije)


function juego (usuarioElije){

    console.log("Elegiste " +usuarioElije);

    let opcion = ["piedra", "papel", "tijera"];

    let maquina = opcion [Math.floor(Math.random() * 3)];

console.log("La máquina eligió " + maquina);
    if (usuarioElije === maquina){
        console.log ("EMPATE")
    }else if ((usuarioElije === "piedra" && maquina === "tijera") || (usuarioElije === "tijera" && maquina === "papel") ||
    (usuarioElije === "papel" && maquina === "piedra" )){
    console.log ("GANASTE")
}else{
    console.log ("PERDISTE")
}}
