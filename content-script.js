window.addEventListener('load', function () {
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

  // playDiceARoo = document.getElementsByTagName('input')[14]
  // if (playDiceARoo.value == 'Play Dice-A-Roo') {
  //   playDiceARoo.click()
  //   return
  // }
})
