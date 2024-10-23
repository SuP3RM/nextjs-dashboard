# Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm
RUN node -v
RUN npm -v
RUN pnpm install

COPY . .

EXPOSE 3000

# order to run the app
CMD ["npm", "run", "dev"]