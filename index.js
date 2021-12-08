let divPrincipal = document.getElementById('divPrincipal');
let numeroActual=0;
let frasesAleatorias = [
    {
        "id":0,
        "frase":"Our lives begin to end the day we become silent about things that matter.",
        "autor":"- Martin Luther King Jr."
    
    },
    {
        "id":1,
        "frase":"Nothing is impossible, the word itself says, “I’m possible!”",
        "autor":"- –Audrey Hepbur"
    },
    {
        "id":2,
        "frase":"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        "autor":"- Erma Bombeck"
    }]


    const numeroAleatorio = () =>{
        let num = Math.round((Math.random())*2)
        while(num==numeroActual){
            num = Math.round((Math.random())*2)
        }
        numeroActual=num;

        frasesAleatorias.forEach((element =>{
            if(element.id == num){
                divPrincipal.innerHTML=`
                <div class="divContenedor" id="quote-box">
                <div class="divFrase">
                    <p id="text">
                        <label>❝</label>
                        ${element.frase}
                    </p>
                </div>
                <div class="div-autor">
                    <label id="author">${element.autor}</label>
                </div>
                <div class="divBotones">
                    <div>
                        <button><a target="_top" id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20best%20time%20to%20plant%20a%20tree%20was%2020%20years%20ago.%20The%20second%20best%20time%20is%20now.%22%20Chinese%20Proverb"><img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/twitter--v1.png"/></a></button>
                        <button><a><img src="https://img.icons8.com/small/35/FFFFFF/tumblr.png"/></a></button>
                    </div>
                    <div class="divNew">
                        <button id="new-quote">New quote</button>
                    </div>
                </div>
            </div>
        </div>                
                `;
            }
        }))
        console.log(frasesAleatorias[num]);
        EventoCambiar();
    }

    window.onload=numeroAleatorio;

    const EventoCambiar = () =>{
        let boton = document.getElementById('new-quote');
        boton.addEventListener('click', e=>{
            e.preventDefault();
            numeroAleatorio();
        })
    }
    