/*
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
-o número de pessoas calmas; 
-o número de mulheres nervosas; 
-o número de homens agressivos; 
-o número de outros calmos;
-o número de pessoas nervosas com mais de 40 anos; 
-o número de pessoas calmas com menos de 18 anos.
*/

let calm = 0;
let nervousF = 0;
let aggressiveM = 0;
let calmO = 0;
let nervousOver40 = 0;
let calmUnder18 = 0;
let i = 0;

while(i<150){
    const ageText = prompt('Age: ');
    const age = Number(ageText);
    const sexText = prompt('Sex:\n\n1 - Female\n2 - Male\n3 - Others');
    const sex = Number(sexText);
    const temperText = prompt('Temper:\n\n1 - Calm\n2 - Nervous\n3 - Aggressive');
    const temper = Number(temperText);

    switch(temper){
        case 1: //calm
            calm++;
            if(sex==3){
                calmO++;
            }
            if(age<18){
                calmUnder18++;
            }
            break;
        case 2: //nervous
            if(sex==1){
                nervousF++;
            }
            if(age>40){
                nervousOver40++;
            }
            break;
        case 3: //aggressive
            if(sex==2){
                aggressiveM++;
            }
            break;
    }

    i++;
}

document.write(`
                ${calm} people identified as calm.<br>
                ${nervousF} people identified as nervous women.<br>
                ${aggressiveM} people identified as aggressive men.<br>
                ${calmO} people of unlisted gender identified as calm.<br>
                ${nervousOver40} people over 40 years old identified as nervous.<br>
                ${calmUnder18} people under 18 years old identified as calm.
                `);
