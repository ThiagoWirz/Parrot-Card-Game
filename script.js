/*const deck = [`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/bobrossparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/explodyparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/fiestaparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/metalparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/revertitparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/tripletsparrot.gif">
</div>
</il>`,
`<il class="card" data-identifier="card" onclick ="select(this)">
<div class="front-face" identifier="front-face">
    <img src="assets/front.png" alt="">  
</div>
<div class="back-face" identifier="back-face">
    <img src="assets/unicornparrot.gif">
</div>
</il>`]*/
let cartasSelecionadas = [];
colocarMesa()
function colocarMesa(){
    let deck = []
    for(let x = 0; x < 7; x++){
        deck.push(`<il class="card" data-identifier="card" onclick ="select(this)">
        <div class="front-face" identifier="front-face">
            <img src="assets/front.png" alt="">  
        </div>
        <div class="back-face" identifier="back-face">
            <img src="assets/parrot${x}.gif">
        </div>
        </il>`)
    }
    let QuantidadeDeCartas = prompt("Escolha um numero par entre 4 e 14 para o jogo.");
    const mesa = document.querySelector("ul");
    let baralho= [] 
    if(QuantidadeDeCartas >= 4 && QuantidadeDeCartas <= 14 && QuantidadeDeCartas%2 == 0){
        mesa.style.gridTemplateColumns = `repeat(${QuantidadeDeCartas/2}, 1fr)`;

        for(let i = 0; i < QuantidadeDeCartas/2; i++){ 
          baralho.push(deck[i]);
          baralho.push(deck[i]);
        }
        baralho.sort(comparador);
        for(let j = 0; j < QuantidadeDeCartas; j++){
        mesa.innerHTML += baralho[j];
        }
    }
    else{
        colocarMesa();
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}

function select(card){
    
    card.classList.add("selected");
    card.classList.add("disabled");
    cartasSelecionadas.push(card);
    if(cartasSelecionadas.length === 2){
        let todasCartas = document.querySelectorAll(".card")
        for(let i = 0; i < todasCartas.length; i++){
            todasCartas[i].classList.add("disabled")
        }
        
        
        if(cartasSelecionadas[0].innerHTML === cartasSelecionadas[1].innerHTML){
            cartasIguais();
        }
        
        else{
            cartasDiferentes();
            console.log("teste");
        }
    }
        
    }

function cartasIguais(){
    let todasCartas = document.querySelectorAll(".card");
    for(let i = 0; i < todasCartas.length; i++){
        todasCartas[i].classList.remove("disabled")
    }
    cartasSelecionadas[0].classList.add("point");
    cartasSelecionadas[1].classList.add("point");
    cartasSelecionadas[0].classList.remove("selected", "disabled");
    cartasSelecionadas[1].classList.remove("selected", "disabled");
    cartasSelecionadas = [];
}

function cartasDiferentes(){
    setTimeout(unselected,1500);
   
}
function unselected(){
    let todasCartas = document.querySelectorAll(".card")
        for(let i = 0; i < todasCartas.length; i++){
            todasCartas[i].classList.remove("disabled")
        }
    cartasSelecionadas[0].classList.remove("selected");
    cartasSelecionadas[1].classList.remove("selected"); 
    cartasSelecionadas = [];
}

/*function checkcard(){
    if(cartasSelecionadas[0] !== cartasSelecionadas[1]){
        setTimeout(() =>  {},1000)
        
    }
    else{
        console.log(cartasSelecionadas);
    }
    cartasSelecionadas = [];
}*/
