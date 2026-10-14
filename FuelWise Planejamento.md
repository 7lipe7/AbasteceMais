# FuelWise — Planejamento completo do projeto

O FuelWise será um aplicativo PWA instalável para comparar etanol e gasolina, cadastrar veículos, registrar abastecimentos e acompanhar gastos e economia. A proposta é desenvolver um produto Full Stack real, que funcione no celular e no computador, e que também sirva como projeto de portfólio para vagas de estágio em desenvolvimento web.

[VW incentivará uso do etanol com aplicativo, programa de pontos e recompensa](https://images.openai.com/static-rsc-4/qedfKUlvNSBsGgg4Prv6-mZ9DkFlvWXAs3UM58JJyz7WnU4Aqy14VFMGWmJYQYbv_tPLJZjJSYQvbvk2igfSJ798qgqR-FbPVptnBLJ_nZ9fdKEMvlOdgR8L42vCzU_9yYry566K72EUON8I094qELyDoxLYBFfmW9iE3wWmmKY?purpose=inline)

[motor1.uol.com.br](https://motor1.uol.com.br/news/609537/vw-abasteca-consciente-app-pontos/)

Direção visual sugerida: verde escuro, fundo neutro, indicadores de economia e interface mobile-first.

## 1. Visão geral

Objetivo

Ajudar motoristas a escolher o combustível mais econômico com base nos preços e no consumo de seus veículos.

Plataforma

PWA (Progressive Web App): site instalável, com ícone na tela inicial e recursos offline selecionados.

Stack principal

TypeScript, React, Node.js, Express e PostgreSQL.

Público-alvo

Motoristas em geral, desde quem possui um único carro até famílias com vários veículos.

## 2. Escopo funcional

O sistema será dividido em módulos para que você possa desenvolver e testar cada parte separadamente.

[Autto - Controle de veículos](https://images.openai.com/static-rsc-4/sZSieY35VY61x_4tTtVMNFcpt1MSScuxLmWlbSU8ZzLc0lAo9xqtWeY0IjFZG5_vk_IIsQVETkQlZbMibJgMZ_NEEa3Di89jMBNkHdGgkDB2XggT8Y4CeZh6lXvIvxhV9xLA1dqcCw_-kPcSbpISUd0Qkk_97JXxcPCSMVT7Eqo?purpose=inline)

Módulo 1 — Comparador

- Inserir preço do etanol e da gasolina.
- Informar consumo em km/l para cada combustível.
- Exibir custo por quilômetro e por 100 km.
- Mostrar a opção mais econômica e a diferença percentual.
- Calcular o preço de equilíbrio entre os combustíveis.

[EkW EV Charging App UI UX Mobile App Design :: Behance](https://images.openai.com/static-rsc-4/QUKtpjVRfSsryIsOvX6pNewhQmLhiPmQg14YE-emN5Ek4aw2m3T3n6biqYDOwGfVSG0ddbpxN_B2RJIuHTh4iwhXp-LCmeZmgpNuJE8XwaRk7Gpk2Ft2vyG-snDpKkTfpigBrYRpvfv8MnVHOKRfkBbC37sE5JvEuX_AdO6XtUY?purpose=inline)

Módulo 2 — Garagem

- Cadastrar carro ou moto.
- Informar marca, modelo, ano e motorização.
- Salvar consumo de etanol e gasolina.
- Selecionar um veículo padrão.
- Editar, arquivar e excluir veículos.

[Fuelo - Fuel Expense Tracker App Concept by Yus Febrian for Sans Brothers on Dribbble](https://images.openai.com/static-rsc-4/g863LYwuxLohXEWH9VnZXW1zWrDCAgi2fvl_4sIY6R8W51EHSRR-X5NqDvBhvybeT28AB187WXD3lWORJXr_TcP7PKugtoP9i4UpvkN-9T2kM2wyc5u7YoX8IVvVKyyfl26pdc6Q62M1PdfBMLUT6cAFodiEUQ1IltAWI_XTDZg?purpose=inline)

Módulo 3 — Abastecimentos

- Registrar posto opcional, data e combustível.
- Informar litros, preço por litro e quilometragem.
- Calcular o valor total.
- Consultar, corrigir e excluir registros.
- Calcular consumo real quando houver dados suficientes de quilometragem.

[carFlo — Your Car. Every Mile. Perfectly Tracked.](https://images.openai.com/static-rsc-4/0hfwuOuZHbIzWBNkpp51NTNNfbKlPVvAULEYqREa8ZY4Jbj5fvWK6fQcr3V11LWidSX_SkAaxHXAi9BCpHQ2_WnmlKqALBDDX08qeXqdex08DcJOZyltTDNlXNU3rsCyylHfKAd8s6vpOBhhOSmY1g9HAUS70aWzR_fnvl5xWzA?purpose=inline)

Módulo 4 — Dashboard e relatórios

- Gastos no mês e no período escolhido.
- Litros abastecidos por combustível.
- Evolução do consumo médio.
- Histórico de preços registrados.
- Economia estimada ao escolher a opção mais barata.

[Log In and Account Menu by Nick Budrewicz for VIA Creative on Dribbble](https://images.openai.com/static-rsc-4/vmNPrJv_zkoW1POUX4ahb6Nn86gy0MkeR0-36c-Ub9moJBLvNV8rvk0sXrb0R_AoBsX9J6kt9lJ5SrKkpVHScI5zGI7Dmk8CjAMSU3uKvKzFyM-kdqSVDwGPfBxB3qW9em3ajv3MTeYmBeAi57yxS8FeSfLhdZpryp9cu8g73yU?purpose=inline)

Módulo 5 — Conta e sincronização

- Cadastro e login.
- Recuperação de senha.
- Dados sincronizados entre dispositivos.
- Preferências do usuário.
- Exclusão de conta e dos dados associados.

### Priorização das funcionalidades

| Prioridade      | Funcionalidades                                           |
| --------------- | --------------------------------------------------------- |
| P0 — Essencial  | Comparação, garagem, autenticação e persistência no banco |
| P1 — Importante | Abastecimentos, consumo real e dashboard                  |
| P2 — Evolução   | Offline aprimorado, exportação de dados, postos favoritos |
| P3 — Futuro     | Preços compartilhados, mapas e recursos premium           |

O primeiro lançamento completo deve se concentrar nos módulos P0 e P1. Não vale começar por mapas ou integração com postos antes de garantir que os cálculos e os registros funcionem corretamente.

## 3. Arquitetura técnica

Minha recomendação é separar o projeto em três partes: interface, API e banco de dados. Assim você aprende como as aplicações Full Stack funcionam na prática.

Front-end — React + TypeScript

Telas, formulários, cálculos exibidos e experiência PWA

API — Node.js + Express

Validação, autenticação, regras de negócio e autorização

PostgreSQL — Supabase

Usuários, veículos, consumo, abastecimentos e histórico

Serviços complementares:

- Supabase Auth: cadastro, login e recuperação de senha.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://supabase.com\&sz=32)

  Supabase Docs

- Service Worker + Web App Manifest: instalação e recursos offline selecionados.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

  MDN

  +1

- Vercel: hospedagem do front-end.

- Render: hospedagem da API.

- GitHub: repositório, versionamento e histórico de desenvolvimento.

O React não precisa de uma API para fazer a conta matemática em si. A API será importante para proteger os dados, validar registros e centralizar as regras de negócio.

### Estrutura do repositório

Sugiro manter o front-end e o back-end no mesmo repositório, mas em pastas separadas:

fuelwise/ ├── frontend/ │   ├── public/ │   │   ├── icons/ │   │   └── manifest.webmanifest │   └── src/ │       ├── components/ │       ├── pages/ │       ├── features/ │       ├── services/ │       ├── hooks/ │       └── types/ ├── backend/ │   └── src/ │       ├── routes/ │       ├── controllers/ │       ├── services/ │       ├── middlewares/ │       ├── schemas/ │       ├── repositories/ │       └── app.ts ├── database/ │   ├── migrations/ │   └── seed.sql ├── docs/ └── README.md

Essa organização é uma base inicial, não uma obrigação. Você pode acrescentar testes e configurações de deploy conforme o projeto crescer.

## 4. Banco de dados

O banco será relacional, usando PostgreSQL. Cada veículo pertence a um usuário, cada veículo pode ter diferentes consumos por combustível e cada abastecimento fica associado ao veículo correto.

### Modelo de entidades

profiles

Perfil do usuário

vehicles

Carros e motos cadastrados

vehicle_consumption

Consumo por combustível

refuelings

Histórico de abastecimento

### Tabelas e campos

| Tabela                   | Principais campos                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `profiles`               | `id`, `name`, `created_at`                                                                                               |
| `vehicles`               | `id`, `user_id`, `name`, `type`, `brand`, `model`, `year`, `is_default`                                                  |
| `vehicle_consumption`    | `id`, `vehicle_id`, `fuel_type`, `km_per_liter`                                                                          |
| `refuelings`             | `id`, `vehicle_id`, `fuel_type`, `liters`, `price_per_liter`, `total_cost`, `odometer_km`, `station_name`, `refueled_at` |
| `fuel_prices` (opcional) | `id`, `user_id`, `fuel_type`, `price_per_liter`, `recorded_at`                                                           |

Algumas decisões importantes:

- O `id` de cada registro será uma chave primária.
- Os relacionamentos utilizarão chaves estrangeiras.
- O preço e o consumo devem ser armazenados com precisão decimal adequada, não como números de ponto flutuante imprecisos.
- O total do abastecimento deve corresponder ao preço por litro multiplicado pela quantidade de litros.
- O banco deve impedir valores negativos ou inválidos.
- As tabelas com dados pessoais devem restringir cada usuário aos seus próprios registros. Se usar acesso ao PostgreSQL via Supabase, configure corretamente as permissões e o RLS.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://supabase.com\&sz=32)

  Supabase Docs

  +1



O perfil pode usar o identificador do usuário fornecido pelo Supabase Auth, sem criar um sistema de senhas próprio.

## 5. Regras de negócio e cálculos

Essa é a parte central do FuelWise. Vale criar funções TypeScript independentes da interface e testá-las antes de conectá-las ao banco.

### Comparação dos combustíveis

O custo por quilômetro é calculado por:

\\[ Custo/km = \frac{Preço\ por\ litro}{Consumo\ em\ km/l} \\]

O preço de equilíbrio do etanol é:

\\[ P\_{eq} = \frac{P_g \times K_e}{K_g} \\]

Em que:

- \\(P_g\\): preço da gasolina.
- \\(K_e\\): consumo do veículo com etanol.
- \\(K_g\\): consumo do veículo com gasolina.
- \\(P\_{eq}\\): preço do etanol que iguala o custo por quilômetro da gasolina.

Se o etanol custar menos que esse limite, ele será mais econômico por quilômetro. Se custar mais, a gasolina será a melhor opção, considerando os consumos informados.

Importante: o resultado deve utilizar os consumos específicos do veículo. A regra fixa de 70% é apenas uma estimativa genérica e não substitui os dados reais.

### Regras dos abastecimentos

1. A quantidade de litros, o preço por litro e a quilometragem devem ser validados.
2. A quilometragem não pode ser inferior à última leitura válida do mesmo veículo, salvo correção explícita de um registro.
3. O consumo real deve ser calculado somente quando existirem leituras adequadas de quilometragem e abastecimentos comparáveis.
4. A economia acumulada deve ser identificada como estimativa, com um método de cálculo consistente.
5. O sistema deve diferenciar o preço atual digitado pelo usuário do preço histórico de um abastecimento.

## 6. API do back-end

Uma primeira versão pode usar rotas REST como estas:

| Método e rota                   | Finalidade                          |
| ------------------------------- | ----------------------------------- |
| `GET /health`                   | Verificar se a API está funcionando |
| `GET /vehicles`                 | Listar veículos do usuário          |
| `POST /vehicles`                | Cadastrar veículo                   |
| `PATCH /vehicles/:id`           | Atualizar veículo                   |
| `DELETE /vehicles/:id`          | Excluir veículo                     |
| `GET /vehicles/:id/consumption` | Consultar consumos                  |
| `PUT /vehicles/:id/consumption` | Criar ou atualizar consumo          |
| `GET /refuelings`               | Listar abastecimentos               |
| `POST /refuelings`              | Registrar abastecimento             |
| `PATCH /refuelings/:id`         | Corrigir abastecimento              |
| `DELETE /refuelings/:id`        | Excluir abastecimento               |
| `GET /reports/summary`          | Obter resumo dos gastos             |

O comparador poderá funcionar sem uma chamada ao servidor. Se o usuário quiser salvar a comparação ou o preço informado, a aplicação poderá persistir esses dados.

Para cada rota protegida, o back-end deve validar o token de autenticação e verificar se o recurso pertence ao usuário autenticado. Não basta esconder botões na interface.

## 7. Etapas de implementação

Como você está estudando TypeScript e quer aprender desenvolvendo, eu faria o projeto em oito etapas. Cada uma termina com algo funcionando, para não ficar semanas apenas configurando ferramentas.

## 01

Fundamentos e planejamento

Primeiro passo

- Criar o repositório GitHub.
- Definir os requisitos funcionais e não funcionais.
- Desenhar as telas no Figma.
- Criar o projeto React com TypeScript.
- Implementar e testar as funções matemáticas.

Entrega: comparador funcional, ainda sem login e banco.

## 02

Interface do usuário

- Criar navegação, layout e componentes.
- Implementar a tela inicial e o comparador.
- Criar formulários de veículos.
- Adaptar a interface para celular e computador.
- Validar campos e mensagens de erro.

Entrega: protótipo navegável com dados temporários.

## 03

Banco de dados

- Criar o projeto Supabase.
- Criar as tabelas e relacionamentos.
- Definir restrições e índices.
- Criar migrations SQL.
- Testar inserções, consultas e exclusões.

Entrega: estrutura persistente pronta para receber dados.

## 04

Autenticação e back-end

- Criar a API Express.
- Implementar middlewares de autenticação.
- Validar os dados recebidos.
- Implementar rotas de veículos e consumos.
- Proteger o acesso aos registros.

Entrega: usuários autenticados podem salvar e gerenciar seus veículos.

## 05

Abastecimentos e relatórios

- Implementar cadastro de abastecimentos.
- Calcular totais e consumo real.
- Criar filtros por veículo e período.
- Desenvolver gráficos de gastos e economia.

Entrega: histórico financeiro funcional.

## 06

Transformação em PWA

- Configurar o Web App Manifest.
- Criar ícones de instalação.
- Implementar o Service Worker.
- Definir o cache dos recursos estáticos.
- Exibir um aviso de falta de conexão.

Entrega: aplicativo instalável, com funcionamento offline planejado. A sincronização dos dados pessoais exige tratamento adicional.

## 07

Testes e segurança

- Testar os cálculos com diferentes valores.
- Testar permissões entre usuários.
- Verificar validações da API.
- Testar responsividade e instalação.
- Verificar acessibilidade e desempenho.

Entrega: versão candidata para publicação.

## 08

Deploy e portfólio

- Publicar o front-end na Vercel.
- Publicar a API no Render.
- Configurar variáveis de ambiente.
- Documentar instalação, arquitetura e endpoints.
- Adicionar screenshots e demonstração no README.

Entrega: FuelWise publicado e apresentável para recrutadores.

## 8. Requisitos não funcionais

Além das funcionalidades, o projeto precisa de requisitos de qualidade.

| Área            | Requisito                                                                      |
| --------------- | ------------------------------------------------------------------------------ |
| Segurança       | Dados isolados por usuário, validação de entrada e segredos apenas no servidor |
| Usabilidade     | Interface responsiva, formulários claros e acessibilidade básica               |
| Desempenho      | Paginação quando necessário e consultas eficientes                             |
| Disponibilidade | Tratamento de erros de conexão e indisponibilidade da API                      |
| PWA             | Instalação em navegadores compatíveis e cache controlado                       |
| Manutenção      | TypeScript, módulos organizados, migrations e testes                           |
| Privacidade     | Coleta mínima de dados, exclusão de conta e política de privacidade            |

Para instalação, configure corretamente o manifest e publique por HTTPS. O Service Worker permitirá controlar o cache, mas não torna automaticamente todas as funcionalidades disponíveis offline.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN

+1



## 9. Testes que o projeto precisa passar

Antes de considerar o FuelWise pronto, verifique estes cenários:

### Checklist de validação

0 de 10

O comparador escolhe o combustível correto em diferentes cenários.

O sistema rejeita preços, litros e consumos inválidos.

Um usuário não consegue consultar veículos de outra conta.

A edição de um veículo atualiza os dados utilizados no comparador.

O total do abastecimento corresponde aos litros multiplicados pelo preço.

O consumo real só aparece quando existem leituras suficientes.

O histórico respeita o veículo e o período selecionados.

A aplicação abre após a instalação e informa quando está offline.

Os dados pendentes de sincronização não são perdidos silenciosamente.

O login, a recuperação de senha e o logout funcionam corretamente.

Copiar checklist

## 10. O que não desenvolver agora

Para manter o escopo viável, deixe para versões futuras:

- Integração automática com preços de postos.
- Mapa com postos próximos.
- Comunidade para compartilhar preços.
- Programa de pontos e gamificação.
- Assinaturas premium.
- Aplicativo nativo separado para Android e iOS.

Esses recursos podem ser interessantes, mas não são necessários para validar o produto principal.

## 11. Definição da primeira versão

Minha sugestão é começar com um MVP enxuto e evoluir para o sistema completo sem jogar código fora.

## FuelWise v1.0

React

TypeScript

Node.js

PostgreSQL

PWA

Critérios de conclusão

- Comparador com cálculo por quilômetro.
- Cadastro e login seguros.
- Garagem com múltiplos veículos.
- Consumo personalizado por combustível.
- Histórico de abastecimentos.
- Dashboard de gastos.
- Instalação como PWA.
- Deploy, testes e README.&#x20;

  O projeto estará pronto para uma primeira publicação quando as funcionalidades essenciais, os testes de segurança e os critérios de instalação forem validados.

Próximo passo recomendado: iniciar a Fase 1, criando o repositório e implementando o comparador em TypeScript. Depois, você adiciona React, API e banco de dados gradualmente, entendendo o propósito de cada camada.

Para consultar as referências técnicas durante o desenvolvimento: [Documentação de PWA da MDN](https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps), [Autenticação do Supabase](https://supabase.com/docs/guides/auth) e [Segurança de dados com RLS](https://supabase.com/docs/guides/database/postgres/row-level-security).
