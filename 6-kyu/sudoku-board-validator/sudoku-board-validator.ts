type Row = [number, number, number, number, number, number, number, number, number]
type Board = [Row, Row, Row, Row, Row, Row, Row, Row, Row]
​
export function validateSudoku(board: Board): boolean {
  const isValidGroup = (nums: number[]): boolean => {
    const sorted = [...nums].sort((a, b) => a - b)
    return sorted.join('') === '123456789'
  }
​
  for (const row of board) {
    if (!isValidGroup(row)) return false
  }
​
  for (let col = 0; col < 9; col++) {
    const column: number[] = []
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col])
    }
    if (!isValidGroup(column)) return false
  }
​
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const block: number[] = []
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          block.push(board[row + i][col + j])
        }
      }
      if (!isValidGroup(block)) return false
    }
  }
​
  return true
}