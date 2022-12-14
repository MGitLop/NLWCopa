function createGame(player1,hour,player2){
    return `
    <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
     </li>
    
    `
}

let  _delay = -0.4;

function createCard(date,day,games){
    _delay = _delay + 0.4;
    return `
   <div class="card" style="animation-delay: ${_delay}s">
   <h2>${date}<span>${day}</span> </h2>
   <ul>
      ${games}  
   </ul>
 </div>
   `
}

document.querySelector("#cards").innerHTML =
    
      createCard('24/11','Quinta',
      createGame('brazil','07:00','serbia')
      ) +
      createCard('28/11','Segunda',
        createGame('brazil','13:00','switzland') +
        createGame('portugal','16:00','urugay')
      ) +  
      createCard('02/12','Sexta',
        createGame('brazil','16:00','cameroon')
      )
