//Escrever um programa que receba vários números inteiros no teclado. E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)

let multipleOf3Count = 0;
let multipleOf3Sum = 0;
let numText = prompt('Enter a integer: ');
let num = Number(numText);

do{
    if(num%3==0){
        multipleOf3Count++;
        multipleOf3Sum+=num;
    }
    numText = prompt('Enter another integer: ');
    num = Number(numText);
}while(num!=0);

const multipleOf3Avg = multipleOf3Sum/multipleOf3Count;

document.write(`
                Multiples of 3 entered: ${multipleOf3Count}<br>
                Multiples of 3 sum: ${multipleOf3Sum}<br>
                Multiple of 3 average: ${Math.round(multipleOf3Avg)}<br>
                `);