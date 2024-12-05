import { runSolution } from "../utils.ts";

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.
// safe if able to remove levels
/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const reports = [];
  for (let i = 0; i < data.length; i++) {
    reports.push(data[i].split(" ").map(Number));
  }
  return reports.filter(isSafe).length;
}

function isSafe(levels: number[]) {
  if (isSafeWithoutRemoving(levels)) {
    return true;
  } else {
    for (let i = 0; i < levels.length; i++) {
      if (isSafeWithoutRemoving(levels.toSpliced(i, 1))) {
        return true;
      }
    }
    return false;
  }
}

function isSafeWithoutRemoving(levels: number[]) {
  const direction = Math.sign(levels[1] - levels[0]);
  if (direction === 0) return false;
  for (let i = 0, j = 1; j < levels.length; i++, j++) {
    const difference = levels[j] - levels[i];
    if (
      Math.sign(difference) !== direction ||
      Math.abs(difference) > 3 ||
      Math.abs(difference) < 1
    ) {
      return false;
    }
  }
  return true;
}

await runSolution(day2a);
