FROM node:14.15-alpine

WORKDIR /app

# Setup node
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Installing packages
COPY package.json /app/
RUN npm install

# Folders
COPY .babelrc ./
COPY dist ./dist
# COPY public ./public
COPY src ./src

# Envs
ENV APP_NAME rpg-hub
ENV DEBUG rpg-hub:*
ENV MONGO_URI mongodb://mongo/august
ENV NODE_PATH ./src
ENV PORT 4000

# Port to expose
EXPOSE $PORT

CMD ["npm", "start"]
