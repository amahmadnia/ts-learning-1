
//|||||||||||two





//|||||||||||one

function greet(name: string): string {
  return name;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}
//----------------------------------------------

const x: string = 'jjj';
const n: number = 3;

function nani(a: boolean, b: boolean): boolean {
  return a && b;
}

//----------------------------------------------
const num: number[] = [1, 2, 3, 4];
const sumNumbers = (numbers: number[]): number => {
  let sum: number = 0;
  numbers.forEach((item: number) => (sum += item));
  return sum;
};

//----------------------------------------------

let tuple1: [string, boolean, number];
tuple1 = ['jzy', true, 3];

const tupleBreakdown = (tuple2: [string, boolean, number]): void => {
  console.log(`${tuple2[0]}-${tuple2[1]}-${tuple2[2]}`);
};

tupleBreakdown(tuple1);
