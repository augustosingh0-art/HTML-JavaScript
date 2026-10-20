for(let i = 0;i < 6; i ++){
    console.log("Hola mundo");
}


let a = prompt("Ingresar un nombre");
for(i = 0; i < 5 ; i++){
    console.log(a);
}

//CICLOS WHILE

let contador = 0;
    while (contador <5){
    console.log(contador);
    contador +=1;
} 

//CICLO INFIITO
//while(true){
//    console.log("Hola mundo");
//}

for(let i = 0 ; i<11 ; i ++){
    if(i === 5){
        break;
    }
    console.log(i);
}

for(let i = 0 ; i<11 ; i ++){
    if(i === 7){
        continue;
    }
    console.log(i);
}

let cont = 0;
while(true){
    if(cont === 5){
        break;
    }
    console.log(contador);
    cont +=1;
}

let conta = 0;
while(conta < 7){
    conta +=1;
    if(conta === 3){
        continue;
    }
    console.log(conta);
}





let nom = "Nahuel";
let c = nom.length;
console.log(c);