//Ler 10 números e imprimir quantos são pares e quantos são ímpares.

let even = 0;
let odd = 0;

for(let i=0;i<10;i++){
    const numText = prompt(`Enter a number (${10-i} left):`);
    const num = Number(numText);

    if(num%2==0){
        even++;
    }else{
        odd++;
    }
}

document.write(`You entered ${even} even and ${odd} odd numbers.`);