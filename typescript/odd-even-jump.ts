/**
 * The problem:
  - From any index, we wanto to reach the last index, by doing even and odd jumps.
  - The first jump is always odd. 3rd, and 5th the same.
  - The second, 4th and 6th jump is even
**/

export function oddEvenJumps(arr: number[]): number {
  const n = arr.length;
  const indexSortedByValue = arr
    .map((value, index) => ([index, value]))
    .sort((a, b) => a[1] - b[1]);

  const stack:number[] = [];
  const next_odd_jump:number[] = Array.from(arr, (x) => null);

  for(let i = 0; i < n; i++){
    const current_element_index = indexSortedByValue[i][0];
    while(stack.length > 0 && stack.at(-1) < current_element_index){
      next_odd_jump[stack.pop()] = current_element_index
    }
    stack.push(current_element_index)
  }

  stack.length = 0;

  indexSortedByValue.sort((a,b) => b[1] - a[1])

  const next_even_jump = Array.from(arr, (x) => null);

  for(let i = 0; i < n; i++){
    const current_element_index = indexSortedByValue[i][0];

    while(stack.length > 0 && stack.at(-1) < current_element_index){
      next_even_jump[stack.pop()] = current_element_index;
    }

    stack.push(current_element_index);
  }

  stack.length = 0;

  const odd_reachable = Array.from(arr, x => false);
  const even_reachable = Array.from(arr, x => false);
  odd_reachable[n-1] = true;
  even_reachable[n-1] = true;

  for(let i = n-2; i > -1; i--){
    odd_reachable[i] = even_reachable[next_odd_jump[i]]
    even_reachable[i] = odd_reachable[next_even_jump[i]]
  }

  return odd_reachable.reduce((acc, e) => (acc + (e | 0)), 0)
};
