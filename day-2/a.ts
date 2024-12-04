import { runSolution } from "../utils.ts";

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const reports = [];
  for (let i = 0; i < data.length; i++) {
    reports.push((data[i].split(" ")).map(Number));
  }
  return reports.filter(isSafe).length;
}

function isSafe(levels: number[]){
  const direction = Math.sign(levels[1] - levels[0]);
  for(let i = 0, j = 1; j < levels.length; i++, j++ ){
    const difference = levels[j] - levels[i];
    if(Math.sign(difference) !== direction || Math.abs(difference) > 3){
      return false;
    }
  }
  return true;
}

await runSolution(day2a);
