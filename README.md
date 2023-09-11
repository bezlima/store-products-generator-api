# store-products-generator-api

## Instalação

Clone o projeto

```bash
  git clone https://github.com/bezlima/store-products-generator-api.git
```

Entre na pasta do projeto

```bash
  cd store-products-generator-api
```

Instale as dependências

```bash
  npm i
```

Inicie o projeto

```bash
  npm run dev
```

## Documentação da API

#### Retorna o grupo da série escolhida

```http
  GET /api/store/options?
```

| Parâmetro     | Tipo      | Descrição       |
| :------------ | :-------- | :-------------- |
| `amount`      | `number`  | **Obrigatório** |
| `images`      | `boolean` | **Obrigatório** |
| `description` | `boolean` | **Obrigatório** |
| `name`        | `boolean` | **Obrigatório** |
| `price`       | `boolean` | **Obrigatório** |
| `rating`      | `boolean` | **Obrigatório** |

exemplo de uso:

```Json
    .../api/store/options?amount=100&images=true&description=true&name=true&price=true&rating=true
```

o retorno será:

```Json
    {"products":
        [
            {
                "id": number,
                "img": string,
                "description": string,
                "name": string,
                "price": string,
                "rating": number
            }
        ]
    }
```

## Melhorias

-   Adicionar memoria de produtos já gerados
