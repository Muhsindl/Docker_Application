FROM ubuntu:18.04

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

COPY . /opt/node-app/
WORKDIR /opt/node-app
CMD ["node","index.js"]