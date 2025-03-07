let valor = 0

function contador(){
    const resultado = document.getElementById("valor")

    valor = valor +1

    resultado.textContent = valor

    console.log(resultado)
}
function decrementar (){
    const resultado = document.getElementById("valor")
    valor = (valor - 1)

    if (valor < 0){
        valor = 0
        resultado.textContent = valor
    }
    else {
        resultado.textContent = valor
    }

    console.log(valor)
}
function resetar(){
    const resultado = document.getElementById("valor")
    valor = 0

    resultado.textContent = valor

    console.log(valor)
}


