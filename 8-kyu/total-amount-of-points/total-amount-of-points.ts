export function points(games : string[]): number {
  const points: number[] = games.map(str => {
    
    const goals = str.split(':').map(Number)
    
    if(goals[0] > goals[1]) 
      return 3
    else if(goals[0] === goals[1])
      return 1
    else 
      return 0
  })
  
  return points.reduce((sum, point) => sum + point, 0)
}