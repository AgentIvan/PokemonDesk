/* eslint-disable @typescript-eslint/no-unused-vars */

// Работа с простыми типами
type TypeFn = (a: string, b: string) => string;

export const ArrowFn: TypeFn = () => 'sdfsdf';

export const concat: TypeFn = (a, b) => {
  return a + b;
};

// eslint-disable-next-line no-console
console.log(concat('Hello ', 'World'));

// Работа с интерфейсами
interface TaskInterface {
  [n: string]: string | (string | number | TaskInterface)[];
}

const myHometask: TaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

function identity<T>(value: T): T {
  return value;
}

// Типизация функций, используя Generic
interface MyArray<T> {
  [n: number]: T;
  reduce(fn: (start: T, value: T, index: number, array: T[]) => T): T;
  reduce(fn: (start: T, value: T, index: number, array: T[]) => T, init: T): T;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];

// eslint-disable-next-line no-console
console.log(
  tsArr.reduce((i) => i + 1),
  tsArr.reduce((i, a) => i + a),
  tsArr.reduce((a, b) => a + b, 10),
);
