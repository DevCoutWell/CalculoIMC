const altura = document.getElementById("ialtu");
const peso = document.getElementById("ipeso");

const btnCalcImc = document.getElementById("btCalimc");
const btnLimpar = document.getElementById("btLimpar");


const resImc = document.getElementById("vImc");
const resclassif = document.getElementById("vclassif");

const aparecerResult = document.getElementById("sectionresult");

const bblur = document.getElementById("desfocar");



btnLimpar.addEventListener("click", function(event){

  event.preventDefault();

  
    if(peso.value || altura.value){


            bblur.classList.add("blur");

      setTimeout(() => {

        

        if(confirm("Deseja mesmo limpar os campos?")){

            peso.value = "";
            altura.value = "";
            

        };

        bblur.classList.remove("blur");

      }, 500);  
    };

});









btnCalcImc.addEventListener("click", function(event){
    
    event.preventDefault();
    
    let resultadoImc = calcularImc();

    if (resultadoImc){

        let classificacao = verificarClassif(resultadoImc);
        
        mostrarResultado(resultadoImc, classificacao);

    }


    



});








function calcularImc(){

    const altConv = Number(altura.value);
    const pesoConv = Number(peso.value);

    const altIsnan = isNaN(altura.value);
    const pesoIsnan = isNaN(peso.value);


    if(pesoIsnan || altIsnan){

        bblur.classList.add("blur");
        aparecerResult.classList.add("escondido");
            setTimeout(() => {

                alert("Informe Valores Válidos!");
                bblur.classList.remove("blur");
                
            }, 400);

            return;

    }



    if(!altura.value || !peso.value ){

    
        bblur.classList.add("blur");
        aparecerResult.classList.add("escondido");
            setTimeout(() => {

                alert("Informe Valores para peso e altura!");
                bblur.classList.remove("blur");
                
            }, 400);
        
       return;
        
    };

    
    let res = (pesoConv / (altConv * altConv)).toFixed(2);

    return Number(res);

};











function verificarClassif(resultado){

    

    if(resultado < 18.5){

        return "Magreza";

    }
    else if(resultado < 25){

        return "Normal";
    }
    else if(resultado < 30){

        return "Sobrepeso";
    }
    else if(resultado < 35){

        return "Obesidade grau I";
    }
    else if(resultado < 40){

        return "Obesidade grau II";
    }

    return "Obesidade grau III";
           
};
 

function mostrarResultado(resultadoImc, classificacao){

    resImc.textContent = resultadoImc;
    resclassif.textContent = classificacao;
    aparecerResult.classList.remove("escondido");

};























