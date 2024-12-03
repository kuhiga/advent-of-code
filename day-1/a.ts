import { runSolution } from "../utils.ts";
// https://adventofcode.com/2024/day/1
/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  const list1: number[] = [];
  const list2: number[] = [];
  //separate into two lists
  for (let i = 0; i < data.length; i++) {
    list1.push(parseInt(data[i].split("   ")[0]));
    list2.push(parseInt(data[i].split("   ")[1]));
  }
  list1.sort();
  list2.sort();
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
      sum += Math.abs(list1[i] - list2[i])
  }

  return sum;
}

await runSolution(day1a);
