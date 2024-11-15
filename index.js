let nomeHeroi = "Arthur"
let numeroDeBatalhas = 1000
let xpHeroi = 0
let nivelHeroi = ""
let expBatalha = 15

for (xpHeroi = 0; xpHeroi<(expBatalha * numeroDeBatalhas); xpHeroi++) {
    
console.log(xpHeroi)

if (xpHeroi<=1000){nivelHeroi = "Ferro"}
else if(1001<=xpHeroi && xpHeroi<=2000){nivelHeroi = "Bronze"}
else if(2001<=xpHeroi && xpHeroi<=5000){nivelHeroi = "Prata "}
else if(5001<=xpHeroi && xpHeroi<=7000){nivelHeroi = "Ouro"}
else if(7001<=xpHeroi && xpHeroi<=8000){nivelHeroi = "Platina"}
else if(8001<=xpHeroi && xpHeroi<=9000){nivelHeroi = "Ascendente"}
else if(9001<=xpHeroi && xpHeroi<=10000){nivelHeroi = "Imortal"}
else if(xpHeroi>=10001){nivelHeroi = "Radiante"}
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)