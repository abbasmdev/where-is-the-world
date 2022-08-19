const isArraySorted = (arr: number[]) =>
  arr.every((v, i, a) => !i || a[i - 1] <= v);

function areLettersInTextWithOrder(text: string, letters: string) {
  const indexes = letters.split("").reduce((prev, letter) => {
    prev = [...prev, text.indexOf(letter, prev?.[-1] || 0)];

    return prev;
  }, [] as number[]);

  return isArraySorted(indexes) && !indexes.includes(-1);
}

export { areLettersInTextWithOrder, isArraySorted };
