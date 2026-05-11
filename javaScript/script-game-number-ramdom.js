

const buttomStars = document.querySelector(".buttom-star-game")
const containerResult = document.querySelector(".container-appear-number-ramdom")
const containerGamerNumberRamdomContainerBody = document.querySelector(".body-game-number-ramdom-container-body")

let numberRamdom = 0;
let numberCalculation = 0;


buttomStars.addEventListener("click", ()=>{
    numberCalculation = Number(prompt("Escoge el modo de juego: 10, 100, 1000"));
    if(numberCalculation >= 10 && numberCalculation <= 1000){
        numberRamdom = Math.floor(Math.random()*numberCalculation); 
        setTimeout(()=>{
            containerResult.innerHTML = `
                <p class="the-number-ramdom">${numberRamdom}</p>
                <p>Enhorabuena al desafortunado, jajajaja ("Aviso, puede estar manipulado el juego... o quizás no?")</p>
                <button class="button-delete-game-number-ramdom">Borrar todo</button>
            `;
            const buttonDeleted = document.querySelector(".button-delete-game-number-ramdom");
            buttonDeleted.addEventListener("click", ()=>{
                containerResult.innerHTML = ``;
            });
        },5000);   
    }else{
        alert("Escoge un número entre el 10 - 1000");
    }

});



