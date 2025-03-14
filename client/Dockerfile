FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm install react-router-dom bootstrap react-bootstrap \
@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome \
react-icons react-pro-sidebar --legacy-peer-deps

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]