# OBJETIVO:
    <p> Mario Kart é uma serie de jogos de corrida desenvolvida e publicada pela nintendo. Nosso desafio será criar uma logica de um jogo de videogame para simular corridas de Mario Kart, levando em consideração as regras e mecanicas abaixo. </p>

## Personagens
    Mario:
        Velocidade: 4
        Manobrabilidade: 3
        Poder: 3

    Peach:
        Velocidade: 3
        Manobrabilidade: 4
        Poder: 2

    Yoshi:
        Velocidade: 2
        Manobrabilidade: 4
        Poder: 3

    Bowser:
        Velocidade: 5
        Manobrabilidade: 2
        Poder: 5

    Luigi:
        Velocidade: 3
        Manobrabilidade: 4
        Poder: 4
        
    Donkey Kong:
        Velocidade: 2
        Manobrabilidade: 2
        Poder: 5

## Regras & Mecanicas
    Jogadores:
        ⬜ O computador deve receber dois personagens para disputar a corida em um objeto cada
    
    Pistas:
        • ⬜ Os personagens irão correr em uma pista aleatoria de 5 rodadas
        • ⬜ A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto
            ▫ Caso o bloco da pista seja RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto
            ▫ Caso o bloco da pista seja CURVA, o jogador deve jogar o dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto
            ▫ Caso o bloco da pista seja CONFRONTO, o jogador deve jogar o dado de 6 lados e somar o atributo PODER, quem vencer perder, perde um ponto
            ▫ Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)

    Condição de Vitoria:
        ⬜ Ao final, vence quem tem mais pontos