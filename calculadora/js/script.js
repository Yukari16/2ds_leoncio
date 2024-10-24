//Faz Referê aos elementos DOM
//alert("Funcionou")
const numero1 = document.querySelector ('#numero1')
const numero2 = document.querySelector ('#numero2')
const btnCalcular = document.querySelector ('#btn-calcular')
const btnLimpar = document.querySelector ('#btn-limpar')
const resultado = document.querySelector ('.resultado')
const divisao = document.querySelector ('.divisao')
const adicao = document.querySelector ('.adicao')
const subtracao = document.querySelector ('.subtracao')
const multiplicacao = document.querySelector ('.multiplicacao')
//Criação a Função Calcular

function botao(){
 
}

function calcular(){
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    if(typeof n1 === 'number' && typeof n2 === 'number') {

        const add = `O Resultado da Adição ${n1} + ${n2} = ${n1+n2}`
        adicao.innerHTML = add
        //alert(adicao)

        const sub = `O Resultado da Subtração ${n1} - ${n2} = ${n1-n2}`
        subtracao.innerHTML = sub
        //alert(subtracao)

        const mul = `O Resultado da Multiplicação ${n1} x ${n2} = ${n1*n2}`
        multiplicacao.innerHTML = mul
        //alert(multipliacacao)

        const div = `O Resultado da Divisão ${n1} / ${n2} = ${n1/n2}`
        divisao.innerHTML = div
        //alert(divisao)
    } else{
        alert('Por favor, digeite um número legitimo')
    }
}
//Adiciona Esculta de Evento
btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault() //Tirar o comportamento padrão
    calcular()
})
