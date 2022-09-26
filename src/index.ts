function weirdAdder(num: number, str: string): number {
  return num + str.charCodeAt(0);
}

console.log(weirdAdder(12, 'A'));
