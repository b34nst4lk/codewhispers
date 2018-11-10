export default function (question) {
  let endX = question.startX
  let endY = question.startY
  let treasureX = question.treasureX
  let treasureY = question.treasureY
  let treasureFound = false

  function treasureCheck() {
    if (endX == treasureX && endY == treasureY) {
      treasureFound = true
    }
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
  })
 
  return {
    endX,
    endY,
    treasureFound
  }
}
