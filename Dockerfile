# syntax=docker/dockerfile:1

# specify my baseImage and (optionally) the version and alias
FROM node:14.15.0 as base

# specify the path of the working directory
WORKDIR /Frontend-Adoption-Center

# copy package.json for dependancy install
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY . .

# specify test build
FROM base as test
# clean dependancy install
RUN npm ci
# copy files to image
COPY . .
# command to run tests
CMD [ "npm", "run", "test" ]

FROM base as prod
# Building the app
RUN npm i
RUN npm run build

# the command to start our app
CMD [ "npm", "start" ]
