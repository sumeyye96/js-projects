function randomNum() {
    return Math.ceil(Math.random()*6)
}
console.log(randomNum())
let   startButton = document.getElementById("start")
let dice1= document.getElementById("dice_A")
let dice2=document.getElementById("dice_B")

 start = () =>  {
    const randNum1 = randomNum()
    const randNum2 = randomNum()
    dice1.src =`images/dice${randNum1}.png`
    dice2.src= `images/dice${randNum2}.png`
    if (randNum1>randNum2) {
    document.querySelector("h1").innerHTML= "player1 wins!!!"
    // document.getElementById("player_1").style.color="red"
    // document.getElementById("player_1").style.fontWeight="bold"
    document.getElementById("player_1").classList.add("player-win")
    // document.getElementById("player_2").style.color=""
    // document.getElementById("player_2").style.fontWeight=""
    document.getElementById("player_2").classList.remove("player-win")




    }else if (randNum1<randNum2){
        document.querySelector("h1").innerHTML= "player2 wins!!!"
        // document.getElementById("player_2").style.color="red"
        // document.getElementById("player_2").style.fontWeight="bold"
        document.getElementById("player_2").classList.add("player-win")
        document.getElementById("player_1").classList.remove("player-win")


        // document.getElementById("player_1").style.color=""
        // document.getElementById("player_1").style.fontWeight=""


    

    } else{
        document.querySelector("h1").innerHTML= "berabere"
        // document.getElementById("player_1").style.color=""
        // document.getElementById("player_2").style.color=""
        // document.getElementById("player_2").style.fontWeight=""
        // document.getElementById("player_1").style.fontWeight=""
        document.getElementById("player_1").classList.remove("player-win")
        document.getElementById("player_2").classList.remove("player-win")





    }
}



