export function totalFruit(fruits: number[]): number {
  const n = fruits.length;
  let left = 0;
  let maxFruits = 0;
  const basket = new Map<number, number>();

  for (let right = 0; right < n; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) ?? 0) + 1)

    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) basket.delete(fruits[left]);
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}




