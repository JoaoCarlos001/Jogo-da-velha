let res = document.getElementById('res')

document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){

    let square = event.target;
    let pos = square.id;

    if(handleMove(pos)){
        setTimeout(()=>{
        alert(`TEMOS UM VENCEDOR - QUEM GANHOU FOI  ${playerTime}` )
        }, 10);

        res.innerHTML = `${playerTime} ganhou o jogo !`

    };

    updateSquares(pos);
}

// function updateSquare(pos){
//     let square = document.getElementById(pos.toString());
//     let symbol = board[pos];
//     square.innerHTML = `<div class='${symbol}'></div>`
// }

function updateSquares(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let pos = square.id;
        let symbol = board[pos];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}


