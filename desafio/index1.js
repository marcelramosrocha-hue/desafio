/*Instruções para entrega
 Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
  
Bons estudos*/

//-------------------------------------------------------------------------//

//Primeira maneira de fazer com if e else
function ranking(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    if(vitorias <= 10){
        nivel = "Ferro";
    } else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    } else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    } else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro";
    } else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    } else if(vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return `O Herói tem de saldo ${saldoVitorias} está no nível de ${nivel}`;
}
console.log(ranking(900, 20))

//Segunda maneira de fazer com switch case
function ranking(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel = ""; 
    switch(true){
        case saldoVitorias <= 10:
            nivel ="Ferro";
            break;
        case saldoVitorias <= 20:
            nivel = "Bronze";
            break;  
        case saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias <= 90:
            nivel = "Diamante";
            break; 
        case saldoVitorias <= 100:
            nivel = "Lendário";
            break;  
        default:
            nivel = "Imortal";
    }
    return `O Herói tem de saldo ${saldoVitorias} está no nível de ${nivel}`;

}

let vitorias = 40;
let derrotas = 25;

console.log(ranking(vitorias , derrotas));
