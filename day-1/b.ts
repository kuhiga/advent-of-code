import { runSolution } from "../utils.ts";

/** provide your solution as the return of this function */
// Calculate a total similarity score by adding up each number in the left list
// after multiplying it by the number of times that number appears in the right list.
export async function day1b(data: string[]) {
  const list1: number[] = [];
  const list2: number[] = [];
  const myMap = new Map();
  //separate into two lists
  for (let i = 0; i < data.length; i++) {
    if (data[i].trim() === "") continue;
    const [first, second] = data[i].split(/\s+/).map(Number);
    list1.push(first);
    list2.push(second);
    myMap.set(second, (myMap.get(second) || 0) + 1);
  }
  list1.sort();
  list2.sort();
  let sum = 0;
  for(let i = 0; i < list1.length; i++){
    sum += list1[i] * (myMap.get(list1[i]) ?? 0);
  }
  return sum;
}

await runSolution(day1b);
