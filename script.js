
const mario = document.querySelector ('.mario'); //Aqui estamos trazendo a classe mario criado no programa css

const bala = document.querySelector ('.bala'); //Aqui estamos trazendo a classe da bala criado no programa css

const nuvem = document.querySelector ('.nuvem'); //Aqui estamos trazendo a classe da nuvem criado no programa css

const fim = document.querySelector ('.fim'); //Aqui estamos trazendo a classe do gameover (fim) criado no programa css

const reiniciargame= document.querySelector ('.reiniciargame'); //Aqui estamos trazendo a classe do botão feita no arquivo HTML e CSS

const pular = () => {

    mario.classList.add('pular'); //aqui estamos criando a classe pular, para quando pressionar a teclar o gif do mário pular

    setTimeout (() => {
        mario.classList.remove('pular'); //Aqui vamos limpar o comando de pular, podendo assim pular novamente. Porque vc só pode executar um pulo. Agora adicionou esse código abaixo, toda vez que ele pular, será feito a "limpeza", podendo assim pular novamente.
    }, 700) //o setTimeout recebe dois parâmetros, primeiro recebe uma função e depois o tempo. O tempo é o tempo da animação dentro da classe pular 500ms. E a função vai ser remover a classe que ele pula. Para isso criamos uma classe anônima ()
}

//vamos criar um looping para verificar toda hora se a bala atingiu mario, pq se atingir, perde, logo para o jogo

const loop = setInterval(() => {

    /* var placar = 0; //variáveis que pretendo usar para fazer o contador de pontos

    var record = 0; */

    const posicaoBala = bala.offsetLeft; //criamos uma constante para saber a posição da bala

    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px',''); //como no java tem a opção offserbottom, que seria para medir o pulo do mário. Foi feito uma conversão de pixel para número para que pudesse contabilizar a altura que o mario pula para poder criar uma condição para dar game over

    const posicaoNuvem = nuvem.offsetLeft; //da mesma forma da bala, como é movimentação horizontal, fica mais fácil de saber a posição da núvem

    if (posicaoBala < 121 && posicaoBala > 0 && posicaoMario < 75 ) //condição para game over. 121 é a distância que ela enconsta no mario. 0 é pra saber se a pala passou do mario o ou não. caso ela não tenha passado pelo mario esse valor é maior que zero. e aposição do mario 75 é a altura do pulo dele, caso ele pule menos que isso, atingirá a bala. logo só será gameover, se todas essas condições forem satisfeitas
    {
        bala.style.animation = 'none'; //para pausar a bala no momento em que enconsta no mário.

        bala.style.left = `${posicaoBala}px`;

        mario.style.animation = 'none'; //para pausar o mnario no momento em que enconsta na bala.

        mario.style.bottom = `${posicaoMario}px`;

        mario.src = 'over.png'; //quando o mário toca bala, troca a imagem, essa é a imagem que aparece quando o mario perde

        mario.style.width = '125px'; //tamanho da imagem

        mario.style.marginLeft = '0px'; //posicionamento da imagem a esquerda

        mario.style.marginBottom = '15px'; //posicionamento da imagem em realação ao chão

        nuvem.style.animation = 'none'; //parar a nuvem quando der game over

        nuvem.style.left = `${posicaoNuvem}px`;

        fim.style.display = 'block'; //aparecer o gif de game over quando o mario perder. O gif será desbloqueado, já foi bloqueado no style.css
    
        reiniciargame.style.display = 'block'; //aparecer o botão para reiniciar o jogo quando o mario perder. O botão será surgirá, já foi oculto no style.css

        clearInterval(loop); //para zerar o loop
    }
    /* else //esperança de que um dia isso ainda vire um contador de ponto. Não estou sabendo criar uma variável pra receber o valor que o java vai acumular
    {
        placar = placar ++;

            if(placar >= record)
            {
                record = placar;
            }
            else
            {
                return placar;
            }
    } */
    
}, 10);//criamos uma função anônima, para ficar rodando no intervalo de 10ms


document.addEventListener ('keydown', pular); //Esse código permite que toda vez eu apertar qualquer tecla, do meu teclado (keydown), o mário faz a ação de pular. criarei um classe chamada "pular" e ela também será "anexada" no código html, dentro do gif do mário correndo

