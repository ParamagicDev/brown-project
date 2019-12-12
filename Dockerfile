# Use alpine for smaller images. This is not a production level app, no need to worry
# too much about performance. Also comes prepackaged with yarn
FROM node:12.13.1-alpine3.9

WORKDIR /myapp

# Install dependencies
COPY package.json /myapp
COPY yarn.lock /myapp
RUN yarn install

COPY . /myapp

EXPOSE 8080
CMD ["yarn", "dev"]

