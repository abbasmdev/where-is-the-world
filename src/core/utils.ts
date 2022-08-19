const isArraySorted = (arr: number[]) =>
  arr.every((v, i, a) => !i || a[i - 1] <= v);

function areLettersInTextWithOrder(text: string, letters: string) {
  let indexes = letters.split("").reduce((prev, letter) => {
    const index = text.indexOf(letter, (prev?.[prev.length - 1] || -1) + 1);
    if (index >= 0) prev.push(index);

    return prev;
  }, [] as number[]);

  return isArraySorted(indexes) && indexes.length === letters.length;
}

export { areLettersInTextWithOrder, isArraySorted };
