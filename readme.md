# nome-aleatorio

> Obter um nome (português) aleatório.

Instale-o com o comando`npm install --save nome-aleatorio`.

## Exemplos

Veja abaixo alguns exemplos:

```js
var nomeAleatorio = require("nome-aleatorio");

nomeAleatorio(); //=> "Lavínia"
nomeAleatório({accents: false}); //=> "Lavinia"
nomeAleatório({accents: lowercase: true}); //=> "lavinia"

// Por letra.
nomeAleatorio({letter: "h"}); //=> "Heloísa"
nomeAleatório({letter: "h", accents: false}); //=> "Heloisa"
nomeAleatório({letter: "h", accents: false, lowercase: true}); //=> "heloisa"
```

### Opções

```js
// Padrão.
{ letter: undefined,
  lowecase: false
  accents: true }
```

* `letter` (string) ― Retornar nomes com determinada inicial.
* `lowercase` (boolean) ― Retornar nomes em caixa baixa.
* `accents` (boolean) ― Retornar nomes sem acentos.

## Licença

MIT