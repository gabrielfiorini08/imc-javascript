let peso = parseFloat(prompt("Informe seu peso para calcular seu IMC: "));
let altura = parseFloat(prompt("Informe à sua altura para calcular seu IMC: "));
let imc = (peso / (altura * altura)).toFixed(2);

document.write("<strong>Seu IMC é igual a ", imc);
document.write("<br>")

if (imc >= 18.5 && imc <=24.9){
    document.write("<strong>O seu peso está normal!")
    
}else if(imc>=25 && imc <= 29.99){
    document.write("<strong>Você está sobrepeso!")

}else if((imc >= 30 && imc <= 34.99)){
    document.write("<strong>Você está com obesidade grau I !")
}else {
    document.write("<strong>Você está abaixo do peso ou obesidade!")
}







