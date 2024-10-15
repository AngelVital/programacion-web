function calcular(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                alert("No se puede dividir entre 0");
                return "Error"; 
            }
            return num1 / num2;
        default:
            return 'Operación no válida';
    }
}

const num1 = parseFloat(prompt('Ingresa el primer número:'));
const num2 = parseFloat(prompt('Ingresa el segundo número:'));
const operacion = prompt('Elige una operación (+, -, *, /):');

const resultado = calcular(num1, num2, operacion);
alert(`El resultado es: ${resultado}`);
