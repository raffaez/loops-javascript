//Crie um programa que leia um número do teclado até que encontre um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)
let sum = 0;
let numText = prompt('Enter a number: ');
let num = Number(numText);

do{
    sum+=num;
    numText = prompt('Enter a number: ');
    num = Number(numText);
}while(num!=0);

document.write(`Total: ${sum}`);