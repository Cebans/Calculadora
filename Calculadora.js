class Calculadora {
    sumar(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    resta(num1, num2) {
        if(parseFloat(num1) == parseFloat(num2)){
            return '0';
        }else{
            return parseFloat(num1) - parseFloat(num2);
        }
    }

    multiplicar(num1, num2) {
        if(parseFloat(num1)==0 || parseFloat(num2)==0){
            return '0';
        } else {
            return parseFloat(num1) * parseFloat(num2);   
        }
    }

    dividir (num1, num2) {
        if(parseFloat(num2)==0){
            return 'Syntax error';
        } else {
            return parseFloat(num1) / parseFloat(num2);
        }
    }
}