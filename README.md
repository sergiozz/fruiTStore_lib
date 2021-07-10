# fruiTStore_lib
libreria prototipo para fruiTStore

# run test lib
npm test

# publish lib
npm publish

## Install

```bash
npm install --save fruitstore_lib
```

## Usage

```ts

import MyLib from 'fruitstore_lib'

let resultado = MyLib.calculoComplejo([
        { precio: 8.65, cantidad: 1 },
        { precio: 2.5, cantidad: 2 },
        { precio: 10, cantidad: 4 },
    ])

let resultado = MyLib.calculoComplejo([
        { precio: 8.65, cantidad: 1 },
        { precio: 0, cantidad: 2 },
    ], true) // permite calculos con productos gratis

---

let resultado = MyLib.calculoEspecialCombo([
    { item: p1, cantidad: 1 },
    { item: p2, cantidad: 3 },
    { item: p3, cantidad: 2 },
  ]) // px son Productos

---

pedido : MyLib.Pedido

---

producto = new MyLib.Producto()
```

## License

MIT © [sergiozz](https://github.com/sergiozz)