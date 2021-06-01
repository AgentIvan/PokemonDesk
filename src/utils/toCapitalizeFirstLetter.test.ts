import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Should receive string "Qwerty" and return "Qwerty"', () =>
    expect(toCapitalizeFirstLetter('Qwerty')).toBe('Qwerty'));
  test('Should receive string "Q" and return "Q"', () => expect(toCapitalizeFirstLetter('q')).toBe('Q'));
  test('Should receive string "qwerty" and return "Qwerty"', () =>
    expect(toCapitalizeFirstLetter('qwerty')).toBe('Qwerty'));
  test('Should receive string "" and return ""', () => expect(toCapitalizeFirstLetter('')).toBe(''));
  test('Should receive nothing and return ""', () => expect(toCapitalizeFirstLetter()).toBe(''));
  test('Should receive string ".Q" and return ".Q"', () => expect(toCapitalizeFirstLetter('.Q')).toBe('.Q'));
});
