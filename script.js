// ejercicio 1
const cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];

//ejercicio 2
function chauchat(cargador) {
    for (let i = 0; i < cargador.length; i++) {
        console.log(cargador[i]);
    }
}
const cargador2 = ["pium!", "pium!", "pium!"];

chauchat(cargador2);

//ejercicio 3
function chauchat(cargador) {
    // 80% de probabilidad de quedarse pillada
    if (Math.random() < 0.8) {
        console.log("Illo, me he quedao pillá!");
        return; // No disparamos
    }

    // Si no se queda pillada, disparamos normalmente
    for (let i = 0; i < cargador.length; i++) {
        console.log(cargador[i]);
    }
}

const cargador3 = ["pium!", "pium!", "pium!"];
chauchat(cargador);

