function maxIceCream(costs: number[], coins: number): number {
  const sorted = costs.sort((a, b) => a - b);

  const result: number[] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] <= coins) {
      coins = coins - sorted[i];
      result.push(sorted[i]);
    }
  }

  return result.length;
}

maxIceCream([1, 6, 3, 1, 2, 5], 20);
