// Get all the name for the form

const formRuleRamdom = document.getElementById("form-page-rulet-ramdom");

const containerNames = document.querySelector(".container-rulet-place-paticipants");

let datesForm = {}; // I make it display on the screen

let datesFormGame = []; // I'll use it for the game.

formRuleRamdom.addEventListener("submit",(e)=>{
    e.preventDefault();
    const info = new FormData(e.currentTarget);
    datesForm = Object.fromEntries(info);
    datesFormGame.push(Object.fromEntries(info));

    containerNames.innerHTML += `
        <div class="container-rulet-place-paticipants-container-name">
            <p>Participante: ${datesForm.nameperson}</p>
        </div>
    `;
    e.currentTarget.reset(datesFormGame);
})


// We Have the game

const buttonStarsGame = document.querySelector(".form-rulet-manipulatet-buttom-stars-game");
let stopsWhile = true;
buttonStarsGame.addEventListener("click", (e)=>{
    while(stopsWhile == true){
        
        for(let i = 0; i < datesFormGame.length; i++){
            const numberRamdom = Number(Math.floor(Math.random()*10));
            const containerResultRulet = document.querySelector(".container-result-rulet");

            if(i == numberRamdom){
                containerResultRulet.innerHTML = `
                    <h3>Enhorabuena al "afortunado": ${datesFormGame[i].nameperson}</h3>
                    <button class="result-rulet-deletet-button">Borrar todo</button>
                `;
                stopsWhile = false;
            // Borrar todo
                const resultRuletDeletetButton = document.querySelector(".result-rulet-deletet-button");
                resultRuletDeletetButton.addEventListener("click", ()=>{
                    location.reload();
                })
                break
            }
        }
    }

})












