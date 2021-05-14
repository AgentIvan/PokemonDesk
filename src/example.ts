/* eslint-disable @typescript-eslint/no-unused-vars */

// ? 1. Работа с простыми типами
type TypeFn = (a: string, b: string) => string;

export const ArrowFn: TypeFn = () => 'sdfsdf';

export const concat: TypeFn = (a, b) => {
  return a + b;
};

// eslint-disable-next-line no-console
console.log(concat('Hello ', 'World'));

// ? 2. Работа с интерфейсами
interface TaskInterface {
  [n: string]: string | (string | number | TaskInterface)[];
}

// ? 2. Another
interface AnotherTaskIntetface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: AnotherTaskIntetface[];
}

const myHometask: TaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

const anotherHomeTask: AnotherTaskIntetface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// ? 3. Типизация функций, используя Generic
interface MyArray<T> {
  [n: number]: T;
  reduce(fn: (start: T, value: T, index: number, array: T[]) => T): T;
  reduce<U>(fn: (start: U, value: T, index: number, array: T[]) => U, init: U): T;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];

// eslint-disable-next-line no-console
console.log(
  tsArr.reduce((a, b) => a + b * 2),
  tsArr.reduce((a, b) => a + b * 2, 10),
  tsArr.reduce((a, b) => a + b * 2, '10'),
  tsArr.reduce((a, b) => [...a, b * 2], [0]),
  tsArr.reduce((a, b) => a.concat(b * 2), [0]),
);

const strArr: MyArray<string> = ['1', '2', '3', '4'];

// eslint-disable-next-line no-console
console.log(
  strArr.reduce((a, b) => a + b),
  strArr.reduce((a, b) => a + +b, 10),
  strArr.reduce((a, b) => a + b, '10'),
  strArr.reduce((a, b) => [...a, b], ['0']),
  strArr.reduce((a, b) => a.concat(b), ['0']),
);
