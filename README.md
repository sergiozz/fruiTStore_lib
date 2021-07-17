# fruiTStore_lib
libreria prototipo para fruiTStore

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


si resultado es -1 es que hay un error en la cantidad
si resultado es -2 es que el precio es 0 de almenos un item

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