# Open-Coding Listas Encadeadas/Vinculadas/Ligadas

As **listas encadeadas** são uma estrutura de dados dinâmica amplamente utilizadas para organizar e manipular conjuntos de dados. Diferentemente dos arrays, as listas encadeadas consistem em uma série de "nós", onde cada nó contém dois elementos principais:

1. **O dado**: A informação armazenada no nó.
2. **O ponteiro**: Uma referência ao próximo nó na lista (ou `null` para indicar o final da lista).

As listas encadeadas são uma escolha poderosa quando se trabalha com coleções de dados cujo tamanho pode variar frequentemente, pois elas permitem inserções e remoções eficientes em tempo constante.

## Tipos de Listas Encadeadas

1. **Lista Encadeada Simples**: Cada nó possui um ponteiro para o próximo nó.
2. **Lista Duplamente Encadeada**: Cada nó possui dois ponteiros, um para o próximo e outro para o nó anterior.
3. **Lista Circular**: O último nó referencia o primeiro, formando um ciclo.

---

## Diferenças Entre Listas Encadeadas e Arrays

| **Aspecto**                       | **Listas Encadeadas**                                                                                        | **Arrays**                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **Armazenamento**                 | Os elementos não são armazenados de forma contígua na memória. Cada nó contém um dado e um ponteiro.         | Os elementos são armazenados de forma contígua na memória, facilitando o acesso por índices. |
| **Acesso aos Dados**              | É necessário percorrer a lista do início até o elemento desejado. Tempo de acesso: O(n).                     | Permite acesso direto aos elementos pelo índice. Tempo de acesso: O(1).                      |
| **Inserção**                      | Inserção em qualquer posição é eficiente, pois envolve apenas a atualização de ponteiros. Tempo médio: O(1). | Inserção em posições arbitrárias pode exigir deslocamento dos elementos. Tempo médio: O(n).  |
| **Remoção**                       | Remoção de um nó é eficiente, pois basta atualizar os ponteiros. Tempo médio: O(1).                          | Remoção em posições arbitrárias pode exigir deslocamento dos elementos. Tempo médio: O(n).   |
| **Uso de Memória**                | Consome mais memória devido ao armazenamento dos ponteiros adicionais em cada nó.                            | Usa menos memória, pois apenas os dados são armazenados.                                     |
| **Tamanho Dinâmico**              | O tamanho pode crescer ou diminuir dinamicamente sem realocação de memória.                                  | O tamanho pode ser fixo ou dinâmico, mas em arrays dinâmicos, pode haver realocação.         |
| **Reorganização**                 | Não é necessário reorganizar elementos em inserções e remoções.                                              | Inserções e remoções podem exigir reorganização dos elementos.                               |
| **Estrutura Subjacente**          | Formada por nós interligados por ponteiros.                                                                  | Estrutura contínua na memória.                                                               |
| **Complexidade de Implementação** | Mais complexa, exige gerenciamento de ponteiros.                                                             | Mais simples de implementar e usar, pois já é nativa na maioria das linguagens.              |
| **Uso Ideal**                     | Quando o tamanho é dinâmico ou as operações de inserção/remoção são frequentes.                              | Quando o tamanho é conhecido e o acesso direto aos elementos é prioritário.                  |

---

## Quando Usar Listas Encadeadas?

- Quando o tamanho dos dados é altamente dinâmico e difícil de prever.
- Quando operações frequentes de inserção e remoção são necessárias, especialmente no início ou no meio da lista.
- Em estruturas mais complexas, como pilhas, filas e grafos, que podem ser implementadas eficientemente com listas encadeadas.

---

## Exemplo de problema

Imagine que você está criando um sistema de gerenciamento de pedidos para um restaurante, onde os pedidos são processados em uma fila (estrutura FIFO - First In, First Out). Os pedidos entram na fila à medida que são feitos e são removidos quando processados.

Cenário:
- Os pedidos chegam e são adicionados ao final da fila.
- À medida que os pedidos são processados, eles são removidos do início da fila.
- O número de pedidos pode variar de forma dinâmica (não há tamanho fixo da fila).

**Por que Usar uma Lista Encadeada?**

1.	Inserção no Final (O(1)):
- Com uma lista encadeada, adicionar um elemento ao final da fila é eficiente, basta criar um novo nó e atualizar o ponteiro do último nó para o novo nó.
- Com um array, adicionar no final pode ser eficiente se o array não precisar ser redimensionado. Contudo, se o array atingir sua capacidade, será necessário realocar memória e copiar todos os elementos para um novo local, o que é caro (O(n) no pior caso).
2.	Remoção do Início (O(1)):
- Com uma lista encadeada, remover o primeiro elemento é direto: basta atualizar o ponteiro da cabeça para o próximo nó.
- Com um array, a remoção do primeiro elemento exige deslocar todos os elementos restantes para manter a ordem, resultando em complexidade O(n).
3.	Tamanho Dinâmico:
- Uma lista encadeada pode crescer ou diminuir de forma dinâmica sem a necessidade de realocação de memória.
- Um array pode precisar ser redimensionado quando atinge sua capacidade, o que é ineficiente para cenários com crescimento imprevisível.

**Por que Não Usar Arrays Neste Caso?**

Com um array:
1.	Remoção no Início:
- Remover o primeiro elemento (queue.shift()) requer o deslocamento de todos os elementos restantes, o que é ineficiente (O(n)).
2.	Tamanho Dinâmico:
- Arrays têm um limite inicial e, quando a capacidade é excedida, precisam ser redimensionados e os dados copiados para um novo bloco de memória. Isso é caro em termos de tempo e memória.
3.	Operações Contínuas:
- Fila dinâmica pode envolver milhares de inserções e remoções em ambientes de alto desempenho. Nesse caso, as operações frequentes de shift() em arrays resultariam em desempenho subótimo.

# Getting Started

## Exemplos

- Arquivo `src/linked-list.js`: Mostra um exemplo de implementação de lista encadeada podendo inserir no início, no meio e no final.
- Arquivo `src/stack.js`: Mostra um exemplo de implementação de Pilha usando lista encadeada.

## Executando exemplos

Para executar os exemplos basta você utilizar o Node.js. Caso você ainda não tenha o Node.js instalado, instale por [esse link](https://nodejs.org/en).

```bash
node src/linked-list.js
```

```bash
node src/stack.js
```

# Links

- [Introdução a Estrutura de Dados](https://www.alura.com.br/artigos/estruturas-de-dados-introducao)
- [Sobre Estrutura de Dados](https://dev.to/trinity_/estruturas-de-dados-em-javascript-com-exemplos-de-codigo-4an0)
- [Sobre Listas Encadeadas](https://www.geeksforgeeks.org/linked-list-data-structure/)
- [NeetCode](https://neetcode.io) (Pratique algoritmos e estruturas de dados)