TIMEOUT_MIN = 500
TIMEOUT_MAX = 2000

window.addEventListener('load', function () {
  setTimeout(() => {
    errors = document.getElementsByTagName('h1')
    if (errors.length > 0) {
      error = errors[0]
      if (error.textContent == 'Service Unavailable - Zero size object') {
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

    // Uncomment this section for infinite play.

    playDiceARoo = document.getElementsByTagName('input')[14]
    if (playDiceARoo.value == 'Play Dice-A-Roo') {
      playDiceARoo.click()
      return
    }
  }, TIMEOUT_MIN + (Math.random() * TIMEOUT_MAX));
})

