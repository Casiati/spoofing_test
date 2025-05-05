# Email Spoofing Test Frontend

Este projeto é uma interface web que permite realizar testes **seguros e controlados** de _email spoofing_ através de serviços da AWS, como API Gateway, AWS Lambda e DynamoDB. Ele é destinado exclusivamente para fins de **teste interno**, **validação de segurança** e **pesquisa autorizada**.

## ⚠️ Aviso Legal

> **Uso Responsável:** Este projeto é estritamente para uso educacional e de teste autorizado em ambientes controlados. O envio de e-mails falsificados sem permissão é ilegal e viola políticas de uso de diversos provedores. Nunca utilize este sistema para fins maliciosos ou fora de ambientes autorizados.

---

## 🔧 Arquitetura

A aplicação é composta pelos seguintes componentes:

- **Frontend** (este projeto): Interface React (ou outra lib) para envio de requisições.
- **API Gateway**: Roteia as requisições HTTP para as funções Lambda.
- **AWS Lambda**: Lida com a lógica de spoofing controlado, incluindo composição e envio de e-mails.
- **Amazon SES** (opcional): Serviço de envio de e-mails da AWS, utilizado para envio seguro.
- **DynamoDB**: Armazena logs e histórico de testes para auditoria e controle.

---

## 🚀 Funcionalidades

- Envio controlado de e-mails com cabeçalhos customizados.
- Visualização de logs de envio armazenados no DynamoDB.
- Suporte a múltiplos remetentes simulados (com identificação clara de teste).
- Integração com autenticação (ex: Cognito) para controle de acesso (opcional).
- Pré-configuração de destinatários autorizados.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React / Vite / Tailwind CSS (ajuste conforme seu stack)
- **Backend (Serverless)**: AWS Lambda + API Gateway
- **Banco de Dados**: DynamoDB
- **Serviço de E-mail (opcional)**: Amazon SES

---

## 📦 Instalação e Execução Local

```bash
# Instale dependências
npm install

# Execute localmente (ex: usando vite ou outro bundler)
npm run dev
