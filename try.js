// let player=[{name : "player01", dice: [], win:[] , score: 0},{name : "player02", dice:[], win:[], score: 0}]

// console.log(play(3))
// console.log(player[0].score)
// console.log(player[1].score)





// function roll(i){
//     player[0].dice[i]=Math.floor(Math.random()*6)+1;
//     player[1].dice[i]=Math.floor(Math.random()*6)+1;
// }


// function play(round){
//     for(let i=0;i<round;i++){
//         roll(i)
//         console.log("Round :"+`${i+1}`)
//         console.log(win(i))
//     }
//     console.log("The Winner : " + gameWin())
// }

// function win(i){
//     if(player[0].dice[i] > player[1].dice[i]){
//         player[0].score+=1
//         player[0].win[i]="Win"
//         player[1].win[i]="Lose"

//         return `${player[0].name} : ${player[0].win[i]} \n`

//     }
//     else if (player[0].dice[i] < player[1].dice[i]){
//         player[1].score+=1
//         player[0].win[i]="Lose"
//         player[1].win[i]="Win"

//         return `${player[1].name} : ${player[1].win[i]} \n`

//     }
//     else if(player[0].dice[i] = player[1].dice[i]){
//         player[0].win[i]="Draw"
//         player[1].win[i]="Draw"

//         return `${player[0].name} & ${player[1].name} : Draw \n`
//     }
// }

// function gameWin(){
//     if(player[0].score > player[1].score){
//         console.log(player[0].name)
//         return `${player[0].name}`
//     }
//     else if(player[0].score < player[1].score){
//         return `${player[1].name}`
//     }
//     else{
//         return `${player[0].name} & ${player[1].name} : Draw`
//     }
// }


function greeting(name) {
    let message = 'Hi';

    function sayHi() {
        return `${message}  ${name}`
        // console.log(message);
    }

    return sayHi;
}
let hi = greeting(["Phai","Mod","SPY"]);
console.log(sayHi("Mod"));