<h1 align="center">Solar System</h1>

<img src=".github/solar-system.png" alt="Solar System">

### 🚧 Pendências

Este é um projeto da umpontoseis criado de designers para desenvolvedores, que traz com ele o intuito de aperfeiçoar nossas habilidade e estreitar os laços profissionar.

A parte do desafio do projeto proposto pela umpontoseis já foi concluído, mas para deixar o app mais completo e buscando melhorar alguns estudos na area estou colocando algumas outras atividades.

Items do desafio
- [x] Tela Bem-vindo
- [x] Tela Home (Campo de pesquisa, Categorias e Listagem do Planetas)
- [x] Tela Buscar (Campo de pesquisa, Cards dos Planetas)
- [x] Tela Buscar Detalhes (Dados dos planetas)

Pendências
- [] Tela de preload - *Verificar se já existe um usuário criado no sistema.*
- [] Tela Identificação - *Inserir o nome e salvar no AsyncStorage.*
- [] Tela Home - *Configurar botão Setting para que o usuário possa alterar o nome e mudar o tema*
- [] Tela de Busca - *Configurar o botão de voltar e Setting*
- [] Tela de Busca (Card) - *Configurar botão salvar favoritos*
- [] Tela de Busca (Card) - *Configurar o botão de continue lendo para acessar os dados de detalhes do planeta*
- [] Tela de Busca (Detalhes) - *Configurar o botão de Favoritos*
- [] Tela de Busca (Detalhes) - *Configurar o botão de Compartilhar*
- [] Tela de Favoritos
- [] Tela de Imagens

### 🧪 Tecnologias
 * Expo
 * React Native
 * Typescript
 * Styled-components

## 💻 Visualizar projeto

Para visualizar o projeto baixe o aplicativo Expo Go na Play Store e escaneie o código abaixo

## 🚀 Instalando Solar System

Para instalar o Plant Manager, siga estas etapas:

Clone o projeto e acesse a pasta

```
git clone https://github.com/Dougllas92/plantmanager-cli.git
cd plantmanager-cli
```

Instale as dependências
```
yarn install ou npm install
```

Inicie a aplicação
```
expo start
```

**Server**

Instale o JSON Server globalmente na sua máquina

```
npm install -g json-server
```

Inicie o servidor
```
json-server ./src/services/server.json --host 192.168.1.1 --port 9000
```

⚠️ *Lembre-se de utilizar o endereço IP da sua máquina* ⚠️


## ☕ Usando Solar System

**Alterando o IP do App**

* Abre a pasta SolarSystem no editor e acesse o arquivo `src/services/api.tsx`

* Em baseURL coloque o IP:PORT que colocou no Server.