FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Serve the built app using a static server
RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5173"]
