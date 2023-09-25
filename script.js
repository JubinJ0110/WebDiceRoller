let images = ["Dice-1.png",
"Dice-2.png",
"Dice-3.png",
"Dice-4.png",
"Dice-5.png",
"Dice-6.png",
]
let dice = document.querySelectorAll("img");


function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let D1 = Math.floor(Math.random()*6);
        let D2 = Math.floor(Math.random()*6);
        let D3 = Math.floor(Math.random()*6);
        let D4 = Math.floor(Math.random()*6);
        let D5 = Math.floor(Math.random()*6);
    
        document.querySelector("#Dice-1").setAttribute("src", images[D1]);
        document.querySelector("#Dice-2").setAttribute("src", images[D2]);
        document.querySelector("#Dice-3").setAttribute("src", images[D3]);
        document.querySelector("#Dice-4").setAttribute("src", images[D4]);
        document.querySelector("#Dice-5").setAttribute("src", images[D5]);
        document.querySelector("#Text-1").setAttribute("value", (D1+1));
        document.querySelector("#Text-2").setAttribute("value", (D2+1));
        document.querySelector("#Text-3").setAttribute("value", (D3+1));
        document.querySelector("#Text-4").setAttribute("value", (D4+1));
        document.querySelector("#Text-5").setAttribute("value", (D5+1));
        document.querySelector("#Total").innerHTML = "Total: " + ((D1+1) + (D2+1) + (D3+1) + (D4+1) + (D5+1));
        
        if (D1+1 == D2+1 && D1+1 == D3+1 && D1+1 == D4+1 && D1+1 == D5+1){
            window.alert("YAHTZEE!!!")
        }

    },
    1000
    );
}
roll();
