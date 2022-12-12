FROM node:12.22.12
#RUN useradd -u 1001 ade
#RUN useradd -rm -d /home/ade -s /bin/bash -g root -G sudo -u 1001 ade
#USER ade

# ARG UID=1001
# ARG GID=1002

# RUN groupadd -g "${GID}" test \
#   && useradd --create-home --no-log-init -u "${UID}" -g "${GID}" test \
#   && mkdir -p /usr/src/app/node_modules && chown -R test:test /usr/src/app 

# USER test

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

COPY . .
#Install app dependencies
RUN npm ci
CMD npm run serve:local
#CMD ["npm" "run" "serve:local"]
RUN npm run build 

EXPOSE 3300

#CMD [ "node", "build/app.js" ]
