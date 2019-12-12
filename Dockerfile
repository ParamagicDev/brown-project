# Use alpine for smaller images. This is not a production level app, no need to worry
# too much about performance. Also comes prepackaged with yarn
FROM node:12.13.1-alpine3.9

ENV TZ America/New_York
# jest --watchAll require git in the docker repo
# for timezones to work as expected, the timezone must be set to allow for consistent behavior
RUN apk update && apk add --no-cache \
  tzdata \
  git \
	&& echo $TZ > /etc/timezone
WORKDIR /myapp

# Install dependencies
COPY package.json /myapp
COPY yarn.lock /myapp
RUN yarn install

COPY . /myapp

EXPOSE 8080
CMD ["yarn", "dev"]

