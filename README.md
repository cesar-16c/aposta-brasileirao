# ⚽ Aposta Brasileirão

Bolão do Campeonato Brasileiro entre amigos, em uma única página HTML. Cada participante torce por um time, registra seus palpites rodada a rodada e o ranking é calculado automaticamente a partir dos resultados.

## Como funciona

- **Rodadas de 5 jogos:** os jogos dos times dos participantes mais os melhores jogos da rodada, até completar cinco.
- **Palpites:** cada participante lança o placar que acha que vai acontecer em cada jogo.
- **Pontuação:**
  - **2 pontos** para o placar exato, inclusive empate exato (palpite 2x2 e jogo 2x2).
  - **1 ponto** para acertar só o resultado, sem o placar: quem ganhou ou o empate (palpite 1x1 e jogo 2x2).
  - **0 ponto** para quem errou o resultado.
- **Ranking:** soma os pontos de todas as rodadas, com medalhas para os três primeiros. Empates dividem a mesma posição.

## Recursos

- Ranking ao vivo, com a pontuação das rodadas somada automaticamente.
- Tabela de jogos e palpites lado a lado com o ranking em telas largas, e empilhados no celular.
- Palpites dos outros ficam ocultos até o resultado do jogo ser lançado, para ninguém copiar.
- Painel de administrador: lança resultados, cria rodadas, edita palpites de qualquer participante, adiciona e remove participantes e faz ajustes manuais de pontos.
- Controle de acesso: só o administrador altera resultados e pontos, e cada participante edita apenas os próprios palpites.
- Tema claro e escuro automático, com layout responsivo.

## Tecnologia

- HTML, CSS e JavaScript puros, sem build: `index.html`, `config.js` e `seed.js`.
- Firebase: login com Google (Authentication) e banco de dados em tempo real (Firestore), com as coleções `players`, `rounds` e `bets`.
- Hospedagem no GitHub Pages.

## Estrutura dos dados

| Coleção | Conteúdo |
| --- | --- |
| `players` | Nome, time e pontos acumulados de cada participante |
| `rounds` | Número da rodada, jogos com resultado, palpites e ajustes manuais |
| `bets` | Palpites que cada participante lançou por conta própria |

## Segurança

As regras do Firestore (`firestore.rules`) deixam todos lerem, permitem que só o administrador altere resultados, pontos e rodadas, e que cada participante grave apenas os próprios palpites. A ocultação dos palpites dos outros antes do resultado é feita na tela, não nas regras.

## Como colocar no ar

Veja o `PASSO-A-PASSO.md`: criar o projeto no Firebase, colar as chaves em `config.js` e ativar o GitHub Pages.

## Licença

Projeto pessoal, de uso entre amigos. Defina aqui a licença que preferir.
