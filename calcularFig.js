//CODIGO PARA CALCULAR PERIMETRO Y AREA  DEL CUADRADO
//NOTA: comparar codigo con el archivo calcularFiguras.js

console.group("CUADRADO")

function perimetroCuadrado(lado) {
    return lado * 4
    
}


function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd()

//CODIGO PARA CALCULAR PERIMETRO Y AREA  DEL TRIANGULO
console.group("TRIANGULO")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

console.groupEnd()




//CÓDIGO DEL CIRCULO
console.group("CIRCULO")
const PI = Math.PI

function diametroCirculo(radio) {
    return radio * 2
}

function perimetroCirculo(radio) {
   const diametro =  diametroCirculo(radio) //llamando una función dentro de otra función
return diametro * PI
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd()

//CONECTANDO CON EL HTML



function calculaPeriCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value //para obtener el valor que ingresa por la variable anterior

    const perimetro = perimetroCuadrado(value) // llamando función ya declarada y value es la constante anterior
    alert(perimetro) //este alert mostrará lo que llega de la constante anterior
}

function calculaAreaCuadrado () {
    const input = document.getElementById("inputCuadrado")
    const value = input.value //para obtener el valor que ingresa por la variable anterior

    const area = areaCuadrado(value) // llamando función ya declarada y value es la constante anterior
    alert(area) //este alert mostrará lo que llega de la constante anterior
}


// CALCULANDO AREA Y PERIMETRO DEL TRIANGULO
//Falta llamar los nuevos inputs
function calculaPeriTriangulo() {
    const inputTri = document.getElementById("inputTriangulo") 
    const valueTri = inputTri.value

    const perimetroTri = perimetroTriangulo(valueTri)
    alert(perimetroTri)
    console.log(perimetroTri);
}

function calculaAreaTriangulo() {
    const inputTri = document.getElementById("inputTriangulo") 
    const valueTri = inputTri.value

    const areaTri = areaTriangulo(valueTri)
    alert(areaTri)
}
