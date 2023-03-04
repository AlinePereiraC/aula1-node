//const prompt = require ("prompt-sync")()

import PromptSync from "prompt-sync"
const prompt =  PromptSync()

const nome= prompt("DIGITE SEU NOME:")

console.log (`Olá ${nome}!`)

const temp = Number (prompt("digite a temperatura:"))

if (temp >38){
    console.log("febre")

}else if (temp <26) {
    console.log("MORREU")
}

else {
        console.log("tudo ok")
    }


    
    
    