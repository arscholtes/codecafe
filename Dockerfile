# syntax=docker/dockerfile:1
# Create React App 5 (react-scripts 5.0.1) dev server.
FROM node:18-bookworm-slim AS dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
