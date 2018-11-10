export default function (question) {
  console.log(question)
  let endX = question.startX
  let endY = question.startY

  let treasureX = question.treasureX
  let treasureY = question.treasureY
  let treasureFound = false

  let pirateX = question.pirateX
  let pirateY = question.pirateY
  let pirateEncountered = false

  let spyX = question.spyX
  let spyY = question.spyY
  let spyFollowing = false

  let spyAndPirateFought= false
  let treasureOwner = "no-one"

  let events = {}

  function move(m) {
    switch (m) {
      case 'F':
        endX++
        break
      case 'B':
        endX--
        break
      case 'L':
        endY++
        break
      case 'R':
        endY--
        break
      default:
        break
    }
  }

  function addNewEvent(i, event) {
    if (!events[i]) events[i] = []
    events[i].push(event)
  }

  function treasureCheck(i) {
    if (!treasureFound && treasureX === endX && treasureY === endY) {
      treasureFound = true
    }
  }

  function spyCheck(i) {
    if (!spyFollowing && !treasureFound && spyX === endX && spyY === endY) {
      spyFollowing = true
    } 
  }

  function pirateCheck(i) {
    if (!spyAndPirateFought && pirateX === endX && pirateY === endY) {
      pirateEncountered = true
      if (spyFollowing && treasureFound) {
        spyAndPirateFought = true
      } 
    }
  }

  question.instructions.split('').forEach((m,i) => {
    move(m);
    spyCheck(i);
    treasureCheck(i)
    pirateCheck(i);
  })

  if (!treasureFound) treasureOwner = "no-one"
  else if (treasureFound) {
    treasureOwner = "me"
    if (spyFollowing) treasureOwner = "spy"
    if (pirateEncountered) treasureOwner = 'pirate'
    if (spyAndPirateFought) treasureOwner = "me"
  }
  console.log(events)
 
  return {
    endX,
    endY,
    treasureOwner
  }
}
