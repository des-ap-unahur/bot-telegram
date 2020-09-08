FROM node:latest

# Set up environment
ENV TERM=xterm-256color
ENV PROJECT_NAME app
ENV PROJECT_ROOT /opt/app

# Install dependencies
RUN mkdir -p /tmp/$PROJECT_NAME
ADD package.json /tmp/$PROJECT_NAME/package.json
RUN cd /tmp/$PROJECT_NAME/ && npm install
RUN mkdir -p $PROJECT_ROOT
RUN cp -a /tmp/$PROJECT_NAME/node_modules $PROJECT_ROOT
RUN npm install -g react-scripts

# Create app directory
WORKDIR $PROJECT_ROOT

# Bundle app source
COPY . $PROJECT_ROOT

CMD npm start

EXPOSE 3000