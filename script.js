let cartasSelecionadas = [];
let moves = 0;
let seg = 0;
let idInterval;

colocarMesa()


function colocarMesa(){
    let deck = [];
    for(let x = 0; x < 7; x++){
        deck.push(`<il class="card" data-identifier="card" onclick ="select(this)">
        <div class="front-face" identifier="front-face">
            <img src="assets/front.png" alt="">  
        </div>
        <div class="back-face" identifier="back-face">
            <img src="assets/miajuda${x}.gif">
        </div>
        </il>`);
    }
    let QuantidadeDeCartas = prompt("Escolha um numero par entre 4 e 14 para o jogo.");
    const mesa = document.querySelector("ul");
    document.querySelector(".tempo").innerHTML = "Seu tempo: 0";
    mesa.innerHTML = "";
    moves = 0;
    seg = 0;
    let baralho= [];
    if(QuantidadeDeCartas >= 4 && QuantidadeDeCartas <= 14 && QuantidadeDeCartas%2 == 0){
        mesa.style.gridTemplateColumns = `repeat(${QuantidadeDeCartas/2}, 1fr)`;

        for(let i = 0; i < QuantidadeDeCartas/2; i++){ 
          baralho.push(deck[i]);
          baralho.push(deck[i]);
        }
        baralho.sort(shuffle);
        for(let j = 0; j < QuantidadeDeCartas; j++){
        mesa.innerHTML += baralho[j];
        }
        idInterval = setInterval(tempo, 1000);
    }
    else{
        colocarMesa();
    }
}


function shuffle() { 
	return Math.random() - 0.5; 
}


function select(card){
    moves++;
    card.classList.add("selected");
    card.classList.add("disabled");
    cartasSelecionadas.push(card);
    if(cartasSelecionadas.length === 2){
        desabilitarCartas();
        if(cartasSelecionadas[0].innerHTML === cartasSelecionadas[1].innerHTML){
            cartasIguais();
        }
        
        else{
            setTimeout(cartasDiferentes,1500);
        }
    }
    let points = document.querySelectorAll(".point");
    let todasCartas = document.querySelectorAll(".card"); 
    if(points.length === todasCartas.length){
        setTimeout(gameover,500);
    } 
    }


function cartasIguais(){
    habilitarCartas();
    cartasSelecionadas[0].classList.add("point");
    cartasSelecionadas[1].classList.add("point");
    cartasSelecionadas[0].classList.remove("selected");
    cartasSelecionadas[1].classList.remove("selected");
    cartasSelecionadas = [];
}


function cartasDiferentes(){
   habilitarCartas();
    cartasSelecionadas[0].classList.remove("selected");
    cartasSelecionadas[1].classList.remove("selected");
    cartasSelecionadas = [];
   
}


function habilitarCartas (){
    let todasCartas = document.querySelectorAll(".card");
        for(let i = 0; i < todasCartas.length; i++){
            todasCartas[i].classList.remove("disabled");
        }
}


function desabilitarCartas(){
        let todasCartas = document.querySelectorAll(".card");
        for(let i = 0; i < todasCartas.length; i++){
            todasCartas[i].classList.add("disabled");
        }
}


function gameover(){
    alert(`Você ganhou em ${moves} jogadas! e em ${seg} segundos.`);
    let resposta = prompt("Gostaria de reiniciar a partida?");
    clearInterval(idInterval);
    if(resposta.toLowerCase() === "sim"){
        colocarMesa();
    }
}


function tempo(){
    seg++;
    if(seg !== 1){
    document.querySelector(".tempo").innerHTML =  `Seu tempo: ${seg} segundos`;
    }
    else{
        document.querySelector(".tempo").innerHTML =  `Seu tempo: ${seg} segundo`;
    }
}