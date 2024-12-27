import { runSolution } from "../utils.ts";

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    for (const { groups } of data[i].matchAll(/mul\((?<a>\d+),(?<b>\d+)\)/g)) {
      const { a, b } = groups!;
      sum += +a * +b;
    }
  }

  return sum;
}

await runSolution(day3a);
