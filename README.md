# Template para Workshop
Boas vindas ao projeto `NOME-DO-WORKSHOP`! Fique atento a cada passo que você deverá seguir para entregar a avaliação com sucesso. Qualquer dúvida, entre em contato pelo **GChat**. Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto à partir desse repositório, utilizando uma _branch_ específica e um _Pull Request_ para entrega.

# Entregáveis
<details>
<summary><b>🤷🏽‍♀️ Como entregar</b></summary>

Para entregar o seu projeto, você deverá fazer um _Pull Request_ neste repositório.
Lembre-se que você pode consultar o conteúdo do workshop de _Git e Github_ sempre que precisar.
4
Seu _Pull Request_ deverá estar no seguinte formato:
`[Seu Nome e Sobrenome] - Avaliação Workshop NOME-DO-WORKSHOP`

</details>

<details>
<summary><b>📝 O que deverá ser desenvolvido?</b></summary>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros eu dui interdum iaculis. Proin quis facilisis dui, et efficitur sem. Donec sit amet ante a diam vulputate hendrerit. Aliquam erat volutpat. Cras sodales magna nec eros varius suscipit. Maecenas et mauris eget sem fermentum malesuada eu non lectus. Mauris vel arcu molestie, vestibulum mauris quis, sodales nisl. Quisque pulvinar nulla quis nunc vulputate, at bibendum ipsum dapibus. Curabitur dignissim diam vitae porttitor ultricies. Quisque semper magna et ex viverra mattis. Etiam sit amet luctus nulla, eget auctor velit. Pellentesque in nulla dui. Mauris ipsum mi, molestie et feugiat vel, mollis sed turpis. Integer a dui vehicula, porttitor sem at, rutrum nulla. Quisque fringilla felis turpis, ut maximus sapien sagittis eget.

</details>

<details>
<summary><b>🗓 Data de Entrega</b></summary>

- Este projeto é `INDIVIDUAL`.
- Será `1` turno de desenvolvimento para a entrega.
- A data limite de entrega será divulgada no `Classroom` da turma.
- Commits feitos após o horário de entrega serão desconsiderados.
</details>

# Orientações
<details>
<summary><b>🧑🏽‍🏫 Executando o projeto</b></summary>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros eu dui interdum iaculis. Proin quis facilisis dui, et efficitur sem. Donec sit amet ante a diam vulputate hendrerit. Aliquam erat volutpat. Cras sodales magna nec eros varius suscipit. Maecenas et mauris eget sem fermentum malesuada eu non lectus. Mauris vel arcu molestie, vestibulum mauris quis, sodales nisl. Quisque pulvinar nulla quis nunc vulputate, at bibendum ipsum dapibus. Curabitur dignissim diam vitae porttitor ultricies. Quisque semper magna et ex viverra mattis. Etiam sit amet luctus nulla, eget auctor velit. Pellentesque in nulla dui. Mauris ipsum mi, molestie et feugiat vel, mollis sed turpis. Integer a dui vehicula, porttitor sem at, rutrum nulla. Quisque fringilla felis turpis, ut maximus sapien sagittis eget.
</details>

<details>
<summary><b>‼️ Antes de começar a desenvolver</b></summary>

1. Clone o repositório.
2. Entre na pasta do repositório que você acabou de clonar.
3. Crie uma `branch` com seu nome e sobrenome, seguindo o padrão `nome-sobrenome`, à partir da `main`.
4. Instale as dependências do projeto com <code>poetry install --all-groups</code>.
5. Faça o commit inicial e suba sua `branch` para o repositório remoto.
6. Crie um _Pull Request_ para a `main` do repositório.

<b>Atenção:</b> **Não** tente dar <code>Merge</code> do seu código na main.

</details>

<details>
<summary><b>⌨️ Durante o desenvolvimento</b></summary>

- Faça _commits_ frequentes das alterações que fizer no seu código. Uma boa métrica é fazer um _commit_ a cada requisito da avaliação que for implementado.
- Lembre-se de sempre, após alguns _commits_, atualizar o repositório remoto com um `git push`.
- Lembre-se de usar **commits semânticos** para deixar seu _Pull Request_ organizado, e criar o hábito.

</details>

<details>
<summary><b>⚠️ Atenção</b></summary>

- O projeto deve ser desenvolvido na ordem dos requisitos.
- Crie os diretórios, arquivos, classes e funções **EXATAMENTE** como estão descritos nos requisitos, caso contrário, os testes irão falhar.

</details>

<details>
<summary><b>🎛 Linter</b></summary>

Utilizaremos o `Ruff` para fazer a análise estática do seu código.

Este projeto já vem com todas as dependências configuradas. Para executar o linter no seu código, basta executar o seguinte comando:
```bash
# Executando o linter
poetry run task lint
```

O `Ruff` irá verificar se o seu código está de acordo com as boas práticas, e apontar caso haja algum erro. Corrija os erros antes de subir o seu código para o repositório remoto.

</details>

<details>
<summary><b>🧪 Testes</b></summary

Para executar os testes localmente, basta executar o comando:
```bash
# Executando os testes
poetry run task test
```
O `pytest` irá executar todos os testes do projeto, e mostrar o resultado no terminal. Caso algum teste falhe, verifique o erro e corrija o seu código.

<b>⚠️ IMPORTANTE:</b> Não altere ou apague os testes, eles são a base para garantir que o seu código está funcionando corretamente. Caso algum teste falhe, verifique o seu código e faça as correções necessárias.

</details>

<details>
<summary><b>O que será avaliado?</b></summary>

A execução correta dos testes garante que seu código está funcionando corretamente. Além disso, para definir sua nota, levaremos em consideração os seguintes pontos:

- Organização do código
- Clareza e legibilidade do código
- Uso correto do `RESULTADO-DO-WORKSHOP`
- Adequação às boas práticas e regras de estilo

É importante lembrar que caso seja percebido uma cópia de código, seja de outro residente ou de ferramentas de IA como `ChatGPT`, `Copilot`, `Gemini`, `Deepseek`, entre outros, a avaliação será zerada. A intenção dessa avaliação é que você demonstre o que aprendeu durante o workshop, e não apenas reproduza um código que não entende. Qualquer dúvida, siga os passos:

1. Leia a mensagem de erro do terminal e tente entender o que ela está sinalizando.
2. Revise o conteúdo das aulas do _workshop_.
3. Busque na documentação oficial do `ALVO-DO-WORKSHOP`.
4. Pergunte ao instrutor do workshop.

</details>


# Requisitos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros eu dui interdum iaculis. Proin quis facilisis dui, et efficitur sem. Donec sit amet ante a diam vulputate hendrerit. Aliquam erat volutpat. Cras sodales magna nec eros varius suscipit. Maecenas et mauris eget sem fermentum malesuada eu non lectus. Mauris vel arcu molestie, vestibulum mauris quis, sodales nisl. Quisque pulvinar nulla quis nunc vulputate, at bibendum ipsum dapibus. Curabitur dignissim diam vitae porttitor ultricies. Quisque semper magna et ex viverra mattis. Etiam sit amet luctus nulla, eget auctor velit. Pellentesque in nulla dui. Mauris ipsum mi, molestie et feugiat vel, mollis sed turpis. Integer a dui vehicula, porttitor sem at, rutrum nulla. Quisque fringilla felis turpis, ut maximus sapien sagittis eget.

### 1. Requisito 
<details>
<summary><strong>➕ Detalhes </strong></summary>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros eu dui interdum iaculis. Proin quis facilisis dui, et efficitur sem. Donec sit amet ante a diam vulputate hendrerit. Aliquam erat volutpat. Cras sodales magna nec eros varius suscipit. Maecenas et mauris eget sem fermentum malesuada eu non lectus. Mauris vel arcu molestie, vestibulum mauris quis, sodales nisl. Quisque pulvinar nulla quis nunc vulputate, at bibendum ipsum dapibus. Curabitur dignissim diam vitae porttitor ultricies. Quisque semper magna et ex viverra mattis. Etiam sit amet luctus nulla, eget auctor velit. Pellentesque in nulla dui. Mauris ipsum mi, molestie et feugiat vel, mollis sed turpis. Integer a dui vehicula, porttitor sem at, rutrum nulla. Quisque fringilla felis turpis, ut maximus sapien sagittis eget.

</details>

### 2. Requisito 2
<details>
<summary><strong>➕ Detalhes </strong></summary>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor eros eu dui interdum iaculis. Proin quis facilisis dui, et efficitur sem. Donec sit amet ante a diam vulputate hendrerit. Aliquam erat volutpat. Cras sodales magna nec eros varius suscipit. Maecenas et mauris eget sem fermentum malesuada eu non lectus. Mauris vel arcu molestie, vestibulum mauris quis, sodales nisl. Quisque pulvinar nulla quis nunc vulputate, at bibendum ipsum dapibus. Curabitur dignissim diam vitae porttitor ultricies. Quisque semper magna et ex viverra mattis. Etiam sit amet luctus nulla, eget auctor velit. Pellentesque in nulla dui. Mauris ipsum mi, molestie et feugiat vel, mollis sed turpis. Integer a dui vehicula, porttitor sem at, rutrum nulla. Quisque fringilla felis turpis, ut maximus sapien sagittis eget.

</details>

<br/>
<br/>

# Bom Projeto!

## Credits

This package was created with [Cookiecutter](https://github.com/audreyfeldroy/cookiecutter) and the [audreyfeldroy/cookiecutter-pypackage](https://github.com/audreyfeldroy/cookiecutter-pypackage) project template.
