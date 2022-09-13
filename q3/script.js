//Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. (WHILE)

let ageText = prompt('Enter your age (-99 to stop): ');
let age = Number(ageText);
let under21 = 0;
let over50 = 0;

while(age != -99){
    if(age<21){
        under21++;
    }else if(age>50){
        over50++;
    }
    ageText = prompt('Enter your age (-99 to stop): ');
    age = Number(ageText);
}

document.write(`People under 21: ${under21}<br>People over 50: ${over50}`);