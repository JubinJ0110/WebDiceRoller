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
    
        document.getElementById("Dice-1").src = images[D1];
        document.getElementById("Dice-2").src = images[D2];
        document.getElementById("Dice-3").src = images[D3];
        document.getElementById("Dice-4").src = images[D4];
        document.getElementById("Dice-5").src = images[D5];
        
        document.getElementById("Text-1").value = D1+1;
        document.getElementById("Text-2").value = D2+1;
        document.getElementById("Text-3").value = D3+1;
        document.getElementById("Text-4").value = D4+1;
        document.getElementById("Text-5").value = D5+1;
        
        document.getElementById("Total").textContent = "Total: " + ((D1+1) + (D2+1) + (D3+1) + (D4+1) + (D5+1));
        
        if (D1+1 == D2+1 && D1+1 == D3+1 && D1+1 == D4+1 && D1+1 == D5+1){
            window.alert("YAHTZEE!!!")
        }

    },
    1000
    );
}
roll();
