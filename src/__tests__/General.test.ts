import { calculoComplejo } from '../index';
test('Test', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: 1 },
    { precio: 2.5, cantidad: 2 },
    { precio: 10, cantidad: 4 },
  ])).toBe(53.65);
});