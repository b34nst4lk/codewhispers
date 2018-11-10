export default function (question) {
  let endX = question.startX
  let endY = question.startY

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
  })

  return {
    endX,
    endY
  }
}
