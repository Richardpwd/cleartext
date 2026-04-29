# ResolveTexto

Projeto com frontend em React e backend em Node.js + Express para melhorar textos com ações simples.

## Estrutura

- `frontend/` - aplicação React com Vite
- `backend/` - API Node.js com Express

## Como rodar

### Raiz do projeto

1. Execute `npm install` na raiz do projeto.
2. Execute `npm run dev` para iniciar apenas o frontend.
3. Execute `npm run dev:backend` em outro terminal para iniciar a API.
4. Execute `npm run dev:all` para iniciar frontend e backend juntos.

### Backend

1. Abra o terminal em `backend/`
2. Execute `npm install`
3. Copie `.env.example` para `.env` e configure o MySQL se desejar estatísticas de uso.
4. Execute `npm run dev`

A API será acessível em `http://localhost:5000`.

### Frontend

1. Abra o terminal em `frontend/`
2. Execute `npm install`
3. Execute `npm run dev`

A aplicação React será aberta em `http://localhost:5173`.

## Rotas da API

- `POST /api/text/summarize`
- `POST /api/text/correct`
- `POST /api/text/formal`
- `POST /api/text/simple`
- `POST /api/text/whatsapp`

JSON de requisição:

```json
{
  "text": "texto do usuário"
}
```

JSON de resposta:

```json
{
  "result": "texto processado"
}
```

## Banco de dados opcional

Se você quiser registrar estatísticas simples, crie a tabela `usage_stats` em um banco MySQL:

```sql
CREATE TABLE usage_stats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action_type VARCHAR(50) NOT NULL,
  created_at DATETIME NOT NULL
);
```

> O texto do usuário não é salvo no banco de dados.

## Observações

- Não há chave de API no frontend.
- Comentários foram adicionados para futura integração com IA.
- O layout já possui áreas para anúncios com a classe `ad-placeholder`.
