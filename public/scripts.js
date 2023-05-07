// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

window.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form")
    const gameTypeButtons = document.getElementsByName("selected_game")
    const playOpponentButton = document.getElementById("opponent")
    const playOptionsMenu = document.getElementById("play_options_menu")

    // Update drop down options
    for (const button of gameTypeButtons) {
        button.addEventListener("change", function(){
            const options = ["Rock", "Paper", "Scissors"]

            if (this.value == "rpsls") {
                options.push("Spock", "Lizard")
            }
            playOptionsMenu.innerHTML = ""
            for (const option of options) {
                var optionElement = document.createElement("option")
                optionElement.innerText = option
                playOptionsMenu.append(optionElement)
            }
        })
    }

    // Update visibility of drop down
    for (const button of document.querySelectorAll("[name='selected_game'], [name='game_mode']")) {
        button.addEventListener("change", function() {
            var visibility = "hidden"
            if (
                document.querySelectorAll("input[type='radio'][name='selected_game']:checked").length > 0
                && playOpponentButton.checked
            ) {
                visibility = "visible"
            }
            playOptionsMenu.style.visibility = visibility
            for (label of document.querySelectorAll("label[for='play_options_menu']")) {
                label.style.visibility = visibility
            }
        })
    }

    form.addEventListener("reset", function(){
        playOptionsMenu.style.visibility = "hidden"
        for (label of document.querySelectorAll("label[for='play_options_menu']")) {
            label.style.visibility = "hidden"
        }
    })
})
