TIMEOUT_MIN = 500
TIMEOUT_MAX = 2000
EXPECTED_ERRORS = ['Service Unavailable - Zero size object', 'Internal Server Error - Read']

window.addEventListener('load', function () {
  setTimeout(() => {
    errors = document.getElementsByTagName('h1')
    if (errors.length > 0) {
      error = errors[0]
      if (EXPECTED_ERRORS.includes(error.textContent)) {
        this.window.location.reload()
      }
    }

    rollAgain = document.getElementsByTagName('input')[13]
    if (rollAgain.value == 'Roll Again') {
      rollAgain.click()
      return
    } 

    // Could not find Roll Again button. Look for Press Me.
    pressMe = document.getElementsByTagName('input')[11]
    if (pressMe.value == 'Press Me') {
      pressMe.click()
      return
    }

    // Could not find Roll Again or Press Me button. Look for Lets Play.
    letsPlay = document.getElementsByTagName('input')[13]
    if (letsPlay.value == 'Lets Play! (Costs 5 NP)') {
      letsPlay.click()
      return
    }

    // Could not find Roll Again, Press Me, or Lets Play button. Look for Play Again.
    playAgain = document.getElementsByTagName('input')[11]
    if (playAgain.value == 'Play Again!') {
      playAgain.click()
      return
    }

    // Uncomment this section for infinite play.

    playDiceARoo = document.getElementsByTagName('input')[14]
    if (playDiceARoo.value == 'Play Dice-A-Roo') {
      playDiceARoo.click()
      return
    }
  }, TIMEOUT_MIN + (Math.random() * TIMEOUT_MAX));
})

