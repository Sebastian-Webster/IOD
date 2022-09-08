FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install serve --location=global
RUN npm run build
EXPOSE 3000
CMD ["serve","-s", "build"]
