export default function (question) {
  console.log(question)
  let endX = question.startX
  let endY = question.startY

  let treasureX = question.treasureX
  let treasureY = question.treasureY
  let treasureFound = false
  let treasureStolen = false

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
      addNewEvent(i, 'treasure found')
      treasureOwner = "me"
    }
  }

  function spyCheck(i) {
    if (!spyFollowing && !treasureFound && spyX === endX && spyY === endY) {
      spyFollowing = true
      addNewEvent(i, 'spy following')
    } 
    if (spyFollowing && treasureFound) {
      treasureOwner = "spy"   
    }
  }

  function pirateCheck(i) {
    if (!spyAndPirateFought && pirateX === endX && pirateY === endY) {
      pirateEncountered = true
      addNewEvent(i, 'pirates encountered')
      if (spyFollowing && treasureFound) {
        addNewEvent(i, 'fight!')
        spyAndPirateFought = true
      } else if (treasureFound) {
        treasureStolen = true
      }
    }
  }

  question.instructions.split('').forEach((m,i) => {
    move(m);
    spyCheck(i);
    pirateCheck(i);
    treasureCheck(i);
  })

  if (!treasureFound) treasureOwner = "no-one"
  if (spyFollowing && treasureStolen) treasureOwner = "spy"
  if (pirateEncountered && treasureStolen) treasureOwner = 'pirate'
  if (spyAndPirateFought) treasureOwner = "me"

  console.log(events)
 
  return {
    endX,
    endY,
    treasureOwner
  }
}
