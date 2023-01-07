function longestCommonPrefix(strs: string[]): string {
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    console.log(i);
    const isCommon = strs
      .map((str) => str[i])
      .every((letter) => letter === strs[0][i]);
    console.log(isCommon);
    if (isCommon) {
      result += strs[0][i];
    } else {
      return result;
    }
  }

  return result;
}

console.log(longestCommonPrefix(['cir', 'car']));
