
function ParouImpar() {
    let numero = document.getElementById("num").value
    let resp = document.getElementById("resp")

    if (numero === "") {
        resp.textContent = "Digite um número!";
    }
    else if (numero % 2 == 0) {
        resp.textContent = "Par"
    }

    else {
        resp.textContent = "Impar"
    }
}