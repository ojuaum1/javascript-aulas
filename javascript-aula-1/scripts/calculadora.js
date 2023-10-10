
    function calcular(){//soma
        event.preventDefault();//parar o submit do formulario

        let n1 = parseFloat(document.getElementById(`n1`).value);
        let n2 = parseFloat(document.getElementById(`n2`).value);
        let op = document.getElementById('operacao').value;
        let resultado;

        if (isNaN(n1) || isNaN(n2)) {
        alert("e necessario digitar um numero" )  
        }

        //switch case que o richard me lembrou
        switch (op) {
            case '+':
                resultado = somar(n1,n2)
                break;
            case '-':
                resultado = subtrair(n1,n2)
                break;
            case '/':
                resultado = divisao(n1,n2)
                break;
            case '*':
                resultado = multiplicacao(n1,n2)
                break;
        
            default:
                alert(`A operacao nao foi selecionada!`)
                break;
        }        
// inserir o resultado html (dom)
        document.getElementById('result').innerText = resultado; 

        alert(`resultado = ${resultado}`)    
    }

    function subtrair(n1, n2) 
    {
        
        return n1 - n2;
    }

    function somar(n1, n2)
    {
        return n1 + n2;
    }

    function multiplicacao(n1, n2)
    {
        return n1 * n2;
    }

    function divisao(n1, n2)
    {
        return n1 / n2;
        if (y == 0)
        {
return"nao e possivel dividir por zero"
        }
        return x/uy;
    }

