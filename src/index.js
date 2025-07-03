const player1 = {
    nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0
}

const player2 = {
    nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0
}

const player3 = {
    nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0
}

const player4 = {
    nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
}

const player5 = {
    nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0
}

const player6 = {
    nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1

}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`O ${characterName} rolou o dado de ${block} ${attribute} + ${diceResult} = ${attribute + diceResult}`)
}

async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log('--------------------------------------------')
        console.log(`🏁 Rodada ${i}`)

        const block = await raceTrack()
        const result1 = await rollDice()
        const result2 = await rollDice()


        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === 'CURVA') {
            totalTestSkill1 = result1 + character1.Manobrabilidade
            totalTestSkill2 = result2 + character2.Manobrabilidade

            console.log('CURVA\n')

            await logRollResult(character1.nome, 'Manobrabilidade', result1, character1.Manobrabilidade)
            await logRollResult(character2.nome, 'Manobrabilidade', result2, character2.Manobrabilidade)

            if (totalTestSkill1 === totalTestSkill2) {
                console.log('EMPATE')
            } else {
                totalTestSkill1 > totalTestSkill2 ? character1.Pontos += 1 : character2.Pontos += 1
                totalTestSkill1 > totalTestSkill2 ? console.log(character1.nome) : console.log(character2.nome)
                console.log(character1.Pontos, character2.Pontos)
            }
        }
        if (block === 'RETA') {
            totalTestSkill1 = result1 + character1.Velocidade
            totalTestSkill2 = result2 + character2.Velocidade

            console.log('RETA\n')

            await logRollResult(character1.nome, 'Velocidade', result1, character1.Velocidade)
            await logRollResult(character2.nome, 'Velocidade', result2, character2.Velocidade)

            if (totalTestSkill1 === totalTestSkill2) {
                console.log('EMPATE')
            } else {
                totalTestSkill1 > totalTestSkill2 ? character1.Pontos += 1 : character2.Pontos += 1
                totalTestSkill1 > totalTestSkill2 ? console.log(character1.nome) : console.log(character2.nome)
                console.log(character1.Pontos, character2.Pontos)
            }
        }
        if (block === 'CONFRONTO') {
            let powerResult1 = result1 + character1.Poder
            let powerResult2 = result2 + character2.Poder

            console.log('CONFRONTO\n')

            await logRollResult(character1.nome, 'Poder', result1, character1.Poder)
            await logRollResult(character2.nome, 'Poder', result2, character2.Poder)

            if (powerResult1 === powerResult2) {
                console.log('EMPATE')
            } else {

                character1.Pontos -= character1.Pontos > 0 && powerResult2 > powerResult1 ? 1 : 0
                character2.Pontos -= character2.Pontos > 0 && powerResult1 > powerResult2 ? 1 : 0
                powerResult1 > powerResult2 ? console.log(character1.nome) : console.log(character2.nome)
                console.log(character1.Pontos, character2.Pontos)
            }
        }
    }
}

async function winner(character1,character2) {
    console.log('--------------------------------------------')
    console.log('\nResultado Final:')
    console.log(`${character1.nome} : ${character1.Pontos} ponto(s).`)
    console.log(`${character2.nome} : ${character2.Pontos} ponto(s).`)

    if (character1.Pontos>character2.Pontos) {
        console.log(`${character1.nome} venceu!!`)
    } else if (character2.Pontos > character1.Pontos) {
        console.log(`${character2.nome} venceu!!`)
    } else {
        console.log ('A corrida terminou em empate!')
    }

}

async function raceTrack() {
    const track = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    switch (track) {
        case 1:
            return 'CURVA'
            break;
        case 2:
            return 'RETA'
            break;
        case 3:
            return 'CONFRONTO'
            break;

        default:
            break;
    }
}


(async function main() {
    console.log(`🏁🚨Iniciando corrida entre ${player1.nome} e ${player4.nome}...\n`)
    await playRaceEngine(player1, player4)
    await winner(player1, player4)

})()






