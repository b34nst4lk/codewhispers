export default function (question) {
  let endX = question.startX
  let endY = question.startY
  let treasureX = question.treasureX
  let treasureY = question.treasureY
  let treasureFound = false
  let pirateX = question.pirateX
  let pirateY = question.pirateY
  let treasureStolen = false

  function treasureCheck() {
    if (endX == treasureX && endY == treasureY) {
      treasureFound = true
    }
  }

  function pirateCheck() {
    if (endX == pirateX && treasureFound == true)
    treasureStolen = true;
  }

  question.instructions.split('').forEach(m => {
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
    treasureCheck()
    pirateCheck();
  })
 
  return {
    endX,
    endY,
    treasureFound,
    treasureStolen
  }
}
