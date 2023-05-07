function randomShot(rules) {
    let values = Object.keys(rules)
    return values[~~(Math.random() * values.length)]
}

const rpsRules = {
    "rock": ["paper"],
    "paper": ["scissors"],
    "scissors": ["rock"]
}
export function rps(playerShot) {

    if (playerShot === undefined) {
        return {"player": randomShot(rpsRules)}
    }

    if (!(playerShot.toLowerCase() in rpsRules)) {
        console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`)
        process.exit(1)
    }

    let opponentShot = randomShot(rpsRules)
    return {
        "player": playerShot,
        "opponent": opponentShot,
        "result": rpsRules[playerShot.toLowerCase()].includes(opponentShot.toLowerCase()) ? "lose" : "win"
    }
}

const rpslsRules = {
    "rock": ["paper", "spock"],
    "paper": ["scissors", "lizard"],
    "scissors": ["rock", "spock"],
    "spock": ["lizard", "paper"],
    "lizard": ["rock", "scissors"]
}
export function rpsls(playerShot) {
    if (playerShot === undefined) {
        return {"player": randomShot(rpslsRules)}
    }

    if (!(playerShot.toLowerCase() in rpslsRules)) {
        console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors: - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`)
        process.exit(1)
    }

    let opponentShot = randomShot(rpslsRules)
    return {
        "player": playerShot,
        "opponent": opponentShot,
        "result": rpslsRules[playerShot.toLowerCase()].includes(opponentShot.toLowerCase()) ? "lose" : "win"
    }
}
