let pecas = 220;
let listaDePecas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11"];
let identificacaoDePecas = ["PARAFUSO", "RUELA", "PORCA", "PREGO"]

if (pecas >= 100){
    console.log (" impossivel cadastrar. Peso superior a 100 gramas")
}
else { console.log (" Cadastro Aceito")}
   
if (listaDePecas >=10) {
    console.log (" não há capacidade suficiente")
}
else { console.log (" Capacidade Suportada")}

if(identificacaoDePecas[0].length < 3){
    console.log("ERRO");
} else {
    console.log("sucesso"); }

    if(identificacaoDePecas[1].length < 3){
        console.log("ERRO");
    } else {
        console.log("sucesso"); }

        if(identificacaoDePecas[2].length < 3){
            console.log("ERRO");
        } else {
            console.log("sucesso"); }

            if(identificacaoDePecas[3].length < 3){
                console.log("ERRO");
            } else {
                console.log("sucesso"); }