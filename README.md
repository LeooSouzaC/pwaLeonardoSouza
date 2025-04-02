# PWA de Anotações Protegidas

Este é um **PWA (Progressive Web App)** para anotações protegidas. Ele oferece uma maneira prática de fazer anotações seguras com autenticação, reconhecimento de voz e a capacidade de ser instalado como um aplicativo.

## Funcionalidades

- **Autenticação Segura**: Utilize a **Web Authentication API** para autenticar o usuário de forma segura sem a necessidade de senhas.
- **Criação de Notas por Voz**: Crie suas notas de maneira rápida utilizando o **Speech Recognition API**, permitindo que você dite suas anotações.
- **Proteção de Notas**: As anotações são protegidas, sendo possivel visualiza-las somente após autenticação.
- **Instalação como PWA**: O app pode ser instalado diretamente no seu dispositivo, funcionando de forma offline e com uma experiência de app nativo.
- **Acessibilidade**: Oferece alternativas de acessibilidade para garantir que todos os usuários possam utilizar o app com facilidade.

## Tecnologias Utilizadas

- **Web Authentication API**: Para autenticação biométrica ou por chave de segurança.
- **Speech Recognition API**: Para transcrever anotações de voz.
- **PWA**: Para garantir que o app funcione offline e possa ser instalado.
- **LocalStorage**: Para armazenar as anotações localmente de forma segura.
- **Service Worker**: Para cache e otimização do desempenho do PWA.

## Como Usar

### 1. Autenticação

Ao abrir o aplicativo, você será solicitado a realizar a autenticação. Você pode usar:

- **Autenticação biométrica** (se o dispositivo suportar).
- **Chave de segurança** (como FIDO U2F ou dispositivos compatíveis).

Após autenticação bem-sucedida, você poderá criar, editar e visualizar suas notas.

### 2. Criando Notas

Existem duas maneiras de criar uma nova nota:

- **Digite sua nota**: No campo de texto disponível, você pode digitar suas anotações.
- **Dite sua nota**: Clique no ícone de microfone e fale sua nota. O **Speech Recognition API** transcreverá sua fala automaticamente.

### 3. Salvando e Protegendo as Notas

As notas são armazenadas de maneira segura no seu dispositivo.

### 4. Instalando o PWA

Para instalar o aplicativo como um PWA:

1. Abra o app em um navegador compatível com PWA (como Google Chrome ou Microsoft Edge).
2. Clique em Configurações > Transmitir, Guardar e Partilhar > Instalar como APP
3. O aplicativo será instalado no seu dispositivo e estará disponível para uso offline.

### 5. Acessando suas Notas

Após autenticação, você pode acessar suas anotações diretamente no aplicativo.

## Requisitos

- **Navegador com suporte a PWA** (como Google Chrome ou Microsoft Edge).
- **Dispositivo com suporte a Web Authentication API**
- **Microfone** para capturar as notas por voz (caso deseje usar a função de Speech Recognition).
