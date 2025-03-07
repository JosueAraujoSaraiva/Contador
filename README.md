# Contador Simples

Este é um projeto simples de contador desenvolvido com **HTML, CSS e JavaScript**. O contador pode **incrementar, decrementar** e **resetar** o valor exibido.

## 🚀 Tecnologias Utilizadas
- HTML5
- CSS
- JavaScript

## 📌 Funcionalidades
- Exibe um número inicial **0** na tela.
- O botão **Incrementar** aumenta o valor em **1**.
- O botão **Decrementar** reduz o valor em **1**, mas não permite números negativos.
- O botão **Resetar** redefine o contador para **0**.

## 📂 Estrutura do Projeto
```
/
|-- index.html  (Estrutura do contador)
|-- script.js   (Lógica de incremento, decremento e reset)
|-- style.css   (Designer)
```

## 🔧 Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/contador-simples.git
   ```
2. Abra o arquivo `index.html` no navegador.
3. Utilize os botões para interagir com o contador.

## 📜 Código Principal
### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <title>Contador Simples</title>
</head>
<body>
    <h1>Contador Simples</h1>
    <button onclick="contador()">Incrementar</button>
    <button onclick="decrementar()">Decrementar</button>
    <button onclick="resetar()">Resetar</button>
    <h2 id="valor">0</h2>
</body>
</html>
```

### JavaScript (script.js)
```js
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


```

## 🎨 Melhorias Futuras
- Adicionar animações ao alterar os valores.
- Permitir definir um valor inicial personalizado.

## 📜 Licença
Este projeto está sob a licença **MIT**.

