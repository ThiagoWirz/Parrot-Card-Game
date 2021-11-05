const deck = [`<il class="card" data-identifier="card" onclick ="select(this)">
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
</il>`]
colocarMesa()
function colocarMesa(){
    let QuantidadeDeCartas = prompt("Escolha um numero par entre 4 e 14 para o jogo.");
    const mesa = document.querySelector("ul");
    let baralho= [] 
    if(QuantidadeDeCartas >= 4 && QuantidadeDeCartas <= 14 && QuantidadeDeCartas%2 == 0){
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

function select(card){
    card.classList.toggle("selected");
}

function comparador() { 
	return Math.random() - 0.5; 
}