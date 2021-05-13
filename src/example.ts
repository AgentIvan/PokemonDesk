/* eslint-disable @typescript-eslint/no-unused-vars */

type TypeFn = () => void;
interface IInterface {
  [n: string]: string | number;
}

function identity<T>(value: T): T {
  return value;
}

interface MyArray<T> extends Array<any> {
  [n: number]: T;

  // map<U>(fn:(el: T) => U): U[];
}

const tsArr: MyArray<number> = [1, 2, 3, 4];

tsArr.map((i) => i + 1);
tsArr.map((i) => `${i} + 1`);

function getLen<T extends Array<any>>(arr: T): number {
  return arr.length;
}

identity(1);
identity('1');
const f = () => {
  let tsString = +'1';
  tsString = 1;
  tsString = +`${tsString}d`;
  const arr: [string, number] = ['1', 2];

  const [_a, _b] = arr;

  const data: IInterface = {
    key1: 'key',
    key2: 3,
  };

  const val3 = data.key3;

  return `${val3} + ${tsString}`;
};

// eslint-disable-next-line no-console
export const ArrowFn: TypeFn = () => console.log('sdfsdf');

export default f;
