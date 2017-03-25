# nome-aleatorio

> Obter um nome (português) aleatório.

## Instalação

Para instalá-lo, faça:

```
$ npm install --save nome-aleatorio
```

## Uso

Importe-o com:

```js
var nomeAleatorio = require("nome-aleatorio");
```

Veja abaixo alguns exemplos:

```js
nomeAleatorio(); //=> "Lavínia"
nomeAleatório({accents: false}); //=> "Lavinia"
nomeAleatório({accents: lowercase: true}); //=> "lavinia"

// Por letra.
nomeAleatorio({letter: "h"}); //=> "Heloísa"
nomeAleatório({letter: "h", accents: false}); //=> "Heloisa"
nomeAleatório({letter: "h", accents: false, lowercase: true}); //=> "heloisa"
```

### nomeAleatorio(*[opcoes]*)

Onde `opcoes` deve ser um objeto.

Por padrão ele é:

```js
{ letter: undefined,
  lowecase: false,
  accents: true }
```

Onde:

* `letter` (string) ― Retornar nomes com determinada inicial.
* `lowercase` (boolean) ― Retornar nomes em caixa baixa.
* `accents` (boolean) ― Retornar nomes sem acentos.

## Licença

MIT