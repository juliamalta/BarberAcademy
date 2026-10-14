FROM node:20-slim
WORKDIR /app

# Copia package.json e yarn.lock primeiro
COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia todo o projeto
COPY . ./

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Inicia a aplicação Next.js em produção
CMD ["yarn", "start"]
