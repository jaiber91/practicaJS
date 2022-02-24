//CODIGO PARA CALCULAR PERIMETRO Y AREA  DEL CUADRADO
console.group("CUADRADO")
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado


console.log("Este lado mide: " + ladoCuadrado + "cm");
console.log("el perimentro es: " + perimetroCuadrado + "cm");
console.log("el area es:" + areaCuadrado + "cm2");

console.groupEnd()

//CODIGO PARA CALCULAR PERIMETRO Y AREA  DEL TRIANGULO
console.group("TRIANGULO")
const lado1 = 6
const lado2 = 6
const base = 4
const altura = 5.5
const perimetroTriangulo = lado1 + lado2 + base
const areaTriangulo = (base * altura) / 2


console.log("los lados del triangulo miden:"
+lado1
+"cm, "
+lado2 
+"cm ,"
+base
+"cm"

);
console.log("la altura del triangulo es de: " + altura + "cm");
console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("el area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd()

//CÓDIGO DEL CIRCULO
console.group("CIRCULO")
//Radio
const radioCirculo = 4 
console.log("el radio es: " + radioCirculo + "cm") ;
//Diametro
const diametroCirculo = radioCirculo * 2
console.log("el diametro es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI
console.log("PI es: " + PI);

//Circunferencia
const perimentroCirculo = diametroCirculo * PI
console.log("el perimetro es: " + perimentroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI 
console.log("el área es: " + areaCirculo + "cm2");


console.groupEnd()