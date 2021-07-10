import { calculoComplejo, calculoEspecialCombo, ErrorLevel } from '../index';
import { Producto } from "../producto";

// caso exitoso
test('Test_calculoComplejo', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: 1 },
    { precio: 2.5, cantidad: 2 },
    { precio: 10, cantidad: 4 },
  ])).toBe(53.65);
});

// caso error por cantidad negativa
test('Test_calculoComplejo_error1', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: -1 },
    { precio: 23 , cantidad: 2 },
  ])).toBe(ErrorLevel.ERROR);
});

// caso error por precio negativo
test('Test_calculoComplejo_error2', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: 1 },
    { precio: -23 , cantidad: 2 },
  ])).toBe(ErrorLevel.ERROR);
});

// caso con warning
test('Test_calculoComplejo_warn1', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: 1 },
    { precio: 0 , cantidad: 2 },
  ])).toBe(ErrorLevel.WARN);
});

// caso exitoso regalando productos
test('Test_calculoComplejo_ok', () => {
  expect(calculoComplejo([
    { precio: 8.65, cantidad: 1 },
    { precio: 0 , cantidad: 2 },
  ], true)).toBe(8.65);
});


// caso exitoso
test('Test_calculoEspecialCombo', () => {  
  const p1 : Producto  = new Producto();
  const p2 : Producto  = new Producto();
  const p3 : Producto  = new Producto();

  p1.precio = 10;
  p2.precio = 8;
  p3.precio = 15;
 
  expect(calculoEspecialCombo([
    { item: p1, cantidad: 1 },
    { cantidad: 3, item: p2 },
    { item: p3, cantidad: 2 },
  ])).toBe(64);
});

// caso error por valor negativo
test('Test_calculoEspecialCombo_error', () => {  
  const p1 : Producto  = new Producto();
  const p2 : Producto  = new Producto();

  p1.precio = -10;
  p2.precio = 8;
 
  expect(calculoEspecialCombo([
    { item: p1, cantidad: 1 },
    { cantidad: 3, item: p2 },
  ])).toBe(ErrorLevel.ERROR);
});